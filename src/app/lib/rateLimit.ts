/**
 * Rate limit em memória, por IP, com janela deslizante.
 *
 * Vale para uma única instância do container (é o caso do institucional, que
 * roda um replica só). Ele é a segunda camada: a primeira é a regra de Rate
 * Limiting da Cloudflare na borda, que barra o abuso antes de chegar no origin.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

export function checkRateLimit(key: string, now = Date.now()): RateLimitResult {
  const windowStart = now - WINDOW_MS;
  const recent = (hits.get(key) ?? []).filter((timestamp) => timestamp > windowStart);

  if (recent.length >= MAX_REQUESTS) {
    const oldest = recent[0];
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000)),
    };
  }

  recent.push(now);
  hits.set(key, recent);

  // Impede o Map de crescer sem limite em processo de vida longa.
  if (hits.size > 5000) {
    for (const [entryKey, timestamps] of hits) {
      if (timestamps.every((timestamp) => timestamp <= windowStart)) {
        hits.delete(entryKey);
      }
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * IP real do visitante. Atrás da Cloudflare o cabeçalho confiável é
 * CF-Connecting-IP; X-Forwarded-For fica como fallback.
 *
 * Só é confiável se o origin não aceitar tráfego fora da Cloudflare — caso
 * contrário o cabeçalho pode ser forjado batendo direto no IP do servidor.
 */
export function getClientIp(headers: Headers): string {
  const cfIp = headers.get('cf-connecting-ip');
  if (cfIp) {
    return cfIp;
  }

  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return 'unknown';
}
