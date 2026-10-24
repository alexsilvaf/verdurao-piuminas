const thumb = (on, rot, size) => (
  <Frame name={on ? 'Miniatura/atual' : 'Miniatura'} w={96} h={96} rounded={16} bg={TINT.frutas} stroke={on ? C.g900 : BORDER} strokeWidth={on ? 2 : 1} flex="row" items="center" justify="center">
    <Frame w={size} h={size} rotate={rot}>{E('avocado', size)}</Frame>
  </Frame>
)
const galeria = (
  <Frame name="Galeria" w={600} flex="col" gap={12}>
    <Frame name="Imagem principal" w={600} h={520} rounded={28} bg={TINT.frutas} flex="col" items="center" justify="center">
      <Ellipse name="Sombra" position="absolute" x={170} y={400} w={260} h={34} fill="#C9862A26" />
      {E('avocado', 300)}
      <Frame name="Selos" position="absolute" x={20} y={20} flex="row" gap={6}>{Badge('Chegou hoje', 'fresco')}</Frame>
      <Frame name="Ações" position="absolute" x={476} y={16} flex="row" gap={8}>
        {IconBtn('share-2', { size: 48, bg: C.white, name: 'Compartilhar' })}
        {IconBtn('heart', { size: 48, bg: C.white, name: 'Favoritar' })}
      </Frame>
    </Frame>
    <Frame name="Miniaturas" flex="row" gap={12}>
      {thumb(true, 0, 64)}
      {thumb(false, -25, 70)}
      {thumb(false, 20, 56)}
    </Frame>
  </Frame>
)
const opcao = (title, desc, cor, on) => (
  <Frame name={'Maturação/' + title} w="fill" grow={1} flex="row" items="center" gap={12} p={16} rounded={16} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    <Frame w={30} h={30} rounded={15} bg={cor} stroke="#FFFFFF" strokeWidth={2} shadow="0 0 0 1 #1F2A2626" />
    <Frame grow={1} flex="col" gap={2}>
      <Text w="fill" font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{title}</Text>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{desc}</Text>
    </Frame>
    {Radio(on)}
  </Frame>
)
const info = (
  <Frame name="Informações" grow={1} flex="col" gap={22}>
    <Frame w="fill" flex="col" gap={8}>
      <Frame flex="row" items="center" gap={6}>
        {I('sprout', 16, C.g700)}
        <Text font={FB} size={14} weight={700} lineHeight={18} color={C.g700}>Produtor parceiro · Espírito Santo</Text>
      </Frame>
      <Text font={FD} size={44} weight={600} lineHeight={50} color={C.g900}>Abacate</Text>
      <Frame w="fill" flex="row" items="end" justify="between">
        <Frame flex="row" items="end" gap={6}>
          <Text font={FD} size={40} weight={600} lineHeight={44} color={C.w900}>R$ 4,46</Text>
          <Text font={FB} size={16} lineHeight={32} color={C.n600}>/unidade</Text>
        </Frame>
        <Text font={FB} size={16} weight={700} lineHeight={22} color={C.n600}>R$ 9,90/kg</Text>
      </Frame>
      <Text font={FB} size={14} lineHeight={20} color={C.n600}>Cada unidade pesa em média 450 g</Text>
    </Frame>
    {Divider()}
    <Frame name="Seção/Ponto de maturação" w="fill" flex="col" gap={12}>
      <Frame w="fill" flex="row" items="center" justify="between">
        <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>Ponto de maturação</Text>
        <Frame h={24} px={10} rounded={12} bg={C.c200} flex="row" items="center"><Text font={FB} size={12} weight={800} lineHeight={16} color={C.a700}>Escolha 1</Text></Frame>
      </Frame>
      <Frame w="fill" flex="row" gap={12}>
        {opcao('Pra hoje', 'Macio, pronto pra comer', '#3E4A26', true)}
        {opcao('Em 2–3 dias', 'Firme, amadurece em casa', '#5F7F2C', false)}
        {opcao('Mais verde', 'Bem firme, 4+ dias', '#8DBB3B', false)}
      </Frame>
    </Frame>
    <Frame name="Seção/Quantidade" w="fill" flex="row" items="center" gap={20}>
      <Frame flex="col" gap={10}>
        <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>Quantidade</Text>
        {Segmented(['Unidade', 'Quilo'], 'Unidade')}
      </Frame>
      <Frame grow={1} flex="row" items="center" gap={16} justify="end">
        {Stepper({ qty: '2 un', h: 52, w: 180, kind: 'outline' })}
        <Frame flex="col" gap={0}>
          <Text font={FB} size={16} weight={800} lineHeight={22} color={C.n900}>≈ 900 g</Text>
          <Text font={FB} size={14} lineHeight={20} color={C.n600}>R$ 8,92 estimado</Text>
        </Frame>
      </Frame>
    </Frame>
    {Field({ label: 'Alguma preferência? (opcional)', placeholder: 'Ex.: tamanhos parecidos, sem manchas', icon: 'pencil-line', name: 'Campo/Observação' })}
    <Frame name="Ações" w="fill" flex="row" gap={12}>
      {Btn({ label: 'Adicionar 2 un · R$ 8,92', icon: 'shopping-basket', w: 'fill' })}
      {IconBtn('heart', { size: 52, bg: C.white, stroke: C.n200, name: 'Favoritar' })}
    </Frame>
    {InfoBox({ icon: 'scale', title: 'Produto pesável', text: 'O valor final é calculado pelo peso real na separação. Se ficar mais barato, a diferença volta pra você.', kind: 'alerta', name: 'Aviso/Peso variável' })}
  </Frame>
)
return DScreen('W04 · Produto · Abacate', [
  DHeader({ active: 'Frutas' }),
  <Frame name="Conteúdo" w="fill" flex="col" gap={20} px={MX} pt={24}>
    {DCrumbs(['Início', 'Frutas', 'Abacate'])}
    <Frame name="Produto" w="fill" flex="row" gap={56} items="start">
      {galeria}
      {info}
    </Frame>
    <Frame name="Seção/Combina com" w="fill" flex="col" gap={16} pt={24}>
      {DSection('Combina com', 'Ver receita', 'Pra um guacamole caprichado')}
      <Frame flex="row" gap={16}>
        {MiniCard(P.tomate, { w: 164 })}
        {MiniCard(P.limao, { w: 164 })}
        {MiniCard(P.cebola, { w: 164 })}
        {MiniCard(P.cheiro, { w: 164 })}
      </Frame>
    </Frame>
  </Frame>,
])
