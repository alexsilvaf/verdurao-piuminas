const item = (p, { qty, detail, price, note, first }) => (
  <Frame name={'Item/' + p.n} w="fill" flex="row" gap={12} py={14} items="start">
    <Frame name="Imagem" w={64} h={64} rounded={14} bg={TINT[p.cat]} flex="row" items="center" justify="center">{E(p.e, 44)}</Frame>
    <Frame grow={1} flex="col" gap={8}>
      <Frame w="fill" flex="row" justify="between" items="start" gap={8}>
        <Frame grow={1} flex="col" gap={2}>
          <Text w="fill" font={FB} size={14} weight={800} lineHeight={18} color={C.n900}>{p.n}</Text>
          <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{detail}</Text>
        </Frame>
        <Text font={FD} size={16} weight={600} lineHeight={20} color={C.w900}>{price}</Text>
      </Frame>
      {note ? (
        <Frame name="Observação" flex="row" gap={6} items="center" px={8} py={4} rounded={8} bg={C.c200}>
          {I('pencil-line', 12, C.a700)}
          <Text font={FB} size={12} weight={700} lineHeight={16} color={C.a700}>{note}</Text>
        </Frame>
      ) : null}
      <Frame w="fill" flex="row" items="center" justify="between">
        {Stepper({ qty, h: 36, w: 128, kind: 'outline', first })}
        {note ? null : (
          <Frame name="Adicionar observação" flex="row" items="center" gap={4} h={36}>
            {I('pencil-line', 14, C.g700)}
            <Text font={FB} size={13} weight={800} lineHeight={16} color={C.g700}>Observação</Text>
          </Frame>
        )}
      </Frame>
    </Frame>
  </Frame>
)
const grupo = (title, children) => (
  <Frame name={'Grupo/' + title} w="fill" flex="col" px={16} pt={14} pb={2} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Text font={FB} size={12} weight={800} lineHeight={16} letterSpacing={0.6} color={C.g700}>{title}</Text>
    {children}
  </Frame>
)
const sep = () => Divider()

const entrega = (
  <Frame name="Resumo da entrega" w="fill" flex="row" items="center" gap={12} p={14} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w={40} h={40} rounded={20} bg={C.g100} flex="row" items="center" justify="center">{I('truck', 20, C.g900)}</Frame>
    <Frame grow={1} flex="col" gap={0}>
      <Text w="fill" font={FB} size={14} weight={800} lineHeight={20} color={C.n900}>Entrega hoje, 16h–18h</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>Rua das Flores, 120 · Centro</Text>
    </Frame>
    <Frame h={40} flex="row" items="center"><Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Alterar</Text></Frame>
  </Frame>
)
const frete = (
  <Frame name="Frete grátis" w="fill" flex="col" gap={8} p={14} rounded={16} bg={C.c200}>
    <Frame w="fill" flex="row" items="center" gap={8}>
      {I('sparkles', 18, C.g900)}
      <Text grow={1} font={FB} size={14} lineHeight={20} color={C.n900}>Faltam <Span weight={800} color={C.g900}>R$ 21,28</Span> para o frete grátis</Text>
    </Frame>
    {Progress(73, 330)}
    <Text font={FB} size={12} lineHeight={16} color={C.n600}>Frete grátis em pedidos acima de R$ 80</Text>
  </Frame>
)
const opt = (title, desc, on) => (
  <Frame name={'Opção/' + title} w="fill" flex="row" gap={12} items="start" py={4}>
    {Radio(on)}
    <Frame grow={1} flex="col" gap={0}>
      <Text w="fill" font={FB} size={14} weight={on ? 800 : 700} lineHeight={20} color={C.n900}>{title}</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{desc}</Text>
    </Frame>
  </Frame>
)
const substituicao = (
  <Frame name="Seção/Se faltar algum item" w="fill" flex="col" gap={12} p={16} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="col" gap={2}>
      <Text font={FD} size={18} weight={600} lineHeight={24} color={C.g900}>Se faltar algum item</Text>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>Vale para o pedido todo. Dá pra ajustar item por item.</Text>
    </Frame>
    {opt('Trocar por um parecido', 'Mesmo tipo, com preço igual ou menor.', true)}
    {opt('Me chamar no WhatsApp', 'A gente pergunta antes de trocar.', false)}
    {opt('Não trocar', 'Tiramos o item e devolvemos o valor.', false)}
    <Frame flex="row" items="center" gap={2} h={32}>
      <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Ajustar por item</Text>
      {I('chevron-right', 16, C.g700)}
    </Frame>
  </Frame>
)
const esqueceu = (
  <Frame name="Seção/Esqueceu alguma coisa" w="fill" flex="col" gap={12}>
    {SectionHead('Esqueceu alguma coisa?', null)}
    <Frame flex="row" gap={12}>
      {MiniCard(P.cebola, { w: 108 })}
      {MiniCard(P.cheiro, { w: 108 })}
      {MiniCard(P.ovos, { w: 108 })}
      {MiniCard(P.limao, { w: 108 })}
    </Frame>
  </Frame>
)
const cupom = (
  <Frame name="Cupom" w="fill" flex="row" items="center" gap={8} pl={14} pr={6} h={52} rounded={12} bg={C.white} stroke={C.n200} strokeWidth={1}>
    {I('ticket-percent', 20, C.n600)}
    <Text grow={1} font={FB} size={16} lineHeight={22} color={C.n500}>Cupom de desconto</Text>
    {Btn({ label: 'Aplicar', kind: 'soft', size: 's' })}
  </Frame>
)
const resumo = (
  <Frame name="Resumo do pedido" w="fill" flex="col" gap={10} p={16} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
    {Row('Subtotal (6 itens)', 'R$ 58,72')}
    {Row('Taxa de entrega', 'R$ 6,90')}
    {Divider()}
    {Row('Total estimado', 'R$ 65,62', { bold: true, lc: C.n900, rc: C.w900, size: 16 })}
    <Frame w="fill" flex="row" gap={6} items="start">
      {I('scale', 14, C.n600)}
      <Text grow={1} font={FB} size={12} lineHeight={16} color={C.n600}>Itens pesáveis podem variar um pouco: você paga o peso real.</Text>
    </Frame>
  </Frame>
)

return Screen('05 · Carrinho', [
  TopBar('Meu carrinho', { sub: '6 itens' }),
  <Frame name="Conteúdo" w="fill" flex="col" gap={16} px={16} pt={8} pb={24}>
    {entrega}
    {frete}
    {grupo('HORTIFRÚTI · 4 ITENS', [
      item(P.abacate, { qty: '2 un', detail: 'Pra hoje · ≈ 900 g', price: 'R$ 8,92' }), sep(),
      item(P.banana, { qty: '1 kg', detail: 'Em 2–3 dias · por quilo', price: 'R$ 6,99' }), sep(),
      item(P.tomate, { qty: '6 un', detail: '≈ 720 g', price: 'R$ 6,47', note: 'Mais firmes, pra salada' }), sep(),
      item(P.alface, { qty: '1 un', detail: '1 pé', price: 'R$ 3,49', first: true }),
    ])}
    {grupo('QUEIJOS E LATICÍNIOS · 1 ITEM', [item(P.queijo, { qty: '1 un', detail: 'Peça ≈ 500 g', price: 'R$ 19,95', first: true })])}
    {grupo('BEBIDAS · 1 ITEM', [item(P.suco, { qty: '1 un', detail: 'Garrafa 1 L', price: 'R$ 12,90', first: true })])}
    {substituicao}
    {esqueceu}
    {cupom}
    {resumo}
  </Frame>,
  StickyBottom([
    <Frame name="Total" flex="col" gap={0}>
      <Text font={FB} size={12} lineHeight={16} color={C.n600}>Total estimado</Text>
      <Text font={FD} size={22} weight={600} lineHeight={26} color={C.w900}>R$ 65,62</Text>
    </Frame>,
    Btn({ label: 'Escolher entrega', iconR: 'arrow-right', w: 'fill' }),
  ]),
])
