import type { ReactNode } from 'react';

import { FaixaCta } from '@/components/site/FaixaCta';
import { HeroPagina } from '@/components/site/HeroPagina';
import { BotaoLink } from '@/components/ui/Botao';
import { Container } from '@/components/ui/Container';
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp';
import { criarMetadados, jsonLd } from '@/lib/seo';
import {
  enderecoLinhas,
  mapaEmbedUrl,
  mapaRotaUrl,
  siteConfig,
  whatsappUrl,
} from '@/lib/site-config';
import { breadcrumbJsonLd } from '@/lib/structured-data';

export const metadata = criarMetadados({
  titulo: 'Contato',
  descricao:
    'Fale com a Real Private Securitizadora S/A. WhatsApp (18) 99722-6423, Rua Siqueira Campos, 699, Centro, Presidente Prudente / SP. Análise sem compromisso e primeiro retorno em até 24 horas úteis.',
  caminho: '/contato',
  palavrasChave: [
    'contato Real Private',
    'securitizadora Presidente Prudente',
    'WhatsApp',
    'Rua Siqueira Campos 699',
  ],
});

/** Um item da lista de canais: rótulo curto + conteúdo. */
function Canal({ rotulo, children }: { readonly rotulo: string; readonly children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 border-t border-ink-950/12 pt-6">
      <h3 className="font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-300 uppercase">
        {rotulo}
      </h3>
      {children}
    </div>
  );
}

export default function PaginaContato() {
  return (
    <>
      <HeroPagina
        eyebrow="Contato"
        titulo="Fale conosco"
        descricao="Atendimento personalizado, com análise e diálogo direto. Suas informações são tratadas com discrição e confidencialidade."
      />

      <section aria-labelledby="canais">
        <Container className="grid items-start gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
          {/* ---------------------------------------------------------------- *
           * Canais de atendimento
           * ---------------------------------------------------------------- */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2
                id="canais"
                className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] font-semibold text-ink-900"
              >
                Converse direto com a Real Private
              </h2>
              <p className="max-w-[32em] font-sans text-[16.5px] leading-[1.7] text-ink-400">
                O caminho mais rápido é o WhatsApp: você fala com uma pessoa, conta o momento da
                empresa e recebe uma leitura inicial sem compromisso.
              </p>
            </div>

            <BotaoLink
              href={whatsappUrl(
                'Olá! Gostaria de conversar com a Real Private sobre a minha empresa.',
              )}
              externo
              variante="escuro"
              className="self-start"
            >
              <IconeWhatsApp />
              Falar no WhatsApp
            </BotaoLink>

            <div className="flex flex-col gap-7">
              <Canal rotulo="Telefone">
                <a
                  href={siteConfig.contato.telefoneHref}
                  className="tabular self-start font-display text-[clamp(1.5rem,3vw,2.125rem)] leading-tight font-bold text-ink-900 transition-colors hover:text-ink-700"
                >
                  {siteConfig.contato.whatsappDisplay}
                </a>
                <p className="font-sans text-[13.5px] leading-[1.6] text-ink-300">
                  Primeiro retorno {siteConfig.sla.primeiroRetorno}.
                </p>
              </Canal>

              {siteConfig.contato.email ? (
                <Canal rotulo="E-mail">
                  <a
                    href={`mailto:${siteConfig.contato.email}`}
                    className="self-start border-b border-ink-700/30 pt-1.5 pb-1.5 font-sans text-[17px] leading-[1.5] text-ink-700 transition-colors hover:border-ink-700"
                  >
                    {siteConfig.contato.email}
                  </a>
                </Canal>
              ) : null}

              <Canal rotulo="Instagram">
                <a
                  href={siteConfig.contato.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start border-b border-ink-700/30 pt-1.5 pb-1.5 font-sans text-[17px] leading-[1.5] text-ink-700 transition-colors hover:border-ink-700"
                >
                  {siteConfig.contato.instagram.handle}
                </a>
              </Canal>

              {siteConfig.contato.horarioAtendimento ? (
                <Canal rotulo="Horário de atendimento">
                  <p className="font-sans text-base leading-[1.62] text-ink-900">
                    {siteConfig.contato.horarioAtendimento}
                  </p>
                </Canal>
              ) : null}
            </div>

            <p className="border-t border-ink-950/12 pt-6 font-sans text-[13.5px] leading-[1.65] text-ink-300">
              A conversa inicial e a análise de viabilidade são feitas sem compromisso. Se a
              antecipação não for o caminho para o seu momento, dizemos isso com clareza.
            </p>
          </div>

          {/* ---------------------------------------------------------------- *
           * Localização
           * ---------------------------------------------------------------- */}
          <figure className="m-0 flex flex-col gap-0 overflow-hidden rounded-[3px] border border-ink-950/12 bg-canvas-alt">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink-950/12 px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-2">
                <h2 className="font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-ink-300 uppercase">
                  Nossa sede
                </h2>
                <address className="font-sans text-base leading-[1.62] text-ink-900 not-italic">
                  {enderecoLinhas.map((linha) => (
                    <span key={linha} className="block">
                      {linha}
                    </span>
                  ))}
                </address>
              </div>
              <a
                href={mapaRotaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 shrink-0 border-b border-ink-700/30 pt-1.5 pb-1.5 font-sans text-sm leading-none font-medium text-ink-700 transition-colors hover:border-ink-700"
              >
                Traçar rota
              </a>
            </div>

            {/*
              `loading="lazy"` mantém o mapa fora do carregamento inicial: os
              recursos do Google só são buscados quando o bloco se aproxima da
              viewport, preservando o LCP e o INP da página.
            */}
            <iframe
              src={mapaEmbedUrl}
              title={`Mapa da localização da ${siteConfig.razaoSocial} em ${siteConfig.endereco.cidade}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 sm:h-[460px] lg:h-[560px]"
            />

            <figcaption className="border-t border-ink-950/12 px-6 py-4 font-sans text-[13px] leading-[1.6] text-ink-300 sm:px-8">
              Atendimento presencial mediante agendamento prévio.
            </figcaption>
          </figure>
        </Container>
      </section>

      <FaixaCta
        titulo="Vamos entender o momento da sua empresa."
        descricao={`Análise sem compromisso, com diálogo direto e confidencialidade. Primeiro retorno ${siteConfig.sla.primeiroRetorno}.`}
        mensagemWhatsApp="Olá! Gostaria de uma análise para a minha empresa."
        // Nesta página, apontar de volta para /contato seria circular.
        secundaria={{ href: siteConfig.contato.telefoneHref, rotulo: 'Ligar agora' }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            {
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: `Contato — ${siteConfig.razaoSocial}`,
              url: `${siteConfig.url}/contato`,
              about: { '@id': `${siteConfig.url}/#organizacao` },
            },
            breadcrumbJsonLd([
              { nome: 'Início', caminho: '/' },
              { nome: 'Contato', caminho: '/contato' },
            ]),
          ]),
        }}
      />
    </>
  );
}
