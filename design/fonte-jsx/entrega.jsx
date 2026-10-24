const etapa = (n, label, state) => (
  <Frame name={'Etapa/' + label} grow={1} w="fill" flex="col" gap={6}>
    <Frame w="fill" h={4} rounded={2} bg={state === 'next' ? C.n200 : C.g900} />
    <Text font={FB} size={12} weight={state === 'next' ? 600 : 800} lineHeight={16} color={state === 'next' ? C.n600 : C.g900}>{n + '. ' + label}</Text>
  </Frame>
)
const etapas = (active) => (
  <Frame name="Etapas" w="fill" flex="row" gap={8} px={16} pb={12} bg={C.c50}>
    {etapa(1, 'Entrega', active === 1 ? 'active' : 'done')}
    {etapa(2, 'Pagamento', active === 2 ? 'active' : 'next')}
  </Frame>
)
const titulo = (t, sub) => (
  <Frame w="fill" flex="col" gap={2}>
    <Text w="fill" font={FD} size={18} weight={600} lineHeight={24} color={C.g900}>{t}</Text>
    {sub ? <Text w="fill" font={FB} size={13} lineHeight={18} color={C.n600}>{sub}</Text> : null}
  </Frame>
)
const endereco = (icon, label, line1, line2, on) => (
  <Frame name={'Endereço/' + label} w="fill" flex="row" items="start" gap={12} p={14} rounded={16} bg={on ? C.g50 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={on ? 2 : 1}>
    {Radio(on)}
    <Frame grow={1} flex="col" gap={2}>
      <Frame flex="row" items="center" gap={6}>
        {I(icon, 16, C.g900)}
        <Text font={FB} size={14} weight={800} lineHeight={20} color={C.n900}>{label}</Text>
      </Frame>
      <Text w="fill" font={FB} size={14} lineHeight={20} color={C.n900}>{line1}</Text>
      <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>{line2}</Text>
    </Frame>
    {on ? <Text font={FB} size={14} weight={800} lineHeight={20} color={C.g700}>Editar</Text> : null}
  </Frame>
)
const dia = (label, date, on) => (
  <Frame name={'Dia/' + label} w={84} h={64} flex="col" items="center" justify="center" gap={2} rounded={14} bg={on ? C.g900 : C.white} stroke={on ? C.g900 : C.n200} strokeWidth={1}>
    <Text font={FB} size={14} weight={800} lineHeight={18} color={on ? C.white : C.n900}>{label}</Text>
    <Text font={FB} size={12} lineHeight={16} color={on ? C.c200 : C.n600}>{date}</Text>
  </Frame>
)
const slot = (time, state, tag) => {
  const off = state === 'off'
  const on = state === 'on'
  return (
    <Frame name={'Janela/' + time} w="fill" h={56} flex="row" items="center" gap={12} px={16} bg={on ? C.g50 : '#FFFFFF00'}>
      {off ? <Frame w={22} h={22} rounded={11} stroke={C.n200} strokeWidth={2} bg={C.n100} /> : Radio(on)}
      <Text font={FB} size={15} weight={on ? 800 : 700} lineHeight={20} color={off ? C.n600 : C.n900} textDecoration={off ? 'strikethrough' : 'none'}>{time}</Text>
      {tag ? Badge(tag, 'alerta') : null}
      <Frame grow={1} h={1} />
      <Text font={FB} size={14} weight={on ? 800 : 600} lineHeight={20} color={off ? C.n600 : C.n900}>{off ? 'Esgotado' : 'R$ 6,90'}</Text>
    </Frame>
  )
}

return Screen('06 · Checkout · Entrega', [
  TopBar('Entrega', { sub: 'Etapa 1 de 2' }),
  etapas(1),
  <Frame name="Conteúdo" w="fill" flex="col" gap={24} px={16} pt={12} pb={24}>
    <Frame name="Seção/Endereço" w="fill" flex="col" gap={12}>
      {titulo('Endereço de entrega')}
      {endereco('house', 'Casa', 'Rua das Flores, 120 – Centro', 'Apto 302 · Portão verde ao lado da padaria', true)}
      {endereco('briefcase', 'Trabalho', 'Av. Brasil, 1500 – Sala 4', 'Horário comercial', false)}
      <Frame flex="row" items="center" gap={6} h={36}>
        {I('plus', 18, C.g700)}
        <Text font={FB} size={14} weight={800} lineHeight={18} color={C.g700}>Novo endereço</Text>
      </Frame>
    </Frame>
    <Frame name="Seção/Quando receber" w="fill" flex="col" gap={12}>
      {titulo('Quando você quer receber?', 'Separamos tudo na hora, para chegar fresquinho.')}
      <Frame name="Dias" flex="row" gap={8}>
        {dia('Hoje', 'sex, 23/10', true)}
        {dia('Amanhã', 'sáb, 24/10', false)}
        {dia('Domingo', 'dom, 25/10', false)}
        {dia('Segunda', 'seg, 26/10', false)}
      </Frame>
      <Frame name="Janelas de horário" w="fill" flex="col" rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1} overflow="hidden">
        {slot('08h – 10h', 'off')}
        {Divider()}
        {slot('10h – 12h', 'off')}
        {Divider()}
        {slot('14h – 16h', 'idle', 'Últimas vagas')}
        {Divider()}
        {slot('16h – 18h', 'on')}
        {Divider()}
        {slot('18h – 20h', 'idle')}
      </Frame>
      {InfoBox({ icon: 'clock', text: 'As vagas são atualizadas em tempo real. Para receber hoje, peça com pelo menos 2 horas de antecedência.', kind: 'verde', name: 'Aviso/Horário de corte' })}
    </Frame>
    <Frame name="Seção/Instruções" w="fill" flex="col" gap={12}>
      {Field({ label: 'Instruções para o entregador (opcional)', placeholder: 'Ex.: tocar o interfone 302', icon: 'message-square-text', name: 'Campo/Instruções' })}
      <Frame name="Avisos no WhatsApp" w="fill" flex="row" items="center" gap={12} p={14} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
        <Frame w={40} h={40} rounded={20} bg={C.g100} flex="row" items="center" justify="center">{I('message-circle', 20, C.g900)}</Frame>
        <Frame grow={1} flex="col" gap={0}>
          <Text w="fill" font={FB} size={14} weight={800} lineHeight={20} color={C.n900}>Avisos pelo WhatsApp</Text>
          <Text w="fill" font={FB} size={12} lineHeight={16} color={C.n600}>Separação, trocas e saída para entrega</Text>
        </Frame>
        {Toggle(true)}
      </Frame>
    </Frame>
  </Frame>,
  StickyBottom([
    <Frame name="Total" flex="col" gap={0}>
      <Text font={FB} size={12} lineHeight={16} color={C.n600}>Total estimado</Text>
      <Text font={FD} size={22} weight={600} lineHeight={26} color={C.w900}>R$ 65,62</Text>
    </Frame>,
    Btn({ label: 'Ir para pagamento', iconR: 'arrow-right', w: 'fill' }),
  ]),
])
