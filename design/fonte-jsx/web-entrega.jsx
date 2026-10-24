const titulo = (t, sub) => (
  <Frame w="fill" flex="col" gap={2}>
    <Text w="fill" font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>{t}</Text>
    {sub ? <Text w="fill" font={FB} size={15} lineHeight={20} color={C.n600}>{sub}</Text> : null}
  </Frame>
)
const endereco = (icon, label, line1, line2, on) => (
  <Frame name={'Endereço/' + label} w="fill" grow={1} flex="row" items="start" gap={12} p={16} rounded={16} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    {Radio(on)}
    <Frame grow={1} flex="col" gap={2}>
      <Frame w="fill" flex="row" items="center" gap={6}>
        {I(icon, 16, C.g900)}
        <Text grow={1} font={FB} size={15} weight={800} lineHeight={20} color={C.n900}>{label}</Text>
        {on ? <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Editar</Text> : null}
      </Frame>
      <Text w="fill" font={FB} size={14} lineHeight={20} color={C.n900}>{line1}</Text>
      <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{line2}</Text>
    </Frame>
  </Frame>
)
const novo = (
  <Frame name="Endereço/Novo" w={200} flex="col" items="center" justify="center" gap={6} p={16} rounded={16} bg={C.white} stroke={C.n400} strokeWidth={1.5} strokeDash={[6, 4]}>
    <Frame w={36} h={36} rounded={18} bg={C.g100} flex="row" items="center" justify="center">{I('plus', 18, C.g900)}</Frame>
    <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Novo endereço</Text>
  </Frame>
)
const dia = (label, date, on) => (
  <Frame name={'Dia/' + label} w="fill" grow={1} h={64} flex="col" items="center" justify="center" gap={2} rounded={14} bg={on ? C.g900 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={1}>
    <Text font={FB} size={15} weight={800} lineHeight={20} color={on ? C.white : C.n900}>{label}</Text>
    <Text font={FB} size={13} lineHeight={16} color={on ? C.c200 : C.n600}>{date}</Text>
  </Frame>
)
const slot = (time, state) => {
  const off = state === 'off', on = state === 'on', last = state === 'last'
  return (
    <Frame name={'Janela/' + time} w="fill" grow={1} h={84} flex="col" items="center" justify="center" gap={6} rounded={14} bg={off ? C.n100 : (on ? C.g50 : C.white)} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
      <Frame flex="row" items="center" gap={6}>
        {on ? I('check-circle-2', 18, C.g900) : null}
        <Text font={FB} size={16} weight={800} lineHeight={20} color={off ? C.n600 : C.n900} textDecoration={off ? 'strikethrough' : 'none'}>{time}</Text>
      </Frame>
      {last ? Badge('Últimas vagas', 'alerta') : <Text font={FB} size={13} weight={off ? 600 : 700} lineHeight={16} color={C.n600}>{off ? 'Esgotado' : 'R$ 6,90'}</Text>}
    </Frame>
  )
}
const resumo = (
  <Frame name="Seu pedido" w="fill" flex="col" gap={14} p={24} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1} shadow={SH_CARD}>
    <Frame w="fill" flex="row" items="center" justify="between">
      <Text font={FD} size={22} weight={600} lineHeight={28} color={C.g900}>Seu pedido</Text>
      <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Ver itens</Text>
    </Frame>
    <Frame name="Miniaturas" flex="row" gap={8}>
      {['avocado', 'banana', 'tomato', 'leafy-green', 'cheese-wedge', 'beverage-box'].map((e) => (
        <Frame w={46} h={46} rounded={12} bg={C.c200} flex="row" items="center" justify="center">{E(e, 30)}</Frame>
      ))}
    </Frame>
    {DSummaryRow('Subtotal (6 itens)', 'R$ 58,72')}
    {DSummaryRow('Entrega · hoje, 16h–18h', 'R$ 6,90')}
    {Divider()}
    {DSummaryRow('Total estimado', 'R$ 65,62', { bold: true })}
    {Btn({ label: 'Ir para pagamento', iconR: 'arrow-right', w: 'fill' })}
    <Frame w="fill" flex="row" items="center" justify="center" gap={6}>
      {I('shield-check', 14, C.n600)}
      <Text font={FB} size={12} lineHeight={16} color={C.n600}>Seus dados ficam protegidos</Text>
    </Frame>
  </Frame>
)
return DScreen('W06 · Checkout · Entrega', [
  DCheckoutHeader(2),
  <Frame name="Conteúdo" w="fill" flex="col" gap={24} px={MX} pt={32}>
    <Frame w="fill" flex="col" gap={4}>
      <Text font={FD} size={34} weight={600} lineHeight={40} color={C.g900}>Como você quer receber?</Text>
      <Text font={FB} size={16} lineHeight={24} color={C.n600}>Escolha o endereço e o horário. Separamos tudo na hora, pra chegar fresquinho.</Text>
    </Frame>
    <Frame name="Corpo" w="fill" flex="row" gap={32} items="start">
      <Frame name="Coluna principal" grow={1} flex="col" gap={28}>
        <Frame name="Seção/Endereço" w="fill" flex="col" gap={14}>
          {titulo('Endereço de entrega')}
          <Frame w="fill" flex="row" gap={14} items="stretch">
            {endereco('house', 'Casa', 'Rua das Flores, 120 – Centro', 'Apto 302 · Portão verde ao lado da padaria', true)}
            {endereco('briefcase', 'Trabalho', 'Av. Brasil, 1500 – Sala 4', 'Horário comercial', false)}
            {novo}
          </Frame>
        </Frame>
        <Frame name="Seção/Quando receber" w="fill" flex="col" gap={14}>
          {titulo('Dia e horário')}
          <Frame name="Dias" w="fill" flex="row" gap={12}>
            {dia('Hoje', 'sex, 23/10', true)}
            {dia('Amanhã', 'sáb, 24/10', false)}
            {dia('Domingo', 'dom, 25/10', false)}
            {dia('Segunda', 'seg, 26/10', false)}
            {dia('Terça', 'ter, 27/10', false)}
          </Frame>
          <Frame name="Janelas de horário" w="fill" flex="row" gap={12}>
            {slot('08h – 10h', 'off')}
            {slot('10h – 12h', 'off')}
            {slot('14h – 16h', 'last')}
            {slot('16h – 18h', 'on')}
            {slot('18h – 20h', 'idle')}
          </Frame>
          {InfoBox({ icon: 'clock', text: 'As vagas são atualizadas em tempo real. Para receber hoje, peça com pelo menos 2 horas de antecedência.', kind: 'verde', name: 'Aviso/Horário de corte' })}
        </Frame>
        <Frame name="Seção/Instruções" w="fill" flex="row" gap={16} items="end">
          <Frame grow={1} flex="col">{Field({ label: 'Instruções para o entregador (opcional)', placeholder: 'Ex.: tocar o interfone 302', icon: 'message-square-text', name: 'Campo/Instruções' })}</Frame>
          <Frame name="Avisos no WhatsApp" w={360} h={52} flex="row" items="center" gap={12} px={14} rounded={12} bg={C.white} stroke={BORDER} strokeWidth={1}>
            {I('message-circle', 20, C.g900)}
            <Text grow={1} font={FB} size={14} weight={800} lineHeight={20} color={C.n900}>Avisos do pedido pelo WhatsApp</Text>
            {Toggle(true)}
          </Frame>
        </Frame>
      </Frame>
      <Frame name="Coluna lateral" w={400} flex="col">{resumo}</Frame>
    </Frame>
  </Frame>,
  <Frame name="Espaço" w="fill" grow={1} />,
  DCheckoutFooter(),
])
