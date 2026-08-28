'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

import { COOKIE_CONSENT_EVENT, hasAnalyticsConsent } from '@/app/lib/consent';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Só carrega o script do GA4 depois que o usuário aceita cookies no
 * CookieConsent (LGPD). Enquanto não houver consentimento, nada é
 * carregado nem enviado ao Google.
 */
export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const checkConsent = () => setConsented(hasAnalyticsConsent());

    checkConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, checkConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, checkConsent);
  }, []);

  if (!GA_ID || !consented) {
    return null;
  }

  return <GoogleAnalytics gaId={GA_ID} />;
}
