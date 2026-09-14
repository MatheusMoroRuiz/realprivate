import Image from 'next/image';

import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { parceiros, type Parceiro } from '@/lib/parceiros';

/**
 * Quantas vezes a lista se repete dentro de **cada metade** da faixa.
 *
 * A animação desloca a faixa em exatamente -50%, e as duas metades são
 * idênticas — por isso o ponto final coincide com o inicial e o laço não tem
 * emenda visível. Repetir a lista garante que uma metade sozinha já seja mais
 * larga que a tela, evitando um vão em monitores largos.
 */
const REPETICOES_POR_METADE = 2;

/** Um logotipo. `duplicado` marca as cópias que existem só para o laço visual. */
function ItemParceiro({
  parceiro,
  duplicado,
}: {
  readonly parceiro: Parceiro;
  readonly duplicado: boolean;
}) {
  return (
    <li
      // As cópias saem da árvore de acessibilidade para o leitor de tela não
      // repetir os mesmos parceiros quatro vezes. Continuam clicáveis com o
      // mouse: `aria-hidden` não bloqueia o ponteiro.
      {...(duplicado ? { 'aria-hidden': true } : {})}
      className="group/item flex shrink-0 items-center px-8 sm:px-11"
    >
      <a
        href={parceiro.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${parceiro.nome} — abrir site em nova aba`}
        {...(duplicado ? { tabIndex: -1 } : {})}
        className="flex min-h-12 items-center rounded-[2px] px-1 transition-opacity duration-300"
      >
        {parceiro.logo && parceiro.largura && parceiro.altura ? (
          <Image
            src={parceiro.logo}
            alt={parceiro.nome}
            width={parceiro.largura}
            height={parceiro.altura}
            // SVG não passa pelo otimizador do Next (exigiria `dangerouslyAllowSVG`);
            // já é vetor e pesa poucos KB, então vai direto do `public/`.
            unoptimized={parceiro.logo.endsWith('.svg')}
            // Caixa de tamanho fixo com `object-contain`: cada logotipo é
            // encaixado nela, o que equilibra opticamente marcas de proporções
            // muito diferentes — as largas se limitam pela largura, as
            // compactas pela altura.
            // Repouso em escala de cinza para não competirem com a paleta da
            // marca; a cor volta no hover e no foco.
            className="h-10 w-[132px] object-contain opacity-60 grayscale transition duration-300 group-hover/item:opacity-100 group-hover/item:grayscale-0 group-focus-within/item:opacity-100 group-focus-within/item:grayscale-0 sm:w-[148px]"
          />
        ) : (
          <span className="flex h-10 w-[132px] items-center justify-center font-sans text-[clamp(1.125rem,1.8vw,1.375rem)] leading-none font-semibold whitespace-nowrap text-ink-700/70 transition-colors duration-300 group-hover/item:text-ink-900 group-focus-within/item:text-ink-900 sm:w-[148px]">
            {parceiro.nome}
          </span>
        )}
      </a>
    </li>
  );
}

/**
 * Carrossel contínuo de parceiros.
 *
 * Roda sem uma linha de JavaScript: a faixa é uma animação CSS e funciona com
 * o JavaScript desligado.
 *
 * Acessibilidade — a faixa pausa no hover e no foco do teclado. Com
 * `prefers-reduced-motion` ela nem chega a se mover, virando uma lista rolável
 * na horizontal.
 */
export function CarrosselParceiros() {
  const metade = Array.from({ length: REPETICOES_POR_METADE }, () => parceiros).flat();
  const faixa = [...metade, ...metade];

  return (
    <section
      aria-labelledby="parceiros"
      className="border-t border-ink-950/8 bg-canvas-alt py-16 lg:py-20"
    >
      <Container>
        <div data-revelar className="max-w-[34em]">
          <Eyebrow>Parceiros</Eyebrow>
          <h2
            id="parceiros"
            className="mt-5 font-display text-[clamp(1.75rem,2.8vw,2.375rem)] leading-[1.18] font-semibold text-ink-900"
          >
            Quem caminha com a Real Private
          </h2>
          <p className="mt-4 font-sans text-[16.5px] leading-[1.72] text-ink-700">
            Nossa forma de trabalhar se apoia em uma rede de instituições e parceiros de mercado
            construída ao longo de mais de duas décadas.
          </p>
        </div>
      </Container>

      {/*
        A faixa sangra além do container, de borda a borda da tela. A máscara
        desvanece as pontas para os logotipos não aparecerem cortados.
      */}
      <div
        className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]"
      >
        <ul className="faixa-parceiros flex w-max items-center motion-safe:animate-desfilar hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {faixa.map((parceiro, indice) => (
            <ItemParceiro
              key={`${parceiro.nome}-${indice}`}
              parceiro={parceiro}
              // Só a primeira passagem da lista fica na árvore de acessibilidade.
              duplicado={indice >= parceiros.length}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
