const header = (
  <Frame name="Cabeçalho" w="fill" flex="col" gap={12} px={16} pt={12} pb={16} bg={C.c400} roundedBL={24} roundedBR={24}>
    <Frame name="Topo" w="fill" h={48} flex="row" items="center" justify="between">
      <Rectangle name="Logo" w={124} h={44} />
      {IconBtn('message-circle', { size: 40, bg: '#FFFFFFB3', name: 'Ajuda no WhatsApp' })}
    </Frame>
    <Frame name="Entrega" w="fill" h={60} flex="row" items="center" gap={10} px={12} rounded={14} bg={C.white} shadow={SH_CARD}>
      <Frame w={36} h={36} rounded={18} bg={C.g100} flex="row" items="center" justify="center">{I('map-pin', 18, C.g900)}</Frame>
      <Frame name="Endereço" grow={1} flex="col" gap={0}>
        <Text font={FB} size={12} lineHeight={16} color={C.n600}>Entregar em</Text>
        <Frame flex="row" items="center" gap={2}>
          <Text font={FB} size={14} weight={800} lineHeight={20} color={C.g900}>Rua das Flores, 120</Text>
          {I('chevron-down', 16, C.g900)}
        </Frame>
      </Frame>
      <Frame w={1} h={32} bg={BORDER} />
      <Frame name="Próxima entrega" flex="col" gap={0} pl={2}>
        <Text font={FB} size={12} lineHeight={16} color={C.n600}>Próxima entrega</Text>
        <Frame flex="row" items="center" gap={4}>
          {I('truck', 16, C.g700)}
          <Text font={FB} size={14} weight={800} lineHeight={20} color={C.g900}>Hoje, 16–18h</Text>
        </Frame>
      </Frame>
    </Frame>
    <Frame name="Busca" w="fill" h={48} flex="row" items="center" gap={10} px={14} rounded={14} bg={C.white} stroke="#E9D78F" strokeWidth={1}>
      {I('search', 20, C.g900)}
      <Text grow={1} font={FB} size={16} lineHeight={22} color={C.n500}>Buscar frutas, verduras, queijos…</Text>
    </Frame>
  </Frame>
)

const banner = (
  <Frame name="Banner" w="fill" flex="col" gap={10}>
    <Frame name="Banner/Ofertas da semana" w="fill" h={152} rounded={20} bg={C.g900} overflow="hidden">
      <Ellipse name="Decoração" position="absolute" x={196} y={-36} w={220} h={220} fill="#FFFFFF12" />
      <Ellipse name="Decoração 2" position="absolute" x={250} y={92} w={120} h={120} fill="#F6E29826" />
      <Frame name="Ilustração" position="absolute" x={218} y={14} w={150} h={130}>
        <Frame position="absolute" x={46} y={0}>{E('watermelon', 72)}</Frame>
        <Frame position="absolute" x={0} y={46} rotate={-12}>{E('pineapple', 64)}</Frame>
        <Frame position="absolute" x={84} y={62}>{E('grapes', 58)}</Frame>
        <Frame position="absolute" x={52} y={78}>{E('strawberry', 42)}</Frame>
      </Frame>
      <Frame name="Texto" position="absolute" x={18} y={18} w={200} flex="col" gap={6}>
        <Text font={FB} size={12} weight={800} lineHeight={16} letterSpacing={0.8} color={C.y400}>OFERTAS DA SEMANA</Text>
        <Text w="fill" font={FD} size={22} weight={600} lineHeight={26} color={C.c50}>Até 30% off em frutas da estação</Text>
        <Frame name="Botão/Ver ofertas" h={32} flex="row" items="center" gap={4} px={12} rounded={16} bg={C.c400}>
          <Text font={FB} size={13} weight={800} lineHeight={16} color={C.g900}>Ver ofertas</Text>
          {I('arrow-right', 14, C.g900)}
        </Frame>
      </Frame>
    </Frame>
    <Frame name="Paginação" w="fill" flex="row" justify="center" gap={6}>
      <Frame w={18} h={6} rounded={3} bg={C.g900} />
      <Frame w={6} h={6} rounded={3} bg={C.n200} />
      <Frame w={6} h={6} rounded={3} bg={C.n200} />
    </Frame>
  </Frame>
)

const categorias = (
  <Frame name="Seção/Categorias" w="fill" flex="col" gap={14}>
    {SectionHead('Categorias', 'Ver todas')}
    <Frame name="Linha 1" w="fill" flex="row" justify="between">{CATS.slice(0, 4).map((c) => CatTile(c))}</Frame>
    <Frame name="Linha 2" w="fill" flex="row" justify="between">{CATS.slice(4).map((c) => CatTile(c))}</Frame>
  </Frame>
)

const repetir = (
  <Frame name="Repetir último pedido" w={124} h={170} flex="col" justify="between" p={12} rounded={16} bg={C.c400}>
    <Frame w={40} h={40} rounded={20} bg={C.white} flex="row" items="center" justify="center">{I('repeat-2', 20, C.g900)}</Frame>
    <Frame w="fill" flex="col" gap={2}>
      <Text w="fill" font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Repetir último pedido</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n900}>12 itens</Text>
      <Text font={FD} size={16} weight={600} lineHeight={20} color={C.w900}>R$ 86,40</Text>
    </Frame>
    <Frame flex="row" items="center" gap={2}>
      <Text font={FB} size={13} weight={800} lineHeight={16} color={C.g900}>Repetir</Text>
      {I('arrow-right', 14, C.g900)}
    </Frame>
  </Frame>
)

const compreDeNovo = (
  <Frame name="Seção/Compre de novo" w="fill" flex="col" gap={14}>
    {SectionHead('Compre de novo', 'Ver lista', 'Seus itens de sempre, a um toque')}
    <Frame name="Carrossel" flex="row" gap={12}>
      {repetir}
      {MiniCard(P.banana, { qty: '1 kg' })}
      {MiniCard(P.tomate, { qty: '6 un' })}
      {MiniCard(P.alface, { qty: '1 un', first: true })}
      {MiniCard(P.ovos)}
    </Frame>
  </Frame>
)

const ofertas = (
  <Frame name="Seção/Ofertas" w="fill" flex="col" gap={14}>
    {SectionHead('Ofertas da semana', 'Ver todas', 'Válidas até domingo')}
    <Frame name="Carrossel" flex="row" gap={12}>
      {Card(P.morango, { w: 156 })}
      {Card(P.laranja, { w: 156 })}
      {Card(P.abacaxi, { w: 156 })}
    </Frame>
  </Frame>
)

const miniRegional = (p) => (
  <Frame name={'Item/' + p.n} w="fill" flex="col" gap={6} p={10} rounded={14} bg={C.white}>
    <Frame w="fill" h={64} rounded={10} bg={TINT[p.cat]} flex="row" items="center" justify="center">{E(p.e, 44)}</Frame>
    <Text w="fill" maxLines={1} truncate font={FB} size={12} weight={700} lineHeight={16} color={C.n900}>{p.n}</Text>
    <Text font={FD} size={15} weight={600} lineHeight={18} color={C.w900}>{p.p}</Text>
  </Frame>
)
const minas = (
  <Frame name="Destaque/Da roça capixaba" w="fill" flex="col" gap={14} p={16} rounded={20} bg={C.w100}>
    <Frame w="fill" flex="col" gap={4}>
      <Text font={FB} size={12} weight={800} lineHeight={16} letterSpacing={0.8} color={C.w700}>PRODUTORES DA REGIÃO</Text>
      <Text w="fill" font={FD} size={20} weight={600} lineHeight={26} color={C.w900}>Da roça capixaba pra sua mesa</Text>
      <Text w="fill" font={FB} size={14} lineHeight={20} color={C.n900}>Queijo artesanal, mel e café de quem produz aqui no Espírito Santo.</Text>
    </Frame>
    <Frame name="Produtos" w="fill" flex="row" gap={8}>
      {miniRegional({ ...P.canastra, n: 'Queijo artesanal' })}{miniRegional({ ...P.doce, n: 'Mel silvestre' })}{miniRegional({ ...P.cafe, n: 'Café capixaba' })}
    </Frame>
    <Frame flex="row" items="center" gap={4}>
      <Text font={FB} size={14} weight={800} lineHeight={18} color={C.w900}>Conhecer os produtores</Text>
      {I('arrow-right', 16, C.w900)}
    </Frame>
  </Frame>
)

const maisPedidos = (
  <Frame name="Seção/Mais pedidos" w="fill" flex="col" gap={14}>
    {SectionHead('Mais pedidos da semana', 'Ver todos')}
    <Frame name="Grade" w="fill" flex="row" wrap gap={12} rowGap={12}>
      {Card(P.abacate)}{Card(P.manga)}{Card(P.uva)}{Card(P.limao)}
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
const confianca = (
  <Frame name="Seção/Por que pedir" w="fill" flex="col" gap={16} p={16} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Text font={FD} size={18} weight={600} lineHeight={24} color={C.g900}>Por que pedir no Verdurão</Text>
    {motivo('hand-heart', 'Escolhido a dedo', 'Separamos cada item como se fosse para a nossa casa — e você escolhe o ponto da fruta.')}
    {motivo('wallet', 'Pague como preferir', 'Pix, cartão de crédito ou na entrega (cartão ou dinheiro).')}
    {motivo('message-circle', 'Gente de verdade no WhatsApp', 'Faltou algo? A gente te chama antes de trocar qualquer item.')}
  </Frame>
)

const rodape = (
  <Frame name="Rodapé" w="fill" flex="col" items="center" gap={6} pt={4}>
    <Text font={FB} size={12} weight={800} lineHeight={16} color={C.g900}>Verdurão Piuminas · Supermercado e Hortifrúti</Text>
    <Text font={FB} size={12} lineHeight={16} color={C.n600}>Entregas de seg. a sáb., 8h às 20h · dom., 8h às 12h</Text>
    <Text font={FB} size={12} weight={700} lineHeight={16} color={C.g700}>Área de entrega · Trocas · Privacidade</Text>
  </Frame>
)

return Screen('01 · Home', [
  header,
  <Frame name="Conteúdo" w="fill" flex="col" gap={28} px={16} pt={20} pb={20}>
    {banner}
    {categorias}
    {compreDeNovo}
    {ofertas}
    {minas}
    {maisPedidos}
    {confianca}
    {rodape}
  </Frame>,
  <Frame name="Fixos (carrinho + navegação)" w="fill" flex="col">
    {CartBar('4 itens', 'R$ 36,90')}
    {BottomNav('Início')}
  </Frame>,
])
