type IconeWhatsAppProps = {
  readonly tamanho?: number;
  readonly className?: string;
};

/**
 * Ícone inline: evita uma requisição extra e mantém a cor controlada por
 * `currentColor`, o que faz o contraste acompanhar o texto ao redor.
 */
export function IconeWhatsApp({ tamanho = 16, className = '' }: IconeWhatsAppProps) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M21 15.46v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 1.12 2.76 2 2 0 0 1 3.11.58h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.38a16 16 0 0 0 6 6l1.16-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.1z" />
    </svg>
  );
}
