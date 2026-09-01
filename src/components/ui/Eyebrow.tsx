import type { ReactNode } from 'react';

type EyebrowProps = {
  readonly children: ReactNode;
  /** `escuro` para superfícies claras, `claro` para superfícies escuras. */
  readonly tom?: 'escuro' | 'claro' | 'neutro';
  /** Traço horizontal à esquerda, usado nos blocos de destaque. */
  readonly comTraco?: boolean;
  readonly className?: string;
};

const TONS = {
  escuro: 'text-ink-500',
  claro: 'text-sage-500',
  neutro: 'text-ink-300',
} as const;

/**
 * Rótulo tipográfico que antecede os títulos. É decorativo do ponto de vista
 * hierárquico — por isso é um `span`, e não um heading, para não poluir a
 * árvore de cabeçalhos lida por leitores de tela e por buscadores.
 */
export function Eyebrow({
  children,
  tom = 'escuro',
  comTraco = false,
  className = '',
}: EyebrowProps) {
  const rotulo = (
    <span
      className={`font-sans text-[11px] leading-none font-medium tracking-[0.26em] uppercase ${TONS[tom]}`}
    >
      {children}
    </span>
  );

  if (!comTraco) {
    return <span className={`block ${className}`}>{rotulo}</span>;
  }

  return (
    <span className={`flex items-center gap-3.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`block h-px w-[30px] ${tom === 'claro' ? 'bg-sage-500' : 'bg-ink-500'}`}
      />
      {rotulo}
    </span>
  );
}
