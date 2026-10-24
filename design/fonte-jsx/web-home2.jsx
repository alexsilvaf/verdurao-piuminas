const minasItem = (p, nome) => (
  <Frame name={'Item/' + nome} w="fill" grow={1} flex="row" items="center" gap={12} p={12} rounded={16} bg={C.white}>
    <Frame w={64} h={64} rounded={12} bg={TINT[p.cat]} flex="row" items="center" justify="center">{E(p.e, 44)}</Frame>
    <Frame grow={1} flex="col" gap={2}>
      <Text w="fill" font={FB} size={14} weight={800} lineHeight={18} color={C.n900}>{nome}</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{p.u}</Text>
      <Text font={FD} size={17} weight={600} lineHeight={20} color={C.w900}>{p.p}</Text>
    </Frame>
    {PlusBtn(36)}
  </Frame>
)
const minas = (
  <Frame name="Destaque/Da roça capixaba" grow={1} flex="col" gap={18} p={28} rounded={24} bg={C.w100}>
    <Frame w="fill" flex="row" items="end" justify="between" gap={16}>
      <Frame grow={1} flex="col" gap={4}>
        <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.8} color={C.w700}>PRODUTORES DA REGIÃO</Text>
        <Text w="fill" font={FD} size={28} weight={600} lineHeight={34} color={C.w900}>Da roça capixaba pra sua mesa</Text>
        <Text w="fill" font={FB} size={15} lineHeight={22} color={C.n900}>Queijo artesanal, mel e café de quem produz aqui no Espírito Santo.</Text>
      </Frame>
      <Frame flex="row" items="center" gap={4} h={32}>
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.w900}>Conhecer os produtores</Text>
        {I('arrow-right', 16, C.w900)}
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={16}>
      {minasItem(P.canastra, 'Queijo Artesanal Capixaba')}
      {minasItem(P.doce, 'Mel Silvestre Capixaba')}
      {minasItem(P.cafe, 'Café das Montanhas Capixabas')}
    </Frame>
  </Frame>
)
const motivo = (icon, title, text) => (
  <Frame name={'Motivo/' + title} w="fill" flex="row" gap={12} items="start">
    <Frame w={40} h={40} rounded={12} bg={C.g100} flex="row" items="center" justify="center">{I(icon, 20, C.g900)}</Frame>
    <Frame grow={1} flex="col" gap={2}>
      <Text w="fill" font={FB} size={15} weight={800} lineHeight={20} color={C.g900}>{title}</Text>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{text}</Text>
    </Frame>
  </Frame>
)
const porque = (
  <Frame name="Seção/Por que pedir" w={400} flex="col" gap={14} p={24} rounded={24} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>Por que pedir no Verdurão</Text>
    {motivo('hand-heart', 'Escolhido a dedo', 'Cada item separado como se fosse pra nossa casa.')}
    {motivo('wallet', 'Pague como preferir', 'Pix, cartão ou na entrega.')}
    {motivo('message-circle', 'Gente de verdade no WhatsApp', 'Faltou algo? A gente te chama antes de trocar.')}
  </Frame>
)

return DScreen('W01 · Home (continuação)', [
  DHeader({}),
  <Frame name="Conteúdo" w="fill" flex="col" gap={32} px={MX} pt={28} pb={36}>
    <Frame name="Seção/Ofertas" w="fill" flex="col" gap={16}>
      {DSection('Ofertas da semana', 'Ver todas', 'Válidas até domingo ou enquanto durar o estoque')}
      <Frame flex="row" gap={18}>
        {Card(P.morango, { w: 198, imgH: 132 })}
        {Card(P.laranja, { w: 198, imgH: 132 })}
        {Card(P.abacaxi, { w: 198, imgH: 132 })}
        {Card(P.brocolis, { w: 198, imgH: 132 })}
        {Card({ ...P.uva, badge: ['-15%', 'oferta'], old: 'R$ 15,20' }, { w: 198, imgH: 132 })}
        {Card({ ...P.queijo, badge: ['-10%', 'oferta'], old: 'R$ 22,17' }, { w: 198, imgH: 132 })}
      </Frame>
    </Frame>
    <Frame name="Destaques" w="fill" flex="row" gap={24} items="stretch">
      {minas}
      {porque}
    </Frame>
  </Frame>,
  <Frame name="Espaço" w="fill" grow={1} />,
  DFooter(),
])
