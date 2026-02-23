import { useState } from 'react';
import { IContactFormState } from '@/app/interfaces/IContactForm';

export function useContactForm() {
  const [formState, setFormState] = useState<IContactFormState>({
    name: '',
    email: '',
    message: '',
    status: 'idle',
  });

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
        }),
      });

      if (response.ok) {
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
    }
  };

  return {
    formState,
    setFormState,
    handleSubmit,
  };
}
