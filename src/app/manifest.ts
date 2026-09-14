import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/site-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.razaoSocial,
    short_name: siteConfig.nome,
    description: siteConfig.descricaoCurta,
    lang: siteConfig.locale,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#052020',
    icons: [
      { src: '/logo-real-private.png', sizes: '720x720', type: 'image/png', purpose: 'any' },
    ],
  };
}
