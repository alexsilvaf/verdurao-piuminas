const secao = (num, title, desc, children) => (
  <Frame name={'Seção/' + title} w="fill" flex="col" gap={24} p={40} rounded={28} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="end" gap={16}>
      <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g700}>{num}</Text>
      <Text font={FD} size={36} weight={600} lineHeight={42} color={C.g900}>{title}</Text>
    </Frame>
    {desc ? <Text w={1000} font={FB} size={18} lineHeight={28} color={C.n600}>{desc}</Text> : null}
    {children}
  </Frame>
)
const sw = (name, hex, uso, dark) => (
  <Frame name={"Cor/" + name} w={156} flex="col" gap={10}>
    <Frame w={156} h={96} rounded={16} bg={hex} stroke={hex === '#FFFFFF' || hex === '#FFF9E8' ? BORDER : hex} strokeWidth={1} flex="col" justify="end" p={10}>
      <Text font={FB} size={12} weight={800} lineHeight={16} color={dark ? C.white : C.n900}>Aa</Text>
    </Frame>
    <Frame w="fill" flex="col" gap={2}>
      <Text w="fill" font={FB} size={14} weight={800} lineHeight={18} color={C.n900}>{name}</Text>
      <Text font={FB} size={13} lineHeight={18} color={C.n600}>{hex}</Text>
      {uso ? <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n500}>{uso}</Text> : null}
    </Frame>
  </Frame>
)
const grupoCor = (title, items) => (
  <Frame name={'Grupo de cor/' + title} w="fill" flex="col" gap={14}>
    <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.8} color={C.g700}>{title.toUpperCase()}</Text>
    <Frame w="fill" flex="row" wrap gap={20} rowGap={24}>{items.map((i) => sw(...i))}</Frame>
  </Frame>
)

const marca = secao('01', 'Marca', 'O logo original foi recortado com fundo transparente. Use sempre sobre o creme da marca ou branco, nunca sobre o verde ou fotos.', (
  <Frame w="fill" flex="row" gap={24}>
    <Frame name="Logo/Creme" w={460} h={240} rounded={20} bg={C.c400} flex="col" items="center" justify="center" gap={12}>
      <Rectangle name="Logo" w={340} h={121} />
      <Text font={FB} size={13} weight={700} lineHeight={16} color={C.g900}>Principal · fundo creme #F6E298</Text>
    </Frame>
    <Frame name="Logo/Branco" w={460} h={240} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1} flex="col" items="center" justify="center" gap={12}>
      <Rectangle name="Logo" w={340} h={121} />
      <Text font={FB} size={13} weight={700} lineHeight={16} color={C.n600}>Sobre branco</Text>
    </Frame>
    <Frame name="Logo/Emblema" w={460} h={240} rounded={20} bg={C.c50} stroke={BORDER} strokeWidth={1} flex="col" items="center" justify="center" gap={12}>
      <Rectangle name="Emblema" w={150} h={155} />
      <Text font={FB} size={13} weight={700} lineHeight={16} color={C.n600}>Emblema · ícone do site e favicon</Text>
    </Frame>
  </Frame>
))

const cores = secao('02', 'Cores', 'Extraídas do logo. Todas as combinações de texto foram conferidas para contraste AA (WCAG). As cores estão salvas como variáveis na coleção "Cores".', (
  <Frame w="fill" flex="col" gap={32}>
    {grupoCor('Marca', [
      ['Verde 950', '#053A2F', 'Pressionado', true], ['Verde 900', '#085041', 'Primária: botões e títulos', true], ['Verde 700', '#1E7A63', 'Links e ícones ativos', true], ['Verde 500', '#2F9E78', 'Progresso (sem texto)', true], ['Verde 100', '#DCEFE6', 'Fundo de botão suave'], ['Verde 50', '#EFF7F2', 'Item selecionado'],
      ['Vinho 900', '#490611', 'Preços e destaques', true], ['Vinho 700', '#6B1322', 'Sobretítulos', true], ['Vinho 100', '#F7E4E6', 'Destaque regional'],
      ['Creme 400', '#F6E298', 'Cabeçalho e banners'], ['Creme 200', '#FBEFC7', 'Avisos suaves'], ['Creme 50', '#FFF9E8', 'Fundo das páginas'],
    ])}
    {grupoCor('Apoio e feedback', [
      ['Tomate 600', '#C93A22', 'Ofertas (texto branco 5,1:1)', true], ['Tomate 700', '#A82E1A', 'Texto de oferta em fundo claro', true], ['Tomate 100', '#FDE7E1', 'Fundo de oferta'], ['Amarelo 400', '#F5C431', 'Detalhes sobre verde'], ['Laranja 500', '#EE8A22', 'Ilustrações'],
      ['Alerta 700', '#8A5A12', 'Texto de alerta', true], ['Alerta 100', '#FDF3DC', 'Fundo de alerta'], ['Info 700', '#2B6CB0', 'Texto informativo', true], ['Info 100', '#E7F0FA', 'Fundo informativo'], ['Erro 600', '#C53030', 'Erros de formulário', true],
    ])}
    {grupoCor('Neutros', [
      ['Neutro 900', '#1F2A26', 'Texto principal', true], ['Neutro 600', '#56625D', 'Texto secundário', true], ['Neutro 500', '#6B7671', 'Placeholder (4,5:1)', true], ['Neutro 400', '#8E9893', 'Desabilitado', true], ['Neutro 200', '#E7E1CF', 'Bordas'], ['Neutro 100', '#F3EFE3', 'Fundos sutis'], ['Branco', '#FFFFFF', 'Cards e superfícies'],
    ])}
    {grupoCor('Fundos por categoria', [
      ['Frutas', '#FFEBD1'], ['Verduras', '#E3F2E7'], ['Legumes', '#FCE6D6'], ['Temperos', '#E9F3DC'], ['Queijos', '#FFF3C4'], ['Ovos e leite', '#F5EEE1'], ['Bebidas', '#E3EEF7'], ['Mercearia', '#F1E9DE'],
    ])}
  </Frame>
))

const tipo = (nome, spec, sample, props) => (
  <Frame name={'Tipo/' + nome} w="fill" flex="row" items="center" gap={32} py={18} strokeWeights={{ bottom: 1 }} stroke={BORDER}>
    <Frame w={260} flex="col" gap={2}>
      <Text font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{nome}</Text>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{spec}</Text>
    </Frame>
    <Text grow={1} {...props}>{sample}</Text>
  </Frame>
)
const tipografia = secao('03', 'Tipografia', 'Fredoka (arredondada, como o logo) para títulos e preços. Nunito Sans para textos e interface. Tamanho mínimo de 12 px; campos de formulário com 16 px para o celular não dar zoom.', (
  <Frame w="fill" flex="col">
    {tipo('Título de página', 'Fredoka SemiBold · 28/34', 'Abacate', { font: FD, size: 28, weight: 600, lineHeight: 34, color: C.g900 })}
    {tipo('Título de seção', 'Fredoka SemiBold · 20/26', 'Ofertas da semana', { font: FD, size: 20, weight: 600, lineHeight: 26, color: C.g900 })}
    {tipo('Título de card', 'Fredoka SemiBold · 17/22', 'Se faltar algum item', { font: FD, size: 17, weight: 600, lineHeight: 22, color: C.g900 })}
    {tipo('Preço destaque', 'Fredoka SemiBold · 28/32 · Vinho 900', 'R$ 4,46', { font: FD, size: 28, weight: 600, lineHeight: 32, color: C.w900 })}
    {tipo('Preço', 'Fredoka SemiBold · 18/22 · Vinho 900', 'R$ 12,90', { font: FD, size: 18, weight: 600, lineHeight: 22, color: C.w900 })}
    {tipo('Corpo', 'Nunito Sans Regular · 16/24', 'Separamos cada item como se fosse para a nossa casa.', { font: FB, size: 16, weight: 400, lineHeight: 24, color: C.n900 })}
    {tipo('Corpo pequeno', 'Nunito Sans Regular · 14/20', 'Cada unidade pesa em média 450 g', { font: FB, size: 14, weight: 400, lineHeight: 20, color: C.n900 })}
    {tipo('Rótulo', 'Nunito Sans ExtraBold · 14/20', 'Entrega hoje, 16h–18h', { font: FB, size: 14, weight: 800, lineHeight: 20, color: C.n900 })}
    {tipo('Legenda', 'Nunito Sans Regular · 12/16', '1 un ≈ 450 g · R$ 9,90/kg', { font: FB, size: 12, weight: 400, lineHeight: 16, color: C.n600 })}
    {tipo('Botão', 'Nunito Sans ExtraBold · 16/20', 'Adicionar ao carrinho', { font: FB, size: 16, weight: 800, lineHeight: 20, color: C.g900 })}
    {tipo('Sobretítulo', 'Nunito Sans ExtraBold · 12/16 · +0,8', 'OFERTAS DA SEMANA', { font: FB, size: 12, weight: 800, lineHeight: 16, letterSpacing: 0.8, color: C.g700 })}
  </Frame>
))

const esp = [4, 8, 12, 16, 20, 24, 32, 40]
const raios = [['sm', 8, 'Selos'], ['md', 12, 'Botões e campos'], ['lg', 16, 'Cards'], ['xl', 24, 'Folhas e banners'], ['pill', 999, 'Chips']]
const medidas = secao('04', 'Espaçamento, raios e sombras', 'Grade de 4 px. Margem lateral de 16 px no celular, 12 px entre cards. Áreas de toque com no mínimo 44 px.', (
  <Frame w="fill" flex="row" gap={40} items="start">
    <Frame name="Espaçamento" w={420} flex="col" gap={12}>
      <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.8} color={C.g700}>ESPAÇAMENTO</Text>
      {esp.map((v) => (
        <Frame w="fill" flex="row" items="center" gap={16}>
          <Text w={64} font={FB} size={14} weight={700} lineHeight={18} color={C.n900}>{v + ' px'}</Text>
          <Frame w={v * 8} h={20} rounded={4} bg={C.g500} />
        </Frame>
      ))}
    </Frame>
    <Frame name="Raios" w={500} flex="col" gap={12}>
      <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.8} color={C.g700}>RAIOS</Text>
      <Frame flex="row" gap={16} wrap>
        {raios.map(([n, r, uso]) => (
          <Frame w={90} flex="col" gap={8} items="center">
            <Frame w={84} h={84} rounded={Math.min(r, 42)} bg={C.g100} stroke={C.g900} strokeWidth={1.5} />
            <Text font={FB} size={13} weight={800} lineHeight={16} color={C.n900}>{n + ' · ' + (r === 999 ? '∞' : r)}</Text>
            <Text w="fill" textAlign="center" font={FB} size={12} lineHeight={16} color={C.n600}>{uso}</Text>
          </Frame>
        ))}
      </Frame>
    </Frame>
    <Frame name="Sombras" grow={1} flex="col" gap={12}>
      <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.8} color={C.g700}>SOMBRAS</Text>
      <Frame flex="row" gap={24} p={20} rounded={20} bg={C.c50}>
        <Frame w={150} h={100} rounded={16} bg={C.white} shadow={SH_CARD} flex="col" justify="end" p={12}><Text font={FB} size={13} weight={800} lineHeight={16} color={C.n900}>Card</Text></Frame>
        <Frame w={150} h={100} rounded={16} bg={C.white} shadow={SH_FLOAT} flex="col" justify="end" p={12}><Text font={FB} size={13} weight={800} lineHeight={16} color={C.n900}>Flutuante</Text></Frame>
      </Frame>
    </Frame>
  </Frame>
))

const icones = ['house', 'layout-grid', 'receipt-text', 'user-round', 'shopping-basket', 'search', 'map-pin', 'truck', 'clock', 'heart', 'plus', 'minus', 'trash-2', 'pencil-line', 'message-circle', 'repeat-2', 'scale', 'sparkles', 'leaf', 'sprout', 'qr-code', 'credit-card', 'banknote', 'check-circle-2']
const ilus = [['tangerine', 'frutas'], ['leafy-green', 'verduras'], ['carrot', 'legumes'], ['herb', 'temperos'], ['cheese-wedge', 'queijos'], ['egg', 'laticinios'], ['beverage-box', 'bebidas'], ['honey-pot', 'mercearia'], ['avocado', 'frutas'], ['tomato', 'legumes'], ['banana', 'frutas'], ['strawberry', 'frutas']]
const iconografia = secao('05', 'Ícones e ilustrações', 'Interface com Lucide (traço de 2 px, 20–24 px). Produtos e categorias com ilustrações Fluent Emoji sobre o fundo da categoria. Na versão final, troque por fotos reais com fundo e luz padronizados.', (
  <Frame w="fill" flex="row" gap={40} items="start">
    <Frame name="Ícones" w={700} flex="row" wrap gap={12} rowGap={12}>
      {icones.map((i) => (
        <Frame name={'Ícone/' + i} w={100} h={84} rounded={14} bg={C.c50} flex="col" items="center" justify="center" gap={8}>
          {I(i, 24, C.g900)}
          <Text font={FB} size={12} lineHeight={16} color={C.n600}>{i}</Text>
        </Frame>
      ))}
    </Frame>
    <Frame name="Ilustrações" grow={1} flex="row" wrap gap={12} rowGap={12}>
      {ilus.map(([e, cat]) => (
        <Frame w={120} h={120} rounded={20} bg={TINT[cat]} flex="row" items="center" justify="center">{E(e, 72)}</Frame>
      ))}
    </Frame>
  </Frame>
))

return (
  <Frame name="Design System · Fundamentos" w={1600} h="hug" flex="col" gap={32} p={56} bg={C.c50} rounded={40}>
    <Frame name="Cabeçalho" w="fill" flex="row" items="end" justify="between">
      <Frame flex="col" gap={12}>
        <Rectangle name="Logo" w={180} h={64} />
        <Text font={FD} size={64} weight={600} lineHeight={72} color={C.g900}>Design System</Text>
        <Text w={980} font={FB} size={22} lineHeight={32} color={C.n600}>Fundamentos visuais do site do Verdurão Piuminas: marca, cores, tipografia, medidas e ícones. Mobile-first, acessível e fiel ao logo.</Text>
      </Frame>
      <Frame flex="row" gap={8}>
        {Badge('v1.0 · out/2026', 'creme')}
      </Frame>
    </Frame>
    {marca}
    {cores}
    {tipografia}
    {medidas}
    {iconografia}
  </Frame>
)
