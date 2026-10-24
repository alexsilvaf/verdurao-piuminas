const imagem = (
  <Frame name="Imagem do produto" w="fill" h={320} bg={TINT.frutas} roundedBL={28} roundedBR={28} flex="col" items="center" justify="center" pt={20}>
    <Ellipse name="Sombra" position="absolute" x={115} y={240} w={160} h={22} fill="#C9862A26" />
    {E('avocado', 184)}
    <Frame name="Ações" position="absolute" x={12} y={12} w={366} flex="row" justify="between">
      {IconBtn('arrow-left', { size: 44, bg: C.white, name: 'Voltar' })}
      <Frame flex="row" gap={8}>
        {IconBtn('share-2', { size: 44, bg: C.white, name: 'Compartilhar' })}
        {IconBtn('heart', { size: 44, bg: C.white, name: 'Favoritar' })}
      </Frame>
    </Frame>
    <Frame name="Selos" position="absolute" x={16} y={282} flex="row" gap={6}>
      {Badge('Chegou hoje', 'fresco')}
    </Frame>
    <Frame name="Fotos" position="absolute" x={330} y={282} h={22} px={8} rounded={11} bg="#1F2A2699" flex="row" items="center">
      <Text font={FB} size={12} weight={800} lineHeight={16} color={C.white}>1/3</Text>
    </Frame>
  </Frame>
)

const titulo = (
  <Frame name="Título e preço" w="fill" flex="col" gap={8}>
    <Frame flex="row" items="center" gap={6}>
      {I('sprout', 16, C.g700)}
      <Text font={FB} size={13} weight={700} lineHeight={18} color={C.g700}>Produtor parceiro · Espírito Santo</Text>
    </Frame>
    <Text font={FD} size={28} weight={600} lineHeight={34} color={C.g900}>Abacate</Text>
    <Frame w="fill" flex="row" items="end" justify="between">
      <Frame flex="row" items="end" gap={4}>
        <Text font={FD} size={28} weight={600} lineHeight={32} color={C.w900}>R$ 4,46</Text>
        <Text font={FB} size={14} lineHeight={24} color={C.n600}>/unidade</Text>
      </Frame>
      <Text font={FB} size={14} weight={700} lineHeight={20} color={C.n600}>R$ 9,90/kg</Text>
    </Frame>
    <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>Cada unidade pesa em média 450 g</Text>
  </Frame>
)

const opcao = (title, desc, cor, on) => (
  <Frame name={'Maturação/' + title} w="fill" grow={1} flex="col" gap={8} p={12} rounded={14} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Frame w={26} h={26} rounded={13} bg={cor} stroke="#FFFFFF" strokeWidth={2} shadow="0 0 0 1 #1F2A2626" />
      {Radio(on)}
    </Frame>
    <Text w="fill" font={FB} size={14} weight={800} lineHeight={18} color={C.n900}>{title}</Text>
    <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{desc}</Text>
  </Frame>
)
const maturacao = (
  <Frame name="Seção/Ponto de maturação" w="fill" flex="col" gap={12}>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Text font={FD} size={18} weight={600} lineHeight={24} color={C.g900}>Ponto de maturação</Text>
      <Frame h={22} px={8} rounded={11} bg={C.c200} flex="row" items="center"><Text font={FB} size={12} weight={800} lineHeight={16} color={C.a700}>Escolha 1</Text></Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={8} items="stretch">
      {opcao('Pra hoje', 'Macio, pronto pra comer', '#3E4A26', true)}
      {opcao('Em 2–3 dias', 'Firme, amadurece em casa', '#5F7F2C', false)}
      {opcao('Mais verde', 'Bem firme, 4 dias ou mais', '#8DBB3B', false)}
    </Frame>
  </Frame>
)

const quantidade = (
  <Frame name="Seção/Quantidade" w="fill" flex="col" gap={12}>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Text font={FD} size={18} weight={600} lineHeight={24} color={C.g900}>Quantidade</Text>
      {Segmented(['Unidade', 'Quilo'], 'Unidade')}
    </Frame>
    <Frame w="fill" flex="row" items="center" gap={16}>
      {Stepper({ qty: '2 un', h: 52, w: 168, kind: 'outline' })}
      <Frame flex="col" gap={0}>
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>≈ 900 g</Text>
        <Text font={FB} size={13} lineHeight={18} color={C.n600}>R$ 8,92 estimado</Text>
      </Frame>
    </Frame>
  </Frame>
)

const obs = Field({ label: 'Alguma preferência? (opcional)', placeholder: 'Ex.: tamanhos parecidos, sem manchas', icon: 'pencil-line', name: 'Campo/Observação' })
const pesavel = InfoBox({ icon: 'scale', title: 'Produto pesável', text: 'O valor final é calculado pelo peso real na separação. Se ficar mais barato, a diferença volta pra você.', kind: 'alerta', name: 'Aviso/Peso variável' })

const acc = (icon, title, open, text) => (
  <Frame name={'Detalhe/' + title} w="fill" flex="col" gap={8} px={16} py={14}>
    <Frame w="fill" flex="row" items="center" gap={10}>
      {I(icon, 20, C.g700)}
      <Text grow={1} font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{title}</Text>
      {I(open ? 'chevron-up' : 'chevron-down', 20, C.n600)}
    </Frame>
    {open ? <Text w="fill" font={FB} size={14} lineHeight={20} color={C.n600}>{text}</Text> : null}
  </Frame>
)
const detalhes = (
  <Frame name="Detalhes do produto" w="fill" flex="col" rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
    {acc('thermometer-snowflake', 'Como conservar', true, 'Deixe fora da geladeira até amadurecer. Depois de maduro, guarde na geladeira por até 3 dias.')}
    {Divider()}
    {acc('leaf', 'Informação nutricional', false)}
    {Divider()}
    {acc('store', 'Origem e produtor', false)}
  </Frame>
)

const combina = (
  <Frame name="Seção/Combina com" w="fill" flex="col" gap={12}>
    {SectionHead('Combina com', null, 'Pra um guacamole caprichado')}
    <Frame flex="row" gap={12}>
      {MiniCard(P.tomate, { w: 108 })}
      {MiniCard(P.limao, { w: 108 })}
      {MiniCard(P.cebola, { w: 108 })}
    </Frame>
  </Frame>
)

return Screen('04 · Produto · Abacate', [
  imagem,
  <Frame name="Conteúdo" w="fill" flex="col" gap={24} px={16} pt={20} pb={24}>
    {titulo}
    {maturacao}
    {quantidade}
    {obs}
    {pesavel}
    {detalhes}
    {combina}
  </Frame>,
  StickyBottom([
    <Frame name="Total" flex="col" gap={0}>
      <Text font={FB} size={12} lineHeight={16} color={C.n600}>Total estimado</Text>
      <Text font={FD} size={22} weight={600} lineHeight={26} color={C.w900}>R$ 8,92</Text>
    </Frame>,
    Btn({ label: 'Adicionar 2 un', icon: 'shopping-basket', w: 'fill' }),
  ]),
])
