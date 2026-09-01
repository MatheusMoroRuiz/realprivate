import { FaixaCta } from '@/components/site/FaixaCta';
import { GradePilares } from '@/components/site/GradePilares';
import { HeroPagina } from '@/components/site/HeroPagina';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import {
  checklistDocumental,
  parceirosEstrategicos,
  perfilDeCliente,
  principiosDeSeguranca,
  segmentos,
  situacoesComuns,
} from '@/lib/conteudo';
import { criarMetadados, jsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd } from '@/lib/structured-data';

export const metadata = criarMetadados({
  titulo: 'Para empresas',
  descricao:
    'Perfil das empresas atendidas pela Real Private, segmentos com aderência, checklist documental inicial e o modelo de indicação por parceiros estratégicos.',
  caminho: '/para-empresas',
  palavrasChave: [
    'capital de giro',
    'empresas atendidas',
    'indicação de clientes',
    'parceiros estratégicos',
  ],
});

export default function PaginaParaEmpresas() {
  return (
    <>
      <HeroPagina
        eyebrow="Para empresas"
        titulo="Quando faz sentido procurar a Real Private"
        descricao="Quando a empresa precisa de capital para manter ou estruturar seu crescimento, sem comprometer sua saúde financeira."
      />

      {/* Perfil + situações */}
      <section aria-labelledby="perfil">
        <Container className="grid items-start gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <div data-revelar className="flex flex-col gap-4.5">
            <Eyebrow>Perfil de empresas atendidas</Eyebrow>
            <h2
              id="perfil"
              className="max-w-[18em] font-display text-[clamp(1.75rem,2.8vw,2.375rem)] leading-[1.18] font-normal text-ink-900"
            >
              Organização, responsabilidade e visão de longo prazo
            </h2>
            <p className="max-w-[30em] font-sans text-[16.5px] leading-[1.72] text-ink-400">
              Atendemos empresas de diferentes portes e segmentos. Mais importante do que o porte é
              a qualidade da operação, a clareza da demanda e a confiabilidade da empresa.
            </p>
            <ul className="mt-2 flex flex-col gap-3">
              {perfilDeCliente.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-4 shrink-0 bg-ink-500"
                  />
                  <span className="font-sans text-[15.5px] leading-[1.6] text-ink-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-revelar className="flex flex-col">
            <h2 className="mb-6 font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-300 uppercase">
              Situações comuns
            </h2>
            <ul className="flex flex-col">
              {situacoesComuns.map((situacao) => (
                <li
                  key={situacao}
                  className="flex items-center gap-4.5 border-b border-ink-950/14 py-5"
                >
                  <span aria-hidden="true" className="h-px w-5.5 shrink-0 bg-ink-500" />
                  <span className="font-sans text-[17.5px] leading-[1.4] text-ink-900">
                    {situacao}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 mb-6 font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-300 uppercase">
              Segmentos com aderência
            </h2>
            <ul className="flex flex-wrap gap-2.5">
              {segmentos.map((segmento) => (
                <li
                  key={segmento}
                  className="rounded-[2px] border border-ink-950/15 bg-canvas-alt px-3.5 py-2 font-sans text-[13.5px] leading-none text-ink-400"
                >
                  {segmento}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Checklist documental — §6.4 */}
      <section
        aria-labelledby="checklist"
        className="border-t border-ink-950/8 bg-canvas-alt"
      >
        <Container className="grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
          <div data-revelar>
            <Eyebrow>Análise inicial</Eyebrow>
            <h2
              id="checklist"
              className="mt-5 max-w-[14em] font-display text-[clamp(1.75rem,2.8vw,2.375rem)] leading-[1.18] font-normal text-ink-900"
            >
              O que precisamos para analisar
            </h2>
            <p className="mt-5 max-w-[30em] font-sans text-[16.5px] leading-[1.72] text-ink-400">
              Solicitamos apenas o necessário. A documentação é proporcional ao tipo, ao valor e à
              complexidade da operação — o objetivo é organizar a análise, não criar barreiras.
            </p>
          </div>

          <ul data-revelar className="grid gap-x-9 gap-y-4 sm:grid-cols-2">
            {checklistDocumental.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-ink-950/12 pb-4 font-sans text-[15px] leading-[1.6] text-ink-900"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-ink-500"
                >
                  <path d="m5 12.5 4.5 4.5L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Princípios */}
      <section aria-labelledby="conducao">
        <Container className="py-20 lg:py-24">
          <h2
            id="conducao"
            data-revelar
            className="mb-13 max-w-[16em] font-display text-[clamp(1.75rem,2.8vw,2.375rem)] leading-[1.18] font-normal text-ink-900"
          >
            Como conduzimos cada operação
          </h2>
          <GradePilares pilares={principiosDeSeguranca} />
        </Container>
      </section>

      {/* Parceiros estratégicos — §4 modelo comercial por relacionamento */}
      <section
        id="parceiros"
        aria-labelledby="parceiros-titulo"
        className="superficie-escura scroll-mt-28 bg-ink-900 text-sage-100"
      >
        <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <div data-revelar>
            <Eyebrow tom="claro" comTraco>
              Para parceiros
            </Eyebrow>
            <h2
              id="parceiros-titulo"
              className="mt-5 max-w-[15em] font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.14] font-normal text-sage-100"
            >
              Indicação é o nosso principal ativo comercial
            </h2>
            <p className="mt-5 max-w-[32em] font-sans text-[16.5px] leading-[1.72] text-sage-100/80">
              Boa parte das operações da Real Private nasce de indicações. Esse modelo aumenta a
              qualidade dos contatos, a confiança inicial e a segurança reputacional de todos os
              envolvidos — por isso queremos profissionalizá-lo sem burocratizar o relacionamento.
            </p>
          </div>

          <div data-revelar>
            <h3 className="mb-6 font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-sage-500 uppercase">
              Perfis que indicam empresas para nós
            </h3>
            <ul className="grid gap-x-9 gap-y-3 sm:grid-cols-2">
              {parceirosEstrategicos.map((parceiro) => (
                <li
                  key={parceiro}
                  className="border-b border-sage-500/20 pb-3 font-sans text-[15.5px] leading-[1.5] text-sage-100/85"
                >
                  {parceiro}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FaixaCta
        titulo="Cada empresa possui uma realidade única. Vamos analisar a sua."
        descricao={`Conversa direta, sem compromisso e com confidencialidade. Primeiro retorno ${siteConfig.sla.primeiroRetorno}.`}
        mensagemWhatsApp="Olá! Gostaria de saber se a minha empresa tem perfil para operar com a Real Private."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { nome: 'Início', caminho: '/' },
              { nome: 'Para empresas', caminho: '/para-empresas' },
            ]),
          ),
        }}
      />
    </>
  );
}
