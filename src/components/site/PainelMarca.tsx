import Image from 'next/image';

import logoRealPrivate from '@/assets/logo-real-private.png';
import { siteConfig } from '@/lib/site-config';

type PainelMarcaProps = {
  readonly className?: string;
  /** Diâmetro do símbolo. O hero usa um valor maior que as seções internas. */
  readonly tamanhoSimbolo?: number;
  readonly prioridade?: boolean;
};

/**
 * Painel de marca: o símbolo circundado por dois anéis concêntricos.
 *
 * Ocupa o lugar reservado a uma fotografia institucional enquanto o material
 * fotográfico não existe — em vez de um espaço vazio, entrega um bloco que
 * pertence ao sistema visual da marca. Substituir por `<Image>` com a foto
 * final é uma troca local.
 */
export function PainelMarca({
  className = '',
  tamanhoSimbolo = 310,
  prioridade = false,
}: PainelMarcaProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <span
        aria-hidden="true"
        className="absolute aspect-square w-[min(78%,430px)] rounded-full border border-sage-500/28 motion-safe:animate-surgir motion-safe:[animation-delay:0.5s]"
      />
      <span
        aria-hidden="true"
        className="absolute aspect-square w-[min(100%,560px)] rounded-full border border-sage-500/15 motion-safe:animate-surgir motion-safe:[animation-delay:0.7s]"
      />
      <Image
        src={logoRealPrivate}
        alt={`Símbolo da ${siteConfig.razaoSocial}`}
        width={tamanhoSimbolo}
        height={tamanhoSimbolo}
        priority={prioridade}
        sizes={`(max-width: 1024px) 60vw, ${tamanhoSimbolo}px`}
        className="relative w-[min(62%,var(--tamanho))] rounded-full object-cover shadow-[0_50px_100px_-36px_rgb(0_0_0/0.65)] motion-safe:animate-subir motion-safe:[animation-delay:0.3s]"
        style={{ '--tamanho': `${tamanhoSimbolo}px` } as React.CSSProperties}
      />
    </div>
  );
}

/**
 * Motivo das "fitas" — as barras verticais em degradê que assinam o hero.
 * Puramente decorativo.
 */
export function FitasDecorativas() {
  const fitas = [
    { largura: 'w-[38px]', altura: 'h-[150px]', gradiente: 'from-sage-500 to-ink-500', atraso: '0.05s' },
    { largura: 'w-[50px]', altura: 'h-[262px]', gradiente: 'from-sage-400 to-ink-600', atraso: '0.16s' },
    { largura: 'w-[62px]', altura: 'h-[386px]', gradiente: 'from-sage-600 to-ink-700', atraso: '0.27s' },
    { largura: 'w-[76px]', altura: 'h-[520px]', gradiente: 'from-sage-300 to-ink-800', atraso: '0.38s' },
  ] as const;

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-10 -bottom-15 hidden items-end gap-7 opacity-55 md:flex"
    >
      {fitas.map((fita) => (
        <span
          key={fita.altura}
          className={`block origin-bottom rounded-t-[86px] bg-linear-to-b ${fita.gradiente} ${fita.largura} ${fita.altura} motion-safe:animate-fita`}
          style={{ animationDelay: fita.atraso }}
        />
      ))}
    </span>
  );
}
