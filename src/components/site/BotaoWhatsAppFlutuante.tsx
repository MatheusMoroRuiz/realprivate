import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp';
import { siteConfig, whatsappUrl } from '@/lib/site-config';

/**
 * Atalho de conversão sempre visível.
 *
 * É um link puro — nenhum JavaScript envolvido — com rótulo acessível e alvo
 * de toque de 62px, acima do mínimo recomendado.
 */
export function BotaoWhatsAppFlutuante() {
  return (
    <a
      href={whatsappUrl('Olá! Gostaria de falar com a Real Private sobre uma operação.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp com a Real Private — ${siteConfig.contato.whatsappDisplay}`}
      className="fixed right-5 bottom-5 z-60 inline-flex size-[62px] items-center justify-center rounded-full bg-ink-900 text-sage-500 shadow-[0_16px_34px_-12px_rgb(11_31_25/0.7)] transition-[background-color,transform] duration-200 hover:bg-ink-700 motion-safe:hover:-translate-y-0.5 sm:right-7 sm:bottom-7"
    >
      <IconeWhatsApp tamanho={26} />
    </a>
  );
}
