const etapas = [['Pedido recebido', '13:42', 'done'], ['Pagamento aprovado', '13:43 · Pix', 'done'], ['Separando seu pedido', 'agora', 'now'], ['Saiu para entrega', 'previsão 16h', 'next'], ['Entregue', 'até 18h', 'next']]
const marcador = (state) => (
  <Frame w={36} h={36} rounded={18} bg={state === 'done' ? C.g900 : (state === 'now' ? C.c400 : C.white)} stroke={state === 'next' ? C.n200 : C.g900} strokeWidth={state === 'now' ? 2 : 1.5} flex="row" items="center" justify="center">
    {state === 'done' ? I('check', 18, C.white) : (state === 'now' ? <Frame w={12} h={12} rounded={6} bg={C.g900} /> : null)}
  </Frame>
)
const linhaTempo = (
  <Frame name="Linha do tempo" grow={1} flex="row" items="start" px={32} py={28}>
    {etapas.map(([t, h, s], i) => (
      <Frame name={'Status/' + t} w="fill" grow={1} flex="col" gap={10}>
        <Frame w="fill" flex="row" items="center">
          {marcador(s)}
          {i < etapas.length - 1 ? <Frame grow={1} h={3} rounded={2} bg={s === 'done' ? C.g900 : C.n200} /> : null}
        </Frame>
        <Frame w="fill" flex="col" gap={2} pr={12}>
          <Text w="fill" font={FB} size={15} weight={s === 'next' ? 600 : 800} lineHeight={20} color={s === 'next' ? C.n500 : C.n900}>{t}</Text>
          <Text w="fill" font={FB} size={13} weight={s === 'now' ? 800 : 400} lineHeight={18} color={s === 'now' ? C.g700 : C.n600}>{h}</Text>
        </Frame>
      </Frame>
    ))}
  </Frame>
)
const statusCard = (
  <Frame name="Status do pedido" w="fill" flex="row" items="stretch" rounded={24} bg={C.white} stroke={BORDER} strokeWidth={1} overflow="hidden" shadow={SH_CARD}>
    <Frame name="Previsão" w={360} flex="col" justify="center" gap={6} p={28} bg={C.g900}>
      <Ellipse position="absolute" x={220} y={-40} w={200} h={200} fill="#FFFFFF12" />
      <Frame position="absolute" x={250} y={60} w={84} h={84}>{E('basket', 84)}</Frame>
      <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.8} color={C.y400}>PREVISÃO DE ENTREGA</Text>
      <Text font={FD} size={30} weight={600} lineHeight={36} color={C.white}>Hoje, 16h–18h</Text>
      <Text font={FB} size={14} lineHeight={20} color={C.c200}>Rua das Flores, 120 · Centro</Text>
    </Frame>
    {linhaTempo}
  </Frame>
)
const troca = (
  <Frame name="Aviso/Troca de item" w="fill" grow={1} flex="col" gap={14} p={24} rounded={20} bg={C.a100} stroke="#F1DDAF" strokeWidth={1}>
    <Frame w="fill" flex="row" gap={10} items="start">
      {I('repeat-2', 22, C.a700)}
      <Frame grow={1} flex="col" gap={2}>
        <Text w="fill" font={FB} size={16} weight={800} lineHeight={22} color={C.a700}>Trocamos 1 item</Text>
        <Text w="fill" font={FB} size={14} lineHeight={20} color={C.n900}>A alface crespa acabou. Separamos uma alface americana, pelo mesmo preço.</Text>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" items="center" gap={10}>
      <Frame w={52} h={52} rounded={14} bg={TINT.verduras} flex="row" items="center" justify="center">{E('leafy-green', 34)}</Frame>
      {I('arrow-right', 18, C.n600)}
      <Frame w={52} h={52} rounded={14} bg={TINT.verduras} flex="row" items="center" justify="center">{E('green-salad', 34)}</Frame>
      <Frame grow={1} h={1} />
      {Btn({ label: 'Desfazer', kind: 'secondary', size: 'm' })}
      {Btn({ label: 'Tudo bem', kind: 'primary', size: 'm' })}
    </Frame>
  </Frame>
)
const ajuste = (l, r) => (
  <Frame name={'Ajuste/' + l} w="fill" flex="row" items="center" justify="between" gap={12}>
    <Text grow={1} font={FB} size={14} lineHeight={20} color={C.n900}>{l}</Text>
    <Text font={FB} size={14} weight={800} lineHeight={20} color={C.g700}>{r}</Text>
  </Frame>
)
const pesagem = (
  <Frame name="Ajuste de peso" w="fill" grow={1} flex="col" gap={12} p={24} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="center" gap={8}>
      {I('scale', 20, C.g900)}
      <Text grow={1} font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>Ajuste de peso</Text>
    </Frame>
    {ajuste('Abacate · 2 un pesaram 860 g', '− R$ 0,41')}
    {ajuste('Tomate · 6 un pesaram 690 g', '− R$ 0,27')}
    {Divider()}
    <Frame w="fill" flex="row" items="center" gap={8}>
      {I('piggy-bank', 18, C.g700)}
      <Text grow={1} font={FB} size={14} weight={700} lineHeight={20} color={C.n900}>Você economizou <Span weight={800} color={C.g700}>R$ 0,68</Span>. Devolvemos no Pix após a entrega.</Text>
    </Frame>
  </Frame>
)
const itemLinha = (p, q, v) => (
  <Frame name={'Item/' + p.n} w="fill" flex="row" items="center" gap={12}>
    <Frame w={40} h={40} rounded={10} bg={TINT[p.cat]} flex="row" items="center" justify="center">{E(p.e, 26)}</Frame>
    <Frame grow={1} flex="col" gap={0}>
      <Text w="fill" font={FB} size={14} weight={800} lineHeight={18} color={C.n900}>{p.n}</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{q}</Text>
    </Frame>
    <Text font={FB} size={14} weight={700} lineHeight={18} color={C.n900}>{v}</Text>
  </Frame>
)
const itens = (
  <Frame name="Itens do pedido" w="fill" flex="col" gap={14} p={24} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>Itens do pedido</Text>
      <Text font={FB} size={14} lineHeight={18} color={C.n600}>6 itens</Text>
    </Frame>
    {itemLinha(P.abacate, '2 un · pra hoje', 'R$ 8,51')}
    {itemLinha(P.banana, '1 kg · em 2–3 dias', 'R$ 6,99')}
    {itemLinha(P.tomate, '6 un · mais firmes', 'R$ 6,20')}
    {itemLinha({ ...P.alface, n: 'Alface Americana' }, '1 un · troca', 'R$ 3,49')}
    {itemLinha(P.queijo, '1 peça', 'R$ 19,95')}
    {itemLinha(P.suco, '1 garrafa', 'R$ 12,90')}
    {Divider()}
    {DSummaryRow('Entrega', 'R$ 6,90')}
    {DSummaryRow('Total', 'R$ 64,94', { bold: true })}
  </Frame>
)
return DScreen('W09 · Acompanhar pedido', [
  DHeader({ count: 'Carrinho', total: 'R$ 0,00' }),
  <Frame name="Conteúdo" w="fill" flex="col" gap={20} px={MX} pt={24}>
    <Frame name="Topo da página" w="fill" flex="row" items="end" justify="between">
      <Frame flex="col" gap={8}>
        {DCrumbs(['Início', 'Meus pedidos', 'Pedido #4821'])}
        <Frame flex="row" items="end" gap={12}>
          <Text font={FD} size={36} weight={600} lineHeight={42} color={C.g900}>Pedido #4821</Text>
          <Text font={FB} size={15} lineHeight={30} color={C.n600}>Feito hoje às 13:42</Text>
        </Frame>
      </Frame>
      {Btn({ label: 'Falar com a loja no WhatsApp', kind: 'secondary', icon: 'message-circle', size: 'm' })}
    </Frame>
    {statusCard}
    <Frame name="Corpo" w="fill" flex="row" gap={32} items="start">
      <Frame name="Coluna principal" grow={1} flex="row" gap={20} items="stretch">
        {troca}
        {pesagem}
      </Frame>
      <Frame name="Coluna lateral" w={400} flex="col">{itens}</Frame>
    </Frame>
  </Frame>,
])
