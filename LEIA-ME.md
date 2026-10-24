# verdurao-piuminas

Projeto de UX/UI (mobile-first) da loja online do **Verdurão Piuminas**: hortifrúti, queijos e bebidas com entrega em casa.

## Estrutura

| Pasta / arquivo | Conteúdo |
|---|---|
| `design/verdurao-piuminas.fig` | Arquivo do OpenPencil. Páginas: Capa, Pesquisa, Design System, Telas Mobile e Telas Web (16:9). |
| `design/exports/` | PNG de cada tela mobile (2x), dos quadros de pesquisa e design system e, em `web/`, das telas web. |
| `design/fonte-jsx/` | Código JSX que gerou as telas no OpenPencil (`lib.jsx` tem os componentes). |
| `docs/pesquisa-ux.md` | Pesquisa, benchmark, personas, requisitos e princípios. |
| `docs/tokens.css` | Cores e medidas como variáveis CSS, para a implementação. |
| `assets/` | Logo original e versões recortadas (logo completo e emblema) com fundo transparente. |

## Telas mobile (390 px)

01 Home · 02 Bairro / área de entrega · 03 Categoria · 04 Produto · 05 Carrinho · 06 Checkout: entrega · 07 Checkout: pagamento · 08 Pix · 09 Acompanhar pedido

## Telas web (1920 × 1080, 16:9)

Mesmo fluxo, adaptado para o computador, com conteúdo de 1280 px centralizado:

W01 Home (topo e continuação) · W02 Bairro (modal) · W03 Categoria (filtros na lateral, 5 colunas) · W04 Produto · W05 Carrinho (resumo fixo à direita) · W06 Checkout: entrega · W07 Checkout: pagamento · W08 Pix · W09 Acompanhar pedido

O checkout web é "fechado": sem busca nem menu, só as etapas, para não distrair.

## Como abrir

1. Na pasta `open-pencil`, rode `bun run dev` e abra http://localhost:1420.
2. Use **File → Open** e escolha `design/verdurao-piuminas.fig`.

## Observações

- Piúma (ES) tem CEP único (29285-000). Por isso a área de entrega é escolhida pelo **bairro**, e o endereço usa **ponto de referência**. Bairros, taxas e horários nas telas são ilustrativos: confirmar com o Verdurão.
- A seção regional mostra **produtores capixabas** (café, mel, queijo artesanal). Trocar pelos produtores reais com quem o Verdurão trabalha.
- As ilustrações dos produtos (Fluent Emoji) são provisórias: na versão final, use fotos reais com fundo e luz padronizados.
- Regra a definir com o Verdurão: o que acontece quando o peso real **passa** do estimado (ex.: tolerância de até 10%).
