import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { checkRateLimit, getClientIp } from '@/app/lib/rateLimit';
import { verifyTurnstile } from '@/app/lib/turnstile';

// nodemailer usa sockets TCP: não roda no runtime edge.
export const runtime = 'nodejs';

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

const CONTACT_INBOX = 'contato@8ksoft.com';

/** Impede que o conteúdo enviado pelo visitante vire HTML no e-mail recebido. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * SMTP do OCI Email Delivery. As variáveis SMTP_* são injetadas pela plataforma
 * 8khost ao provisionar o e-mail do app (`8k email:provision`) — não são
 * preenchidas à mão.
 */
function createTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? 587);

  return nodemailer.createTransport({
    host,
    port,
    // 587 usa STARTTLS (secure=false); 465 é TLS implícito.
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);

    const { allowed, retryAfterSeconds } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Muitas tentativas. Tente novamente mais tarde.' },
        { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } },
      );
    }

    const body = await request.json();
    const { name, email, message, turnstileToken } = body ?? {};

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !message.trim() ||
      !isValidEmail(email) ||
      name.length > MAX_NAME ||
      email.length > MAX_EMAIL ||
      message.length > MAX_MESSAGE
    ) {
      return NextResponse.json({ error: 'Dados do formulário inválidos.' }, { status: 400 });
    }

    if ((await verifyTurnstile(turnstileToken, ip)) === 'failed') {
      return NextResponse.json({ error: 'Falha na verificação anti-robô.' }, { status: 403 });
    }

    const transport = createTransport();
    if (!transport) {
      console.error('[send-email] SMTP_* ausentes: e-mail nao enviado. Rode `8k email:provision`.');
      return NextResponse.json({ error: 'Serviço de e-mail indisponível.' }, { status: 500 });
    }

    await transport.sendMail({
      // O envelope tem de sair do remetente aprovado na OCI; o e-mail do
      // visitante vai no replyTo para responder direto do inbox.
      from: `8KSOFT Site <${process.env.SMTP_FROM ?? 'noreply@8ksoft.com'}>`,
      to: CONTACT_INBOX,
      replyTo: email,
      subject: 'Nova Mensagem de Contato - Site',
      html: `
        <h1>Nova Mensagem de Contato</h1>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensagem:</strong> ${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[send-email] Falha ao enviar:', error);
    return NextResponse.json({ error: 'Falha ao enviar mensagem.' }, { status: 500 });
  }
}
