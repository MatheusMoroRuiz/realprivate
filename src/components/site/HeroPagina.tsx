import type { ReactNode } from 'react';

import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

type HeroPaginaProps = {
  readonly eyebrow: string;
  readonly titulo: ReactNode;
  readonly descricao?: string;
};

/**
 * Abertura padrão das páginas internas.
 *
 * O `<h1>` fica aqui — cada rota tem exatamente um, o que mantém a hierarquia
 * de cabeçalhos correta para leitores de tela e para os buscadores.
 */
export function HeroPagina({ eyebrow, titulo, descricao }: HeroPaginaProps) {
  return (
    <section className="superficie-escura relative overflow-hidden bg-ink-900 text-sage-100">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_88%_8%,rgb(47_106_80/0.5)_0%,rgb(16_43_34/0)_60%)]"
      />
      <Container className="relative py-20 sm:py-24 lg:py-26">
        <Eyebrow tom="claro" className="motion-safe:animate-subir">
          {eyebrow}
        </Eyebrow>
        <h1 className="mt-5 max-w-[19em] font-display text-[clamp(2.25rem,4.6vw,4.125rem)] leading-[1.06] font-normal tracking-[-0.015em] text-sage-100 motion-safe:animate-subir motion-safe:[animation-delay:0.12s]">
          {titulo}
        </h1>
        {descricao ? (
          <p className="mt-6 max-w-[34em] font-sans text-lg leading-[1.68] text-sage-100/85 motion-safe:animate-subir motion-safe:[animation-delay:0.22s]">
            {descricao}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

/** Destaque em itálico usado dentro dos títulos. */
export function Destaque({ children }: { readonly children: ReactNode }) {
  return <em className="text-sage-400 not-italic italic">{children}</em>;
}
