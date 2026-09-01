import { perguntasFrequentes, solucoes } from '@/lib/conteudo';
import { siteConfig } from '@/lib/site-config';

const ID_ORGANIZACAO = `${siteConfig.url}/#organizacao`;
const ID_SITE = `${siteConfig.url}/#site`;

/**
 * Organization + FinancialService.
 *
 * `FinancialService` descreve com precisão a atuação da Real Private e
 * habilita os rich results de negócio local (endereço, telefone, área
 * atendida) na busca.
 */
export const organizacaoJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'FinancialService'],
  '@id': ID_ORGANIZACAO,
  name: siteConfig.razaoSocial,
  alternateName: siteConfig.nome,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-real-private.png`,
  image: `${siteConfig.url}/logo-real-private.png`,
  description: siteConfig.descricaoCurta,
  foundingDate: String(siteConfig.fundadaEm),
  slogan: 'Gestão estratégica de capital para empresas',
  telephone: `+${siteConfig.contato.whatsappE164}`,
  ...(siteConfig.contato.email ? { email: siteConfig.contato.email } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.endereco.logradouro,
    addressLocality: siteConfig.endereco.cidade,
    addressRegion: siteConfig.endereco.uf,
    postalCode: siteConfig.endereco.cep,
    addressCountry: siteConfig.endereco.pais,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.endereco.geo.latitude,
    longitude: siteConfig.endereco.geo.longitude,
  },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  sameAs: [siteConfig.contato.instagram.url],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: `+${siteConfig.contato.whatsappE164}`,
      availableLanguage: ['Portuguese'],
      areaServed: 'BR',
    },
  ],
  knowsAbout: [
    'Securitização de recebíveis',
    'Antecipação de recebíveis',
    'Capital de giro',
    'Gestão financeira empresarial',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Soluções financeiras para empresas',
    itemListElement: solucoes.map((solucao) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: solucao.titulo,
        description: solucao.resumo,
        provider: { '@id': ID_ORGANIZACAO },
      },
    })),
  },
} as const;

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': ID_SITE,
  url: siteConfig.url,
  name: siteConfig.razaoSocial,
  inLanguage: siteConfig.locale,
  publisher: { '@id': ID_ORGANIZACAO },
} as const;

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: perguntasFrequentes.map((item) => ({
    '@type': 'Question',
    name: item.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: item.resposta },
  })),
} as const;

/** Trilha de navegação — melhora a apresentação do resultado na busca. */
export function breadcrumbJsonLd(
  trilha: readonly { readonly nome: string; readonly caminho: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trilha.map((item, indice) => ({
      '@type': 'ListItem',
      position: indice + 1,
      name: item.nome,
      item: `${siteConfig.url}${item.caminho === '/' ? '' : item.caminho}`,
    })),
  } as const;
}
