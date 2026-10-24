const secao = (num, title, desc, children) => (
  <Frame name={'Seção/' + title} w="fill" flex="col" gap={28} p={40} rounded={28} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="end" gap={16}>
      <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g700}>{num}</Text>
      <Text font={FD} size={36} weight={600} lineHeight={42} color={C.g900}>{title}</Text>
    </Frame>
    {desc ? <Text w={1100} font={FB} size={18} lineHeight={28} color={C.n600}>{desc}</Text> : null}
    {children}
  </Frame>
)
const comp = (nome, el, w = 'hug') => (
  <Frame name={'Componente/' + nome} w={w} flex="col">{el}</Frame>
)
const ex = (label, el, w = 'hug') => (
  <Frame name={'Exemplo/' + label} w={w} flex="col" gap={10}>
    <Text font={FB} size={13} weight={700} lineHeight={16} color={C.n600}>{label}</Text>
    {el}
  </Frame>
)
const linha = (label, children, gap = 24) => (
  <Frame name={'Linha/' + label} w="fill" flex="row" items="center" gap={gap}>
    <Text w={150} font={FB} size={14} weight={800} lineHeight={18} color={C.n900}>{label}</Text>
    {children}
  </Frame>
)
const sub = (t) => <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.8} color={C.g700}>{t}</Text>

// 06 Botões
const tipos = [['Primário', 'primary'], ['Secundário', 'secondary'], ['Suave', 'soft'], ['Fantasma', 'ghost'], ['Desabilitado', 'disabled']]
const tamanhos = [['G · 52', 'l'], ['M · 44', 'm'], ['P · 36', 's']]
const botoes = secao('06', 'Botões', 'Um botão primário por tela. Ícone à esquerda para ação, seta à direita para avançar. Altura mínima de 44 px em ações principais; o tamanho P só aparece dentro de cards e listas.', (
  <Frame w="fill" flex="col" gap={18}>
    <Frame w="fill" flex="row" gap={24}>
      <Frame w={150} h={1} />
      {tamanhos.map(([t]) => <Text w={260} font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.6} color={C.g700}>{'TAMANHO ' + t}</Text>)}
    </Frame>
    {tipos.map(([nome, kind]) => linha(nome, tamanhos.map(([t, size]) => (
      <Frame w={260} flex="col">{comp('Botão/' + nome + '/' + size.toUpperCase().replace('L', 'G').replace('S', 'P'), Btn({ label: kind === 'disabled' ? 'Indisponível' : 'Adicionar', kind, size, icon: 'plus', name: 'Botão' }))}</Frame>
    ))))}
    {linha('Com seta', [comp('Botão/Avançar', Btn({ label: 'Escolher entrega', iconR: 'arrow-right', name: 'Botão' })), comp('Botão/Ícone', IconBtn('arrow-left', { size: 44, bg: C.white, stroke: BORDER, name: 'Botão de ícone' })), comp('Botão/Ícone com contador', IconBtn('shopping-basket', { size: 44, bg: C.g100, badge: '3', name: 'Botão de ícone' }))])}
  </Frame>
))

// 07 Quantidade
const quantidade = secao('07', 'Adicionar e quantidade', 'Seguindo a pesquisa da Baymard: depois do primeiro toque, "Adicionar" vira um seletor de quantidade. Com 1 unidade, o "−" vira lixeira para deixar claro que remove o item.', (
  <Frame w="fill" flex="row" gap={40} items="end" wrap rowGap={28}>
    {ex('Adicionar (card)', comp('Quantidade/Adicionar', <Frame w={150} flex="col">{AddBtn()}</Frame>))}
    {ex('No carrinho · 1 un', comp('Quantidade/Card · 1 un', <Frame w={150} flex="col">{Stepper({ qty: '1 un', first: true })}</Frame>))}
    {ex('No carrinho · 2 un', comp('Quantidade/Card · 2 un', <Frame w={150} flex="col">{Stepper({ qty: '2 un' })}</Frame>))}
    {ex('Por quilo', comp('Quantidade/Card · kg', <Frame w={150} flex="col">{Stepper({ qty: '500 g' })}</Frame>))}
    {ex('Lista (carrinho)', comp('Quantidade/Lista', Stepper({ qty: '6 un', h: 36, w: 128, kind: 'outline' })))}
    {ex('Grande (produto)', comp('Quantidade/Grande', Stepper({ qty: '2 un', h: 52, w: 168, kind: 'outline' })))}
    {ex('Botão +', comp('Quantidade/Botão +', PlusBtn(36)))}
  </Frame>
))

// 08 Chips, selos e seletores
const selos = [['-20%', 'oferta'], ['Chegou hoje', 'fresco'], ['Últimas', 'alerta'], ['Do ES', 'vinho'], ['Esgotado', 'esgotado'], ['Mais rápido', 'fresco']]
const diaChip = (label, date, on) => (
  <Frame name={'Dia/' + label} w={84} h={64} flex="col" items="center" justify="center" gap={2} rounded={14} bg={on ? C.g900 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={1}>
    <Text font={FB} size={14} weight={800} lineHeight={18} color={on ? C.white : C.n900}>{label}</Text>
    <Text font={FB} size={12} lineHeight={16} color={on ? C.c200 : C.n600}>{date}</Text>
  </Frame>
)
const chips = secao('08', 'Chips, selos e seletores', 'Chips filtram e trocam subcategorias; selos informam (nunca são clicáveis). Oferta em tomate, frescor em verde, estoque baixo em âmbar, origem regional em vinho.', (
  <Frame w="fill" flex="col" gap={24}>
    {linha('Chips', [comp('Chip/Selecionado', Chip('Todas', true)), comp('Chip/Padrão', Chip('Cítricas')), comp('Chip/Com ícone', Chip('Ofertas', false, 'tag'))], 12)}
    {linha('Selos', selos.map(([l, k]) => comp('Selo/' + l, Badge(l, k))), 12)}
    {linha('Segmentado', [comp('Seletor/Segmentado', Segmented(['Unidade', 'Quilo'], 'Unidade'))])}
    {linha('Dia de entrega', [comp('Dia/Selecionado', diaChip('Hoje', 'sex, 23/10', true)), comp('Dia/Padrão', diaChip('Amanhã', 'sáb, 24/10', false))], 12)}
  </Frame>
))

// 09 Campos e seleção
const slot = (time, state, tag) => {
  const off = state === 'off'
  const on = state === 'on'
  return (
    <Frame name={'Janela/' + time} w={360} h={56} flex="row" items="center" gap={12} px={16} rounded={12} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : BORDER} strokeWidth={on ? 2 : 1}>
      {off ? <Frame w={22} h={22} rounded={11} stroke={C.n200} strokeWidth={2} bg={C.n100} /> : Radio(on)}
      <Text font={FB} size={15} weight={on ? 800 : 700} lineHeight={20} color={off ? C.n600 : C.n900} textDecoration={off ? 'strikethrough' : 'none'}>{time}</Text>
      {tag ? Badge(tag, 'alerta') : null}
      <Frame grow={1} h={1} />
      <Text font={FB} size={14} weight={on ? 800 : 600} lineHeight={20} color={off ? C.n600 : C.n900}>{off ? 'Esgotado' : 'R$ 6,90'}</Text>
    </Frame>
  )
}
const payCard = (icon, title, desc, on) => (
  <Frame name={'Opção/' + title} w={360} flex="row" items="center" gap={12} p={14} rounded={16} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    {Radio(on)}
    <Frame w={40} h={40} rounded={12} bg={on ? C.white : C.n100} flex="row" items="center" justify="center">{I(icon, 20, C.g900)}</Frame>
    <Frame grow={1} flex="col" gap={2}>
      <Text font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{title}</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{desc}</Text>
    </Frame>
  </Frame>
)
const campos = secao('09', 'Campos e seleção', 'Rótulo sempre visível acima do campo (nada de rótulo só como placeholder). Erros explicam o que fazer. Opções importantes viram cards grandes, fáceis de tocar.', (
  <Frame w="fill" flex="col" gap={32}>
    <Frame w="fill" flex="row" gap={32} items="start">
      <Frame w={360} flex="col">{comp('Campo/Padrão', Field({ label: 'Rua e número', placeholder: 'Ex.: Rua das Flores, 120', name: 'Campo' }), 'fill')}</Frame>
      <Frame w={360} flex="col">{comp('Campo/Foco', Field({ label: 'Ponto de referência', value: 'Portão verde, ao lado da padaria', state: 'focus', iconR: 'check', name: 'Campo' }), 'fill')}</Frame>
      <Frame w={360} flex="col">{comp('Campo/Erro', Field({ label: 'Rua e número', value: 'Rua das Flores', state: 'error', iconR: 'circle-alert', helper: 'Faltou o número da casa. Se não tiver, escreva “s/n”.', name: 'Campo' }), 'fill')}</Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={32} items="start">
      <Frame w={360} flex="col">{comp('Campo/Com ícone', Field({ label: 'Observação (opcional)', placeholder: 'Ex.: tamanhos parecidos', icon: 'pencil-line', name: 'Campo' }), 'fill')}</Frame>
      <Frame w={360} flex="col">{comp('Campo/Busca', (
        <Frame name="Busca" w="fill" h={48} flex="row" items="center" gap={10} px={14} rounded={14} bg={C.white} stroke={C.n200} strokeWidth={1}>
          {I('search', 20, C.g900)}
          <Text grow={1} font={FB} size={16} lineHeight={22} color={C.n500}>Buscar frutas, verduras…</Text>
        </Frame>
      ), 'fill')}</Frame>
      <Frame w={360} flex="row" gap={24} items="center" pt={26}>
        {comp('Controle/Rádio marcado', Radio(true))}
        {comp('Controle/Rádio vazio', Radio(false))}
        {comp('Controle/Interruptor ligado', Toggle(true))}
        {comp('Controle/Interruptor desligado', Toggle(false))}
      </Frame>
    </Frame>
    <Frame w="fill" flex="row" gap={32} items="start">
      <Frame flex="col" gap={10}>
        {sub('JANELAS DE ENTREGA')}
        {comp('Janela/Selecionada', slot('16h – 18h', 'on'))}
        {comp('Janela/Disponível', slot('18h – 20h', 'idle'))}
        {comp('Janela/Últimas vagas', slot('14h – 16h', 'idle', 'Últimas vagas'))}
        {comp('Janela/Esgotada', slot('08h – 10h', 'off'))}
      </Frame>
      <Frame flex="col" gap={10}>
        {sub('CARDS DE OPÇÃO')}
        {comp('Opção/Selecionada', payCard('qr-code', 'Pix', 'Aprovação na hora', true))}
        {comp('Opção/Padrão', payCard('credit-card', 'Cartão de crédito', 'Visa, Mastercard, Elo', false))}
        {comp('Opção/Dinheiro com troco', (
          <Frame name="Opção/Dinheiro" w={360} flex="col" gap={12} p={14} rounded={16} bg={C.g50} stroke={C.g900} strokeWidth={2}>
            <Frame w="fill" flex="row" items="center" gap={12}>
              {Radio(true)}
              <Frame w={40} h={40} rounded={12} bg={C.white} flex="row" items="center" justify="center">{I('banknote', 20, C.g900)}</Frame>
              <Text grow={1} font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>Dinheiro</Text>
            </Frame>
            {Field({ label: 'Troco para quanto?', value: 'R$ 100,00', name: 'Campo/Troco' })}
          </Frame>
        ))}
      </Frame>
    </Frame>
  </Frame>
))

// 10 Cards
const cards = secao('10', 'Cards de produto e categoria', 'Card com fundo da categoria, nome em até 2 linhas, peso aproximado, preço por kg e ação sempre visível. A altura é fixa por linha para a grade ficar alinhada.', (
  <Frame w="fill" flex="col" gap={28}>
    <Frame w="fill" flex="row" gap={24} items="start">
      {ex('Padrão', comp('Card de produto/Padrão', Card(P.abacate)))}
      {ex('Oferta', comp('Card de produto/Oferta', Card(P.morango)))}
      {ex('No carrinho', comp('Card de produto/No carrinho', Card(P.banana, { qty: '1 kg' })))}
      {ex('Estoque baixo', comp('Card de produto/Estoque baixo', Card(P.uva)))}
      {ex('Esgotado', comp('Card de produto/Esgotado', Card(P.kiwi)))}
    </Frame>
    <Frame w="fill" flex="row" gap={24} items="start">
      {ex('Mini card', comp('Mini card/Padrão', MiniCard(P.queijo)))}
      {ex('Mini card no carrinho', comp('Mini card/No carrinho', MiniCard(P.tomate, { qty: '6 un' })))}
      {ex('Categoria', <Frame flex="row" gap={12}>{CATS.slice(0, 4).map((c) => comp('Categoria/' + c[0], CatTile(c)))}</Frame>)}
    </Frame>
  </Frame>
))

// 11 Navegação
const navegacao = secao('11', 'Navegação', 'Barra inferior com 4 destinos e rótulos sempre visíveis. Quando há itens, a barra do carrinho flutua acima dela com total e quantidade. Telas internas usam a barra superior com voltar.', (
  <Frame w="fill" flex="row" gap={40} items="start">
    <Frame w={390} flex="col" gap={20}>
      {ex('Barra superior', comp('Navegação/Barra superior', <Frame w={390} flex="col">{TopBar('Frutas', { sub: '48 produtos', right: [IconBtn('search', { size: 40, bg: C.white, stroke: BORDER, name: 'Buscar' })] })}</Frame>), 'fill')}
      {ex('Barra do carrinho', comp('Navegação/Barra do carrinho', <Frame w={390} flex="col">{CartBar('4 itens', 'R$ 36,90')}</Frame>), 'fill')}
      {ex('Barra inferior', comp('Navegação/Barra inferior', <Frame w={390} flex="col">{BottomNav('Início')}</Frame>), 'fill')}
    </Frame>
    <Frame w={390} flex="col" gap={20}>
      {ex('Rodapé fixo (ação principal)', comp('Navegação/Rodapé fixo', <Frame w={390} flex="col">{StickyBottom([
        <Frame name="Total" flex="col" gap={0}>
          <Text font={FB} size={12} lineHeight={16} color={C.n600}>Total estimado</Text>
          <Text font={FD} size={22} weight={600} lineHeight={26} color={C.w900}>R$ 65,62</Text>
        </Frame>,
        Btn({ label: 'Continuar', iconR: 'arrow-right', w: 'fill' }),
      ])}</Frame>), 'fill')}
      {ex('Título de seção', comp('Navegação/Título de seção', <Frame w={358} flex="col">{SectionHead('Ofertas da semana', 'Ver todas', 'Válidas até domingo')}</Frame>), 'fill')}
      {ex('Aviso rápido (toast)', comp('Feedback/Toast', (
        <Frame name="Toast" w={358} h={52} flex="row" items="center" gap={10} px={16} rounded={14} bg={C.n900} shadow={SH_FLOAT}>
          {I('check-circle-2', 20, C.c400)}
          <Text grow={1} font={FB} size={14} weight={700} lineHeight={20} color={C.white}>Banana Prata adicionada</Text>
          <Text font={FB} size={14} weight={800} lineHeight={20} color={C.c400}>Desfazer</Text>
        </Frame>
      )), 'fill')}
    </Frame>
    <Frame grow={1} flex="col" gap={20}>
      {ex('Avisos', <Frame w="fill" flex="col" gap={12}>
        {comp('Aviso/Informativo', InfoBox({ icon: 'info', title: 'Informativo', text: 'Mensagens neutras e explicações.', kind: 'info' }), 'fill')}
        {comp('Aviso/Atenção', InfoBox({ icon: 'scale', title: 'Atenção', text: 'Peso variável, horários e regras.', kind: 'alerta' }), 'fill')}
        {comp('Aviso/Positivo', InfoBox({ icon: 'clock', text: 'Confirmações e garantias.', kind: 'verde' }), 'fill')}
        {comp('Aviso/Dica', InfoBox({ icon: 'sparkles', title: 'Dica', text: 'Recursos da loja, como o ponto da fruta.', kind: 'creme' }), 'fill')}
      </Frame>, 'fill')}
      {ex('Progresso (frete grátis)', comp('Feedback/Progresso', Progress(73, 320)))}
    </Frame>
  </Frame>
))

// 12 Responsivo
const bp = (titulo, faixa, cols, linhas, w, colsN) => (
  <Frame name={'Breakpoint/' + titulo} grow={1} w="fill" flex="col" gap={14} p={20} rounded={20} bg={C.c50} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Text font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>{titulo}</Text>
      {Badge(faixa, 'creme')}
    </Frame>
    <Frame name="Esquema" w={w} h={120} p={8} rounded={12} bg={C.white} stroke={C.n200} strokeWidth={1} flex="row" gap={6}>
      {Array.from({ length: colsN }, () => <Frame grow={1} h="fill" rounded={6} bg={C.g100} />)}
    </Frame>
    <Text font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{cols}</Text>
    {linhas.map((l) => (
      <Frame w="fill" flex="row" gap={8} items="start">
        <Frame w={16} h={20} flex="row" items="center">{I('check', 14, C.g700)}</Frame>
        <Text grow={1} font={FB} size={14} lineHeight={20} color={C.n900}>{l}</Text>
      </Frame>
    ))}
  </Frame>
)
const responsivo = secao('12', 'Grade e responsividade', 'O site nasce no celular (390 px) e se expande. Os mesmos componentes se reorganizam; nada é escondido no desktop.', (
  <Frame w="fill" flex="row" gap={24} items="stretch">
    {bp('Celular', 'até 599 px', '2 colunas de produtos', ['Margem 16 px, espaço entre cards 12 px', 'Barra inferior + barra do carrinho', 'Filtros em folha inferior'], 120, 2)}
    {bp('Tablet', '600 a 1023 px', '3 a 4 colunas de produtos', ['Margem 24 px', 'Carrinho como painel lateral', 'Categorias em uma linha'], 220, 4)}
    {bp('Desktop', 'a partir de 1024 px', '5 colunas + filtros laterais', ['Conteúdo até 1200 px, centralizado', 'Busca no cabeçalho; menu de categorias no topo', 'Carrinho em painel lateral fixo'], 320, 6)}
  </Frame>
))

return (
  <Frame name="Design System · Componentes" w={1600} h="hug" flex="col" gap={32} p={56} bg={C.c50} rounded={40}>
    <Frame name="Cabeçalho" w="fill" flex="col" gap={12}>
      <Text font={FD} size={64} weight={600} lineHeight={72} color={C.g900}>Componentes</Text>
      <Text w={1100} font={FB} size={22} lineHeight={32} color={C.n600}>Peças reutilizáveis das telas. Cada exemplo marcado como componente fica disponível no painel de Assets para montar novas telas.</Text>
    </Frame>
    {botoes}
    {quantidade}
    {chips}
    {campos}
    {cards}
    {navegacao}
    {responsivo}
  </Frame>
)
