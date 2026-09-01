/**
 * Fonte única de verdade dos dados institucionais da Real Private.
 *
 * Tudo que aparece em mais de um lugar do site (telefone, endereço, redes,
 * textos institucionais) vive aqui. Assim, atualizar um dado é editar um
 * arquivo — não caçar strings pelo projeto.
 *
 * Campos marcados como `null` são informações ainda não confirmadas pela
 * empresa. A interface os omite graciosamente em vez de exibir placeholders.
 */

export const WHATSAPP_NUMBER_E164 = '5518997226423' as const;
export const WHATSAPP_NUMBER_DISPLAY = '(18) 99722-6423' as const;

/**
 * Mensagem pré-preenchida do WhatsApp. Cada CTA pode passar a sua, o que
 * permite medir a origem da conversa sem depender de rastreamento externo.
 */
export function whatsappUrl(mensagem?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER_E164}`;
  if (!mensagem) return base;
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}

/** Domínio institucional. Usado quando nenhuma variável de ambiente resolve. */
const URL_PADRAO = 'https://www.realprivate.com.br';

/**
 * Normaliza um valor de ambiente em uma origem absoluta, ou devolve `null`.
 *
 * Aceita valor sem protocolo (as variáveis de domínio da Vercel vêm assim,
 * ex.: `realprivate.vercel.app`) e rejeita vazio, espaços em branco e lixo.
 */
function normalizarUrl(valor: string | undefined): string | null {
  const limpo = valor?.trim().replace(/\/+$/, '');
  if (!limpo) return null;

  const comProtocolo = /^https?:\/\//i.test(limpo) ? limpo : `https://${limpo}`;
  try {
    return new URL(comProtocolo).origin;
  } catch {
    return null;
  }
}

/**
 * Resolve a URL pública do site.
 *
 * Esta função existe por um motivo concreto: `siteConfig.url` alimenta o
 * `metadataBase` do layout, que roda `new URL()` na avaliação do módulo. Como
 * `new URL()` lança em qualquer entrada malformada, uma variável vazia ou sem
 * protocolo derruba o build inteiro — foi exatamente o que aconteceu no
 * primeiro deploy na Vercel (`ERR_INVALID_URL`). Aqui nada lança: cada
 * candidato é validado e, se nenhum servir, cai no domínio institucional.
 *
 * Ordem de resolução:
 *  1. `NEXT_PUBLIC_SITE_URL` — o domínio definitivo, quando configurado;
 *  2. `NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL` — domínio de produção que a
 *     Vercel injeta sozinha (estável entre deploys, ao contrário da URL de
 *     cada deploy, que não serve para canonical);
 *  3. o domínio institucional.
 *
 * Os acessos a `process.env` são estáticos de propósito: é assim que o Next
 * consegue substituí-los em tempo de build, inclusive no pacote do cliente.
 */
function resolverUrlDoSite(): string {
  return (
    normalizarUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalizarUrl(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) ??
    URL_PADRAO
  );
}

export const siteConfig = {
  nome: 'Real Private',
  razaoSocial: 'Real Private Securitizadora S/A',
  descricaoCurta:
    'Gestão estratégica de capital para empresas. Antecipação de recebíveis com critério, agilidade e atendimento personalizado.',
  fundadaEm: 2004,
  locale: 'pt-BR',
  /**
   * Origem absoluta, sempre válida e sem barra final. Alimenta canonical,
   * sitemap, robots, Open Graph e os dados estruturados. Veja
   * `resolverUrlDoSite` acima para a ordem de resolução.
   */
  url: resolverUrlDoSite(),

  contato: {
    whatsappE164: WHATSAPP_NUMBER_E164,
    whatsappDisplay: WHATSAPP_NUMBER_DISPLAY,
    telefoneHref: `tel:+${WHATSAPP_NUMBER_E164}`,
    /** [A confirmar] e-mail institucional. */
    email: null as string | null,
    /** [A confirmar] horário de atendimento, ex.: 'Segunda a sexta, 9h às 18h'. */
    horarioAtendimento: null as string | null,
    instagram: {
      handle: '@realprivatesecuritizadora',
      url: 'https://www.instagram.com/realprivatesecuritizadora/',
    },
  },

  endereco: {
    logradouro: 'Rua Siqueira Campos, 699',
    bairro: 'Centro',
    cidade: 'Presidente Prudente',
    uf: 'SP',
    cep: '19010-061',
    cepFormatado: '19.010-061',
    pais: 'BR',
    /** Coordenadas aproximadas do centro de Presidente Prudente / SP. */
    geo: { latitude: -22.1256, longitude: -51.3889 },
  },

  /** SLA institucional — item 6.3 do direcionamento estratégico. */
  sla: {
    primeiroRetorno: 'até 24 horas úteis',
    triagem: 'até 24 horas úteis',
    validacaoDocumental: 'até 48 horas úteis',
    posOperacao: 'em até 7 dias',
  },
} as const;

/**
 * Endereço em uma linha, no formato que o Google Maps geocodifica.
 *
 * Usa `cep` (19010-061), e não `cepFormatado` (19.010-061): com o ponto, o
 * Google não resolve o número e cai no centro genérico da cidade, sem marcador.
 */
export const enderecoParaBusca =
  `${siteConfig.endereco.logradouro} - ${siteConfig.endereco.bairro}, ` +
  `${siteConfig.endereco.cidade} - ${siteConfig.endereco.uf}, ${siteConfig.endereco.cep}`;

/**
 * Mapa incorporado na página de contato.
 *
 * Aponta direto para `/maps/embed`, o endpoint público que o Google usa em
 * "Compartilhar → Incorporar um mapa". Não exige chave de API — uma credencial
 * a menos para gerenciar e nenhum risco de chave exposta no cliente.
 *
 * O atalho `?q=…&output=embed` **não** serve aqui: ele responde com um 301 que
 * carrega `X-Frame-Options: SAMEORIGIN`, e o navegador bloqueia o iframe no
 * meio do redirecionamento. A URL final não tem esse cabeçalho.
 *
 * Formato do parâmetro `pb`: `!1m3!2m1!1s<endereço>` define o local,
 * `!6i<zoom>` o nível de zoom e os blocos `!3m1!1s` / `!5m1!1s` o idioma.
 */
const MAPA_ZOOM = 17;

export const mapaEmbedUrl =
  `https://www.google.com/maps/embed?pb=!1m3!2m1!1s${encodeURIComponent(enderecoParaBusca)}` +
  `!6i${MAPA_ZOOM}!3m1!1spt-BR!5m1!1spt-BR`;

/** Abre o mapa em tela cheia, com rota a partir da localização de quem clica. */
export const mapaRotaUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(enderecoParaBusca)}`;

export type NavItem = {
  readonly href: string;
  readonly rotulo: string;
  /** Rótulo alternativo, mais descritivo, para leitores de tela e SEO. */
  readonly descricao: string;
};

export const navegacao: readonly NavItem[] = [
  { href: '/', rotulo: 'Início', descricao: 'Página inicial da Real Private' },
  { href: '/quem-somos', rotulo: 'Quem somos', descricao: 'A trajetória e os princípios da Real Private' },
  { href: '/o-que-fazemos', rotulo: 'O que fazemos', descricao: 'Soluções financeiras para empresas' },
  { href: '/para-empresas', rotulo: 'Para empresas', descricao: 'Perfil das empresas atendidas' },
  { href: '/contato', rotulo: 'Contato', descricao: 'Fale com a Real Private' },
] as const;

export const enderecoLinhas = [
  `${siteConfig.endereco.logradouro} — ${siteConfig.endereco.bairro}`,
  `${siteConfig.endereco.cidade} / ${siteConfig.endereco.uf} · ${siteConfig.endereco.cepFormatado}`,
] as const;
