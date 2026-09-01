import type { MetadataRoute } from 'next';

import { navegacao, siteConfig } from '@/lib/site-config';

/**
 * Sitemap gerado a partir da mesma lista que alimenta a navegação — não há
 * como uma rota entrar no menu e ficar de fora do sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const atualizadoEm = new Date();

  return navegacao.map((item) => ({
    url: `${siteConfig.url}${item.href === '/' ? '' : item.href}`,
    lastModified: atualizadoEm,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
