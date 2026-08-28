'use client';

import { useCallback, useEffect, useRef } from 'react';
import Script from 'next/script';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

interface TurnstileApi {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: () => void;
      theme?: 'auto' | 'light' | 'dark';
    },
  ) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileProps {
  /** Recebe o token do desafio, ou undefined quando ele expira/falha. */
  onVerify: (token: string | undefined) => void;
  /** Muda de valor quando o formulário quer um token novo (ex.: após enviar). */
  resetSignal?: number;
}

/**
 * Widget do Cloudflare Turnstile. Sem NEXT_PUBLIC_TURNSTILE_SITE_KEY não
 * renderiza nada — o formulário continua funcionando e o servidor registra
 * que o captcha não está configurado.
 */
export default function Turnstile({ onVerify, resetSignal = 0 }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderWidget = useCallback(() => {
    if (!SITE_KEY || !window.turnstile || !containerRef.current || widgetIdRef.current !== null) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      theme: 'dark',
      callback: (token) => onVerify(token),
      'expired-callback': () => onVerify(undefined),
      'error-callback': () => onVerify(undefined),
    });
  }, [onVerify]);

  useEffect(() => {
    renderWidget();

    return () => {
      if (widgetIdRef.current !== null) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current !== null) {
      window.turnstile?.reset(widgetIdRef.current);
      onVerify(undefined);
    }
    // onVerify vem de useCallback no hook do formulário e é estável; o efeito
    // reage apenas ao sinal de reset.
  }, [resetSignal, onVerify]);

  if (!SITE_KEY) {
    return null;
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div ref={containerRef} />
    </>
  );
}
