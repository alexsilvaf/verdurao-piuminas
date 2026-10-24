const linhaItem = (p, { qty, detail, price, note, first }) => (
  <Frame name={'Item/' + p.n} w="fill" h={68} flex="row" items="center" gap={16} px={20} strokeWeights={{ top: 1 }} stroke={BORDER}>
    <Frame name="Imagem" w={48} h={48} rounded={12} bg={TINT[p.cat]} flex="row" items="center" justify="center">{E(p.e, 34)}</Frame>
    <Frame grow={1} flex="col" gap={2}>
      <Frame flex="row" items="center" gap={8}>
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{p.n}</Text>
        {note ? (
          <Frame name="Observação" flex="row" gap={4} items="center" px={8} h={22} rounded={11} bg={C.c200}>
            {I('pencil-line', 12, C.a700)}
            <Text font={FB} size={12} weight={700} lineHeight={16} color={C.a700}>{note}</Text>
          </Frame>
        ) : null}
      </Frame>
      <Frame flex="row" items="center" gap={10}>
        <Text font={FB} size={13} lineHeight={18} color={C.n600}>{detail}</Text>
        {note ? null : <Text font={FB} size={13} weight={800} lineHeight={18} color={C.g700}>+ Observação</Text>}
      </Frame>
    </Frame>
    {Stepper({ qty, h: 36, w: 128, kind: 'outline', first })}
    <Text w={96} textAlign="right" font={FD} size={17} weight={600} lineHeight={22} color={C.w900}>{price}</Text>
  </Frame>
)
const grupo = (t) => (
  <Frame name={'Grupo/' + t} w="fill" h={34} flex="row" items="center" px={20} bg={C.c50} strokeWeights={{ top: 1 }} stroke={BORDER}>
    <Text font={FB} size={12} weight={800} lineHeight={16} letterSpacing={0.6} color={C.g700}>{t}</Text>
  </Frame>
)
const itens = (
  <Frame name="Itens" w="fill" flex="col" rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1} overflow="hidden">
    <Frame name="Cabeçalho da lista" w="fill" h={44} flex="row" items="center" gap={16} px={20}>
      <Text grow={1} font={FB} size={13} weight={800} lineHeight={16} color={C.n600}>Produto</Text>
      <Text w={128} font={FB} size={13} weight={800} lineHeight={16} color={C.n600}>Quantidade</Text>
      <Text w={96} textAlign="right" font={FB} size={13} weight={800} lineHeight={16} color={C.n600}>Preço</Text>
    </Frame>
    {grupo('HORTIFRÚTI · 4 ITENS')}
    {linhaItem(P.abacate, { qty: '2 un', detail: 'Pra hoje · ≈ 900 g', price: 'R$ 8,92' })}
    {linhaItem(P.banana, { qty: '1 kg', detail: 'Em 2–3 dias · por quilo', price: 'R$ 6,99' })}
    {linhaItem(P.tomate, { qty: '6 un', detail: '≈ 720 g', price: 'R$ 6,47', note: 'Mais firmes, pra salada' })}
    {linhaItem(P.alface, { qty: '1 un', detail: '1 pé', price: 'R$ 3,49', first: true })}
    {grupo('QUEIJOS E LATICÍNIOS · 1 ITEM')}
    {linhaItem(P.queijo, { qty: '1 un', detail: 'Peça ≈ 500 g', price: 'R$ 19,95', first: true })}
    {grupo('BEBIDAS · 1 ITEM')}
    {linhaItem(P.suco, { qty: '1 un', detail: 'Garrafa 1 L', price: 'R$ 12,90', first: true })}
  </Frame>
)
const opt = (title, desc, on) => (
  <Frame name={'Opção/' + title} w="fill" grow={1} flex="row" gap={12} items="start" p={14} rounded={14} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    {Radio(on)}
    <Frame grow={1} flex="col" gap={2}>
      <Text w="fill" font={FB} size={14} weight={800} lineHeight={20} color={C.n900}>{title}</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{desc}</Text>
    </Frame>
  </Frame>
)
const substituicao = (
  <Frame name="Seção/Se faltar algum item" w="fill" flex="col" gap={12} p={20} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="end" justify="between">
      <Frame flex="col" gap={2}>
        <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>Se faltar algum item</Text>
        <Text font={FB} size={14} lineHeight={20} color={C.n600}>Vale para o pedido todo. Dá pra ajustar item por item.</Text>
      </Frame>
      <Frame flex="row" items="center" gap={2}>
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Ajustar por item</Text>
        {I('chevron-right', 16, C.g700)}
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={12}>
      {opt('Trocar por um parecido', 'Mesmo tipo, preço igual ou menor', true)}
      {opt('Me chamar no WhatsApp', 'A gente pergunta antes de trocar', false)}
      {opt('Não trocar', 'Tiramos o item e devolvemos o valor', false)}
    </Frame>
  </Frame>
)
const topoCards = (
  <Frame name="Entrega e frete" w="fill" flex="row" gap={16}>
    <Frame name="Resumo da entrega" w="fill" grow={1} flex="row" items="center" gap={12} p={16} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
      <Frame w={44} h={44} rounded={22} bg={C.g100} flex="row" items="center" justify="center">{I('truck', 22, C.g900)}</Frame>
      <Frame grow={1} flex="col" gap={0}>
        <Text w="fill" font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>Entrega hoje, 16h–18h</Text>
        <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>Rua das Flores, 120 · Centro</Text>
      </Frame>
      <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Alterar</Text>
    </Frame>
    <Frame name="Frete grátis" w="fill" grow={1} flex="col" gap={8} p={16} rounded={20} bg={C.c200}>
      <Frame w="fill" flex="row" items="center" gap={8}>
        {I('sparkles', 18, C.g900)}
        <Text grow={1} font={FB} size={15} lineHeight={20} color={C.n900}>Faltam <Span weight={800} color={C.g900}>R$ 21,28</Span> para o frete grátis</Text>
      </Frame>
      {Progress(73, 384)}
      <Text font={FB} size={12} lineHeight={16} color={C.n600}>Frete grátis em pedidos acima de R$ 80</Text>
    </Frame>
  </Frame>
)
const sugestao = (p) => (
  <Frame name={'Sugestão/' + p.n} w="fill" flex="row" items="center" gap={12}>
    <Frame w={44} h={44} rounded={12} bg={TINT[p.cat]} flex="row" items="center" justify="center">{E(p.e, 30)}</Frame>
    <Frame grow={1} flex="col" gap={0}>
      <Text w="fill" font={FB} size={14} weight={800} lineHeight={18} color={C.n900}>{p.n}</Text>
      <Text font={FD} size={15} weight={600} lineHeight={18} color={C.w900}>{p.p + ' ' + p.per}</Text>
    </Frame>
    {PlusBtn(36)}
  </Frame>
)
const resumo = (
  <Frame name="Resumo do pedido" w="fill" flex="col" gap={14} p={24} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1} shadow={SH_CARD}>
    <Text font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>Resumo do pedido</Text>
    {DSummaryRow('Subtotal (6 itens)', 'R$ 58,72')}
    {DSummaryRow('Taxa de entrega', 'R$ 6,90')}
    {Divider()}
    {DSummaryRow('Total estimado', 'R$ 65,62', { bold: true })}
    <Frame name="Cupom" w="fill" flex="row" items="center" gap={8} pl={14} pr={6} h={48} rounded={12} bg={C.white} stroke={C.n200} strokeWidth={1}>
      {I('ticket-percent', 18, C.n600)}
      <Text grow={1} font={FB} size={15} lineHeight={20} color={C.n500}>Cupom de desconto</Text>
      {Btn({ label: 'Aplicar', kind: 'soft', size: 's' })}
    </Frame>
    {Btn({ label: 'Escolher entrega', iconR: 'arrow-right', w: 'fill' })}
    <Frame w="fill" flex="row" gap={6} items="start">
      {I('scale', 14, C.n600)}
      <Text grow={1} font={FB} size={12} lineHeight={16} color={C.n600}>Itens pesáveis podem variar um pouco: você paga o peso real.</Text>
    </Frame>
  </Frame>
)
const esqueceu = (
  <Frame name="Esqueceu alguma coisa" w="fill" flex="col" gap={14} p={24} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Text font={FD} size={18} weight={600} lineHeight={24} color={C.g900}>Esqueceu alguma coisa?</Text>
    {sugestao(P.cebola)}
    {sugestao(P.cheiro)}
    {sugestao(P.limao)}
  </Frame>
)
return DScreen('W05 · Carrinho', [
  DHeader({ count: '6 itens', total: 'R$ 58,72' }),
  <Frame name="Conteúdo" w="fill" flex="col" gap={20} px={MX} pt={24}>
    <Frame name="Topo da página" w="fill" flex="row" items="end" justify="between">
      <Frame flex="col" gap={8}>
        {DCrumbs(['Início', 'Carrinho'])}
        <Frame flex="row" items="end" gap={12}>
          <Text font={FD} size={36} weight={600} lineHeight={42} color={C.g900}>Meu carrinho</Text>
          <Text font={FB} size={15} lineHeight={30} color={C.n600}>6 itens</Text>
        </Frame>
      </Frame>
      <Frame flex="row" items="center" gap={6} h={40}>
        {I('arrow-left', 16, C.g700)}
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.g700}>Continuar comprando</Text>
      </Frame>
    </Frame>
    <Frame name="Corpo" w="fill" flex="row" gap={32} items="start">
      <Frame name="Coluna principal" grow={1} flex="col" gap={16}>
        {topoCards}
        {itens}
        {substituicao}
      </Frame>
      <Frame name="Coluna lateral" w={400} flex="col" gap={16}>
        {resumo}
        {esqueceu}
      </Frame>
    </Frame>
  </Frame>,
])
