// Piúma tem CEP único (29285-000): a área de entrega é definida pelo bairro.
// Taxas e horários são ilustrativos — confirmar com o Verdurão.
const BAIRROS = [
  ['Centro', 'Hoje, 16h–18h', 'R$ 6,90', true],
  ['Piuminas', 'Hoje, 16h–18h', 'R$ 4,90'],
  ['Acaiaca', 'Hoje, 16h–18h', 'R$ 6,90'],
  ['Itaputanga', 'Hoje, 18h–20h', 'R$ 8,90'],
]
const linhaBairro = ([nome, janela, taxa, on]) => (
  <Frame name={'Bairro/' + nome} w="fill" h={56} flex="row" items="center" gap={12} px={14} bg={on ? C.g50 : '#FFFFFF00'}>
    {Radio(!!on)}
    <Frame grow={1} flex="col" gap={0}>
      <Text w="fill" font={FB} size={15} weight={on ? 800 : 700} lineHeight={20} color={C.n900}>{nome}</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{'Próxima entrega: ' + janela}</Text>
    </Frame>
    <Text font={FB} size={14} weight={800} lineHeight={20} color={on ? C.g900 : C.n900}>{taxa}</Text>
  </Frame>
)
const lista = (
  <Frame name="Lista de bairros" w="fill" flex="col" rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1} overflow="hidden">
    {BAIRROS.map((b, i) => [i > 0 ? Divider() : null, linhaBairro(b)])}
    {Divider()}
    <Frame name="Ver todos os bairros" w="fill" h={44} flex="row" items="center" justify="center" gap={4}>
      <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Ver todos os 18 bairros</Text>
      {I('chevron-down', 16, C.g700)}
    </Frame>
  </Frame>
)
const sheet = (
  <Frame name="Folha inferior/Bairro" w="fill" flex="col" gap={14} px={20} pt={10} pb={24} bg={C.white} roundedTL={28} roundedTR={28} shadow="0 -8 32 #1F2A2633">
    <Frame name="Alça" w="fill" flex="row" justify="center"><Frame w={40} h={5} rounded={3} bg={C.n200} /></Frame>
    <Frame w="fill" flex="row" items="start" justify="between" gap={12}>
      <Frame grow={1} flex="col" gap={4}>
        <Text w="fill" font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>Onde vamos entregar?</Text>
        <Text w="fill" font={FB} size={14} lineHeight={20} color={C.n600}>Entregamos em toda Piúma. Escolha seu bairro pra ver a taxa e o próximo horário.</Text>
      </Frame>
      {IconBtn('x', { size: 40, bg: C.n100, name: 'Fechar' })}
    </Frame>
    <Frame name="Busca de bairro" w="fill" h={48} flex="row" items="center" gap={10} px={14} rounded={12} bg={C.white} stroke={C.n200} strokeWidth={1}>
      {I('search', 20, C.n600)}
      <Text grow={1} font={FB} size={16} lineHeight={22} color={C.n500}>Buscar bairro</Text>
    </Frame>
    {lista}
    <Frame w="fill" flex="row" items="center" gap={6}>
      {I('sparkles', 14, C.g700)}
      <Text grow={1} font={FB} size={12} lineHeight={16} color={C.n600}>Frete grátis acima de R$ 80 · pedido mínimo R$ 30</Text>
    </Frame>
    {InfoBox({ icon: 'message-circle', text: 'Mora no interior (Aghá, Orobó, Taquaral…)? Fale com a gente no WhatsApp pra combinar a entrega.', kind: 'creme', name: 'Aviso/Interior' })}
    {Btn({ label: 'Começar a comprar', w: 'fill', iconR: 'arrow-right' })}
    <Frame w="fill" flex="row" justify="center" items="center" gap={6} h={36}>
      {I('locate-fixed', 18, C.g700)}
      <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Descobrir meu bairro pela localização</Text>
    </Frame>
  </Frame>
)
return (
  <Frame name="02 · Bairro · Área de entrega" w={390} h={844} flex="col" justify="end" bg={C.c50} overflow="hidden">
    <Frame name="Fundo (Home)" position="absolute" x={0} y={0} w={390} h={844} />
    <Rectangle name="Escurecer" position="absolute" x={0} y={0} w={390} h={844} fill="#1F2A26" opacity={0.55} />
    {sheet}
  </Frame>
)
