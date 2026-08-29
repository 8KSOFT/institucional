import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/app/lib/seo';

/**
 * Rotas públicas do site. Ao criar uma página nova, incluir aqui — o Next não
 * descobre rotas sozinho neste arquivo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/products`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/privacidade`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
