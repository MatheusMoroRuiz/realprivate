'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Observa os elementos marcados com `data-revelar` e os revela ao entrarem na
 * viewport.
 *
 * É um único componente cliente montado uma vez no layout — as seções
 * permanecem Server Components e apenas declaram o atributo. Isso evita criar
 * uma fronteira de cliente por bloco de conteúdo e mantém o bundle mínimo.
 *
 * O estado inicial escondido vive no CSS, sob `@media (scripting: enabled)`;
 * sem JavaScript nada é ocultado.
 */
export function RevelarAoRolar() {
  const caminho = usePathname();

  useEffect(() => {
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alvos = Array.from(document.querySelectorAll<HTMLElement>('[data-revelar]'));

    if (reduzirMovimento || !('IntersectionObserver' in window)) {
      for (const alvo of alvos) alvo.dataset['revelar'] = 'visivel';
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          const alvo = entrada.target as HTMLElement;
          alvo.dataset['revelar'] = 'visivel';
          observador.unobserve(alvo);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );

    for (const alvo of alvos) {
      // Elementos já visíveis na dobra inicial aparecem sem esperar o scroll.
      if (alvo.getBoundingClientRect().top < window.innerHeight * 0.9) {
        alvo.dataset['revelar'] = 'visivel';
        continue;
      }
      observador.observe(alvo);
    }

    return () => observador.disconnect();
  }, [caminho]);

  return null;
}
