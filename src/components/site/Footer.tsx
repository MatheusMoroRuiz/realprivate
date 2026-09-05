import Link from 'next/link';

import { Logo } from '@/components/site/Logo';
import { Container } from '@/components/ui/Container';
import { desenvolvedor, enderecoLinhas, navegacao, siteConfig, whatsappUrl } from '@/lib/site-config';

const anoAtual = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="superficie-escura relative overflow-hidden bg-ink-950 text-sage-100/75">
      {/* Motivo gráfico da marca — decorativo, ocultado de tecnologias assistivas. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-8 flex items-start gap-5 opacity-[0.14]"
      >
        <span className="block h-[120px] w-[30px] -skew-x-[13deg] rounded-b-[36px] bg-linear-0 from-ink-950 to-sage-500" />
        <span className="block h-[190px] w-10 -skew-x-[13deg] rounded-b-[46px] bg-linear-0 from-ink-950 to-sage-400" />
        <span className="block h-[260px] w-[50px] -skew-x-[13deg] rounded-b-[56px] bg-linear-0 from-ink-950 to-sage-600" />
      </span>

      <Container className="relative grid gap-12 pt-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-15">
        <div className="flex flex-col gap-4.5">
          <Logo tamanho={48} tom="claro" />
          <p className="max-w-[26em] font-sans text-[14.5px] leading-relaxed text-sage-100/70">
            {siteConfig.descricaoCurta}
          </p>
        </div>

        <nav aria-label="Navegação do rodapé" className="flex flex-col gap-1">
          <h2 className="mb-1 font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-sage-500/90 uppercase">
            Navegação
          </h2>
          {navegacao.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 font-sans text-[14.5px] leading-none text-sage-100/80 transition-colors hover:text-sage-500"
            >
              {item.rotulo}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1">
          <h2 className="mb-2 font-sans text-[10.5px] leading-none font-medium tracking-[0.24em] text-sage-500/90 uppercase">
            Contato
          </h2>
          <a
            href={whatsappUrl('Olá! Gostaria de falar com a Real Private.')}
            target="_blank"
            rel="noopener noreferrer"
            className="tabular py-2 font-sans text-[14.5px] leading-none text-sage-100/80 transition-colors hover:text-sage-500"
          >
            {siteConfig.contato.whatsappDisplay}
          </a>
          {siteConfig.contato.email ? (
            <a
              href={`mailto:${siteConfig.contato.email}`}
              className="py-2 font-sans text-[14.5px] leading-none text-sage-100/80 transition-colors hover:text-sage-500"
            >
              {siteConfig.contato.email}
            </a>
          ) : null}
          <a
            href={siteConfig.contato.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 font-sans text-[14.5px] leading-none text-sage-100/80 transition-colors hover:text-sage-500"
          >
            {siteConfig.contato.instagram.handle}
          </a>
          <address className="mt-2 font-sans text-[14.5px] leading-relaxed text-sage-100/70 not-italic">
            {enderecoLinhas.map((linha) => (
              <span key={linha} className="block">
                {linha}
              </span>
            ))}
          </address>
        </div>
      </Container>

      <Container className="relative mt-14 flex flex-col gap-5 border-t border-sage-500/20 py-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="font-sans text-[12.5px] leading-relaxed text-sage-100/65">
            © {anoAtual} {siteConfig.razaoSocial} · Todos os direitos reservados
          </p>
          <p className="font-sans text-[12.5px] leading-relaxed text-sage-100/60">
            CEP {siteConfig.endereco.cepFormatado} · {siteConfig.endereco.cidade} /{' '}
            {siteConfig.endereco.uf}
          </p>
        </div>

        {/* Crédito de desenvolvimento — discreto, abaixo dos dados institucionais. */}
        <p className="text-center font-sans text-[12px] leading-relaxed text-sage-100/60">
          Desenvolvido por{' '}
          <a
            href={desenvolvedor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-100/80 underline decoration-sage-500/40 underline-offset-2 transition-colors hover:text-sage-500"
          >
            {desenvolvedor.nome}
          </a>
        </p>
      </Container>
    </footer>
  );
}
