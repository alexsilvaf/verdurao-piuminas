const etapa = (n, label, state) => (
  <Frame name={'Etapa/' + label} grow={1} w="fill" flex="col" gap={6}>
    <Frame w="fill" h={4} rounded={2} bg={state === 'next' ? C.n200 : (state === 'done' ? C.g500 : C.g900)} />
    <Frame flex="row" items="center" gap={4}>
      {state === 'done' ? I('check', 14, C.g700) : null}
      <Text font={FB} size={12} weight={state === 'next' ? 600 : 800} lineHeight={16} color={state === 'done' ? C.g700 : (state === 'next' ? C.n600 : C.g900)}>{n + '. ' + label}</Text>
    </Frame>
  </Frame>
)
const grupoLabel = (t) => <Text font={FB} size={12} weight={800} lineHeight={16} letterSpacing={0.6} color={C.n600}>{t}</Text>
const pay = (icon, title, desc, on, badge) => (
  <Frame name={'Pagamento/' + title} w="fill" flex="row" items="center" gap={12} p={14} rounded={16} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    {Radio(on)}
    <Frame w={40} h={40} rounded={12} bg={on ? C.white : C.n100} flex="row" items="center" justify="center">{I(icon, 20, C.g900)}</Frame>
    <Frame grow={1} flex="col" gap={2}>
      <Frame flex="row" items="center" gap={6}>
        <Text font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{title}</Text>
        {badge ? Badge(badge, 'fresco') : null}
      </Frame>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{desc}</Text>
    </Frame>
  </Frame>
)

return Screen('07 · Checkout · Pagamento', [
  TopBar('Pagamento', { sub: 'Etapa 2 de 2' }),
  <Frame name="Etapas" w="fill" flex="row" gap={8} px={16} pb={12} bg={C.c50}>
    {etapa(1, 'Entrega', 'done')}
    {etapa(2, 'Pagamento', 'active')}
  </Frame>,
  <Frame name="Conteúdo" w="fill" flex="col" gap={24} px={16} pt={12} pb={24}>
    <Frame name="Seção/Forma de pagamento" w="fill" flex="col" gap={12}>
      <Text font={FD} size={18} weight={600} lineHeight={24} color={C.g900}>Como você quer pagar?</Text>
      {grupoLabel('PAGAR AGORA, PELO SITE')}
      {pay('qr-code', 'Pix', 'Aprovação na hora. O QR Code aparece ao finalizar.', true, 'Mais rápido')}
      {pay('credit-card', 'Cartão de crédito', 'Visa, Mastercard, Elo, Hipercard', false)}
      <Frame h={4} />
      {grupoLabel('PAGAR NA ENTREGA')}
      {pay('wallet-cards', 'Cartão na maquininha', 'Débito ou crédito, na hora de receber', false)}
      {pay('banknote', 'Dinheiro', 'Avise se vai precisar de troco', false)}
    </Frame>
    <Frame name="CPF na nota" w="fill" flex="row" items="center" gap={12} p={14} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
      <Frame w={40} h={40} rounded={20} bg={C.n100} flex="row" items="center" justify="center">{I('file-text', 20, C.g900)}</Frame>
      <Frame grow={1} flex="col" gap={0}>
        <Text w="fill" font={FB} size={14} weight={800} lineHeight={20} color={C.n900}>CPF na nota</Text>
        <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>Opcional</Text>
      </Frame>
      {Toggle(false)}
    </Frame>
    <Frame name="Resumo do pedido" w="fill" flex="col" gap={10} p={16} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
      <Frame w="fill" flex="row" items="center" justify="between">
        <Text font={FD} size={17} weight={600} lineHeight={22} color={C.g900}>Resumo</Text>
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Ver itens</Text>
      </Frame>
      {Row('Itens (6)', 'R$ 58,72')}
      {Row('Entrega · hoje, 16h–18h', 'R$ 6,90')}
      {Divider()}
      {Row('Total estimado', 'R$ 65,62', { bold: true, lc: C.n900, rc: C.w900, size: 16 })}
      <Frame w="fill" flex="row" items="center" gap={6} pt={2}>
        {I('repeat-2', 14, C.n600)}
        <Text grow={1} font={FB} size={12} lineHeight={16} color={C.n600}>Se faltar algo: trocar por um parecido</Text>
        <Text font={FB} size={12} weight={800} lineHeight={16} color={C.g700}>Alterar</Text>
      </Frame>
    </Frame>
    {InfoBox({ icon: 'scale', title: 'Pesáveis com preço justo', text: 'Se o peso real ficar abaixo do estimado, devolvemos a diferença no mesmo Pix depois da entrega.', kind: 'info', name: 'Aviso/Ajuste de peso' })}
    <Text w="fill" textAlign="center" font={FB} size={12} lineHeight={16} color={C.n600}>Ao fazer o pedido, você concorda com os <Span weight={800} color={C.g700} textDecoration="underline">Termos de uso</Span> e a <Span weight={800} color={C.g700} textDecoration="underline">Política de privacidade</Span>.</Text>
  </Frame>,
  StickyBottom([
    Btn({ label: 'Fazer pedido · R$ 65,62', icon: 'lock', w: 'fill' }),
  ]),
])
