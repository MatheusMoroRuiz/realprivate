'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { NavLink } from '@/components/site/NavLink';
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp';
import { navegacao, siteConfig, whatsappUrl } from '@/lib/site-config';

/**
 * Menu de navegação em telas pequenas.
 *
 * Usa `<dialog>` nativo: o navegador entrega gratuitamente o aprisionamento de
 * foco, o fechamento por Esc e a inertização do conteúdo ao fundo — menos
 * JavaScript do que reimplementar esse comportamento à mão.
 *
 * Cada link fecha o painel ao ser acionado (`onNavegar`), então não é preciso
 * observar a rota para sincronizar o estado.
 *
 * Sem JavaScript o botão não aparece (ele é renderizado por este componente
 * cliente); a navegação continua acessível pelo `<noscript>` do cabeçalho e
 * pelo rodapé, que listam as mesmas rotas.
 */
export function MenuMobile() {
  const [aberto, setAberto] = useState(false);
  const dialogoRef = useRef<HTMLDialogElement>(null);
  const idPainel = useId();

  // Abre e fecha via API nativa para manter o estado do DOM e do React alinhados.
  useEffect(() => {
    const dialogo = dialogoRef.current;
    if (!dialogo) return;

    if (aberto && !dialogo.open) {
      dialogo.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!aberto && dialogo.open) {
      dialogo.close();
      document.body.style.overflow = '';
    }
  }, [aberto]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-expanded={aberto}
        aria-controls={idPainel}
        aria-label="Abrir menu de navegação"
        className="-mr-2 inline-flex size-12 cursor-pointer items-center justify-center rounded-[2px] text-ink-900 transition-colors hover:bg-ink-950/5 lg:hidden"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <dialog
        ref={dialogoRef}
        id={idPainel}
        aria-label="Navegação principal"
        onClose={() => setAberto(false)}
        onCancel={() => setAberto(false)}
        className="m-0 ml-auto h-dvh max-h-none w-full max-w-sm bg-canvas p-0 text-ink-900 backdrop:bg-ink-950/60 lg:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-ink-950/10 px-6 py-4">
            <span className="font-sans text-[11px] leading-none font-medium tracking-[0.24em] text-ink-300 uppercase">
              Navegação
            </span>
            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar menu de navegação"
              className="-mr-2 inline-flex size-12 cursor-pointer items-center justify-center rounded-[2px] text-ink-900 transition-colors hover:bg-ink-950/5"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-8">
            {navegacao.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onNavegar={() => setAberto(false)}
                className="border-b border-ink-950/10 !py-5 font-display !text-2xl !font-normal"
              >
                {item.rotulo}
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-ink-950/10 px-6 py-6">
            <a
              href={whatsappUrl('Olá! Gostaria de falar com a Real Private.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[2px] bg-sage-500 px-6 py-4 font-sans text-[15px] leading-none font-semibold text-ink-950 transition-colors hover:bg-sage-400"
            >
              <IconeWhatsApp />
              WhatsApp{' '}
              <span className="tabular font-normal opacity-70">
                {siteConfig.contato.whatsappDisplay}
              </span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
