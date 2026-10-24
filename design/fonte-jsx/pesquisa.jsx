const secao = (num, title, desc, children) => (
  <Frame name={'Seção/' + title} w="fill" flex="col" gap={28} p={40} rounded={28} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="end" gap={16}>
      <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g700}>{num}</Text>
      <Text font={FD} size={36} weight={600} lineHeight={42} color={C.g900}>{title}</Text>
    </Frame>
    {desc ? <Text w={1100} font={FB} size={18} lineHeight={28} color={C.n600}>{desc}</Text> : null}
    {children}
  </Frame>
)
const item = (icon, color, text) => (
  <Frame w="fill" flex="row" gap={10} items="start">
    <Frame w={20} h={22} flex="row" items="center">{I(icon, 18, color)}</Frame>
    <Text grow={1} font={FB} size={15} lineHeight={22} color={C.n900}>{text}</Text>
  </Frame>
)

const bench = [
  ['Hortifruti / Natural da Terra', 'hortifruti.com.br · maior rede de hortifrúti do país', [
    'Pede o CEP logo no início: preço e estoque variam por região',
    'Card com "1 un / aprox. 0,8 kg", preço por unidade e por kg',
    'Aviso claro de peso variável e barra fixa com "Adicionar"',
    'Pedido mínimo e regra de item em falta explícitos',
  ], ['CEP em modal que bloqueia a navegação (e não serve em cidade de CEP único, como Piúma)', 'Nomes em CAIXA ALTA', 'Banners grandes empurram os produtos para baixo']],
  ['Oba Hortifruti', 'obahortifruti.com.br', [
    'Campo "Digite seu CEP para ver disponibilidade" no topo',
    'Departamentos em ícones redondos',
    '"Favoritos do dia a dia" para recompra',
    'Botão de carrinho sobre a imagem e % OFF em destaque',
  ], ['Botões flutuantes e avisos cobrindo o conteúdo', 'Ícones sem rótulo']],
  ['Daki', 'soudaki.com · mercado em minutos', [
    'Promessa de prazo em destaque ("Mercado em 15 minutos")',
    'Cupom de 1ª compra com pedido mínimo claro',
    'Busca como protagonista da página',
  ], ['Página institucional separada da loja']],
  ['Conceitos no Dribbble', 'busca "grocery delivery app"', [
    'Fundos claros e cards arredondados',
    'Produto sobre fundo tingido e botão "+" no card',
    'Categorias com ícones e barra inferior',
  ], ['Textos pequenos com pouco contraste', 'Excesso de cartões decorativos']],
]
const benchCard = ([nome, sub, bom, ruim]) => (
  <Frame name={'Benchmark/' + nome} w="fill" grow={1} flex="col" gap={14} p={24} rounded={20} bg={C.c50} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="col" gap={2}>
      <Text w="fill" font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>{nome}</Text>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{sub}</Text>
    </Frame>
    <Text font={FB} size={12} weight={800} lineHeight={16} letterSpacing={0.6} color={C.g700}>O QUE FAZ BEM</Text>
    {bom.map((b) => item('check', C.g700, b))}
    <Text font={FB} size={12} weight={800} lineHeight={16} letterSpacing={0.6} color={C.t700}>O QUE EVITAR</Text>
    {ruim.map((r) => item('x', C.t600, r))}
  </Frame>
)

const insights = [
  ['Conveniência', 'A compra é semanal e repetitiva: recursos de recompra ("Compre de novo") na home e na busca são muito usados.', 'repeat-2'],
  ['50%', 'Metade dos usuários nem abre a página do produto: adiciona direto da lista. O card precisa ter preço, peso e quantidade.', 'mouse-pointer-click'],
  ['Quantidade', '"Adicionar" deve virar seletor (− 1 +) depois do toque: as pessoas perdem a noção do que já colocaram no carrinho.', 'plus'],
  ['76%', 'tiveram dificuldade com substituições. Melhor uma preferência única para o pedido, já no carrinho.', 'shuffle'],
  ['Horário cedo', 'Descobrir só no checkout que não há janela de entrega gera abandono. Mostre o próximo horário desde a home.', 'clock'],
  ['Carrinho longo', 'No celular o carrinho cresce muito: total, quantidade de itens e botão de avançar sempre visíveis.', 'shopping-basket'],
]
const insight = ([big, text, icon]) => (
  <Frame name={"Insight/" + big} w={456} flex="col" gap={10} p={24} rounded={20} bg={C.g50} stroke={C.g100} strokeWidth={1}>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Text font={FD} size={34} weight={600} lineHeight={40} color={C.g900}>{big}</Text>
      <Frame w={44} h={44} rounded={22} bg={C.white} flex="row" items="center" justify="center">{I(icon, 22, C.g900)}</Frame>
    </Frame>
    <Text w="fill" font={FB} size={16} lineHeight={24} color={C.n900}>{text}</Text>
  </Frame>
)

const brasil = [
  ['qr-code', 'Pix', 'Forma de pagamento mais esperada: QR Code e copia e cola.'],
  ['banknote', 'Pagar na entrega', 'Maquininha ou dinheiro com troco ainda são comuns no delivery local.'],
  ['calendar-days', 'Dia e janela', 'Entrega agendada em janelas ("hoje, 16h–18h") e taxa clara.'],
  ['message-circle', 'WhatsApp', 'Canal de atendimento esperado em comércio de bairro.'],
  ['map-pin', 'CEP único em Piúma', 'A cidade toda usa 29285-000. A entrega é definida pelo bairro, e o entregador se guia pelo ponto de referência.'],
]
const dores = [
  ['"Não posso escolher a fruta"', 'Ponto de maturação no produto: pra hoje, em 2–3 dias ou mais verde. Não encontramos isso nos concorrentes analisados.'],
  ['Medo de pagar a mais nos pesáveis', 'Comprar por unidade (≈ peso) ou por kg e cobrar o peso real: se ficar mais barato, a diferença volta.'],
  ['Item trocado sem aviso', 'Preferência de troca no carrinho e opção "me chamar no WhatsApp".'],
  ['A mesma compra toda semana', '"Compre de novo" na home e "Repetir pedido" no histórico.'],
  ['Quero saber se está fresco', 'Selos "Chegou hoje" e origem dos produtores capixabas.'],
  ['Pedidos específicos', 'Observação por item ("tomate mais firme, pra salada").'],
]
const persona = (ini, nome, idade, texto, quer, cor) => (
  <Frame name={'Persona/' + nome} w="fill" grow={1} flex="row" gap={20} p={24} rounded={20} bg={C.c50} stroke={BORDER} strokeWidth={1}>
    <Frame w={88} h={88} rounded={44} bg={cor} flex="row" items="center" justify="center">
      <Text font={FD} size={34} weight={600} lineHeight={40} color={C.white}>{ini}</Text>
    </Frame>
    <Frame grow={1} flex="col" gap={10}>
      <Text font={FD} size={24} weight={600} lineHeight={30} color={C.g900}>{nome + ', ' + idade}</Text>
      <Text w="fill" font={FB} size={16} lineHeight={24} color={C.n900}>{texto}</Text>
      {quer.map((q) => item('heart', C.w700, q))}
    </Frame>
  </Frame>
)
const principios = [
  ['zap', 'Rápido de comprar', 'Adicionar direto do card, quantidade sempre editável, carrinho sempre à vista.'],
  ['eye', 'Transparente', 'Preço por kg, peso aproximado, taxa, pedido mínimo e janela claros antes do checkout.'],
  ['hand-heart', 'Feira de bairro', 'Frescor, origem, atendimento humano e linguagem simples ("a gente", "pra você").'],
  ['accessibility', 'Acessível', 'Texto mínimo de 12 px, contraste AA e áreas de toque de 44 px com rótulos.'],
  ['palette', 'Fiel à marca', 'Verde e vinho do logo, creme como base e ilustrações no espírito do logotipo.'],
]
const fluxo = ['Bairro (sem bloquear)', 'Home', 'Categoria / Busca', 'Produto (opcional)', 'Carrinho', 'Entrega', 'Pagamento', 'Pix', 'Acompanhamento']

return (
  <Frame name="Pesquisa e diretrizes" w={1600} h="hug" flex="col" gap={32} p={56} bg={C.c50} rounded={40}>
    <Frame name="Cabeçalho" w="fill" flex="col" gap={12}>
      <Rectangle name="Logo" w={180} h={64} />
      <Text font={FD} size={64} weight={600} lineHeight={72} color={C.g900}>Pesquisa e diretrizes</Text>
      <Text w={1150} font={FB} size={22} lineHeight={32} color={C.n600}>O que aprendemos com quem já vende hortifrúti online e com 1.700+ horas de testes de usabilidade da Baymard em supermercados online. Base para todas as decisões das telas.</Text>
    </Frame>
    {secao('01', 'Benchmark', 'Sites analisados no celular (390 px), do primeiro acesso à página de produto.', (
      <Frame w="fill" flex="row" gap={20} items="stretch">{bench.map(benchCard)}</Frame>
    ))}
    {secao('02', 'O que a pesquisa diz', 'Baymard Institute: 1.700+ horas de testes com usuários reais em supermercados online (Instacart, Walmart, Whole Foods, Kroger e outros).', (
      <Frame w="fill" flex="row" wrap gap={20} rowGap={20}>{insights.map(insight)}</Frame>
    ))}
    {secao('03', 'Contexto brasileiro e local', null, (
      <Frame w="fill" flex="row" gap={20}>
        {brasil.map(([icon, t, d]) => (
          <Frame name={'Contexto/' + t} w="fill" grow={1} flex="col" gap={10} p={24} rounded={20} bg={C.c50} stroke={BORDER} strokeWidth={1}>
            <Frame w={48} h={48} rounded={14} bg={C.c400} flex="row" items="center" justify="center">{I(icon, 24, C.g900)}</Frame>
            <Text font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>{t}</Text>
            <Text w="fill" font={FB} size={16} lineHeight={24} color={C.n900}>{d}</Text>
          </Frame>
        ))}
      </Frame>
    ))}
    {secao('04', 'Oportunidades para o Verdurão', 'Dores de quem compra hortifrúti online e como as telas respondem a cada uma.', (
      <Frame w="fill" flex="col" rounded={20} stroke={BORDER} strokeWidth={1} overflow="hidden">
        <Frame w="fill" flex="row" gap={24} px={24} py={14} bg={C.g900}>
          <Text w={420} font={FB} size={14} weight={800} lineHeight={20} letterSpacing={0.6} color={C.c400}>DOR</Text>
          <Text grow={1} font={FB} size={14} weight={800} lineHeight={20} letterSpacing={0.6} color={C.c400}>SOLUÇÃO NAS TELAS</Text>
        </Frame>
        {dores.map(([d, s], i) => (
          <Frame name={'Oportunidade/' + d} w="fill" flex="row" gap={24} px={24} py={18} bg={i % 2 ? C.c50 : C.white}>
            <Text w={420} font={FB} size={17} weight={800} lineHeight={24} color={C.n900}>{d}</Text>
            <Text grow={1} font={FB} size={17} lineHeight={24} color={C.n900}>{s}</Text>
          </Frame>
        ))}
      </Frame>
    ))}
    {secao('05', 'Personas', null, (
      <Frame w="fill" flex="row" gap={20} items="stretch">
        {persona('M', 'Marta', 52, 'Faz a compra semanal da família. Usa muito o WhatsApp e tem pouca paciência com sites complicados.', ['Escolher a fruta no ponto certo', 'Pagar com Pix ou na entrega', 'Falar com uma pessoa se algo faltar'], C.w700)}
        {persona('L', 'Lucas', 29, 'Trabalha o dia todo e pede à noite para receber no dia seguinte.', ['Repetir a lista da semana em poucos toques', 'Agendar o horário de entrega', 'Saber o total antes de finalizar'], C.g700)}
      </Frame>
    ))}
    {secao('06', 'Fluxo principal', null, (
      <Frame w="fill" flex="row" wrap items="center" gap={10} rowGap={12}>
        {fluxo.map((f, i) => [
          <Frame name={'Fluxo/' + f} h={48} flex="row" items="center" gap={10} pl={6} pr={18} rounded={24} bg={C.c50} stroke={BORDER} strokeWidth={1}>
            <Frame w={36} h={36} rounded={18} bg={C.g900} flex="row" items="center" justify="center">
              <Text font={FD} size={15} weight={600} lineHeight={18} color={C.white}>{String(i + 1)}</Text>
            </Frame>
            <Text font={FB} size={17} weight={800} lineHeight={22} color={C.n900}>{f}</Text>
          </Frame>,
          i < fluxo.length - 1 ? I('arrow-right', 22, C.n400) : null,
        ])}
      </Frame>
    ))}
    {secao('07', 'Princípios de design', null, (
      <Frame w="fill" flex="row" gap={16} items="stretch">
        {principios.map(([icon, t, d]) => (
          <Frame name={'Princípio/' + t} w="fill" grow={1} flex="col" gap={10} p={20} rounded={20} bg={C.g900}>
            <Frame w={44} h={44} rounded={14} bg="#FFFFFF1F" flex="row" items="center" justify="center">{I(icon, 22, C.c400)}</Frame>
            <Text w="fill" font={FD} size={20} weight={600} lineHeight={26} color={C.white}>{t}</Text>
            <Text w="fill" font={FB} size={15} lineHeight={22} color={C.c200}>{d}</Text>
          </Frame>
        ))}
      </Frame>
    ))}
    {secao('08', 'Fontes', null, (
      <Frame w="fill" flex="col" gap={8}>
        {[
          'Baymard Institute — Online Grocery Ecommerce UX 2026 (baymard.com)',
          'Baymard Institute — Online Grocery UX: 5 High-Level UX Takeaways',
          'Baymard Institute — Grocery Substitutions · Add to Cart → seletor de quantidade',
          'Hortifruti / Natural da Terra (hortifruti.com.br) · Oba Hortifruti (obahortifruti.com.br) · Daki (soudaki.com)',
          'Dribbble — busca "grocery delivery app" · Mercado & Consumo — Pix no Pão de Açúcar e Extra',
          'Documento completo: verdurao-piuminas/docs/pesquisa-ux.md',
        ].map((f) => item('link', C.g700, f))}
      </Frame>
    ))}
  </Frame>
)
