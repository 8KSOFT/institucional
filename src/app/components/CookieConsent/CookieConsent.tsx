'use client';

import { useEffect, useState } from 'react';

import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY, ConsentValue } from '@/app/lib/consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(COOKIE_CONSENT_KEY)) {
        setVisible(true);
      }
    } catch {
      // Navegador com armazenamento bloqueado: sem onde registrar a escolha,
      // seguimos sem banner e sem analytics.
    }
  }, []);

  const respond = (value: ConsentValue) => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // Ignora falha de escrita: o banner some nesta sessão e o consentimento
      // volta a ser pedido na próxima visita.
    }
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-zinc-900/95 backdrop-blur">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-6 md:flex-row md:justify-between">
        <p className="text-sm text-gray-300">
          Usamos cookies para entender como você utiliza nosso site e melhorar sua experiência. Você pode aceitar ou
          recusar os cookies não essenciais a qualquer momento. Saiba mais na nossa{' '}
          <a href="/privacidade" className="text-primary underline hover:text-primary/80">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => respond('rejected')}
            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-primary/50 hover:text-primary"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => respond('accepted')}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
