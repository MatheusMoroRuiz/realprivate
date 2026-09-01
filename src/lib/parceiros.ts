/**
 * Parceiros institucionais exibidos na página inicial.
 *
 * Para publicar o logotipo de um parceiro, coloque o arquivo em
 * `public/parceiros/` e preencha `logo`, `largura` e `altura` (as dimensões
 * intrínsecas do arquivo — o `next/image` precisa delas para reservar o espaço
 * e não causar deslocamento de layout).
 *
 * Enquanto `logo` for `null`, o carrossel desenha a marca em tipografia, com o
 * nome do parceiro. A seção continua completa e clicável — nada quebra por
 * falta do arquivo.
 *
 * Prefira SVG. Não havendo, use PNG com fundo transparente e pelo menos 200px
 * de altura, para o logotipo continuar nítido em telas de alta densidade.
 */

export type Parceiro = {
  /** Nome como a marca se escreve. Usado no rótulo acessível e no fallback. */
  readonly nome: string;
  readonly url: string;
  /** Caminho a partir de `public/`, ex.: `/parceiros/serasa.svg`. */
  readonly logo: string | null;
  readonly largura?: number;
  readonly altura?: number;
};

export const parceiros: readonly Parceiro[] = [
  {
    nome: 'b digital',
    url: 'https://www.bdigital.com.br/',
    logo: '/parceiros/b-digital.png',
    largura: 1591,
    altura: 492,
  },
  {
    nome: 'Serasa',
    url: 'https://www.serasa.com.br/',
    logo: '/parceiros/serasa.svg',
    largura: 512,
    altura: 240,
  },
  {
    nome: 'WBA',
    url: 'https://wba.com.br/',
    logo: '/parceiros/wba.png',
    largura: 192,
    altura: 39,
  },
  {
    // Site fora do ar quando os logotipos foram coletados; segue em tipografia.
    nome: 'SINFAC-SP',
    url: 'https://www.sinfacsp.com.br/',
    logo: null,
  },
  {
    // Versão em uma cor, no vermelho oficial da marca (#CC092F).
    nome: 'Bradesco',
    url: 'https://banco.bradesco/',
    logo: '/parceiros/bradesco.png',
    largura: 168,
    altura: 37,
  },
] as const;
