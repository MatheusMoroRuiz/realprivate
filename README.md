# Real Private — site institucional

Site da **Real Private Securitizadora S/A** (Presidente Prudente / SP, desde 2004),
construído a partir do layout aprovado `Real Private - Site Premium.dc.html` e dos
textos do *Documento de Direcionamento Estratégico Institucional*.

## Stack

| Camada      | Escolha                                        |
| ----------- | ---------------------------------------------- |
| Framework   | Next.js 16 (App Router)                        |
| UI          | React 19 — Server Components por padrão        |
| Linguagem   | TypeScript 5.9 em `strict` + regras adicionais |
| Estilo      | Tailwind CSS 4 (tokens em `@theme`)            |
| Runtime     | Node.js ≥ 20.9 (testado em 22 LTS)             |

Sem jQuery, sem Bootstrap, sem page builder, sem WordPress. Três dependências de
produção — `next`, `react` e `react-dom`.

## Comandos

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run lint` roda o ESLint e `npm run typecheck` roda o compilador sem emitir.

## Estrutura

```
src/
  app/                 Rotas (App Router), sitemap, robots, manifest, ícones
    page.tsx             Início
    quem-somos/
    o-que-fazemos/
    para-empresas/
    contato/
  components/
    site/              Blocos do site (Header, Footer, seções, mapa)
    ui/                Primitivas (Container, Botao, Eyebrow, ícone)
  lib/
    site-config.ts     Dados institucionais — telefone, endereço, redes, SLA, mapa
    conteudo.ts        Toda a copy, derivada do documento estratégico
    seo.ts             Fábrica de metadados + serialização de JSON-LD
    structured-data.ts Schema.org (Organization, FinancialService, FAQ…)
  assets/              Logotipo (import estático, otimizado pelo next/image)
```

**Onde editar o quê**

- Telefone, endereço, Instagram, prazos de SLA → `src/lib/site-config.ts`
- Qualquer texto do site → `src/lib/conteudo.ts`
- Parceiros do carrossel da home → `src/lib/parceiros.ts`
- Cores, tipografia, espaçamentos → bloco `@theme` em `src/app/globals.css`

Adicionar uma rota ao array `navegacao` em `site-config.ts` a inclui
automaticamente no cabeçalho, no rodapé e no `sitemap.xml`.

## Performance

- **Todas as rotas são estáticas** (`○ prerendered`), servidas do CDN.
- **Fontes self-hosted** via `next/font` — nenhuma requisição a
  `fonts.googleapis.com`, métricas reservadas no build (CLS ≈ 0) e nenhum dado do
  visitante enviado a terceiros.
- **JavaScript mínimo no cliente.** Só três ilhas: indicador de rota ativa, menu
  mobile e revelação em scroll. Todas as seções de conteúdo são Server
  Components.
- **O mapa da página de contato é `loading="lazy"`**, então os recursos do
  Google só são buscados quando o bloco se aproxima da viewport — o carregamento
  inicial da página não paga por ele.
- **Sem JS onde CSS resolve:** a sombra do cabeçalho usa `animation-timeline:
  scroll()`; a revelação parte de conteúdo visível e só esconde sob
  `@media (scripting: enabled)`; o carrossel de parceiros é uma animação CSS
  com o botão de pausa em `checkbox` — nenhuma biblioteca, nenhum JavaScript.
- Imagens em AVIF/WebP com cache de um ano.

## Acessibilidade

- Link "pular para o conteúdo", marcos semânticos e um único `<h1>` por rota.
- `aria-current="page"` na navegação, além do marcador visual.
- Menu mobile em `<dialog>` nativo: foco preso, Esc fecha, fundo inerte — e um
  `<noscript>` no cabeçalho garante a navegação sem JavaScript.
- Contraste verificado: todo texto atinge no mínimo 4.5:1 (AA).
- Alvos de toque de 24px ou mais; botões principais com 48px.
- `prefers-reduced-motion` desliga todas as animações.
- O mapa incorporado tem `title` descritivo, e o endereço aparece como texto
  logo acima dele — quem não consegue usar o mapa não perde a informação.
- O carrossel de parceiros atende a WCAG 2.2.2 (pausar movimento) por três
  caminhos: botão de pausa, hover e foco do teclado. As cópias que fazem o laço
  saem da árvore de acessibilidade, então cada parceiro é anunciado uma só vez.

## SEO

- Metadados por rota com canonical, Open Graph e Twitter Card (`src/lib/seo.ts`).
- JSON-LD: `Organization` + `FinancialService` com endereço e geolocalização,
  `WebSite`, `Service` por frente de atuação, `FAQPage` e `BreadcrumbList`.
- `sitemap.xml` e `robots.txt` gerados a partir da mesma lista de rotas.
- HTML semântico, `lang="pt-BR"`, headings hierárquicos e URLs em português.

## Segurança

Cabeçalhos aplicados em `next.config.ts`:

`Content-Security-Policy`, `Strict-Transport-Security` (2 anos, produção),
`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
`Permissions-Policy`, `Cross-Origin-Opener-Policy` e
`Cross-Origin-Resource-Policy`. O header `X-Powered-By` é removido.

O site não recebe nenhum dado de visitante: não há formulários, nem cookies
próprios, nem armazenamento no navegador. O único terceiro embarcado é o mapa da
sede, liberado no CSP por `frame-src https://www.google.com`.

### Sobre o `'unsafe-inline'` no `script-src`

O Next.js injeta inline o script de bootstrap e a carga de dados do React. A
alternativa é um *nonce* por requisição via `middleware.ts` — o que forçaria toda
página a ser renderizada dinamicamente e anularia a geração estática. Optamos por
manter o site 100% estático e fechar as diretivas que mais importam contra
injeção: `object-src 'none'`, `base-uri 'none'`, `form-action 'self'` e
`frame-ancestors 'none'`.

Se o site passar a exigir CSP por *nonce* (uma auditoria, por exemplo), crie um
`middleware.ts` que gere o nonce, o injete no header e o leia via `headers()` no
layout — e assuma o custo da renderização dinâmica.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Só existe uma variável:
`NEXT_PUBLIC_SITE_URL`, que alimenta canonical, sitemap, robots, Open Graph e
os dados estruturados.

**Ela é opcional, mas se existir precisa do protocolo.** A resolução é feita em
`resolverUrlDoSite`, em `src/lib/site-config.ts`, nesta ordem:

1. `NEXT_PUBLIC_SITE_URL`;
2. `NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL` — domínio de produção que a
   Vercel injeta sozinha (estável entre deploys, ao contrário da URL de cada
   deploy, que não serve para canonical);
3. o domínio institucional.

Valores vazios, só com espaços, sem protocolo ou com barras sobrando são
normalizados ou descartados. Isso não é preciosismo: `siteConfig.url` alimenta
o `metadataBase` do layout, que roda `new URL()` na avaliação do módulo — e
`new URL('')` lança `ERR_INVALID_URL`, derrubando o build inteiro. Foi o que
aconteceu no primeiro deploy na Vercel.

### Sobre os avisos do build na Vercel

Dois avisos aparecem e **não** indicam problema:

- `eslint@9.39.5 is no longer supported` — o ESLint 10 quebra o
  `eslint-plugin-react` que o `eslint-config-next` empacota
  (`contextOrFilename.getFilename is not a function`). O 9.39.5 é a versão que
  o preset do Next suporta hoje, e o lint não roda durante o `next build`.
- `allow-scripts: unrs-resolver` — script de instalação de um resolver do
  ESLint. Não participa do build.

## Mapa da sede

O mapa vem de `mapaEmbedUrl`, em `src/lib/site-config.ts`, montado a partir do
endereço — mudar o endereço move o mapa junto. Não há chave de API envolvida.

Dois detalhes que custaram depuração e vale não desfazer:

- A URL aponta direto para `https://www.google.com/maps/embed?pb=…`. O atalho
  `?q=…&output=embed` responde com um **301 que carrega
  `X-Frame-Options: SAMEORIGIN`**, e o navegador bloqueia o iframe no meio do
  redirecionamento — o mapa fica em branco, sem erro no console.
- A busca usa `endereco.cep` (`19010-061`), não `cepFormatado`
  (`19.010-061`). Com o ponto, o Google ignora o número e centraliza no centro
  genérico da cidade, sem marcador.

## Carrossel de parceiros

A lista vive em `src/lib/parceiros.ts`. Cada item tem `nome`, `url` e `logo`.

**Enquanto `logo` for `null`, o carrossel desenha o nome do parceiro em
tipografia** — a seção fica completa e clicável sem depender de arquivo nenhum.
Para publicar o logotipo, coloque o arquivo em `public/parceiros/` e preencha
`logo`, `largura` e `altura` (as dimensões reais do arquivo, que o `next/image`
usa para reservar o espaço e não deslocar o layout).

Os logotipos hoje no repositório foram baixados dos sites públicos dos
parceiros. **Confirme a autorização de uso com cada um antes de publicar** — a
maioria tem manual de marca e pede aprovação prévia. A procedência de cada
arquivo, e o que ainda falta, está em `public/parceiros/LEIA-ME.md`.

Os logotipos ficam em escala de cinza em repouso e ganham cor no hover e no
foco. Cada um é encaixado numa caixa de tamanho fixo com `object-contain`, o
que equilibra opticamente marcas de proporções bem diferentes — as largas se
limitam pela largura, as compactas pela altura.

Como funciona a faixa, caso precise mexer:

- as duas metades da lista são idênticas e a animação para em `-50%`, de modo
  que o quadro final coincide com o inicial e o laço não tem emenda;
- o espaçamento entre os itens vem do `padding` de cada `li`, **não** de um
  `gap` no contêiner. Com `gap`, metade da largura total deixaria de coincidir
  com uma repetição inteira e a faixa saltaria a cada volta;
- `REPETICOES_POR_METADE` existe para uma metade sozinha já ser mais larga que
  a tela — sem isso, monitores largos veriam um vão entre as voltas.

## Pendências de conteúdo

Marcadas como `null` em `src/lib/site-config.ts`. Enquanto ficarem assim, a
interface simplesmente omite o bloco correspondente — nada de placeholder visível.

- `contato.email` — e-mail institucional;
- `contato.horarioAtendimento` — horário de atendimento;
- `logo` de cada parceiro em `src/lib/parceiros.ts` — veja
  `public/parceiros/LEIA-ME.md`.

### Logotipo

`src/assets/logo-real-private.png` e `public/logo-real-private.png` são o arquivo
oficial fornecido pela empresa (720×720, símbolo em círculo com a assinatura
"Real Private Securitizadora S/A · desde 2004" na base).

Ao substituir, mantenha os dois caminhos e o formato quadrado com o símbolo
centralizado — o componente `Logo` aplica o recorte circular. Depois, regenere os
ícones derivados (`src/app/icon.png`, `src/app/apple-icon.png` e `docs/logo.png`),
que saem do mesmo arquivo.

Atenção ao cache: as imagens são servidas com `minimumCacheTTL` de um ano. Depois
de trocar o arquivo, force atualização no navegador (Ctrl+Shift+R) — senão a
versão antiga continua aparecendo.

O Guia de Uso da Logo define as cores oficiais da marca, disponíveis como tokens
`--color-marca-900/700/500/300` em `globals.css`. Elas são reservadas ao logotipo:
a paleta da interface é a interpretação institucional dessaturada do layout
aprovado.
