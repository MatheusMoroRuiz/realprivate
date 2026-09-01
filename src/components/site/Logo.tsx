import Image from 'next/image';
import Link from 'next/link';

import logoRealPrivate from '@/assets/logo-real-private.png';
import { siteConfig } from '@/lib/site-config';

type LogoProps = {
  /** Diâmetro do símbolo em pixels. */
  readonly tamanho?: number;
  /** `escuro` para superfícies claras, `claro` para superfícies escuras. */
  readonly tom?: 'escuro' | 'claro';
  /** O cabeçalho carrega o logo com prioridade — é o LCP em telas pequenas. */
  readonly prioridade?: boolean;
  readonly className?: string;
};

/**
 * Símbolo + assinatura da Real Private.
 *
 * Guia de Uso da Logo:
 * — o símbolo é sempre circular e nunca é distorcido (`object-cover` sobre um
 *   contêiner quadrado preserva a proporção);
 * — a versão principal, colorida sobre fundo branco, é a aplicada em todas as
 *   superfícies do site, inclusive as escuras, onde o disco branco garante o
 *   contraste exigido pelo guia;
 * — a área de respiro mínima é preservada pelo `gap` e pelos espaçamentos dos
 *   contêineres que recebem o componente.
 */
export function Logo({ tamanho = 54, tom = 'escuro', prioridade = false, className = '' }: LogoProps) {
  const corNome = tom === 'claro' ? 'text-sage-100' : 'text-ink-900';
  const corAssinatura = tom === 'claro' ? 'text-sage-500/85' : 'text-ink-300';

  return (
    <span className={`flex items-center gap-3.5 ${className}`}>
      <Image
        src={logoRealPrivate}
        alt=""
        width={tamanho}
        height={tamanho}
        priority={prioridade}
        sizes={`${tamanho}px`}
        className="shrink-0 rounded-full object-cover ring-1 ring-ink-950/10"
      />
      <span className="flex flex-col gap-[5px]">
        <span
          className={`font-display text-[22px] leading-none font-medium tracking-[0.01em] ${corNome}`}
        >
          {siteConfig.nome}
        </span>
        <span
          className={`font-sans text-[10px] leading-none font-medium tracking-[0.24em] uppercase ${corAssinatura}`}
        >
          Securitizadora S/A · desde {siteConfig.fundadaEm}
        </span>
      </span>
    </span>
  );
}

type LogoLinkProps = LogoProps & {
  /** Destino do link. Padrão: a home. */
  readonly href?: string;
};

/** Versão navegável do logo, com rótulo acessível explícito. */
export function LogoLink({ href = '/', ...props }: LogoLinkProps) {
  return (
    <Link
      href={href}
      aria-label={`${siteConfig.razaoSocial} — ir para a página inicial`}
      className="inline-flex"
    >
      <Logo {...props} />
    </Link>
  );
}
