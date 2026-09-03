# Documentacao do projeto

`Documentacao-do-Projeto.pdf` e o documento de entrega para a Real Private.
Ele e gerado a partir de `Documentacao-do-Projeto.html` — edite o HTML, nunca
o PDF.

## Como regerar o PDF

Com o Chrome instalado:

    chrome --headless=new --disable-gpu --no-pdf-header-footer \
      --virtual-time-budget=15000 \
      --print-to-pdf="docs/Documentacao-do-Projeto.pdf" \
      "file:///CAMINHO/ABSOLUTO/docs/Documentacao-do-Projeto.html"

O HTML usa A4 com margem zero; cada `<section class="pagina">` e uma pagina,
com cabecalho e rodape proprios. Ao acrescentar conteudo, confira se a pagina
nao passou do limite — o `overflow: hidden` corta em silencio, sem aviso.

## Arquivos

- `Documentacao-do-Projeto.html` — fonte do documento
- `Documentacao-do-Projeto.pdf` — entregavel gerado
- `logo.png` — simbolo usado na capa (256px)
