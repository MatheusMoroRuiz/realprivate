import { BotaoLink } from '@/components/ui/Botao';
import { Container } from '@/components/ui/Container';
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp';
import { siteConfig, whatsappUrl } from '@/lib/site-config';

type AcaoSecundaria = {
  readonly href: string;
  readonly rotulo: string;
  /** Abre em nova aba. Não use em `tel:` nem `mailto:`. */
  readonly externo?: boolean;
};

type FaixaCtaProps = {
  readonly titulo: string;
  readonly descricao?: string;
  /** Mensagem que já vai preenchida na conversa do WhatsApp. */
  readonly mensagemWhatsApp: string;
  readonly tom?: 'acento' | 'claro';
  /** Padrão: leva à página de contato. A própria página de contato sobrescreve. */
  readonly secundaria?: AcaoSecundaria;
};

const SECUNDARIA_PADRAO: AcaoSecundaria = { href: '/contato', rotulo: 'Ver todos os canais' };

/**
 * Faixa de conversão reaproveitada ao final das páginas.
 *
 * Sempre oferece dois caminhos: o imediato (WhatsApp, com a mensagem já escrita
 * para reduzir o atrito) e um alternativo, para quem prefere outro canal.
 */
export function FaixaCta({
  titulo,
  descricao,
  mensagemWhatsApp,
  tom = 'acento',
  secundaria = SECUNDARIA_PADRAO,
}: FaixaCtaProps) {
  const acento = tom === 'acento';

  return (
    <section className={acento ? 'bg-sage-500' : 'border-t border-ink-950/8 bg-canvas-alt'}>
      <Container className="flex flex-col items-start gap-8 py-18 lg:flex-row lg:items-center lg:justify-between lg:gap-15 lg:py-22">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-[18em] font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.12] font-normal text-ink-950">
            {titulo}
          </h2>
          {descricao ? (
            <p className="max-w-[32em] font-sans text-[17px] leading-[1.65] text-ink-950/80">
              {descricao}
            </p>
          ) : null}
        </div>

        <div className="flex shrink-0 flex-wrap gap-4">
          <BotaoLink href={whatsappUrl(mensagemWhatsApp)} externo variante="escuro">
            <IconeWhatsApp />
            Falar no WhatsApp{' '}
            <span className="tabular font-normal opacity-75">
              {siteConfig.contato.whatsappDisplay}
            </span>
          </BotaoLink>
          <BotaoLink
            href={secundaria.href}
            variante="contorno"
            {...(secundaria.externo ? { externo: true } : {})}
          >
            {secundaria.rotulo}
          </BotaoLink>
        </div>
      </Container>
    </section>
  );
}
