const tag = (t) => (
  <Frame name={'Tag/' + t} h={40} flex="row" items="center" gap={8} px={16} rounded={20} bg="#FFFFFFB3">
    {I('check', 18, C.g900)}
    <Text font={FB} size={17} weight={800} lineHeight={20} color={C.g900}>{t}</Text>
  </Frame>
)
const celular = (nome, x, y, rot) => (
  <Frame name={'Celular/' + nome} position="absolute" x={x} y={y} w={414} h={868} rounded={56} bg={C.n900} p={12} rotate={rot} shadow="0 24 48 #05332840, 0 8 16 #05332826">
    <Frame name={'Tela/' + nome} w={390} h={844} rounded={44} bg={C.c50} overflow="hidden" />
  </Frame>
)
const deco = (e, x, y, s, r, o = 1) => <Frame position="absolute" x={x} y={y} rotate={r} opacity={o}>{E(e, s)}</Frame>
return (
  <Frame name="Capa" w={1920} h={1080} bg={C.c400} overflow="hidden">
    <Ellipse name="Círculo" position="absolute" x={1000} y={-260} w={1100} h={1100} fill="#FFFFFF33" />
    <Ellipse name="Círculo 2" position="absolute" x={-220} y={760} w={520} h={520} fill="#FFFFFF26" />
    {deco('herb', 1770, 40, 110, 20, 0.9)}
    {deco('cherries', 1690, 150, 80, -10, 0.9)}
    {deco('leafy-green', 40, 920, 110, -20, 0.9)}
    {deco('carrot', 150, 980, 90, 30, 0.9)}
    {celular('Produto', 1440, 150, 4)}
    {celular('Home', 1000, 96, -3)}
    <Frame name="Texto" position="absolute" x={120} y={130} w={800} flex="col" gap={28}>
      <Rectangle name="Logo" w={520} h={185} />
      <Text font={FB} size={18} weight={800} lineHeight={24} letterSpacing={1.2} color={C.w700}>PROJETO DE UX/UI · OUTUBRO DE 2026</Text>
      <Text w="fill" font={FD} size={76} weight={600} lineHeight={82} color={C.g900}>A feira do bairro, agora no celular</Text>
      <Text w="fill" font={FB} size={26} lineHeight={36} color={C.n900}>Loja online do Verdurão Piuminas, em Piúma (ES): frutas, verduras, queijos e bebidas com entrega em casa. Mobile-first, da escolha do bairro ao pedido entregue.</Text>
      <Frame w="fill" flex="row" wrap gap={12} rowGap={12}>
        {tag('Pesquisa e benchmark')}
        {tag('Design System')}
        {tag('9 telas mobile')}
        {tag('10 telas web (16:9)')}
        {tag('Fluxo de compra completo')}
      </Frame>
    </Frame>
    <Frame name="Rodapé" position="absolute" x={120} y={990} flex="row" items="center" gap={10}>
      {I('folder-open', 20, C.g900)}
      <Text font={FB} size={18} weight={700} lineHeight={24} color={C.g900}>verdurao-piuminas · versão 1.0</Text>
    </Frame>
  </Frame>
)
