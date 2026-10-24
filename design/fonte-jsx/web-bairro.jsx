// Piúma tem CEP único (29285-000): a área de entrega é definida pelo bairro.
// Taxas e horários são ilustrativos — confirmar com o Verdurão.
const BAIRROS = [
  ['Centro', 'Hoje, 16h–18h', 'R$ 6,90', true],
  ['Piuminas', 'Hoje, 16h–18h', 'R$ 4,90'],
  ['Acaiaca', 'Hoje, 16h–18h', 'R$ 6,90'],
  ['Niterói', 'Hoje, 16h–18h', 'R$ 6,90'],
  ['Portinho', 'Hoje, 16h–18h', 'R$ 6,90'],
  ['Itaputanga', 'Hoje, 18h–20h', 'R$ 8,90'],
  ['Céu Azul', 'Hoje, 18h–20h', 'R$ 8,90'],
  ['Jardim Maily', 'Hoje, 18h–20h', 'R$ 8,90'],
]
const cardBairro = ([nome, janela, taxa, on]) => (
  <Frame name={'Bairro/' + nome} w="fill" grow={1} h={64} flex="row" items="center" gap={12} px={14} rounded={14} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    {Radio(!!on)}
    <Frame grow={1} flex="col" gap={0}>
      <Text w="fill" font={FB} size={15} weight={on ? 800 : 700} lineHeight={20} color={C.n900}>{nome}</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{janela}</Text>
    </Frame>
    <Text font={FB} size={14} weight={800} lineHeight={20} color={on ? C.g900 : C.n900}>{taxa}</Text>
  </Frame>
)
const pares = [0, 2, 4, 6].map((i) => [BAIRROS[i], BAIRROS[i + 1]])
const modal = (
  <Frame name="Modal/Bairro" w={640} flex="col" gap={18} p={32} rounded={28} bg={C.white} shadow="0 24 64 #05332840">
    <Frame w="fill" flex="row" items="start" justify="between" gap={16}>
      <Frame grow={1} flex="col" gap={6}>
        <Text w="fill" font={FD} size={28} weight={600} lineHeight={34} color={C.g900}>Onde vamos entregar?</Text>
        <Text w="fill" font={FB} size={16} lineHeight={24} color={C.n600}>Entregamos em toda Piúma. Escolha seu bairro pra ver a taxa e o próximo horário.</Text>
      </Frame>
      {IconBtn('x', { size: 40, bg: C.n100, name: 'Fechar' })}
    </Frame>
    <Frame name="Busca de bairro" w="fill" h={48} flex="row" items="center" gap={10} px={14} rounded={12} bg={C.white} stroke={C.n200} strokeWidth={1}>
      {I('search', 20, C.n600)}
      <Text grow={1} font={FB} size={16} lineHeight={22} color={C.n500}>Buscar bairro</Text>
    </Frame>
    <Frame name="Bairros" w="fill" flex="col" gap={10}>
      {pares.map(([a, b]) => (
        <Frame w="fill" flex="row" gap={10}>{cardBairro(a)}{cardBairro(b)}</Frame>
      ))}
    </Frame>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Frame flex="row" items="center" gap={6}>
        {I('sparkles', 16, C.g700)}
        <Text font={FB} size={13} lineHeight={18} color={C.n600}>Frete grátis acima de R$ 80 · pedido mínimo R$ 30</Text>
      </Frame>
      <Frame flex="row" items="center" gap={4}>
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Ver todos os 18 bairros</Text>
        {I('chevron-down', 16, C.g700)}
      </Frame>
    </Frame>
    {InfoBox({ icon: 'message-circle', text: 'Mora no interior (Aghá, Orobó, Taquaral…)? Fale com a gente no WhatsApp pra combinar a entrega.', kind: 'creme', name: 'Aviso/Interior' })}
    {Btn({ label: 'Começar a comprar', w: 'fill', iconR: 'arrow-right' })}
    <Frame w="fill" flex="row" justify="center" items="center" gap={6} h={32}>
      {I('locate-fixed', 18, C.g700)}
      <Text font={FB} size={15} weight={800} lineHeight={20} color={C.g700}>Descobrir meu bairro pela localização</Text>
    </Frame>
  </Frame>
)
return (
  <Frame name="W02 · Bairro · Área de entrega" w={DW} h={DH} bg={C.c50} overflow="hidden">
    <Frame name="Fundo (Home)" position="absolute" x={0} y={0} w={DW} h={DH} />
    <Rectangle name="Escurecer" position="absolute" x={0} y={0} w={DW} h={DH} fill="#1F2A26" opacity={0.6} />
    <Frame name="Centro" position="absolute" x={0} y={0} w={DW} h={DH} flex="col" items="center" justify="center">
      {modal}
    </Frame>
  </Frame>
)
