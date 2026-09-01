import { LogoLink } from '@/components/site/Logo';
import { MenuMobile } from '@/components/site/MenuMobile';
import { NavLink } from '@/components/site/NavLink';
import { Container } from '@/components/ui/Container';
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp';
import { navegacao, whatsappUrl } from '@/lib/site-config';

/**
 * Cabeçalho fixo.
 *
 * É um Server Component: apenas o indicador de rota ativa (`NavLink`) e o menu
 * mobile são ilhas de cliente. A sombra ao rolar vem de uma animação CSS
 * conduzida pelo scroll — nenhum listener de evento é registrado.
 */
export function Header() {
  return (
    <header className="cabecalho-scroll sticky top-0 z-50 border-b border-ink-950/10 bg-canvas/92 backdrop-blur-[14px]">
      <Container className="flex items-center justify-between gap-8 py-3.5 lg:py-4">
        <LogoLink tamanho={48} prioridade />

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navegacao.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.rotulo}
            </NavLink>
          ))}

          <a
            href={whatsappUrl('Olá! Gostaria de falar com a Real Private.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2.5 rounded-[2px] bg-sage-500 px-5 py-3.5 font-sans text-[13.5px] leading-none font-semibold whitespace-nowrap text-ink-950 transition-[background-color,transform] duration-200 hover:bg-sage-600 motion-safe:hover:-translate-y-px"
          >
            <IconeWhatsApp tamanho={15} />
            WhatsApp
          </a>
        </nav>

        <MenuMobile />
      </Container>

      {/*
        Sem JavaScript o botão do menu não existe. Este bloco garante que a
        navegação continue disponível em telas pequenas.
      */}
      <noscript>
        <nav aria-label="Navegação principal" className="border-t border-ink-950/10 lg:hidden">
          <Container className="flex flex-wrap gap-x-5 gap-y-2 py-3">
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-ink-900 underline underline-offset-4"
              >
                {item.rotulo}
              </a>
            ))}
          </Container>
        </nav>
      </noscript>
    </header>
  );
}
