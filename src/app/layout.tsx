import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';

import '@/app/globals.css';

import { BotaoWhatsAppFlutuante } from '@/components/site/BotaoWhatsAppFlutuante';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { RevelarAoRolar } from '@/components/site/RevelarAoRolar';
import { jsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import { organizacaoJsonLd, websiteJsonLd } from '@/lib/structured-data';

/**
 * Fontes servidas pelo próprio domínio via `next/font`.
 *
 * Elimina a requisição a fonts.googleapis.com (uma origem a menos no caminho
 * crítico e nenhum dado do visitante enviado a terceiros) e reserva as
 * métricas da fonte no build, o que zera o deslocamento de layout (CLS).
 */
const fonteDisplay = Manrope({
  subsets: ['latin'],
  // Só H1 (700) e H2 (600) usam a fonte de display — não carregamos pesos
  // que ninguém aplica. Manrope não tem itálico: nada no site depende disso.
  weight: ['600', '700'],
  display: 'swap',
  variable: '--fonte-display',
});

const fonteSans = Inter({
  subsets: ['latin'],
  // 400 texto corrido · 500 subtítulos e menu · 600 H3 e botões.
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--fonte-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.razaoSocial} — Gestão estratégica de capital para empresas`,
    template: `%s · ${siteConfig.nome}`,
  },
  description: siteConfig.descricaoCurta,
  applicationName: siteConfig.nome,
  authors: [{ name: siteConfig.razaoSocial }],
  creator: siteConfig.razaoSocial,
  publisher: siteConfig.razaoSocial,
  category: 'finance',
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f6f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1f19' },
  ],
  colorScheme: 'light',
};

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang={siteConfig.locale} className={`${fonteDisplay.variable} ${fonteSans.variable}`}>
      <body className="flex min-h-dvh flex-col overflow-x-clip bg-canvas antialiased">
        {/* Primeiro alvo do Tab: permite pular a navegação repetida. */}
        <a
          href="#conteudo"
          className="sr-only rounded-[2px] bg-ink-900 px-5 py-3 font-sans text-sm font-semibold text-sage-200 focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100"
        >
          Pular para o conteúdo
        </a>

        <Header />

        <main id="conteudo" className="flex-1">
          {children}
        </main>

        <Footer />
        <BotaoWhatsAppFlutuante />
        <RevelarAoRolar />

        {/*
          Dados estruturados globais. Ficam no layout para valerem em todas as
          rotas; cada página acrescenta os seus (Breadcrumb, FAQ, Serviço).
        */}
        <script
          type="application/ld+json"
          // O conteúdo é gerado no servidor a partir de constantes do próprio
          // projeto e escapado em `jsonLd` — não há entrada de usuário aqui.
          dangerouslySetInnerHTML={{ __html: jsonLd([organizacaoJsonLd, websiteJsonLd]) }}
        />
      </body>
    </html>
  );
}
