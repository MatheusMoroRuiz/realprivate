import type { Pilar } from '@/lib/conteudo';

type GradePilaresProps = {
  readonly pilares: readonly Pilar[];
  readonly tom?: 'claro' | 'escuro';
  /** Exibe o rótulo acima do título. Útil quando ele carrega informação. */
  readonly comRotulo?: boolean;
  readonly colunas?: 2 | 3 | 4;
};

const COLUNAS = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const;

/**
 * Grade de princípios/valores. Usa uma lista de definição implícita
 * (título + descrição) mantendo `h3`, o que preserva a hierarquia dentro de
 * uma seção com `h2`.
 */
export function GradePilares({
  pilares,
  tom = 'claro',
  comRotulo = false,
  colunas = 4,
}: GradePilaresProps) {
  const escuro = tom === 'escuro';

  return (
    <ul className={`grid grid-cols-1 gap-9 ${COLUNAS[colunas]}`}>
      {pilares.map((pilar) => (
        <li
          key={pilar.titulo}
          data-revelar
          className={`flex flex-col gap-3.5 border-t pt-6 ${escuro ? 'border-sage-500/32' : 'border-ink-950/22'}`}
        >
          {comRotulo ? (
            <span
              className={`font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] uppercase ${escuro ? 'text-sage-500' : 'text-ink-500'}`}
            >
              {pilar.rotulo}
            </span>
          ) : null}
          <h3
            className={`font-display text-[23px] leading-[1.24] font-normal ${escuro ? 'text-sage-100' : 'text-ink-900'}`}
          >
            {pilar.titulo}
          </h3>
          <p
            className={`font-sans text-[14.5px] leading-[1.62] ${escuro ? 'text-sage-100/75' : 'text-ink-400'}`}
          >
            {pilar.texto}
          </p>
        </li>
      ))}
    </ul>
  );
}
