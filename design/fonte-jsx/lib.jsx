// ===== Verdurão Piuminas · biblioteca de componentes (JSX OpenPencil) =====
const C = {
  g950: '#053A2F', g900: '#085041', g700: '#1E7A63', g500: '#2F9E78', g100: '#DCEFE6', g50: '#EFF7F2',
  w900: '#490611', w700: '#6B1322', w100: '#F7E4E6',
  c400: '#F6E298', c200: '#FBEFC7', c50: '#FFF9E8',
  t700: '#A82E1A', t600: '#C93A22', t100: '#FDE7E1', y400: '#F5C431', o500: '#EE8A22',
  n900: '#1F2A26', n600: '#56625D', n500: '#6B7671', n400: '#8E9893', n200: '#E7E1CF', n100: '#F3EFE3', white: '#FFFFFF',
  a700: '#8A5A12', a100: '#FDF3DC', i700: '#2B6CB0', i100: '#E7F0FA', e600: '#C53030',
}
const TINT = { frutas: '#FFEBD1', verduras: '#E3F2E7', legumes: '#FCE6D6', temperos: '#E9F3DC', queijos: '#FFF3C4', laticinios: '#F5EEE1', bebidas: '#E3EEF7', mercearia: '#F1E9DE' }
const FD = 'Fredoka'
const FB = 'Nunito Sans'
const BORDER = '#ECE5D1'
const SH_CARD = '0 1 2 #1F2A260F, 0 2 8 #1F2A260A'
const SH_FLOAT = '0 4 12 #05332826, 0 12 28 #0533281F'

const TY = {
  h1: { font: FD, size: 26, weight: 600, lineHeight: 32, color: C.g900 },
  h2: { font: FD, size: 20, weight: 600, lineHeight: 26, color: C.g900 },
  h3: { font: FD, size: 17, weight: 600, lineHeight: 22, color: C.g900 },
  priceL: { font: FD, size: 26, weight: 600, lineHeight: 30, color: C.w900 },
  price: { font: FD, size: 18, weight: 600, lineHeight: 22, color: C.w900 },
  body: { font: FB, size: 16, weight: 400, lineHeight: 24, color: C.n900 },
  bodyB: { font: FB, size: 16, weight: 700, lineHeight: 24, color: C.n900 },
  sm: { font: FB, size: 14, weight: 400, lineHeight: 20, color: C.n900 },
  smB: { font: FB, size: 14, weight: 700, lineHeight: 20, color: C.n900 },
  cap: { font: FB, size: 12, weight: 400, lineHeight: 16, color: C.n600 },
  capB: { font: FB, size: 12, weight: 700, lineHeight: 16, color: C.n600 },
  over: { font: FB, size: 12, weight: 800, lineHeight: 16, color: C.g700, letterSpacing: 0.6 },
}
const T = (s, style, p = {}) => <Text {...TY[style]} {...p}>{s}</Text>
const I = (name, size = 20, color = C.g900) => <Icon name={'lucide:' + name} size={size} color={color} />
const E = (name, size = 48) => <Icon name={'fluent-emoji-flat:' + name} size={size} />

// ---------- Botões ----------
const BTN = {
  primary: { bg: C.g900, fg: C.white },
  secondary: { bg: C.white, fg: C.g900, stroke: C.g900 },
  soft: { bg: C.g100, fg: C.g900 },
  ghost: { fg: C.g900 },
  cream: { bg: C.c400, fg: C.g900 },
  disabled: { bg: C.n100, fg: C.n400 },
}
const Btn = ({ label, kind = 'primary', size = 'l', icon, iconR, w = 'hug', name }) => {
  const h = { l: 52, m: 44, s: 36 }[size]
  const px = { l: 20, m: 16, s: 12 }[size]
  const fs = { l: 16, m: 15, s: 14 }[size]
  const st = BTN[kind]
  const props = { name: name || 'Botão/' + label, w, h, flex: 'row', items: 'center', justify: 'center', gap: 8, px, rounded: 14 }
  if (st.bg) props.bg = st.bg
  if (st.stroke) { props.stroke = st.stroke; props.strokeWidth = 1.5 }
  return (
    <Frame {...props}>
      {icon ? I(icon, size === 's' ? 16 : 20, st.fg) : null}
      <Text font={FB} size={fs} weight={800} lineHeight={20} color={st.fg}>{label}</Text>
      {iconR ? I(iconR, size === 's' ? 16 : 20, st.fg) : null}
    </Frame>
  )
}
const IconBtn = (icon, { size = 40, bg = C.white, color = C.g900, stroke, name, badge } = {}) => {
  const props = { name: name || 'Ícone/' + icon, w: size, h: size, rounded: size / 2, bg, flex: 'row', items: 'center', justify: 'center' }
  if (stroke) { props.stroke = stroke; props.strokeWidth = 1 }
  return (
    <Frame {...props}>
      {I(icon, Math.round(size * 0.5), color)}
      {badge ? <Frame name="Contador" position="absolute" x={size - 16} y={-4} w={20} h={20} rounded={10} bg={C.t600} stroke={C.white} strokeWidth={2} flex="row" items="center" justify="center"><Text font={FB} size={12} weight={800} lineHeight={14} color={C.white}>{badge}</Text></Frame> : null}
    </Frame>
  )
}

// ---------- Selos / chips ----------
const BADGE = {
  oferta: { bg: C.t600, fg: C.white },
  fresco: { bg: C.g100, fg: C.g900, icon: 'leaf' },
  alerta: { bg: C.a100, fg: C.a700, icon: 'clock' },
  vinho: { bg: C.w100, fg: C.w900 },
  esgotado: { bg: C.n900, fg: C.white },
  creme: { bg: C.c400, fg: C.g900 },
}
const Badge = (label, kind = 'oferta') => {
  const b = BADGE[kind]
  return (
    <Frame name={'Selo/' + label} h={22} flex="row" items="center" gap={4} px={8} rounded={11} bg={b.bg}>
      {b.icon ? I(b.icon, 12, b.fg) : null}
      <Text font={FB} size={12} weight={800} lineHeight={16} color={b.fg}>{label}</Text>
    </Frame>
  )
}
const Chip = (label, on = false, icon) => (
  <Frame name={'Chip/' + label} h={36} flex="row" items="center" gap={6} px={14} rounded={18} bg={on ? C.g900 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={1}>
    {on ? I('check', 16, C.white) : (icon ? I(icon, 16, C.g900) : null)}
    <Text font={FB} size={14} weight={on ? 800 : 600} lineHeight={18} color={on ? C.white : C.n900}>{label}</Text>
  </Frame>
)

// ---------- Quantidade ----------
const Stepper = ({ qty = '1 un', h = 40, w = 'fill', kind = 'solid', first = false, name = 'Quantidade' }) => {
  const solid = kind === 'solid'
  const fg = solid ? C.white : C.g900
  const props = { name, w, h, flex: 'row', items: 'center', justify: 'between', rounded: 12, bg: solid ? C.g900 : C.white }
  if (!solid) { props.stroke = C.n200; props.strokeWidth = 1 }
  return (
    <Frame {...props}>
      <Frame name={first ? 'Remover' : 'Diminuir'} w={h} h={h} flex="row" items="center" justify="center">{I(first ? 'trash-2' : 'minus', 18, fg)}</Frame>
      <Text font={FB} size={15} weight={800} lineHeight={20} color={fg}>{qty}</Text>
      <Frame name="Aumentar" w={h} h={h} flex="row" items="center" justify="center">{I('plus', 18, fg)}</Frame>
    </Frame>
  )
}
const AddBtn = (label = 'Adicionar') => (
  <Frame name="Botão/Adicionar" w="fill" h={40} flex="row" items="center" justify="center" gap={6} rounded={12} bg={C.g100}>
    {I('plus', 18, C.g900)}
    <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g900}>{label}</Text>
  </Frame>
)
const PlusBtn = (size = 36) => (
  <Frame name="Botão/+" w={size} h={size} rounded={size / 2} bg={C.g900} flex="row" items="center" justify="center" shadow="0 2 6 #05332833">
    {I('plus', 20, C.white)}
  </Frame>
)

// ---------- Produtos ----------
const P = {
  abacate: { n: 'Abacate', e: 'avocado', cat: 'frutas', u: '1 un ≈ 450 g · R$ 9,90/kg', p: 'R$ 4,46', per: '/un' },
  banana: { n: 'Banana Prata', e: 'banana', cat: 'frutas', u: 'Penca ≈ 1 kg', p: 'R$ 6,99', per: '/kg' },
  maca: { n: 'Maçã Gala', e: 'red-apple', cat: 'frutas', u: '1 un ≈ 150 g · R$ 12,90/kg', p: 'R$ 1,94', per: '/un' },
  morango: { n: 'Morango', e: 'strawberry', cat: 'frutas', u: 'Bandeja 250 g', p: 'R$ 7,90', per: '/bdj', old: 'R$ 9,90', badge: ['-20%', 'oferta'] },
  uva: { n: 'Uva Thompson sem semente', e: 'grapes', cat: 'frutas', u: 'Bandeja 500 g', p: 'R$ 12,90', per: '/bdj', badge: ['Últimas', 'alerta'] },
  manga: { n: 'Manga Palmer', e: 'mango', cat: 'frutas', u: '1 un ≈ 600 g · R$ 6,99/kg', p: 'R$ 4,19', per: '/un', badge: ['Chegou hoje', 'fresco'] },
  laranja: { n: 'Laranja Pera', e: 'tangerine', cat: 'frutas', u: 'Por kg (≈ 5 un)', p: 'R$ 4,49', per: '/kg', old: 'R$ 5,49', badge: ['-18%', 'oferta'] },
  limao: { n: 'Limão Tahiti', e: 'lemon', cat: 'frutas', u: 'Por kg (≈ 10 un)', p: 'R$ 5,99', per: '/kg' },
  melancia: { n: 'Melancia', e: 'watermelon', cat: 'frutas', u: '1 un ≈ 8 kg · R$ 2,99/kg', p: 'R$ 23,92', per: '/un' },
  abacaxi: { n: 'Abacaxi Pérola', e: 'pineapple', cat: 'frutas', u: '1 un ≈ 1,5 kg', p: 'R$ 8,99', per: '/un', old: 'R$ 10,99', badge: ['-18%', 'oferta'] },
  kiwi: { n: 'Kiwi', e: 'kiwi-fruit', cat: 'frutas', u: 'Bandeja 400 g', p: 'R$ 11,90', per: '/bdj', badge: ['Esgotado', 'esgotado'], out: true },
  alface: { n: 'Alface Crespa Hidropônica', e: 'leafy-green', cat: 'verduras', u: '1 pé', p: 'R$ 3,49', per: '/un' },
  brocolis: { n: 'Brócolis Ninja', e: 'broccoli', cat: 'verduras', u: '1 un ≈ 350 g', p: 'R$ 7,99', per: '/un', old: 'R$ 9,49', badge: ['-16%', 'oferta'] },
  cheiro: { n: 'Cheiro-verde', e: 'herb', cat: 'temperos', u: '1 maço', p: 'R$ 2,99', per: '/maço' },
  tomate: { n: 'Tomate Italiano', e: 'tomato', cat: 'legumes', u: '1 un ≈ 120 g · R$ 8,99/kg', p: 'R$ 1,08', per: '/un' },
  cenoura: { n: 'Cenoura', e: 'carrot', cat: 'legumes', u: 'Por kg (≈ 6 un)', p: 'R$ 4,99', per: '/kg' },
  cebola: { n: 'Cebola', e: 'onion', cat: 'legumes', u: 'Por kg (≈ 7 un)', p: 'R$ 5,49', per: '/kg' },
  batata: { n: 'Batata Inglesa', e: 'potato', cat: 'legumes', u: 'Por kg (≈ 6 un)', p: 'R$ 5,99', per: '/kg' },
  queijo: { n: 'Queijo Minas Frescal', e: 'cheese-wedge', cat: 'queijos', u: 'Peça ≈ 500 g · R$ 39,90/kg', p: 'R$ 19,95', per: '/un' },
  canastra: { n: 'Queijo Artesanal Capixaba', e: 'cheese-wedge', cat: 'queijos', u: 'Peça ≈ 1 kg', p: 'R$ 74,90', per: '/kg', badge: ['Do ES', 'vinho'] },
  ovos: { n: 'Ovos Caipira', e: 'egg', cat: 'laticinios', u: 'Dúzia', p: 'R$ 14,90', per: '/dz' },
  doce: { n: 'Mel Silvestre Capixaba', e: 'honey-pot', cat: 'mercearia', u: 'Pote 400 g', p: 'R$ 16,90', per: '/un', badge: ['Do ES', 'vinho'] },
  cafe: { n: 'Café das Montanhas Capixabas', e: 'hot-beverage', cat: 'mercearia', u: 'Pacote 250 g', p: 'R$ 29,90', per: '/un', badge: ['Do ES', 'vinho'] },
  suco: { n: 'Suco de Laranja Natural', e: 'beverage-box', cat: 'bebidas', u: 'Garrafa 1 L', p: 'R$ 12,90', per: '/un' },
  coco: { n: 'Água de Coco', e: 'coconut', cat: 'bebidas', u: 'Garrafa 1 L', p: 'R$ 9,99', per: '/un' },
}

const Card = (p, o = {}) => {
  const w = o.w || 173
  const imgH = o.imgH || 116
  const badges = p.badge ? <Frame name="Selos" position="absolute" x={8} y={8} flex="row" gap={4}>{Badge(p.badge[0], p.badge[1])}</Frame> : null
  return (
    <Frame name={'Card produto/' + p.n} w={w} h="hug" flex="col" bg={C.white} rounded={16} stroke={BORDER} strokeWidth={1} overflow="hidden" shadow={SH_CARD}>
      <Frame name="Imagem" w="fill" h={imgH} bg={TINT[p.cat]} flex="row" items="center" justify="center">
        <Frame name="Ilustração" w={o.emoji || 72} h={o.emoji || 72} opacity={p.out ? 0.45 : 1}>{E(p.e, o.emoji || 72)}</Frame>
        {badges}
        <Frame name="Favoritar" position="absolute" x={w - 40} y={8} w={32} h={32} rounded={16} bg="#FFFFFFD9" flex="row" items="center" justify="center">{I('heart', 16, C.n600)}</Frame>
      </Frame>
      <Frame name="Info" w="fill" flex="col" gap={2} px={12} pt={10}>
        <Frame name="Nome" w="fill" h={36} flex="col"><Text w="fill" maxLines={2} truncate font={FB} size={14} weight={700} lineHeight={18} color={C.n900}>{p.n}</Text></Frame>
        <Text name="Unidade" w="fill" maxLines={1} truncate font={FB} size={12} lineHeight={16} color={C.n600}>{p.u}</Text>
      </Frame>
      <Frame name="Preço" w="fill" h={42} flex="col" justify="end" px={12}>
        {p.old ? <Text name="Preço antigo" font={FB} size={12} lineHeight={14} color={C.n500} textDecoration="strikethrough">{p.old}</Text> : null}
        <Frame name="Preço atual" flex="row" items="end" gap={2}>
          <Text font={FD} size={18} weight={600} lineHeight={22} color={p.old ? C.t600 : C.w900}>{p.p}</Text>
          <Text font={FB} size={12} lineHeight={18} color={C.n600}>{p.per}</Text>
        </Frame>
      </Frame>
      <Frame name="Ação" w="fill" flex="col" px={12} pt={10} pb={12}>
        {p.out ? Btn({ label: 'Avise-me', kind: 'secondary', size: 's', icon: 'bell', w: 'fill' }) : (o.qty ? Stepper({ qty: o.qty, first: o.first }) : AddBtn())}
      </Frame>
    </Frame>
  )
}

// Card compacto (carrossel "Compre de novo")
const MiniCard = (p, o = {}) => (
  <Frame name={'Mini card/' + p.n} w={o.w || 124} h="hug" flex="col" gap={8}>
    <Frame name="Imagem" w="fill" h={o.w || 124} pb={22} rounded={16} bg={TINT[p.cat]} flex="row" items="center" justify="center">
      {E(p.e, 64)}
      {o.qty ? (
        <Frame name="Quantidade" position="absolute" x={8} y={(o.w || 124) - 44} w={(o.w || 124) - 16} h={36} rounded={18} bg={C.g900} flex="row" items="center" justify="between" px={4} shadow="0 2 6 #05332833">
          <Frame w={28} h={28} flex="row" items="center" justify="center">{I(o.first ? 'trash-2' : 'minus', 16, C.white)}</Frame>
          <Text font={FB} size={13} weight={800} lineHeight={16} color={C.white}>{o.qty}</Text>
          <Frame w={28} h={28} flex="row" items="center" justify="center">{I('plus', 16, C.white)}</Frame>
        </Frame>
      ) : <Frame name="Adicionar" position="absolute" x={(o.w || 124) - 44} y={(o.w || 124) - 44}>{PlusBtn(36)}</Frame>}
    </Frame>
    <Frame name="Texto" w="fill" flex="col" gap={0}>
      <Text name="Nome" w="fill" maxLines={1} truncate font={FB} size={13} weight={700} lineHeight={18} color={C.n900}>{p.n}</Text>
      <Frame flex="row" items="end" gap={2}>
        <Text font={FD} size={16} weight={600} lineHeight={20} color={C.w900}>{p.p}</Text>
        <Text font={FB} size={12} lineHeight={16} color={C.n600}>{p.per}</Text>
      </Frame>
    </Frame>
  </Frame>
)

// ---------- Navegação ----------
const CATS = [
  ['Frutas', 'tangerine', 'frutas'], ['Verduras', 'leafy-green', 'verduras'], ['Legumes', 'carrot', 'legumes'], ['Temperos', 'herb', 'temperos'],
  ['Queijos', 'cheese-wedge', 'queijos'], ['Ovos e leite', 'egg', 'laticinios'], ['Bebidas', 'beverage-box', 'bebidas'], ['Mercearia', 'honey-pot', 'mercearia'],
]
const CatTile = ([label, e, cat], w = 80) => (
  <Frame name={'Categoria/' + label} w={w} flex="col" items="center" gap={6}>
    <Frame name="Ícone" w={68} h={68} rounded={20} bg={TINT[cat]} flex="row" items="center" justify="center">{E(e, 40)}</Frame>
    <Text w="fill" textAlign="center" font={FB} size={12} weight={700} lineHeight={16} color={C.n900}>{label}</Text>
  </Frame>
)
const SectionHead = (title, action = 'Ver todos', sub) => (
  <Frame name={'Título/' + title} w="fill" flex="row" items="end" justify="between" gap={12}>
    <Frame flex="col" gap={2} grow={1}>
      <Text w="fill" font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>{title}</Text>
      {sub ? <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{sub}</Text> : null}
    </Frame>
    {action ? <Frame flex="row" items="center" gap={2} h={32}><Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>{action}</Text>{I('chevron-right', 16, C.g700)}</Frame> : null}
  </Frame>
)
const NAV = [['Início', 'house'], ['Categorias', 'layout-grid'], ['Pedidos', 'receipt-text'], ['Conta', 'user-round']]
const BottomNav = (active = 'Início') => (
  <Frame name="Navegação inferior" w="fill" h={68} flex="row" items="start" pt={8} bg={C.white} strokeWeights={{ top: 1 }} stroke={BORDER}>
    {NAV.map(([label, icon]) => {
      const on = label === active
      return (
        <Frame name={'Aba/' + label} w="fill" flex="col" items="center" gap={4}>
          <Frame name="Indicador" w={56} h={30} rounded={15} bg={on ? C.g100 : '#FFFFFF00'} flex="row" items="center" justify="center">{I(icon, 22, on ? C.g900 : C.n600)}</Frame>
          <Text font={FB} size={12} weight={on ? 800 : 600} lineHeight={14} color={on ? C.g900 : C.n600}>{label}</Text>
        </Frame>
      )
    })}
  </Frame>
)
const CartBar = (count = '4 itens', total = 'R$ 36,90') => (
  <Frame name="Barra do carrinho" w="fill" px={12} pb={10} pt={4} flex="col">
    <Frame name="Ver carrinho" w="fill" h={56} rounded={16} bg={C.g900} flex="row" items="center" justify="between" px={14} shadow={SH_FLOAT}>
      <Frame flex="row" items="center" gap={12}>
        <Frame w={36} h={36} rounded={10} bg="#FFFFFF1F" flex="row" items="center" justify="center">{I('shopping-basket', 20, C.white)}</Frame>
        <Frame flex="col" gap={0}>
          <Text font={FB} size={12} weight={600} lineHeight={16} color={C.c200}>{count}</Text>
          <Text font={FD} size={18} weight={600} lineHeight={22} color={C.white}>{total}</Text>
        </Frame>
      </Frame>
      <Frame flex="row" items="center" gap={4}>
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.white}>Ver carrinho</Text>
        {I('chevron-right', 20, C.white)}
      </Frame>
    </Frame>
  </Frame>
)
const TopBar = (title, { back = true, right = [], sub, bg = C.c50 } = {}) => (
  <Frame name="Barra superior" w="fill" h={60} flex="row" items="center" gap={8} px={12} bg={bg}>
    {back ? IconBtn('arrow-left', { size: 40, bg: C.white, stroke: BORDER, name: 'Voltar' }) : null}
    <Frame flex="col" grow={1} gap={0}>
      <Text font={FD} size={19} weight={600} lineHeight={24} color={C.g900}>{title}</Text>
      {sub ? <Text font={FB} size={12} lineHeight={16} color={C.n600}>{sub}</Text> : null}
    </Frame>
    {right}
  </Frame>
)

// ---------- Formulários ----------
const Radio = (on) => (
  <Frame name={on ? 'Rádio/marcado' : 'Rádio/vazio'} w={22} h={22} rounded={11} stroke={on ? C.g900 : C.n400} strokeWidth={2} bg={C.white} flex="row" items="center" justify="center">
    {on ? <Frame w={12} h={12} rounded={6} bg={C.g900} /> : null}
  </Frame>
)
const Toggle = (on) => (
  <Frame name={on ? 'Interruptor/ligado' : 'Interruptor/desligado'} w={48} h={28} rounded={14} bg={on ? C.g900 : C.n200} flex="row" items="center" justify={on ? 'end' : 'start'} px={3}>
    <Frame w={22} h={22} rounded={11} bg={C.white} shadow="0 1 2 #00000033" />
  </Frame>
)
const Field = ({ label, value, placeholder, icon, iconR, h = 52, name, helper, state = 'default' }) => {
  const stroke = state === 'focus' ? C.g900 : state === 'error' ? C.e600 : C.n200
  return (
    <Frame name={name || 'Campo/' + (label || placeholder)} w="fill" flex="col" gap={6}>
      {label ? <Text font={FB} size={14} weight={700} lineHeight={18} color={C.n900}>{label}</Text> : null}
      <Frame name="Entrada" w="fill" h={h} flex="row" items="center" gap={10} px={14} rounded={12} bg={C.white} stroke={stroke} strokeWidth={state === 'focus' ? 2 : 1}>
        {icon ? I(icon, 20, C.n600) : null}
        <Text grow={1} font={FB} size={16} lineHeight={22} color={value ? C.n900 : C.n500}>{value || placeholder}</Text>
        {iconR ? I(iconR, 20, C.n600) : null}
      </Frame>
      {helper ? <Text w="fill" font={FB} size={12} lineHeight={16} color={state === 'error' ? C.e600 : C.n600}>{helper}</Text> : null}
    </Frame>
  )
}
const InfoBox = ({ icon = 'info', title, text, kind = 'info', name }) => {
  const k = { info: [C.i100, C.i700], alerta: [C.a100, C.a700], verde: [C.g50, C.g900], creme: [C.c200, C.g900] }[kind]
  return (
    <Frame name={name || 'Aviso/' + (title || icon)} w="fill" flex="row" gap={10} p={12} rounded={12} bg={k[0]}>
      {I(icon, 20, k[1])}
      <Frame grow={1} flex="col" gap={2}>
        {title ? <Text w="fill" font={FB} size={14} weight={800} lineHeight={20} color={k[1]}>{title}</Text> : null}
        <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n900}>{text}</Text>
      </Frame>
    </Frame>
  )
}
const Progress = (pct, total = 326) => (
  <Frame name="Barra de progresso" w={total} h={8} rounded={4} bg={C.n100}>
    <Frame name="Preenchido" position="absolute" x={0} y={0} w={Math.round((pct / 100) * total)} h={8} rounded={4} bg={C.g500} />
  </Frame>
)
const Divider = () => <Frame name="Divisor" w="fill" h={1} bg={BORDER} />
const Row = (l, r, o = {}) => (
  <Frame name={'Linha/' + l} w="fill" flex="row" items="center" justify="between" gap={12}>
    <Text font={FB} size={o.size || 14} weight={o.bold ? 800 : 400} lineHeight={20} color={o.lc || C.n600}>{l}</Text>
    <Text font={o.bold ? FD : FB} size={o.bold ? 18 : (o.size || 14)} weight={o.bold ? 600 : 700} lineHeight={22} color={o.rc || C.n900}>{r}</Text>
  </Frame>
)
const StickyBottom = (children, name = 'Rodapé fixo') => (
  <Frame name={name} w="fill" flex="row" items="center" gap={12} px={16} pt={12} pb={16} bg={C.white} strokeWeights={{ top: 1 }} stroke={BORDER} shadow="0 -4 16 #1F2A260F">
    {children}
  </Frame>
)
const Screen = (name, children, o = {}) => (
  <Frame name={name} w={390} h="hug" minH={844} flex="col" bg={o.bg || C.c50} overflow="hidden">
    {children}
  </Frame>
)
const Segmented = (opts, active, w = 'hug') => (
  <Frame name="Seletor segmentado" w={w} h={40} flex="row" p={4} gap={4} rounded={12} bg={C.n100}>
    {opts.map((o) => {
      const on = o === active
      const props = { name: 'Opção/' + o, h: 32, px: 14, flex: 'row', items: 'center', justify: 'center', rounded: 9, bg: on ? C.white : '#FFFFFF00' }
      if (w === 'fill') props.grow = 1
      if (on) props.shadow = '0 1 3 #1F2A2626'
      return <Frame {...props}><Text font={FB} size={14} weight={on ? 800 : 600} lineHeight={18} color={on ? C.g900 : C.n600}>{o}</Text></Frame>
    })}
  </Frame>
)
