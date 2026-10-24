const extra = {
  melao: { n: 'Melão Amarelo', e: 'melon', cat: 'frutas', u: '1 un ≈ 1,8 kg · R$ 4,99/kg', p: 'R$ 8,98', per: '/un' },
  pera: { n: 'Pera Williams', e: 'pear', cat: 'frutas', u: '1 un ≈ 180 g · R$ 14,90/kg', p: 'R$ 2,68', per: '/un' },
  pessego: { n: 'Pêssego', e: 'peach', cat: 'frutas', u: 'Bandeja 500 g', p: 'R$ 13,90', per: '/bdj', badge: ['Chegou hoje', 'fresco'] },
  cereja: { n: 'Cereja', e: 'cherries', cat: 'frutas', u: 'Bandeja 250 g', p: 'R$ 19,90', per: '/bdj' },
}
const check = (on) => (
  <Frame name={on ? 'Caixa/marcada' : 'Caixa/vazia'} w={20} h={20} rounded={6} bg={on ? C.g900 : C.white} stroke={on ? C.g900 : C.n400} strokeWidth={1.5} flex="row" items="center" justify="center">
    {on ? I('check', 14, C.white) : null}
  </Frame>
)
const grupo = (title, children) => (
  <Frame name={'Filtro/' + title} w="fill" flex="col" gap={6}>
    <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.6} color={C.g700}>{title.toUpperCase()}</Text>
    {children}
  </Frame>
)
const subcat = (label, n, on) => (
  <Frame name={'Subcategoria/' + label} w="fill" h={40} flex="row" items="center" gap={10} px={12} rounded={10} bg={on ? C.g50 : '#FFFFFF00'}>
    <Text grow={1} font={FB} size={15} weight={on ? 800 : 600} lineHeight={20} color={on ? C.g900 : C.n900}>{label}</Text>
    <Text font={FB} size={13} lineHeight={16} color={C.n600}>{String(n)}</Text>
    {on ? I('check', 16, C.g900) : null}
  </Frame>
)
const filtro = (label, n, on) => (
  <Frame name={'Opção/' + label} w="fill" h={36} flex="row" items="center" gap={10} px={4}>
    {check(on)}
    <Text grow={1} font={FB} size={15} weight={on ? 800 : 600} lineHeight={20} color={C.n900}>{label}</Text>
    <Text font={FB} size={13} lineHeight={16} color={C.n600}>{String(n)}</Text>
  </Frame>
)
const lateral = (
  <Frame name="Filtros" w={248} flex="col" gap={22} p={16} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
    {grupo('Subcategorias', [subcat('Todas', 48, true), subcat('Da estação', 12), subcat('Tropicais', 9), subcat('Cítricas', 8), subcat('Vermelhas', 7), subcat('Prontas pra comer', 6)])}
    {Divider()}
    {grupo('Filtrar por', [filtro('Em oferta', 6), filtro('Chegou hoje', 11), filtro('Do ES', 9), filtro('Orgânicos', 5)])}
    {Divider()}
    <Frame name="Dica/Maturação" w="fill" flex="col" gap={6} p={14} rounded={14} bg={C.c200}>
      <Frame flex="row" items="center" gap={6}>
        {I('sparkles', 16, C.g900)}
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Escolha o ponto da fruta</Text>
      </Frame>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n900}>Em abacate, banana, manga e mamão você diz se quer pra hoje ou pra daqui a uns dias.</Text>
    </Frame>
  </Frame>
)
const W = 187
const opts = { w: W, imgH: 120 }
return DScreen('W03 · Categoria · Frutas', [
  DHeader({ active: 'Frutas' }),
  <Frame name="Conteúdo" w="fill" flex="col" gap={20} px={MX} pt={24}>
    <Frame name="Topo da página" w="fill" flex="row" items="end" justify="between">
      <Frame flex="col" gap={8}>
        {DCrumbs(['Início', 'Frutas'])}
        <Frame flex="row" items="end" gap={12}>
          <Text font={FD} size={36} weight={600} lineHeight={42} color={C.g900}>Frutas</Text>
          <Text font={FB} size={15} lineHeight={30} color={C.n600}>48 produtos</Text>
        </Frame>
      </Frame>
      <Frame name="Ordenar" h={44} flex="row" items="center" gap={8} px={14} rounded={12} bg={C.white} stroke={C.n200} strokeWidth={1}>
        {I('arrow-up-down', 16, C.g900)}
        <Text font={FB} size={15} lineHeight={20} color={C.n600}>Ordenar por</Text>
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.g900}>Mais vendidos</Text>
        {I('chevron-down', 16, C.g900)}
      </Frame>
    </Frame>
    <Frame name="Corpo" w="fill" flex="row" gap={32} items="start">
      {lateral}
      <Frame name="Grade de produtos" grow={1} flex="row" wrap gap={16} rowGap={16}>
        {Card(P.morango, opts)}
        {Card(P.banana, { ...opts, qty: '1 kg' })}
        {Card(P.abacate, opts)}
        {Card(P.laranja, opts)}
        {Card(P.manga, opts)}
        {Card(P.abacaxi, opts)}
        {Card(P.uva, opts)}
        {Card(P.kiwi, opts)}
        {Card(P.melancia, opts)}
        {Card(P.limao, opts)}
        {Card(P.maca, opts)}
        {Card(extra.melao, opts)}
        {Card(extra.pera, opts)}
        {Card(extra.pessego, opts)}
        {Card(extra.cereja, opts)}
      </Frame>
    </Frame>
  </Frame>,
])
