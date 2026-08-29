export const SITE_URL = 'https://8ksoft.com';

/**
 * Card que WhatsApp, LinkedIn e afins mostram ao montar o preview do link.
 * 1200x630 é a proporção que essas redes esperam; fora dela o corte fica a
 * cargo de cada uma. Fica num só lugar porque metadata de rota filha
 * SUBSTITUI o openGraph do layout raiz em vez de mesclar — se cada página
 * declarasse a sua, uma esqueceria.
 */
export const OG_IMAGE = {
  url: '/images/og-8ksoft.png',
  width: 1200,
  height: 630,
  alt: '8KSOFT',
};
