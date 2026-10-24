const passo = (title, time, state, desc, last) => {
  const done = state === 'done', now = state === 'now'
  return (
    <Frame name={'Status/' + title} w="fill" flex="row" gap={12} items="stretch">
      <Frame name="Marcador" w={28} flex="col" items="center">
        <Frame w={28} h={28} rounded={14} bg={done ? C.g900 : (now ? C.c400 : C.white)} stroke={done ? C.g900 : (now ? C.g900 : C.n200)} strokeWidth={now ? 2 : 1.5} flex="row" items="center" justify="center">
          {done ? I('check', 16, C.white) : (now ? <Frame w={10} h={10} rounded={5} bg={C.g900} /> : null)}
        </Frame>
        {last ? null : <Frame w={2} grow={1} minH={18} bg={done ? C.g900 : C.n200} />}
      </Frame>
      <Frame grow={1} flex="col" gap={2} pb={last ? 0 : 16}>
        <Frame w="fill" flex="row" items="center" justify="between">
          <Text font={FB} size={15} weight={now || done ? 800 : 600} lineHeight={20} color={done || now ? C.n900 : C.n500}>{title}</Text>
          <Text font={FB} size={12} weight={700} lineHeight={16} color={now ? C.g700 : C.n600}>{time}</Text>
        </Frame>
        {desc ? <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{desc}</Text> : null}
      </Frame>
    </Frame>
  )
}

const hero = (
  <Frame name="Previsão" w="fill" h={132} rounded={20} bg={C.g900} overflow="hidden">
    <Ellipse position="absolute" x={238} y={-30} w={180} h={180} fill="#FFFFFF12" />
    <Frame position="absolute" x={262} y={24}>{E('basket', 84)}</Frame>
    <Frame position="absolute" x={18} y={18} w={230} flex="col" gap={4}>
      <Text font={FB} size={12} weight={800} lineHeight={16} letterSpacing={0.8} color={C.y400}>PREVISÃO DE ENTREGA</Text>
      <Text font={FD} size={26} weight={600} lineHeight={32} color={C.white}>Hoje, 16h–18h</Text>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.c200}>Rua das Flores, 120 · Centro</Text>
    </Frame>
  </Frame>
)

const linha = (
  <Frame name="Linha do tempo" w="fill" flex="col" p={16} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
    {passo('Pedido recebido', '13:42', 'done')}
    {passo('Pagamento aprovado', '13:43', 'done', 'Pix · R$ 65,62')}
    {passo('Separando seu pedido', 'agora', 'now', 'A Joana está escolhendo seus itens, um por um.')}
    {passo('Saiu para entrega', '—', 'next')}
    {passo('Entregue', '—', 'next', null, true)}
  </Frame>
)

const troca = (
  <Frame name="Aviso/Troca de item" w="fill" flex="col" gap={12} p={16} rounded={16} bg={C.a100} stroke="#F1DDAF" strokeWidth={1}>
    <Frame w="fill" flex="row" gap={10} items="start">
      {I('repeat-2', 20, C.a700)}
      <Frame grow={1} flex="col" gap={2}>
        <Text w="fill" font={FB} size={14} weight={800} lineHeight={20} color={C.a700}>Trocamos 1 item</Text>
        <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n900}>A alface crespa acabou. Separamos uma alface americana, pelo mesmo preço.</Text>
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" items="center" gap={10}>
      <Frame w={44} h={44} rounded={12} bg={TINT.verduras} flex="row" items="center" justify="center">{E('leafy-green', 30)}</Frame>
      {I('arrow-right', 16, C.n600)}
      <Frame w={44} h={44} rounded={12} bg={TINT.verduras} flex="row" items="center" justify="center">{E('green-salad', 30)}</Frame>
      <Frame grow={1} h={1} />
      {Btn({ label: 'Desfazer', kind: 'secondary', size: 's' })}
      {Btn({ label: 'Tudo bem', kind: 'primary', size: 's' })}
    </Frame>
  </Frame>
)

const ajuste = (p, l, r) => (
  <Frame name={'Ajuste/' + p} w="fill" flex="row" items="center" justify="between" gap={12}>
    <Text grow={1} font={FB} size={13} lineHeight={18} color={C.n900}>{l}</Text>
    <Text font={FB} size={13} weight={800} lineHeight={18} color={C.g700}>{r}</Text>
  </Frame>
)
const pesagem = (
  <Frame name="Ajuste de peso" w="fill" flex="col" gap={10} p={16} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="center" gap={8}>
      {I('scale', 18, C.g900)}
      <Text grow={1} font={FD} size={17} weight={600} lineHeight={22} color={C.g900}>Ajuste de peso</Text>
    </Frame>
    {ajuste('Abacate', 'Abacate · 2 un pesaram 860 g', '− R$ 0,41')}
    {ajuste('Tomate', 'Tomate · 6 un pesaram 690 g', '− R$ 0,27')}
    {Divider()}
    <Frame w="fill" flex="row" items="center" gap={8}>
      {I('piggy-bank', 18, C.g700)}
      <Text grow={1} font={FB} size={13} weight={700} lineHeight={18} color={C.n900}>Você economizou <Span weight={800} color={C.g700}>R$ 0,68</Span>. Devolvemos no Pix após a entrega.</Text>
    </Frame>
  </Frame>
)

const itens = (
  <Frame name="Itens do pedido" w="fill" h={64} flex="row" items="center" gap={12} px={16} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame name="Miniaturas" w={114} h={36}>
      {['avocado', 'banana', 'tomato', 'cheese-wedge'].map((e, i) => (
        <Frame position="absolute" x={i * 26} y={0} w={36} h={36} rounded={18} bg={C.c200} stroke={C.white} strokeWidth={2} flex="row" items="center" justify="center">{E(e, 22)}</Frame>
      ))}
    </Frame>
    <Text grow={1} font={FB} size={14} weight={800} lineHeight={20} color={C.n900}>6 itens</Text>
    <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Ver detalhes</Text>
    {I('chevron-right', 16, C.g700)}
  </Frame>
)

return Screen('09 · Acompanhar pedido', [
  TopBar('Pedido #4821', { sub: 'Feito hoje às 13:42' }),
  <Frame name="Conteúdo" w="fill" flex="col" gap={16} px={16} pt={8} pb={24}>
    {hero}
    {linha}
    {troca}
    {pesagem}
    {itens}
    {Btn({ label: 'Falar com a loja no WhatsApp', kind: 'secondary', icon: 'message-circle', w: 'fill' })}
  </Frame>,
  <Frame grow={1} />,
  BottomNav('Pedidos'),
])
