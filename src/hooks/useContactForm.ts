import { useCallback, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

import { IContactFormState } from '@/app/interfaces/IContactForm';
import { hasAnalyticsConsent } from '@/app/lib/consent';

export function useContactForm() {
  const [formState, setFormState] = useState<IContactFormState>({
    name: '',
    email: '',
    message: '',
    status: 'idle',
  });
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>();
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);

  const onTurnstileVerify = useCallback((token: string | undefined) => {
    setTurnstileToken(token);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setFormState((prev) => ({ ...prev, status: 'sending' }));

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          turnstileToken,
        }),
      });

      if (response.ok) {
        // Sem consentimento o GA4 nem é carregado; não empilhamos o evento no
        // dataLayer para que a recusa do usuário valha também para conversões.
        if (hasAnalyticsConsent()) {
          sendGAEvent('event', 'contact_form_submit', { form_id: 'contact' });
        }
        setFormState({
          name: '',
          email: '',
          message: '',
          status: 'success',
        });
      } else {
        setFormState((prev) => ({ ...prev, status: 'error' }));
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setFormState((prev) => ({ ...prev, status: 'error' }));
    } finally {
      // Cada token do Turnstile só vale um envio: pede um novo em qualquer caso.
      setTurnstileToken(undefined);
      setTurnstileResetSignal((value) => value + 1);
    }
  };

  return {
    formState,
    setFormState,
    handleSubmit,
    onTurnstileVerify,
    turnstileResetSignal,
  };
}
