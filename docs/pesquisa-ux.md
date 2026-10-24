# Verdurão Piuminas — Pesquisa e diretrizes de UX

Site de vendas online (mobile-first) de hortifrúti com entrega a domicílio. Foco em frutas, verduras e legumes, com queijos, bebidas e mercearia como complemento.

## 1. Benchmark

| Referência | O que faz bem | O que evitar |
|---|---|---|
| **Hortifruti / Natural da Terra** (hortifruti.com.br) | Pede o CEP logo no início (preço e estoque variam por região). Card mostra "1 un / aprox. 0,8 kg", preço por unidade **e** por kg, "De/Por" com % de desconto. Na página do produto, aviso claro de **peso variável** e barra fixa com preço + "Adicionar". Pedido mínimo e regra de item em falta (não entregue e estornado) explícitos. | CEP em modal que bloqueia a navegação; nomes em CAIXA ALTA; banners grandes que empurram os produtos para baixo. |
| **Oba Hortifruti** (obahortifruti.com.br) | Campo "Digite seu CEP para ver disponibilidade" fixo no topo. Departamentos em ícones redondos. Seção "Favoritos do dia a dia" (recompra). Card com botão de carrinho sobre a imagem, preço em destaque e % OFF. | Botões flutuantes e avisos sobrepondo conteúdo; ícones sem rótulo. |
| **Daki** (soudaki.com) | Promessa de prazo em destaque ("Mercado em 15 minutos"). Cupom de 1ª compra com pedido mínimo claro. Busca como protagonista ("Resolva sua lista de compras em minutos"). | Página institucional separada da loja (o usuário precisa achar onde comprar). |
| **Conceitos no Dribbble** (busca "grocery delivery app") | Fundos claros, cards arredondados, produto sobre fundo tingido, botão "+" no card, categorias com ícones, barra inferior, resumo do carrinho fixo. | Excesso de cartões decorativos e textos pequenos com pouco contraste. |

## 2. O que a pesquisa diz (Baymard Institute, 1.700+ h de testes em supermercados online)

1. **Conveniência é o principal.** A compra é semanal e repetitiva, então recursos de **recompra** ("Compre de novo") na home e na busca são muito usados.
2. **Metade dos usuários nem abre a página do produto.** Eles adicionam direto da home, da busca ou da lista, então o card precisa ter preço, unidade/peso, preço por kg e controle de quantidade.
3. **"Adicionar" deve virar seletor de quantidade (− 1 +)** depois do primeiro toque. Os usuários perdem a noção do que já colocaram no carrinho.
4. **Substituições:** 76% dos usuários tiveram dificuldade. Use uma **preferência única** para o pedido todo (substituir por similar / me chamar / não substituir), com ajuste por item opcional, e mostre a opção **já no carrinho**, não só no fim.
5. **Mostrar janela de entrega cedo.** Descobrir só no checkout que não há horário disponível gera abandono.
6. **No celular o carrinho cresce muito.** O usuário precisa ver o total, a quantidade de itens e o botão de avançar sempre visíveis.
7. **Nada de pop-up agressivo** (instalar app, cadastro) atrapalhando a navegação no mobile.

## 3. Contexto brasileiro

- **Pix** é a forma de pagamento mais esperada (QR Code + copia e cola). Em delivery local, **pagar na entrega** (cartão na maquininha ou dinheiro com troco) ainda é comum.
- Entrega com **dia + janela de horário** ("Hoje, 16h–18h") e taxa clara. Frete grátis a partir de um valor e pedido mínimo explícitos.
- **WhatsApp** é o canal de atendimento esperado em comércio de bairro.

### Contexto de Piúma (ES)

- O Verdurão fica em **Piúma (ES)**, e **Piuminas é um dos bairros da cidade**.
- **A cidade toda usa o mesmo CEP (29285-000)**; o distrito de Aghá usa 29287-000. Pedir CEP não identifica o endereço nem a área de entrega. Por isso o padrão dos concorrentes (Hortifruti, Oba) **não serve aqui**.
- A área de entrega é escolhida pelo **bairro**. O endereço completo vem no checkout: bairro, rua, número (ou "s/n") e **ponto de referência**, que é o que o entregador realmente usa. A localização do celular é um atalho opcional.
- Bairros citados nas listas de ruas: Aparecida, Bairro de Lourdes, Boa Vista, Céu Azul, Centro, Itaputanga, Jardim Maily, Lago Azul, Niterói, Nova Esperança, Piuminas, Portinho, Praia de Acaiaca, União e Vila Itaputanga. Localidades do interior: Aghá, Orobó, Laranjeiras, Taquaral. **Confirmar a lista e as taxas com o Verdurão.**
- Interior e distrito: entrega combinada pelo WhatsApp.
- Produtos regionais: **produtores capixabas** (ex.: café das montanhas, mel, queijo artesanal), não "de Minas".

## 4. Oportunidades (diferenciais do Verdurão)

| Dor de quem compra hortifrúti online | Solução proposta |
|---|---|
| "Não posso escolher a fruta" | **Ponto de maturação** no produto: *Pronto para hoje · Em 2–3 dias · Mais verde*. Não encontramos isso nos concorrentes analisados. |
| Medo de pagar a mais nos itens pesáveis | Comprar **por unidade (≈ peso) ou por kg** e mensagem transparente: *"Cobramos o peso real na separação. Se ficar mais barato, a diferença volta pra você."* |
| Pedido chega com item trocado sem aviso | Preferência de substituição no carrinho + opção **"Me chamar no WhatsApp"**. |
| Pedidos repetidos toda semana | "Compre de novo" na home e botão **"Repetir pedido"** no histórico. |
| Quer saber se está fresco | Selos **"Chegou hoje"** e **origem** (produtores capixabas). |
| Endereço sem CEP próprio (Piúma) | Área de entrega por **bairro** e **ponto de referência** no endereço. |
| Pedidos específicos ("tomate firme para salada") | **Observação por item.** |

## 5. Personas

- **Marta, 52 anos.** Faz a compra semanal da família. Usa muito o WhatsApp e tem pouca paciência com sites complicados. Quer escolher fruta no ponto certo e paga com Pix ou cartão na entrega.
- **Lucas, 29 anos.** Trabalha o dia todo e pede à noite para receber no dia seguinte. Quer repetir a lista da semana em poucos toques e agendar o horário.

## 6. Escopo do MVP e fluxo principal

```
Bairro (sem bloquear) → Home → Categoria / Busca → Produto (opcional) → Carrinho → Entrega (endereço + janela) → Pagamento → Pedido confirmado → Acompanhamento
```

Telas desenhadas (mobile, 390 px):
1. Home (com "Compre de novo", ofertas e categorias)
2. Bairro / área de entrega (folha inferior com bairros, taxa e próximo horário)
3. Categoria com filtros (Frutas)
4. Produto (Abacate: maturação, unidade/kg, observação)
5. Carrinho (frete grátis, substituições, observações)
6. Checkout · Entrega (endereço, dia e janela)
7. Checkout · Pagamento (Pix, cartão, na entrega com troco)
8. Pedido confirmado e acompanhamento

Telas web (1920 × 1080, 16:9), adaptadas do mobile:

| Tela | O que muda em relação ao celular |
|---|---|
| Home | Busca, endereço, horário e carrinho com total no cabeçalho; menu de categorias fixo; atalhos de recompra ao lado do banner. |
| Bairro | A folha inferior vira um modal central, com os bairros em grade. |
| Categoria | Filtros e subcategorias na lateral; grade de 5 colunas. |
| Produto | Imagem e decisão lado a lado, tudo acima da dobra. |
| Carrinho | Itens à esquerda, resumo e cupom fixos à direita. |
| Checkout | Cabeçalho fechado (sem busca nem menu) com etapas; resumo sempre visível. |
| Pix | QR Code em destaque, porque no computador a pessoa paga pelo celular. |
| Acompanhar pedido | Linha do tempo horizontal; itens sempre à direita. |

## 7. Princípios de design

1. **Rápido de comprar.** Adicionar direto do card, quantidade sempre editável, carrinho sempre à vista.
2. **Transparente.** Preço por kg, peso aproximado, taxa, pedido mínimo e janela de entrega claros antes do checkout.
3. **Confiança de feira de bairro.** Frescor, origem, atendimento humano no WhatsApp e linguagem simples ("a gente", "pra você").
4. **Acessível.** Texto com no mínimo 12 px (corpo 16 px), contraste AA, áreas de toque de 44 px, rótulos em todos os ícones de navegação.
5. **Fiel à marca.** Verde e vinho do logo, creme como base, ilustrações de frutas no mesmo espírito do logotipo.

## 8. Identidade visual (extraída do logo)

| Token | Cor | Uso |
|---|---|---|
| Verde Piuminas | `#085041` | Marca, botões primários, títulos |
| Vinho Piuminas | `#490611` | Preços, destaques secundários |
| Creme da marca | `#F6E298` | Banners e áreas de destaque |
| Creme claro | `#FFF9E8` | Fundo das páginas |
| Tomate | `#C93A22` | Ofertas e descontos |
| Amarelo pimentão | `#F5C431` | Destaques pontuais |

Tipografia: **Fredoka** (títulos e preços, arredondada como o logo) e **Nunito Sans** (textos e interface).

## Fontes

- [Baymard: Online Grocery UX 2026](https://baymard.com/research-articles/online-grocery-ecommerce-ux-2026)
- [Baymard: 5 High-Level UX Takeaways (grocery)](https://baymard.com/research-articles/grocery-site-ux-launch)
- [Baymard: Grocery Substitutions](https://baymard.com/research-articles/grocery-substitutions)
- [Baymard: Add to Cart → Quantity Selector](https://baymard.com/research-articles/grocery-add-to-cart-buttons)
- [Hortifruti / Natural da Terra](https://www.hortifruti.com.br/)
- [Oba Hortifruti](https://www.obahortifruti.com.br/)
- [Daki](https://www.soudaki.com/)
- [Dribbble: grocery delivery app](https://dribbble.com/search/grocery-delivery-app)
- [Pix no Pão de Açúcar e Extra (Mercado & Consumo)](https://mercadoeconsumo.com.br/2021/07/21/pix-comeca-a-ser-aceito-nos-sites-e-aplicativos-de-pao-de-acucar-e-extra/)
- [Lista de ruas e bairros de Piúma (openalfa)](https://ruas-brasil.openalfa.com/piuma_piuma)
- [CEPs de Piúma (cepsbrasil)](https://cepsbrasil.com.br/es/piuma)
- [CEP 29287-000, Aghá (codigo-postal.org)](https://codigo-postal.org/en-us/brazil/zip/29287-000/)
