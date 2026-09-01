import type { NextConfig } from 'next';

/**
 * Content Security Policy.
 *
 * `script-src` inclui `'unsafe-inline'` porque o Next.js injeta o script de
 * bootstrap e a carga de dados diretamente no HTML. A alternativa — nonce por
 * requisição via middleware — obrigaria toda página a ser renderizada
 * dinamicamente, o que anularia a geração estática deste site institucional.
 *
 * As diretivas que mais importam contra injeção continuam fechadas:
 * `object-src 'none'` (sem plugins), `base-uri 'none'` (impede sequestrar o
 * caminho relativo dos scripts), `form-action 'self'` (impede exfiltrar dados
 * de formulário) e `frame-ancestors 'none'` (impede clickjacking).
 *
 * Para adotar CSP por nonce mais tarde, veja as instruções no README.
 */
const emDesenvolvimento = process.env.NODE_ENV === 'development';

const contentSecurityPolicy = [
  "default-src 'self'",
  // `unsafe-eval` existe apenas em desenvolvimento: o React usa `eval()` para
  // recursos de depuração (Fast Refresh, reconstrução de pilha). Em produção a
  // diretiva não é emitida.
  `script-src 'self' 'unsafe-inline'${emDesenvolvimento ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  // `data:` cobre os placeholders embutidos do next/image; `blob:` cobre o preview local.
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  // Só a própria origem; em desenvolvimento, o websocket do Fast Refresh
  // também precisa passar.
  `connect-src 'self'${emDesenvolvimento ? ' ws: http:' : ''}`,
  "form-action 'self'",
  // Único terceiro incorporado: o mapa da sede na página de contato.
  'frame-src https://www.google.com https://maps.google.com',
  "frame-ancestors 'none'",
  "base-uri 'none'",
  "object-src 'none'",
  "manifest-src 'self'",
  // Em produção, qualquer requisição http é promovida a https.
  ...(emDesenvolvimento ? [] : ['upgrade-insecure-requests']),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  // Força HTTPS por 2 anos, incluindo subdomínios. Fora de produção fica de
  // lado: fixar HSTS em localhost atrapalharia outros projetos locais.
  ...(emDesenvolvimento
    ? []
    : [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
      ]),
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Desliga APIs sensíveis que o site não usa.
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()',
  },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Não expõe a versão do framework em cada resposta.
  poweredByHeader: false,

  // Redireciona /rota/ para /rota, evitando conteúdo duplicado aos olhos do Google.
  trailingSlash: false,

  images: {
    // AVIF primeiro, WebP como alternativa — ambos bem menores que PNG.
    formats: ['image/avif', 'image/webp'],
    // Cache longo das variantes otimizadas: o logotipo não muda.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async headers() {
    // O Next.js já aplica cache imutável aos assets versionados de
    // /_next/static — não é preciso repetir aqui.
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
