const sub = ['Todas', 'Da estação', 'Tropicais', 'Cítricas', 'Vermelhas', 'Prontas pra comer']
const topo = (
  <Frame name="Topo" w="fill" flex="col" gap={0} bg={C.c50}>
    {TopBar('Frutas', { sub: '48 produtos', right: [IconBtn('search', { size: 40, bg: C.white, stroke: BORDER, name: 'Buscar' })] })}
    <Frame name="Subcategorias" w="fill" flex="row" gap={8} px={16} pt={4} pb={12}>
      {sub.map((s, i) => Chip(s, i === 0))}
    </Frame>
    <Frame name="Ferramentas" w="fill" h={44} flex="row" items="center" justify="between" px={16} strokeWeights={{ top: 1, bottom: 1 }} stroke={BORDER} bg={C.white}>
      <Frame name="Ordenar" flex="row" items="center" gap={6} h={44}>
        {I('arrow-up-down', 16, C.g900)}
        <Text font={FB} size={14} lineHeight={18} color={C.n600}>Ordenar:</Text>
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Mais vendidos</Text>
        {I('chevron-down', 16, C.g900)}
      </Frame>
      <Frame name="Filtros" flex="row" items="center" gap={6} h={32} px={12} rounded={16} bg={C.g100}>
        {I('sliders-horizontal', 16, C.g900)}
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Filtros</Text>

      </Frame>
    </Frame>
  </Frame>
)

const filtroAtivo = (
  <Frame name="Filtros ativos" w="fill" flex="row" items="center" gap={8}>
    <Frame name="Filtro/Em oferta" h={30} flex="row" items="center" gap={6} pl={12} pr={8} rounded={15} bg={C.white} stroke={C.g900} strokeWidth={1}>
      <Text font={FB} size={13} weight={700} lineHeight={16} color={C.g900}>Em oferta</Text>
      {I('x', 14, C.g900)}
    </Frame>
    <Text font={FB} size={13} weight={800} lineHeight={16} color={C.g700}>Limpar</Text>
  </Frame>
)

const dica = InfoBox({ icon: 'sparkles', title: 'Escolha o ponto da fruta', text: 'Em abacate, banana, manga e mamão você diz se quer pra hoje ou pra daqui a uns dias.', kind: 'creme', name: 'Dica/Maturação' })

return Screen('03 · Categoria · Frutas', [
  topo,
  <Frame name="Conteúdo" w="fill" flex="col" gap={16} px={16} pt={16} pb={20}>

    {dica}
    <Frame name="Grade de produtos" w="fill" flex="row" wrap gap={12} rowGap={12}>
      {Card(P.morango)}
      {Card(P.banana, { qty: '1 kg' })}
      {Card(P.abacate)}
      {Card(P.laranja)}
      {Card(P.manga)}
      {Card(P.abacaxi)}
      {Card(P.uva)}
      {Card(P.kiwi)}
    </Frame>
    <Frame name="Carregando mais" w="fill" flex="row" justify="center" pt={4}>
      <Text font={FB} size={13} lineHeight={18} color={C.n600}>Mostrando 8 de 48 · role para ver mais</Text>
    </Frame>
  </Frame>,
  <Frame name="Fixos (carrinho + navegação)" w="fill" flex="col">
    {CartBar('4 itens', 'R$ 36,90')}
    {BottomNav('Categorias')}
  </Frame>,
])
