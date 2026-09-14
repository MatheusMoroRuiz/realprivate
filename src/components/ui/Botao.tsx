import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variante = 'acento' | 'escuro' | 'contorno' | 'contornoEscuro' | 'contornoClaro';

const VARIANTES: Record<Variante, string> = {
  /* Primário sobre fundo escuro: o verde de destaque, único acento claro da paleta */
  acento: 'bg-sage-500 text-ink-950 hover:bg-sage-400',
  /* Primário sobre fundo claro: #225347 com texto branco, hover #163932 */
  escuro: 'bg-ink-500 text-white hover:bg-ink-700',
  /* Secundário sobre fundo claro: fundo transparente, borda e texto #225347 */
  contorno: 'border border-ink-500 text-ink-500 hover:bg-ink-500/8',
  /* Secundário sobre a faixa de destaque: sobre #8EB69A o verde #225347 só
     alcança 3.88:1, abaixo do mínimo AA, então o contorno usa o tom mais
     profundo da paleta (7.54:1). */
  contornoEscuro: 'border border-ink-950/45 text-ink-950 hover:border-ink-950 hover:bg-ink-950/8',
  /* Secundário sobre fundo escuro */
  contornoClaro:
    'border border-sage-500/45 text-sage-100 hover:border-sage-500 hover:bg-sage-500/12',
};

/**
 * `min-h-12` garante o alvo de toque de 48px recomendado pelas diretrizes de
 * acessibilidade em telas sensíveis ao toque.
 */
const BASE =
  'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[2px] px-7 py-5 font-sans text-[15px] leading-none font-semibold transition-[background-color,border-color,transform] duration-200 motion-safe:hover:-translate-y-0.5';

type BotaoLinkProps = {
  readonly href: string;
  readonly variante?: Variante;
  readonly children: ReactNode;
  readonly className?: string;
  /** Links externos recebem `target`/`rel` seguros automaticamente. */
  readonly externo?: boolean;
  /**
   * Rótulo acessível, quando o texto visível não basta.
   *
   * A lista de props é explícita de propósito: repassar `ComponentProps<'a'>`
   * inteiro para o `Link` é incompatível com `exactOptionalPropertyTypes`, e
   * um botão de CTA não precisa de mais do que isto.
   */
  readonly 'aria-label'?: string;
};

export function BotaoLink({
  href,
  variante = 'escuro',
  children,
  className = '',
  externo = false,
  'aria-label': rotuloAcessivel,
}: BotaoLinkProps) {
  const classes = `${BASE} ${VARIANTES[variante]} ${className}`;

  // `tel:`, `mailto:` e URLs absolutas não passam pelo roteador: são âncoras
  // comuns. Só as rotas internas usam o `Link`, que faz o prefetch.
  const rotaInterna = href.startsWith('/') || href.startsWith('#');

  if (externo || !rotaInterna) {
    return (
      // `noopener` impede que o destino manipule esta janela via `window.opener`.
      <a
        href={href}
        aria-label={rotuloAcessivel}
        className={classes}
        {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={rotuloAcessivel} className={classes}>
      {children}
    </Link>
  );
}

type BotaoProps = {
  readonly variante?: Variante;
  readonly children: ReactNode;
} & ComponentProps<'button'>;

export function Botao({ variante = 'escuro', children, className = '', ...resto }: BotaoProps) {
  return (
    <button
      className={`${BASE} ${VARIANTES[variante]} cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${className}`}
      {...resto}
    >
      {children}
    </button>
  );
}
