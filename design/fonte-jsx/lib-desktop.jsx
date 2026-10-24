// ===== Verdurão Piuminas · componentes desktop (1920 × 1080, conteúdo de 1280 px) =====
const DW = 1920
const DH = 1080
const CONT = 1280
const MX = (DW - CONT) / 2

const DCATS = [['Frutas', 'tangerine'], ['Verduras', 'leafy-green'], ['Legumes', 'carrot'], ['Temperos', 'herb'], ['Queijos', 'cheese-wedge'], ['Ovos e leite', 'egg'], ['Bebidas', 'beverage-box'], ['Mercearia', 'honey-pot']]

const DHeader = ({ active, count = '4 itens', total = 'R$ 36,90', addr = 'Rua das Flores, 120', next = 'Hoje, 16–18h', nav = true } = {}) => (
  <Frame name="Cabeçalho" w="fill" flex="col">
    <Frame name="Topo" w="fill" h={88} flex="row" items="center" gap={24} px={MX} bg={C.c400}>
      <Rectangle name="Logo" w={160} h={57} />
      <Frame name="Busca" grow={1} h={48} flex="row" items="center" gap={10} pl={16} pr={6} rounded={14} bg={C.white} stroke="#E9D78F" strokeWidth={1}>
        {I('search', 20, C.g900)}
        <Text grow={1} font={FB} size={16} lineHeight={22} color={C.n500}>Buscar frutas, verduras, queijos…</Text>
        <Frame name="Botão/Buscar" h={36} px={16} rounded={10} bg={C.g900} flex="row" items="center">
          <Text font={FB} size={14} weight={800} lineHeight={18} color={C.white}>Buscar</Text>
        </Frame>
      </Frame>
      <Frame name="Entrega" h={52} flex="row" items="center" gap={12} px={12} rounded={14} bg="#FFFFFFB3">
        <Frame w={32} h={32} rounded={16} bg={C.g100} flex="row" items="center" justify="center">{I('map-pin', 16, C.g900)}</Frame>
        <Frame flex="col" gap={0}>
          <Text font={FB} size={12} lineHeight={16} color={C.n600}>Entregar em</Text>
          <Frame flex="row" items="center" gap={2}>
            <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>{addr}</Text>
            {I('chevron-down', 14, C.g900)}
          </Frame>
        </Frame>
        <Frame w={1} h={28} bg="#E9D78F" />
        <Frame flex="col" gap={0}>
          <Text font={FB} size={12} lineHeight={16} color={C.n600}>Próxima entrega</Text>
          <Frame flex="row" items="center" gap={4}>
            {I('truck', 14, C.g700)}
            <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>{next}</Text>
          </Frame>
        </Frame>
      </Frame>
      <Frame name="Conta" h={48} flex="row" items="center" gap={8}>
        <Frame w={40} h={40} rounded={20} bg="#FFFFFFB3" flex="row" items="center" justify="center">{I('user-round', 20, C.g900)}</Frame>
        <Frame flex="col" gap={0}>
          <Text font={FB} size={12} lineHeight={16} color={C.n600}>Olá, Marta</Text>
          <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Minha conta</Text>
        </Frame>
      </Frame>
      <Frame name="Botão/Carrinho" h={52} flex="row" items="center" gap={10} pl={12} pr={16} rounded={14} bg={C.g900} shadow="0 2 8 #05332833">
        <Frame w={32} h={32} rounded={10} bg="#FFFFFF1F" flex="row" items="center" justify="center">{I('shopping-basket', 18, C.white)}</Frame>
        <Frame flex="col" gap={0}>
          <Text font={FB} size={12} weight={600} lineHeight={14} color={C.c200}>{count}</Text>
          <Text font={FD} size={17} weight={600} lineHeight={20} color={C.white}>{total}</Text>
        </Frame>
      </Frame>
    </Frame>
    {nav ? (
      <Frame name="Menu de categorias" w="fill" h={52} flex="row" items="center" gap={4} px={MX} bg={C.white} strokeWeights={{ bottom: 1 }} stroke={BORDER}>
        <Frame name="Todas as categorias" h={52} flex="row" items="center" gap={8} pr={16}>
          {I('layout-grid', 18, C.g900)}
          <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Todas as categorias</Text>
        </Frame>
        <Frame w={1} h={24} bg={BORDER} />
        {DCATS.map(([label, e]) => {
          const on = label === active
          return (
            <Frame name={'Menu/' + label} h={52} flex="col" justify="center" px={10}>
              <Frame flex="row" items="center" gap={6}>
                {E(e, 18)}
                <Text font={FB} size={14} weight={on ? 800 : 700} lineHeight={18} color={on ? C.g900 : C.n900}>{label}</Text>
              </Frame>
              {on ? <Frame name="Ativo" position="absolute" x={10} y={49} w={label.length * 8 + 24} h={3} rounded={2} bg={C.g900} /> : null}
            </Frame>
          )
        })}
        <Frame grow={1} h={1} />
        <Frame name="Menu/Ofertas" h={32} flex="row" items="center" gap={6} px={12} rounded={16} bg={C.t100}>
          {I('tag', 16, C.t700)}
          <Text font={FB} size={14} weight={800} lineHeight={18} color={C.t700}>Ofertas</Text>
        </Frame>
        <Frame name="Menu/Da roça capixaba" h={32} flex="row" items="center" gap={6} px={12} rounded={16} bg={C.w100}>
          {I('sprout', 16, C.w900)}
          <Text font={FB} size={14} weight={800} lineHeight={18} color={C.w900}>Da roça capixaba</Text>
        </Frame>
      </Frame>
    ) : null}
  </Frame>
)

const DStep = (n, label, state) => (
  <Frame name={'Etapa/' + label} flex="row" items="center" gap={10}>
    <Frame w={32} h={32} rounded={16} bg={state === 'next' ? C.white : (state === 'done' ? C.g500 : C.g900)} stroke={state === 'next' ? C.n200 : '#00000000'} strokeWidth={1} flex="row" items="center" justify="center">
      {state === 'done' ? I('check', 16, C.white) : <Text font={FD} size={15} weight={600} lineHeight={18} color={state === 'next' ? C.n600 : C.white}>{String(n)}</Text>}
    </Frame>
    <Text font={FB} size={15} weight={800} lineHeight={20} color={state === 'next' ? C.n600 : C.g900}>{label}</Text>
  </Frame>
)
const DCheckoutHeader = (etapa) => (
  <Frame name="Cabeçalho do checkout" w="fill" h={88} flex="row" items="center" justify="between" px={MX} bg={C.c400}>
    <Rectangle name="Logo" w={160} h={57} />
    <Frame name="Etapas" flex="row" items="center" gap={16}>
      {DStep(1, 'Carrinho', 'done')}
      <Frame w={48} h={2} bg={C.g500} />
      {DStep(2, 'Entrega', etapa === 2 ? 'active' : 'done')}
      <Frame w={48} h={2} bg={etapa >= 3 ? C.g500 : C.n200} />
      {DStep(3, 'Pagamento', etapa === 3 ? 'active' : (etapa > 3 ? 'done' : 'next'))}
    </Frame>
    <Frame flex="row" items="center" gap={20}>
      <Frame flex="row" items="center" gap={6}>
        {I('shield-check', 18, C.g900)}
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Compra segura</Text>
      </Frame>
      <Frame flex="row" items="center" gap={6} h={40} px={14} rounded={20} bg="#FFFFFFB3">
        {I('message-circle', 18, C.g900)}
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Ajuda no WhatsApp</Text>
      </Frame>
    </Frame>
  </Frame>
)

const DFooter = () => (
  <Frame name="Rodapé" w="fill" flex="row" gap={48} px={MX} pt={40} pb={36} bg={C.g900}>
    <Frame w={340} flex="col" gap={10}>
      <Text font={FD} size={24} weight={600} lineHeight={30} color={C.c400}>Verdurão Piuminas</Text>
      <Text w="fill" font={FB} size={14} lineHeight={20} color={C.c200}>Supermercado e Hortifrúti. Separamos cada item como se fosse para a nossa casa.</Text>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.c200}>Entregas de seg. a sáb., 8h às 20h · dom., 8h às 12h</Text>
    </Frame>
    {[['Institucional', ['Sobre o Verdurão', 'Nossos produtores', 'Trabalhe com a gente']], ['Ajuda', ['Área de entrega', 'Trocas e devoluções', 'Política de privacidade']], ['Pagamento', ['Pix', 'Cartão de crédito', 'Pagar na entrega']]].map(([t, links]) => (
      <Frame name={"Coluna/" + t} w={180} flex="col" gap={10}>
        <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.8} color={C.y400}>{t.toUpperCase()}</Text>
        {links.map((l) => <Text font={FB} size={14} lineHeight={20} color={C.white}>{l}</Text>)}
      </Frame>
    ))}
    <Frame grow={1} flex="col" gap={12} items="end">
      <Frame name="WhatsApp" h={44} flex="row" items="center" gap={8} px={16} rounded={22} bg={C.c400}>
        {I('message-circle', 18, C.g900)}
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>Fale com a gente</Text>
      </Frame>
    </Frame>
  </Frame>
)

const DSection = (title, action, sub) => (
  <Frame name={'Título/' + title} w="fill" flex="row" items="end" justify="between" gap={16}>
    <Frame flex="col" gap={2} grow={1}>
      <Text w="fill" font={FD} size={26} weight={600} lineHeight={32} color={C.g900}>{title}</Text>
      {sub ? <Text w="fill" font={FB} size={15} lineHeight={20} color={C.n600}>{sub}</Text> : null}
    </Frame>
    {action ? <Frame flex="row" items="center" gap={4} h={32}><Text font={FB} size={15} weight={800} lineHeight={20} color={C.g700}>{action}</Text>{I('chevron-right', 18, C.g700)}</Frame> : null}
  </Frame>
)
const DCrumbs = (items) => (
  <Frame name="Navegação estrutural" flex="row" items="center" gap={6}>
    {items.map((t, i) => [
      <Text font={FB} size={14} weight={i === items.length - 1 ? 800 : 600} lineHeight={18} color={i === items.length - 1 ? C.g900 : C.n600}>{t}</Text>,
      i < items.length - 1 ? I('chevron-right', 14, C.n400) : null,
    ])}
  </Frame>
)
const DScreen = (name, children, bg = C.c50) => (
  <Frame name={name} w={DW} h={DH} flex="col" bg={bg} overflow="hidden">
    {children}
  </Frame>
)
const DSummaryRow = (l, r, o = {}) => (
  <Frame name={'Linha/' + l} w="fill" flex="row" items="center" justify="between" gap={12}>
    <Text font={FB} size={o.bold ? 16 : 15} weight={o.bold ? 800 : 400} lineHeight={22} color={o.bold ? C.n900 : C.n600}>{l}</Text>
    <Text font={o.bold ? FD : FB} size={o.bold ? 22 : 15} weight={o.bold ? 600 : 700} lineHeight={26} color={o.bold ? C.w900 : C.n900}>{r}</Text>
  </Frame>
)
const DCheckoutFooter = () => (
  <Frame name="Rodapé do checkout" w="fill" h={64} flex="row" items="center" justify="between" px={MX} strokeWeights={{ top: 1 }} stroke={BORDER} bg={C.white}>
    <Text font={FB} size={13} lineHeight={18} color={C.n600}>© 2026 Verdurão Piuminas · Supermercado e Hortifrúti</Text>
    <Frame flex="row" items="center" gap={20}>
      {[['qr-code', 'Pix'], ['credit-card', 'Cartão de crédito'], ['wallet-cards', 'Pagar na entrega'], ['shield-check', 'Ambiente seguro']].map(([i, t]) => (
        <Frame flex="row" items="center" gap={6}>
          {I(i, 16, C.g700)}
          <Text font={FB} size={13} weight={700} lineHeight={18} color={C.n600}>{t}</Text>
        </Frame>
      ))}
    </Frame>
  </Frame>
)
