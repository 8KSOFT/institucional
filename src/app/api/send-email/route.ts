import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    const body = await request.json();
    console.log(body);
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: '8KSOFT <contato@8ksoft.com>',
      to: ['destinatario@8ksoft.com.br'],
      subject: 'Nova Mensagem de Contato - Site',
      html: `
        <h1>Nova Mensagem de Contato</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Catch Error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
