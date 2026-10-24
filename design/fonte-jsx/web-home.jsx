const banner = (
  <Frame name="Banner/Ofertas da semana" grow={1} h="fill" rounded={24} bg={C.g900} overflow="hidden">
    <Ellipse name="Decoração" position="absolute" x={430} y={-120} w={520} h={520} fill="#FFFFFF12" />
    <Ellipse name="Decoração 2" position="absolute" x={640} y={200} w={260} h={260} fill="#F6E29826" />
    <Frame name="Ilustração" position="absolute" x={470} y={20} w={380} h={310}>
      <Frame position="absolute" x={110} y={0} w={170} h={170}>{E('watermelon', 170)}</Frame>
      <Frame position="absolute" x={0} y={120} w={150} h={150} rotate={-12}>{E('pineapple', 150)}</Frame>
      <Frame position="absolute" x={230} y={150} w={130} h={130}>{E('grapes', 130)}</Frame>
      <Frame position="absolute" x={140} y={190} w={96} h={96}>{E('strawberry', 96)}</Frame>
      <Frame position="absolute" x={270} y={40} w={84} h={84}>{E('tangerine', 84)}</Frame>
    </Frame>
    <Frame name="Texto" position="absolute" x={48} y={44} w={440} flex="col" gap={12}>
      <Text font={FB} size={14} weight={800} lineHeight={18} letterSpacing={1} color={C.y400}>OFERTAS DA SEMANA</Text>
      <Text w="fill" font={FD} size={44} weight={600} lineHeight={50} color={C.c50}>Até 30% off em frutas da estação</Text>
      <Text w="fill" font={FB} size={18} lineHeight={26} color={C.c200}>Morango, laranja, abacaxi e mais. Válido até domingo.</Text>
      <Frame name="Espaço" w={1} h={4} />
      <Frame name="Botão/Ver ofertas" h={48} flex="row" items="center" gap={8} px={20} rounded={14} bg={C.c400}>
        <Text font={FB} size={16} weight={800} lineHeight={20} color={C.g900}>Ver ofertas</Text>
        {I('arrow-right', 18, C.g900)}
      </Frame>
    </Frame>
    <Frame name="Paginação" position="absolute" x={48} y={308} flex="row" gap={6}>
      <Frame w={22} h={6} rounded={3} bg={C.c400} />
      <Frame w={6} h={6} rounded={3} bg="#FFFFFF66" />
      <Frame w={6} h={6} rounded={3} bg="#FFFFFF66" />
    </Frame>
  </Frame>
)

const miniItens = ['banana', 'tomato', 'leafy-green', 'cheese-wedge']
const cardRepetir = (
  <Frame name="Atalho/Repetir último pedido" w="fill" grow={1} flex="row" items="center" gap={16} p={24} rounded={24} bg={C.c200} stroke="#EFDCA0" strokeWidth={1}>
    <Frame grow={1} flex="col" gap={8}>
      <Frame w={44} h={44} rounded={22} bg={C.white} flex="row" items="center" justify="center">{I('repeat-2', 22, C.g900)}</Frame>
      <Text w="fill" font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>Repetir último pedido</Text>
      <Text w="fill" font={FB} size={14} lineHeight={20} color={C.n900}>12 itens · R$ 86,40 · pedido de 16/10</Text>
      <Frame flex="row" items="center" gap={4}>
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.g900}>Repetir pedido</Text>
        {I('arrow-right', 16, C.g900)}
      </Frame>
    </Frame>
    <Frame name="Itens" w={108} h={108}>
      {miniItens.map((e, i) => (
        <Frame position="absolute" x={(i % 2) * 56} y={Math.floor(i / 2) * 56} w={52} h={52} rounded={26} bg={C.white} stroke={C.c200} strokeWidth={2} flex="row" items="center" justify="center">{E(e, 32)}</Frame>
      ))}
    </Frame>
  </Frame>
)
const cardPonto = (
  <Frame name="Atalho/Ponto da fruta" w="fill" grow={1} flex="row" items="center" gap={16} p={24} rounded={24} bg={C.g50} stroke={C.g100} strokeWidth={1}>
    <Frame grow={1} flex="col" gap={8}>
      {Badge('Só no Verdurão', 'fresco')}
      <Text w="fill" font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>Você escolhe o ponto da fruta</Text>
      <Text w="fill" font={FB} size={14} lineHeight={20} color={C.n900}>Pra hoje, em 2–3 dias ou mais verde.</Text>
      <Frame flex="row" items="center" gap={4}>
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.g700}>Como funciona</Text>
        {I('arrow-right', 16, C.g700)}
      </Frame>
    </Frame>
    <Frame w={108} h={108} rounded={54} bg={TINT.frutas} flex="row" items="center" justify="center">{E('avocado', 76)}</Frame>
  </Frame>
)

const catTile = ([label, e, cat]) => (
  <Frame name={'Categoria/' + label} w="fill" grow={1} h={128} flex="col" items="center" justify="center" gap={10} rounded={20} bg={TINT[cat]}>
    {E(e, 56)}
    <Text font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{label}</Text>
  </Frame>
)

return DScreen('W01 · Home', [
  DHeader({}),
  <Frame name="Conteúdo" w="fill" flex="col" gap={40} px={MX} pt={32}>
    <Frame name="Destaques" w="fill" h={340} flex="row" gap={24}>
      {banner}
      <Frame name="Atalhos" w={420} h="fill" flex="col" gap={20}>
        {cardRepetir}
        {cardPonto}
      </Frame>
    </Frame>
    <Frame name="Seção/Categorias" w="fill" flex="col" gap={16}>
      {DSection('Categorias', 'Ver todas')}
      <Frame w="fill" flex="row" gap={16}>{CATS.map(catTile)}</Frame>
    </Frame>
    <Frame name="Seção/Compre de novo" w="fill" flex="col" gap={16}>
      {DSection('Compre de novo', 'Ver lista', 'Seus itens de sempre, a um toque')}
      <Frame flex="row" gap={16}>
        {MiniCard(P.banana, { w: 164, qty: '1 kg' })}
        {MiniCard(P.tomate, { w: 164, qty: '6 un' })}
        {MiniCard(P.alface, { w: 164, qty: '1 un', first: true })}
        {MiniCard(P.queijo, { w: 164, qty: '1 un', first: true })}
        {MiniCard(P.ovos, { w: 164 })}
        {MiniCard(P.cafe, { w: 164 })}
        {MiniCard(P.limao, { w: 164 })}
      </Frame>
    </Frame>
  </Frame>,
])
