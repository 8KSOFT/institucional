const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export type TurnstileOutcome = 'ok' | 'failed' | 'not-configured';

/**
 * Valida o token do Cloudflare Turnstile no servidor. O token que o widget
 * devolve no browser não vale nada sozinho: só a chamada ao siteverify, com a
 * secret key, prova que o desafio foi resolvido.
 *
 * Sem TURNSTILE_SECRET_KEY configurada a verificação é pulada (retorna
 * 'not-configured') para não derrubar o ambiente local.
 */
export async function verifyTurnstile(token: string | undefined, remoteIp?: string): Promise<TurnstileOutcome> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.warn('[send-email] TURNSTILE_SECRET_KEY ausente: captcha NAO verificado.');
    return 'not-configured';
  }

  if (!token) {
    return 'failed';
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp && remoteIp !== 'unknown') {
    body.set('remoteip', remoteIp);
  }

  try {
    const response = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    const result = (await response.json()) as { success?: boolean; 'error-codes'?: string[] };

    if (!result.success) {
      console.warn('[send-email] Turnstile rejeitou o token:', result['error-codes']);
      return 'failed';
    }

    return 'ok';
  } catch (error) {
    console.error('[send-email] Falha ao contatar o Turnstile:', error);
    return 'failed';
  }
}
