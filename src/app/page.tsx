import Link from "next/link";

import { CarrosselParceiros } from "@/components/site/CarrosselParceiros";
import { FaixaCta } from "@/components/site/FaixaCta";
import { GradePilares } from "@/components/site/GradePilares";
import { FitasDecorativas, PainelMarca } from "@/components/site/PainelMarca";
import { BotaoLink } from "@/components/ui/Botao";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconeWhatsApp } from "@/components/ui/IconeWhatsApp";
import {
  perguntasFrequentes,
  pilaresDeAtendimento,
  principiosDeSeguranca,
  situacoesComuns,
  solucoes,
} from "@/lib/conteudo";
import { criarMetadados, jsonLd } from "@/lib/seo";
import { enderecoLinhas, siteConfig, whatsappUrl } from "@/lib/site-config";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata = criarMetadados({
  titulo: `${siteConfig.razaoSocial} — Gestão estratégica de capital para empresas`,
  descricao:
    "Securitizadora em Presidente Prudente / SP desde 2004. Antecipação de recebíveis e gestão de capital para empresas, com análise criteriosa, agilidade e atendimento personalizado.",
  caminho: "/",
  palavrasChave: [
    "securitizadora",
    "antecipação de recebíveis",
    "capital de giro para empresas",
    "gestão de capital",
    "Presidente Prudente",
    "Real Private",
  ],
});

export default function PaginaInicial() {
  return (
    <>
      {/* ------------------------------------------------------------------ *
       * Hero
       * ------------------------------------------------------------------ */}
      <section className="superficie-escura relative overflow-hidden bg-ink-900 text-sage-100">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_80%_at_82%_12%,rgb(47_106_80/0.55)_0%,rgb(16_43_34/0)_62%)]"
        />
        <FitasDecorativas />

        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col items-start py-20 sm:py-24 lg:py-26">
            <Eyebrow
              tom="claro"
              comTraco
              className="mb-7 motion-safe:animate-subir"
            >
              Securitizadora · Presidente Prudente / SP
            </Eyebrow>

            <h1 className="max-w-[12em] font-display text-[clamp(2.75rem,6vw,5.375rem)] leading-[1.02] font-bold tracking-[-0.015em] text-sage-100 motion-safe:animate-subir motion-safe:[animation-delay:0.14s]">
              Gestão estratégica de{" "}
              <em className="text-sage-400 not-italic">capital</em> para
              empresas.
            </h1>

            <p className="mt-7 max-w-[30em] font-sans text-[19px] leading-[1.62] text-sage-100/85 motion-safe:animate-subir motion-safe:[animation-delay:0.26s]">
              Soluções financeiras personalizadas para empresas, com agilidade,
              credibilidade e relacionamento de confiança. Antecipação de
              recebíveis com critério e proximidade, do primeiro contato à
              operação.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 motion-safe:animate-subir motion-safe:[animation-delay:0.38s]">
              <BotaoLink
                href={whatsappUrl(
                  "Olá! Gostaria de entender como a Real Private pode apoiar a minha empresa.",
                )}
                externo
                variante="acento"
              >
                <IconeWhatsApp />
                Falar no WhatsApp
              </BotaoLink>
              <BotaoLink href="/o-que-fazemos" variante="contornoClaro">
                O que fazemos
              </BotaoLink>
            </div>

            {/* Sinais de credibilidade acima da dobra. */}
            <dl className="mt-14 flex w-full flex-wrap gap-x-13 gap-y-8 border-t border-sage-500/22 pt-8 motion-safe:animate-subir motion-safe:[animation-delay:0.5s]">
              {[
                {
                  valor: String(siteConfig.fundadaEm),
                  rotulo: "Atuando desde",
                  tabular: true,
                },
                { valor: "S/A", rotulo: "Sociedade anônima", tabular: false },
                {
                  valor: "24h",
                  rotulo: "Primeiro retorno em até",
                  tabular: true,
                },
              ].map((item) => (
                // `dt` (o rótulo) vem antes no código, como manda a semântica de
                // lista de definições; `order` inverte apenas a apresentação.
                <div key={item.rotulo} className="flex flex-col gap-2">
                  <dt className="order-2 font-sans text-[11.5px] leading-[1.4] tracking-[0.16em] text-sage-100/65 uppercase">
                    {item.rotulo}
                  </dt>
                  <dd
                    className={`order-1 m-0 font-display text-[34px] leading-none font-bold text-sage-400 ${item.tabular ? "tabular" : ""}`}
                  >
                    {item.valor}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <PainelMarca
            className="min-h-[380px] self-stretch lg:min-h-[520px]"
            prioridade
          />
        </Container>
      </section>

      {/* ------------------------------------------------------------------ *
       * Diferenciais
       * ------------------------------------------------------------------ */}
      <section
        aria-labelledby="diferenciais"
        className="border-b border-ink-950/10 bg-canvas"
      >
        <h2 id="diferenciais" className="sr-only">
          Como a Real Private atende
        </h2>
        <Container>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {pilaresDeAtendimento.map((pilar) => (
              <li
                key={pilar.titulo}
                data-revelar
                className="flex flex-col gap-3 border-t border-ink-950/10 py-11 first:border-t-0 sm:px-8 sm:first:border-t sm:nth-[-n+2]:border-t-0 lg:border-t-0 lg:border-r lg:last:border-r-0 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-500 uppercase">
                  {pilar.rotulo}
                </span>
                <h3 className="font-sans text-[23px] leading-[1.22] font-semibold text-ink-900">
                  {pilar.titulo}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.62] text-ink-400">
                  {pilar.texto}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ *
       * Parceiros
       * ------------------------------------------------------------------ */}
      <CarrosselParceiros />

      {/* ------------------------------------------------------------------ *
       * Ponto de partida
       * ------------------------------------------------------------------ */}
      <section aria-labelledby="ponto-de-partida">
        <Container className="pt-24 lg:pt-28">
          <div
            data-revelar
            className="mb-14 grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >
            <div>
              <Eyebrow>O nosso ponto de partida</Eyebrow>
              <h2
                id="ponto-de-partida"
                className="mt-5 font-display text-[clamp(2.125rem,3.4vw,3.125rem)] leading-[1.1] font-semibold tracking-[-0.01em] text-ink-900"
              >
                Critério antes de capital.
              </h2>
            </div>
            <p className="max-w-[32em] font-sans text-lg leading-[1.7] text-ink-400">
              A Real Private nasce da necessidade de ir além das soluções
              financeiras tradicionais. Entendemos que capital, sem critério e
              análise, gera risco, não crescimento.
            </p>
          </div>
        </Container>

        <Container className="pb-24 lg:pb-28">
          <div
            data-revelar
            className="grid overflow-hidden rounded-[3px] border border-ink-950/12 md:grid-cols-2"
          >
            <div className="flex min-h-[260px] flex-col justify-center gap-4 bg-ink-900 px-8 py-14 sm:px-13 lg:min-h-[300px]">
              <span className="font-sans text-[10.5px] leading-none font-medium tracking-[0.26em] text-sage-400/75 uppercase">
                Sem critério e análise
              </span>
              <p className="font-display text-[clamp(1.875rem,3vw,2.75rem)] leading-[1.16] font-semibold text-sage-100">
                capital gera risco
              </p>
            </div>
            <div className="flex min-h-[260px] flex-col justify-center gap-4 bg-sage-500 px-8 py-14 sm:px-13 lg:min-h-[300px]">
              <span className="font-sans text-[10.5px] leading-none font-medium tracking-[0.26em] text-ink-950/65 uppercase">
                Com critério e análise
              </span>
              <p className="font-display text-[clamp(1.875rem,3vw,2.75rem)] leading-[1.16] font-semibold text-ink-950">
                capital gera crescimento
              </p>
            </div>
          </div>
          <p className="mt-7 max-w-[44em] font-sans text-[15px] leading-[1.7] text-ink-300">
            Nosso propósito é contribuir para que empresas tenham acesso a
            soluções financeiras mais ágeis, personalizadas e compatíveis com
            sua realidade, organizando, sustentando e viabilizando o crescimento
            de cada negócio.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ *
       * Soluções
       * ------------------------------------------------------------------ */}
      <section
        aria-labelledby="o-que-fazemos"
        className="border-t border-ink-950/8 bg-canvas-alt"
      >
        <Container className="py-24 lg:py-26">
          <div
            data-revelar
            className="mb-6 flex flex-wrap items-end justify-between gap-8 lg:gap-15"
          >
            <div className="max-w-[30em]">
              <Eyebrow>O que fazemos</Eyebrow>
              <h2
                id="o-que-fazemos"
                className="mt-5 font-display text-[clamp(2.125rem,3.4vw,3.125rem)] leading-[1.1] font-semibold tracking-[-0.01em] text-ink-900"
              >
                Quatro frentes, uma leitura financeira.
              </h2>
            </div>
            <Link
              href="/o-que-fazemos"
              className="border-b border-ink-700/35 pt-1.5 pb-2 font-sans text-sm leading-none font-medium text-ink-700 transition-colors hover:border-ink-700"
            >
              Ver detalhes de cada frente
            </Link>
          </div>

          <ul className="flex flex-col">
            {solucoes.map((solucao, indice) => (
              <li key={solucao.slug} data-revelar>
                <Link
                  href={`/o-que-fazemos#${solucao.slug}`}
                  className={`grid gap-5 border-t border-ink-950/16 px-2 py-9 transition-[background-color,padding-left] duration-250 hover:bg-sage-500/16 hover:pl-5 lg:grid-cols-[0.34fr_0.66fr] lg:gap-11 ${indice === solucoes.length - 1 ? "border-b" : ""}`}
                >
                  <span className="flex flex-col gap-2.5">
                    <span className="font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-500 uppercase">
                      {solucao.rotulo}
                    </span>
                    <span className="font-sans text-[30px] leading-[1.16] font-semibold text-ink-900">
                      {solucao.titulo}
                    </span>
                  </span>
                  <span className="max-w-[36em] font-sans text-[16.5px] leading-[1.7] text-ink-400">
                    {solucao.resumo}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ *
       * Para empresas
       * ------------------------------------------------------------------ */}
      <section aria-labelledby="para-empresas">
        <Container className="grid items-start gap-12 py-24 lg:grid-cols-2 lg:gap-20 lg:py-26">
          <div data-revelar className="flex flex-col items-start gap-5">
            <Eyebrow>Para empresas</Eyebrow>
            <h2
              id="para-empresas"
              className="max-w-[17em] font-display text-[clamp(1.875rem,3vw,2.625rem)] leading-[1.14] font-semibold text-ink-900"
            >
              Quando faz sentido procurar a Real Private
            </h2>
            <p className="max-w-[28em] font-sans text-[17px] leading-[1.7] text-ink-400">
              Quando a empresa precisa de capital para manter ou estruturar seu
              crescimento, sem comprometer sua saúde financeira.
            </p>
            <Link
              href="/para-empresas"
              className="mt-2 border-b border-ink-700/35 pt-1.5 pb-2 font-sans text-sm leading-none font-medium text-ink-700 transition-colors hover:border-ink-700"
            >
              Ver o perfil das empresas atendidas
            </Link>
          </div>

          <div data-revelar className="flex flex-col">
            <h3 className="mb-6 font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-300 uppercase">
              Situações comuns
            </h3>
            <ul className="flex flex-col">
              {situacoesComuns.map((situacao) => (
                <li
                  key={situacao}
                  className="flex items-center gap-4.5 border-b border-ink-950/14 py-5"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-5.5 shrink-0 bg-ink-500"
                  />
                  <span className="font-sans text-[17.5px] leading-[1.4] text-ink-900">
                    {situacao}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ *
       * Segurança
       * ------------------------------------------------------------------ */}
      <section
        aria-labelledby="seguranca"
        className="superficie-escura bg-ink-900 text-sage-100"
      >
        <Container className="py-24 lg:py-26">
          <span data-revelar className="mb-4.5 block">
            <Eyebrow tom="claro" comTraco>
              Segurança
            </Eyebrow>
          </span>
          <h2
            id="seguranca"
            data-revelar
            className="mb-14 max-w-[20em] font-display text-[clamp(1.875rem,3vw,2.75rem)] leading-[1.14] font-semibold text-sage-100"
          >
            O que sustenta cada operação
          </h2>
          <GradePilares pilares={principiosDeSeguranca} tom="escuro" />
        </Container>
      </section>

      {/* ------------------------------------------------------------------ *
       * Perguntas frequentes
       * ------------------------------------------------------------------ */}
      <section
        aria-labelledby="perguntas-frequentes"
        className="border-t border-ink-950/8 bg-canvas-alt"
      >
        <Container className="grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-26">
          <div data-revelar>
            <Eyebrow>Dúvidas frequentes</Eyebrow>
            <h2
              id="perguntas-frequentes"
              className="mt-5 max-w-[14em] font-display text-[clamp(1.875rem,3vw,2.625rem)] leading-[1.14] font-semibold text-ink-900"
            >
              O que as empresas costumam perguntar
            </h2>
          </div>

          <div data-revelar className="flex flex-col">
            {perguntasFrequentes.map((item) => (
              <details
                key={item.pergunta}
                name="faq"
                className="group border-t border-ink-950/16 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-sans text-[21px] leading-[1.3] font-semibold text-ink-900 marker:content-none">
                  {item.pergunta}
                  <span
                    aria-hidden="true"
                    className="relative size-4 shrink-0 text-ink-500 transition-transform duration-300 group-open:rotate-45"
                  >
                    <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <p className="max-w-[46em] pb-7 font-sans text-[15.5px] leading-[1.72] text-ink-400">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ *
       * Conversão
       * ------------------------------------------------------------------ */}
      <FaixaCta
        titulo="Vamos entender o momento da sua empresa."
        descricao={`Análise sem compromisso, com diálogo direto e confidencialidade. Primeiro retorno ${siteConfig.sla.primeiroRetorno}.`}
        mensagemWhatsApp="Olá! Gostaria de uma análise para a minha empresa."
      />

      <section aria-labelledby="onde-estamos" className="bg-canvas">
        <Container className="flex flex-wrap items-start justify-between gap-10 py-16">
          <div>
            <h2
              id="onde-estamos"
              className="font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-300 uppercase"
            >
              Onde estamos
            </h2>
            <address className="mt-4 font-sans text-base leading-[1.7] text-ink-900 not-italic">
              {enderecoLinhas.map((linha) => (
                <span key={linha} className="block">
                  {linha}
                </span>
              ))}
            </address>
          </div>
          <div>
            <h2 className="font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-300 uppercase">
              Instagram
            </h2>
            <a
              href={siteConfig.contato.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border-b border-ink-700/30 font-sans text-base leading-[1.7] text-ink-700 transition-colors hover:border-ink-700"
            >
              {siteConfig.contato.instagram.handle}
            </a>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />
    </>
  );
}
