import { FaixaCta } from '@/components/site/FaixaCta';
import { GradePilares } from '@/components/site/GradePilares';
import { Destaque, HeroPagina } from '@/components/site/HeroPagina';
import { PainelMarca } from '@/components/site/PainelMarca';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { pilaresDePosicionamento, valores } from '@/lib/conteudo';
import { criarMetadados, jsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd } from '@/lib/structured-data';

export const metadata = criarMetadados({
  titulo: 'Quem somos',
  descricao:
    'Mais de duas décadas no mercado financeiro. Conheça o propósito, a visão, a missão e os valores da Real Private Securitizadora S/A, em Presidente Prudente / SP.',
  caminho: '/quem-somos',
  palavrasChave: ['sobre a Real Private', 'securitizadora Presidente Prudente', 'valores', 'missão'],
});

const identidade = [
  {
    rotulo: 'Propósito',
    texto:
      'Contribuir para que empresas tenham acesso a soluções financeiras mais ágeis, personalizadas e compatíveis com sua realidade, preservando a confiança, a credibilidade e o relacionamento de longo prazo como base de cada operação.',
  },
  {
    rotulo: 'Visão',
    texto:
      'Consolidar a Real Private como referência em soluções financeiras personalizadas para empresas que valorizam agilidade, confiança, discrição e relacionamento de longo prazo.',
  },
  {
    rotulo: 'Missão',
    texto:
      'Oferecer soluções financeiras ágeis, seguras e personalizadas para empresas, analisando cada operação de forma criteriosa e respeitando o perfil, a necessidade e a realidade de cada cliente.',
  },
] as const;

export default function PaginaQuemSomos() {
  return (
    <>
      <HeroPagina
        eyebrow="Quem somos"
        titulo={
          <>
            Especialistas em gestão estratégica de{' '}
            <Destaque>capital empresarial</Destaque>.
          </>
        }
      />

      {/* Texto institucional — §5.4 do direcionamento estratégico. */}
      <section aria-labelledby="apresentacao">
        <Container className="grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-18 lg:py-24">
          <div data-revelar className="flex flex-col gap-6">
            <h2 id="apresentacao" className="sr-only">
              Apresentação institucional
            </h2>
            <p className="font-sans text-[clamp(1.5rem,2.2vw,1.875rem)] leading-[1.42] font-medium text-ink-900">
              A Real Private atua no mercado financeiro oferecendo soluções personalizadas para
              empresas que buscam agilidade, confiança e atendimento próximo.
            </p>
            <p className="font-sans text-[16.5px] leading-[1.72] text-ink-400">
              Ao longo de sua trajetória, construiu uma reputação baseada em credibilidade,
              relacionamento e responsabilidade na condução das operações. Diferente de modelos
              financeiros excessivamente padronizados, a Real Private valoriza a análise
              individualizada de cada cliente, compreendendo sua realidade, sua necessidade e seu
              perfil antes de conduzir qualquer operação.
            </p>
            <p className="font-sans text-[16.5px] leading-[1.72] text-ink-400">
              Nossa atuação é sustentada por discrição, agilidade responsável, flexibilidade com
              critério e compromisso com relações de longo prazo. Mais do que oferecer soluções
              financeiras, buscamos construir parcerias sólidas com empresas que valorizam
              seriedade, confiança e atendimento personalizado.
            </p>
          </div>

          <PainelMarca className="min-h-[340px] lg:min-h-[440px]" tamanhoSimbolo={260} />
        </Container>
      </section>

      {/* Propósito, visão e missão */}
      <section
        aria-labelledby="identidade"
        className="border-t border-ink-950/8 bg-canvas-alt"
      >
        <Container className="py-20 lg:py-24">
          <h2
            id="identidade"
            data-revelar
            className="mb-12 max-w-[16em] font-display text-[clamp(1.75rem,2.8vw,2.375rem)] leading-[1.18] font-semibold text-ink-900"
          >
            O que orienta cada decisão
          </h2>
          <dl className="grid gap-13 lg:grid-cols-3">
            {identidade.map((item) => (
              <div key={item.rotulo} data-revelar className="flex flex-col gap-4 border-t border-ink-950/20 pt-5.5">
                <dt>
                  <Eyebrow>{item.rotulo}</Eyebrow>
                </dt>
                <dd className="m-0 font-sans text-[15.5px] leading-[1.7] text-ink-400">
                  {item.texto}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Posicionamento */}
      <section aria-labelledby="posicionamento" className="superficie-escura bg-ink-900 text-sage-100">
        <Container className="py-20 lg:py-24">
          <div data-revelar className="mb-14 max-w-[34em]">
            <Eyebrow tom="claro" comTraco>
              Posicionamento
            </Eyebrow>
            <h2
              id="posicionamento"
              className="mt-5 font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.14] font-semibold text-sage-100"
            >
              Quatro pilares sustentam a nossa forma de trabalhar
            </h2>
            <p className="mt-5 font-sans text-[16.5px] leading-[1.72] text-sage-100/80">
              A Real Private não busca ser apenas mais uma alternativa financeira. Busca ser
              reconhecida como parceira de confiança para empresas que precisam de soluções
              conduzidas com seriedade, proximidade e responsabilidade.
            </p>
          </div>
          <GradePilares pilares={pilaresDePosicionamento} tom="escuro" comRotulo />
        </Container>
      </section>

      {/* Valores */}
      <section aria-labelledby="valores">
        <Container className="py-20 lg:py-24">
          <div data-revelar className="mb-14">
            <Eyebrow>Valores</Eyebrow>
            <h2
              id="valores"
              className="mt-5 max-w-[18em] font-display text-[clamp(1.75rem,2.8vw,2.375rem)] leading-[1.18] font-semibold text-ink-900"
            >
              Princípios que não mudam conforme a operação
            </h2>
          </div>
          <GradePilares pilares={valores} colunas={3} />
        </Container>
      </section>

      <FaixaCta
        titulo="Conheça as soluções que aplicamos junto às empresas atendidas."
        descricao={`Conversa direta, análise sem compromisso e primeiro retorno ${siteConfig.sla.primeiroRetorno}.`}
        mensagemWhatsApp="Olá! Conheci a Real Private pelo site e gostaria de conversar."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { nome: 'Início', caminho: '/' },
              { nome: 'Quem somos', caminho: '/quem-somos' },
            ]),
          ),
        }}
      />
    </>
  );
}
