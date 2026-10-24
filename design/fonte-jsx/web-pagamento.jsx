const pay = (icon, title, desc, on, badge) => (
  <Frame name={'Pagamento/' + title} w="fill" flex="row" items="center" gap={14} p={16} rounded={16} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    {Radio(on)}
    <Frame w={44} h={44} rounded={12} bg={on ? C.white : C.n100} flex="row" items="center" justify="center">{I(icon, 22, C.g900)}</Frame>
    <Frame grow={1} flex="col" gap={2}>
      <Frame flex="row" items="center" gap={8}>
        <Text font={FB} size={16} weight={800} lineHeight={22} color={C.n900}>{title}</Text>
        {badge ? Badge(badge, 'fresco') : null}
      </Frame>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{desc}</Text>
    </Frame>
  </Frame>
)
const grupo = (t, children) => (
  <Frame name={'Grupo/' + t} w="fill" grow={1} flex="col" gap={12}>
    <Text font={FB} size={13} weight={800} lineHeight={16} letterSpacing={0.6} color={C.n600}>{t}</Text>
    {children}
  </Frame>
)
const linhaResumo = (icon, text, acao) => (
  <Frame w="fill" flex="row" items="start" gap={8}>
    <Frame w={18} h={20} flex="row" items="center">{I(icon, 16, C.n600)}</Frame>
    <Text grow={1} font={FB} size={13} lineHeight={18} color={C.n600}>{text}</Text>
    <Text font={FB} size={13} weight={800} lineHeight={18} color={C.g700}>{acao}</Text>
  </Frame>
)
const resumo = (
  <Frame name="Resumo do pedido" w="fill" flex="col" gap={14} p={24} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1} shadow={SH_CARD}>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Text font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>Resumo</Text>
      <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Ver itens</Text>
    </Frame>
    {DSummaryRow('Itens (6)', 'R$ 58,72')}
    {DSummaryRow('Entrega', 'R$ 6,90')}
    {Divider()}
    {DSummaryRow('Total estimado', 'R$ 65,62', { bold: true })}
    {linhaResumo('truck', 'Hoje, 16h–18h · Rua das Flores, 120', 'Alterar')}
    {linhaResumo('repeat-2', 'Se faltar algo: trocar por um parecido', 'Alterar')}
    {Btn({ label: 'Fazer pedido · R$ 65,62', icon: 'lock', w: 'fill' })}
    <Text w="fill" textAlign="center" font={FB} size={12} lineHeight={16} color={C.n600}>Ao fazer o pedido, você concorda com os <Span weight={800} color={C.g700} textDecoration="underline">Termos de uso</Span> e a <Span weight={800} color={C.g700} textDecoration="underline">Política de privacidade</Span>.</Text>
  </Frame>
)
return DScreen('W07 · Checkout · Pagamento', [
  DCheckoutHeader(3),
  <Frame name="Conteúdo" w="fill" flex="col" gap={24} px={MX} pt={32}>
    <Frame w="fill" flex="col" gap={4}>
      <Text font={FD} size={34} weight={600} lineHeight={40} color={C.g900}>Como você quer pagar?</Text>
      <Text font={FB} size={16} lineHeight={24} color={C.n600}>Escolha agora pelo site ou na hora de receber.</Text>
    </Frame>
    <Frame name="Corpo" w="fill" flex="row" gap={32} items="start">
      <Frame name="Coluna principal" grow={1} flex="col" gap={24}>
        <Frame name="Formas de pagamento" w="fill" flex="row" gap={20} items="start">
          {grupo('PAGAR AGORA, PELO SITE', [
            pay('qr-code', 'Pix', 'Aprovação na hora. O QR Code aparece ao finalizar.', true, 'Mais rápido'),
            pay('credit-card', 'Cartão de crédito', 'Visa, Mastercard, Elo, Hipercard', false),
          ])}
          {grupo('PAGAR NA ENTREGA', [
            pay('wallet-cards', 'Cartão na maquininha', 'Débito ou crédito, na hora de receber', false),
            pay('banknote', 'Dinheiro', 'Avise se vai precisar de troco', false),
          ])}
        </Frame>
        <Frame name="Como funciona o Pix" w="fill" flex="row" gap={16} p={20} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
          {[['1', 'Faça o pedido', 'Seu horário de hoje fica reservado.'], ['2', 'Pague com o Pix', 'Pelo QR Code ou pelo código copia e cola.'], ['3', 'Pronto!', 'A confirmação aparece na hora e a gente começa a separar.']].map(([n, t, d]) => (
            <Frame name={'Passo/' + n} w="fill" grow={1} flex="row" gap={12} items="start">
              <Frame w={32} h={32} rounded={16} bg={C.g100} flex="row" items="center" justify="center"><Text font={FD} size={15} weight={600} lineHeight={18} color={C.g900}>{n}</Text></Frame>
              <Frame grow={1} flex="col" gap={2}>
                <Text w="fill" font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{t}</Text>
                <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{d}</Text>
              </Frame>
            </Frame>
          ))}
        </Frame>
        <Frame name="Rodapé do formulário" w="fill" flex="row" gap={20} items="start">
          <Frame name="CPF na nota" w="fill" grow={1} flex="row" items="center" gap={12} p={16} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
            <Frame w={40} h={40} rounded={20} bg={C.n100} flex="row" items="center" justify="center">{I('file-text', 20, C.g900)}</Frame>
            <Frame grow={1} flex="col" gap={0}>
              <Text w="fill" font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>CPF na nota</Text>
              <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>Opcional</Text>
            </Frame>
            {Toggle(false)}
          </Frame>
          <Frame w="fill" grow={1} flex="col">{InfoBox({ icon: 'scale', title: 'Pesáveis com preço justo', text: 'Se o peso real ficar abaixo do estimado, devolvemos a diferença no mesmo Pix.', kind: 'info', name: 'Aviso/Ajuste de peso' })}</Frame>
        </Frame>
      </Frame>
      <Frame name="Coluna lateral" w={400} flex="col">{resumo}</Frame>
    </Frame>
  </Frame>,
  <Frame name="Espaço" w="fill" grow={1} />,
  DCheckoutFooter(),
])
