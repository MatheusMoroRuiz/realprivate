import type { Metadata } from 'next';

import { siteConfig } from '@/lib/site-config';

type MetadadosDePagina = {
  readonly titulo: string;
  readonly descricao: string;
  /** Caminho relativo, iniciado por "/". Usado no canonical e no Open Graph. */
  readonly caminho: string;
  readonly palavrasChave?: readonly string[];
};

/**
 * Monta os metadados de uma rota a partir de um único ponto, garantindo
 * canonical, Open Graph e Twitter Card consistentes em todo o site.
 */
export function criarMetadados({
  titulo,
  descricao,
  caminho,
  palavrasChave,
}: MetadadosDePagina): Metadata {
  const url = `${siteConfig.url}${caminho === '/' ? '' : caminho}`;

  return {
    title: titulo,
    description: descricao,
    ...(palavrasChave ? { keywords: [...palavrasChave] } : {}),
    alternates: { canonical: caminho },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url,
      siteName: siteConfig.razaoSocial,
      title: titulo,
      description: descricao,
    },
    twitter: {
      card: 'summary_large_image',
      title: titulo,
      description: descricao,
    },
  };
}

/**
 * Serializa um bloco JSON-LD. O `<` evita que uma string do conteúdo
 * consiga fechar a tag `<script>` prematuramente (XSS via dados).
 */
export function jsonLd(dados: Record<string, unknown> | readonly unknown[]): string {
  return JSON.stringify(dados).replace(/</g, '\\u003c');
}
