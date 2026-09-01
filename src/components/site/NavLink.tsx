'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type NavLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly onNavegar?: () => void;
  readonly className?: string;
};

/**
 * Link de navegação com indicação da página atual.
 *
 * É o único trecho do cabeçalho que precisa do cliente: `aria-current` depende
 * da rota ativa. O marcador visual é acompanhado de `aria-current="page"` para
 * que a informação não dependa apenas da cor.
 */
export function NavLink({ href, children, onNavegar, className = '' }: NavLinkProps) {
  const caminho = usePathname();
  const ativo = href === '/' ? caminho === '/' : caminho.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={ativo ? 'page' : undefined}
      // O spread condicional evita passar `onClick: undefined`, que
      // `exactOptionalPropertyTypes` rejeita nas tipagens do next/link.
      {...(onNavegar ? { onClick: onNavegar } : {})}
      className={`relative inline-flex items-center py-2.5 font-sans text-sm leading-none font-medium whitespace-nowrap text-ink-900 transition-colors hover:text-ink-500 ${className}`}
    >
      {children}
      {ativo ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0.5 h-[1.5px] bg-ink-500"
        />
      ) : null}
    </Link>
  );
}
