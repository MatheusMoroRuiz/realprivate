import { FaixaCta } from "@/components/site/FaixaCta";
import { GradePilares } from "@/components/site/GradePilares";
import { Destaque, HeroPagina } from "@/components/site/HeroPagina";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  etapasDaOperacao,
  principiosDeSeguranca,
  solucoes,
} from "@/lib/conteudo";
import { criarMetadados, jsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = criarMetadados({
  titulo: "O que fazemos",
  descricao:
    "Gestão de capital, antecipação de recebíveis e apoio ao fluxo financeiro para empresas — sempre com análise criteriosa e relacionamento direto. Conheça as frentes de atuação da Real Private.",
  caminho: "/o-que-fazemos",
  palavrasChave: [
    "antecipação de recebíveis",
    "gestão de capital",
    "fluxo de caixa empresarial",
    "securitização",
  ],
});

/** Um `Service` por frente de atuação, ancorado à organização. */
const servicosJsonLd = solucoes.map((solucao) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: solucao.titulo,
  description: solucao.detalhe,
  serviceType: solucao.titulo,
  areaServed: { "@type": "Country", name: "Brasil" },
  provider: { "@id": `${siteConfig.url}/#organizacao` },
  url: `${siteConfig.url}/o-que-fazemos#${solucao.slug}`,
}));

export default function PaginaOQueFazemos() {
  return (
    <>
      <HeroPagina
        eyebrow="O que fazemos"
        titulo={
          <>
            Soluções construídas a partir da <Destaque>realidade</Destaque> de
            cada empresa.
          </>
        }
        descricao="Não trabalhamos com um modelo engessado. Avaliamos cada demanda individualmente, considerando a realidade da empresa, a finalidade da operação e a viabilidade do atendimento."
      />

      {/* Frentes de atuação */}
      <section aria-labelledby="frentes">
        <h2 id="frentes" className="sr-only">
          Frentes de atuação
        </h2>
        <Container>
          {solucoes.map((solucao, indice) => (
            <article
              key={solucao.slug}
              id={solucao.slug}
              data-revelar
              className={`grid scroll-mt-28 gap-6 border-b border-ink-950/14 py-14 lg:grid-cols-[0.36fr_0.64fr] lg:gap-13 lg:py-16 ${indice === solucoes.length - 1 ? "border-b-0" : ""}`}
            >
              <div className="flex flex-col gap-3">
                <Eyebrow>{solucao.rotulo}</Eyebrow>
                <h3 className="font-sans text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.16] font-semibold text-ink-900">
                  {solucao.titulo}
                </h3>
              </div>
              <p className="max-w-[36em] font-sans text-lg leading-[1.72] text-ink-400">
                {solucao.detalhe}
              </p>
            </article>
          ))}
        </Container>
      </section>

      {/* Governança de atendimento — §6.2 */}
      <section
        aria-labelledby="como-conduzimos"
        className="border-t border-ink-950/8 bg-canvas-alt"
      >
        <Container className="py-20 lg:py-24">
          <div data-revelar className="mb-14 max-w-[36em]">
            <Eyebrow>Governança de atendimento</Eyebrow>
            <h2
              id="como-conduzimos"
              className="mt-5 font-display text-[clamp(1.75rem,2.8vw,2.375rem)] leading-[1.18] font-semibold text-ink-900"
            >
              Como conduzimos cada operação
            </h2>
            <p className="mt-5 font-sans text-[16.5px] leading-[1.72] text-ink-400">
              Padronizar não significa engessar. As etapas existem para garantir
              qualidade, segurança e agilidade, a personalização continua na
              forma de analisar e conduzir cada caso.
            </p>
          </div>

          <ol className="grid gap-x-9 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {etapasDaOperacao.map((etapa) => (
              <li
                key={etapa.numero}
                data-revelar
                className="flex flex-col gap-3.5 border-t border-ink-950/22 pt-5.5"
              >
                <span className="tabular font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-500 uppercase">
                  Etapa {etapa.numero}
                </span>
                <h3 className="font-sans text-[23px] leading-[1.24] font-semibold text-ink-900">
                  {etapa.titulo}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.62] text-ink-400">
                  {etapa.texto}
                </p>
              </li>
            ))}

            {/* Compromisso de prazo — §6.3 SLA interno. */}
            <li
              data-revelar
              className="flex flex-col gap-3.5 border-t border-ink-500 bg-sage-300/50 p-6"
            >
              <span className="font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-500 uppercase">
                Nosso compromisso
              </span>
              <h3 className="font-sans text-[23px] leading-[1.24] font-semibold text-ink-900">
                Prazos de referência
              </h3>
              <dl className="flex flex-col gap-2 font-sans text-[14px] leading-[1.6] text-ink-400">
                <div className="flex flex-wrap gap-x-2">
                  <dt>Primeiro retorno:</dt>
                  <dd className="m-0 font-medium text-ink-900">
                    {siteConfig.sla.primeiroRetorno}
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt>Triagem inicial:</dt>
                  <dd className="m-0 font-medium text-ink-900">
                    {siteConfig.sla.triagem}
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt>Validação documental:</dt>
                  <dd className="m-0 font-medium text-ink-900">
                    {siteConfig.sla.validacaoDocumental}
                  </dd>
                </div>
              </dl>
            </li>
          </ol>
        </Container>
      </section>

      {/* Princípios */}
      <section
        aria-labelledby="principios"
        className="superficie-escura bg-ink-900 text-sage-100"
      >
        <Container className="py-20 lg:py-24">
          <div data-revelar className="mb-14 max-w-[30em]">
            <Eyebrow tom="claro" comTraco>
              Segurança
            </Eyebrow>
            <h2
              id="principios"
              className="mt-5 font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.14] font-semibold text-sage-100"
            >
              O que sustenta cada operação
            </h2>
          </div>
          <GradePilares pilares={principiosDeSeguranca} tom="escuro" />
        </Container>
      </section>

      <FaixaCta
        titulo="Não sabe qual solução se aplica ao seu momento? A análise é o primeiro passo."
        descricao="Conte o contexto da empresa. Se a antecipação não for o caminho, dizemos isso com clareza."
        mensagemWhatsApp="Olá! Gostaria de entender qual solução da Real Private se aplica à minha empresa."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            ...servicosJsonLd,
            breadcrumbJsonLd([
              { nome: "Início", caminho: "/" },
              { nome: "O que fazemos", caminho: "/o-que-fazemos" },
            ]),
          ]),
        }}
      />
    </>
  );
}
