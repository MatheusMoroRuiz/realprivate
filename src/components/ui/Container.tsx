import type { ReactNode } from 'react';

type ContainerProps = {
  readonly children: ReactNode;
  readonly className?: string;
  /** Elemento renderizado. Use `section`/`article` para preservar a semântica. */
  readonly as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav';
};

/**
 * Grade institucional do site: 1280px de largura máxima e respiros laterais
 * que acompanham o viewport. Todo bloco de conteúdo passa por aqui, o que
 * mantém o alinhamento vertical consistente entre as páginas.
 */
export function Container({ children, className = '', as: Elemento = 'div' }: ContainerProps) {
  return (
    <Elemento
      className={`mx-auto w-full max-w-(--container-institucional) px-6 sm:px-8 lg:px-11 ${className}`}
    >
      {children}
    </Elemento>
  );
}
