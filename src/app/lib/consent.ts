export const COOKIE_CONSENT_KEY = '8ksoft-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'cookie-consent-changed';

export type ConsentValue = 'accepted' | 'rejected';

/**
 * Consentimento de cookies não essenciais (LGPD). Fonte única de verdade para
 * o carregamento do GA4 e para o envio de qualquer evento de analytics.
 * Retorna false no servidor e enquanto o usuário não tiver respondido o banner.
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    return window.localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
  } catch {
    // localStorage pode lançar em modo privado ou com cookies bloqueados:
    // na dúvida, tratamos como ausência de consentimento.
    return false;
  }
}
