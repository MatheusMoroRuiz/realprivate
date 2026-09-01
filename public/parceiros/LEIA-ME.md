# Logotipos dos parceiros

Registrados em `src/lib/parceiros.ts` (`logo`, `largura`, `altura`).
Enquanto `logo` for `null`, o carrossel desenha o nome do parceiro em
tipografia — a secao continua completa e clicavel.

## Arquivos atuais e como foram obtidos

| Arquivo         | Origem                                   | Observacao                                  |
| --------------- | ---------------------------------------- | ------------------------------------------- |
| `b-digital.png` | bdigital.com.br (versao positiva)        | 1591x492, fundo branco removido             |
| `serasa.svg`    | serasa.com.br/lno/static-webfiles/logo   | SVG oficial em cores, 512x240               |
| `wba.png`       | wba.com.br (wp-content/uploads)          | 192x39 — a maior versao publicada pelo site |
| `bradesco.png`  | banco.bradesco (versao branca do topo)   | recolorida no vermelho oficial #CC092F      |

SINFAC-SP nao tem arquivo: o site estava fora do ar (ERR_CONNECTION_TIMED_OUT)
quando os logotipos foram coletados. Segue em tipografia ate alguem enviar o
arquivo.

## Pendencias

- **Autorizacao de uso.** Os arquivos foram baixados dos sites publicos de cada
  parceiro. A maioria dessas empresas tem manual de marca e pede aprovacao
  previa para uso do logotipo — confirme com cada uma antes de publicar.
- **Resolucao.** `wba.png` (39px de altura) e `bradesco.png` (37px) sao os
  maiores arquivos que os respectivos sites publicam. Exibidos a 40px, ficam
  levemente suaves em telas de alta densidade. Peca o arquivo vetorial aos
  parceiros e troque — e so substituir o arquivo e atualizar `largura`/`altura`.
- **Bradesco.** O site so publica a versao branca (para fundo escuro) e o
  simbolo isolado em vermelho. O arquivo aqui e a versao branca recolorida no
  vermelho oficial da marca, extraido do proprio simbolo deles. Se o manual de
  marca exigir a versao de duas cores, peca o arquivo original.

## Ao substituir

- SVG sempre que possivel; senao, PNG com fundo transparente;
- pelo menos 200px de altura;
- atualize `largura` e `altura` em `src/lib/parceiros.ts` com as dimensoes
  reais do arquivo — o `next/image` usa isso para reservar o espaco e nao
  deslocar o layout.
