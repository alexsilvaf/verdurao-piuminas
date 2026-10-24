# Design · Verdurão Piuminas

Arquivos de UX/UI da loja online (mobile-first), feitos no [OpenPencil](https://github.com/open-pencil/open-pencil).

## O que tem aqui

| Arquivo / pasta | Conteúdo |
|---|---|
| `verdurao-piuminas.fig` | Arquivo do OpenPencil. Páginas: Capa, Pesquisa, Design System, Telas Mobile e Telas Web (16:9). |
| `exports/` | PNG de cada tela mobile (2x), dos quadros de pesquisa e de design system. As telas web ficam em `exports/web/`. |
| `fonte-jsx/` | Código JSX que gerou as telas no OpenPencil (`lib.jsx` e `lib-desktop.jsx` têm os componentes). |

Arquivos relacionados: [tokens CSS](../docs/tokens.css) e [logo](../assets/).

## Telas mobile (390 px)

01 Home · 02 Bairro / área de entrega · 03 Categoria · 04 Produto · 05 Carrinho · 06 Checkout: entrega · 07 Checkout: pagamento · 08 Pix · 09 Acompanhar pedido

## Telas web (1920 × 1080, 16:9)

O mesmo fluxo, adaptado para o computador, com conteúdo de 1280 px centralizado:

W01 Home (topo e continuação) · W02 Bairro (modal) · W03 Categoria (filtros na lateral, 5 colunas) · W04 Produto · W05 Carrinho (resumo fixo à direita) · W06 Checkout: entrega · W07 Checkout: pagamento · W08 Pix · W09 Acompanhar pedido

O checkout web é "fechado": sem busca nem menu, só as etapas, para não distrair.

## Como abrir

1. Na pasta do `open-pencil`, rode `bun run dev` e abra http://localhost:1420.
2. Use **File → Open** e escolha `verdurao-piuminas.fig`.

## Observações

- Piúma (ES) tem CEP único (29285-000). Por isso a área de entrega é escolhida pelo **bairro**, e o endereço usa **ponto de referência**. Bairros, taxas e horários nas telas são ilustrativos: confirmar com o Verdurão.
- A seção regional mostra **produtores capixabas** (café, mel, queijo artesanal). Trocar pelos produtores reais com quem o Verdurão trabalha.
- As ilustrações dos produtos (Fluent Emoji) são provisórias. Na versão final, use fotos reais com fundo e luz padronizados.
- Regra a definir com o Verdurão: o que acontece quando o peso real **passa** do estimado (ex.: tolerância de até 10%).
