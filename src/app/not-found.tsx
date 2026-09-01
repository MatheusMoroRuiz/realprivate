import { BotaoLink } from '@/components/ui/Botao';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { navegacao } from '@/lib/site-config';
import Link from 'next/link';

export const metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
};

export default function NaoEncontrada() {
  return (
    <Container className="flex flex-col items-start gap-6 py-28 lg:py-36">
      <Eyebrow>Erro 404</Eyebrow>
      <h1 className="max-w-[14em] font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] font-normal text-ink-900">
        Não encontramos esta página.
      </h1>
      <p className="max-w-[34em] font-sans text-[17px] leading-[1.7] text-ink-400">
        O endereço pode ter mudado ou o link pode estar incompleto. Você pode voltar ao início ou
        seguir por uma das seções abaixo.
      </p>

      <BotaoLink href="/" variante="escuro" className="mt-2">
        Voltar ao início
      </BotaoLink>

      <nav aria-label="Seções do site" className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
        {navegacao
          .filter((item) => item.href !== '/')
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-ink-700/30 pt-1.5 pb-1.5 font-sans text-sm font-medium text-ink-700 transition-colors hover:border-ink-700"
            >
              {item.rotulo}
            </Link>
          ))}
      </nav>
    </Container>
  );
}
