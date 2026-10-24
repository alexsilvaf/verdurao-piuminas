// QR Code ilustrativo (padrão pseudoaleatório, não é um código Pix real)
const N = 25
let seed = 7
const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 }
const finderCell = (r, c) => {
  for (const [fx, fy] of [[0, 0], [N - 7, 0], [0, N - 7]]) {
    if (r >= fy && r < fy + 7 && c >= fx && c < fx + 7) {
      const rr = r - fy, cc = c - fx
      return rr === 0 || rr === 6 || cc === 0 || cc === 6 || (rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4)
    }
  }
  return null
}
let d = ''
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    const f = finderCell(r, c)
    const nearFinder = (r < 8 && c < 8) || (r < 8 && c >= N - 8) || (r >= N - 8 && c < 8)
    const inLogo = r >= 10 && r <= 14 && c >= 10 && c <= 14
    const on = f !== null ? f : (!nearFinder && !inLogo && rnd() > 0.52)
    if (on) d += 'M' + c + ' ' + r + 'h1v1h-1z'
  }
}
const passo = (n, text) => (
  <Frame name={'Passo ' + n} w="fill" flex="row" gap={12} items="start">
    <Frame w={30} h={30} rounded={15} bg={C.g100} flex="row" items="center" justify="center">
      <Text font={FD} size={14} weight={600} lineHeight={18} color={C.g900}>{String(n)}</Text>
    </Frame>
    <Text grow={1} font={FB} size={15} lineHeight={22} color={C.n900}>{text}</Text>
  </Frame>
)
const qr = (
  <Frame name="Lado do QR Code" w={420} flex="col" items="center" gap={16} p={32} bg={C.c200} roundedTL={28} roundedBL={28}>
    <Text w="fill" textAlign="center" font={FB} size={15} weight={800} lineHeight={20} color={C.g900}>Aponte a câmera do celular</Text>
    <Frame name="QR Code" w={320} h={320} rounded={24} bg={C.white} flex="row" items="center" justify="center" shadow={SH_CARD}>
      <svg viewBox="0 0 25 25" size={272}><path d={d} fill="#1F2A26" /></svg>
      <Frame name="Selo" position="absolute" x={136} y={136} w={48} h={48} rounded={14} bg={C.white} flex="row" items="center" justify="center">
        <Frame w={38} h={38} rounded={12} bg={C.g900} flex="row" items="center" justify="center">{I('leaf', 20, C.c400)}</Frame>
      </Frame>
    </Frame>
    <Text w="fill" textAlign="center" font={FB} size={13} lineHeight={18} color={C.n600}>Use o app do seu banco, na opção Pix com QR Code</Text>
  </Frame>
)
const lado = (
  <Frame name="Lado das instruções" grow={1} flex="col" gap={20} p={36}>
    <Frame name="Status" h={32} flex="row" items="center" gap={6} px={12} rounded={16} bg={C.a100}>
      {I('clock', 16, C.a700)}
      <Text font={FB} size={13} weight={800} lineHeight={16} color={C.a700}>Aguardando pagamento · expira em 29:41</Text>
    </Frame>
    <Frame w="fill" flex="col" gap={2}>
      <Text font={FB} size={15} lineHeight={20} color={C.n600}>Valor a pagar</Text>
      <Text font={FD} size={48} weight={600} lineHeight={54} color={C.w900}>R$ 65,62</Text>
    </Frame>
    <Frame name="Copia e cola" w="fill" flex="row" gap={12} items="center">
      <Frame grow={1} h={52} flex="row" items="center" px={14} rounded={12} bg={C.n100}>
        <Text grow={1} maxLines={1} truncate font={FB} size={14} lineHeight={18} color={C.n600}>00020126580014br.gov.bcb.pix0136a7f3c2e1-9b4d-4e8a-b1c5-2d7f6e9a0b3c5204000053039865406</Text>
      </Frame>
      {Btn({ label: 'Copiar código', icon: 'copy' })}
    </Frame>
    {Divider()}
    <Frame name="Como pagar" w="fill" flex="col" gap={12}>
      <Text font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>Como pagar</Text>
      {passo(1, 'Abra o app do seu banco e escolha Pix.')}
      {passo(2, 'Escaneie o QR Code ao lado ou cole o código copiado.')}
      {passo(3, 'Pronto! A confirmação aparece aqui na hora.')}
    </Frame>
    {InfoBox({ icon: 'calendar-check', text: 'Seu horário de hoje, 16h–18h, fica reservado enquanto o código estiver válido.', kind: 'verde', name: 'Aviso/Reserva de horário' })}
    <Text font={FB} size={14} weight={800} lineHeight={20} color={C.g700} textDecoration="underline">Escolher outra forma de pagamento</Text>
  </Frame>
)
return DScreen('W08 · Pagamento Pix', [
  DCheckoutHeader(3),
  <Frame name="Conteúdo" w="fill" flex="col" items="center" gap={24} px={MX} pt={36}>
    <Frame w="fill" flex="col" items="center" gap={6}>
      <Text font={FD} size={34} weight={600} lineHeight={40} color={C.g900}>Pedido #4821 recebido! Agora é só pagar</Text>
      <Text font={FB} size={16} lineHeight={24} color={C.n600}>Assim que o Pix for aprovado, a gente começa a separar seus itens.</Text>
    </Frame>
    <Frame name="Cartão do Pix" w={1040} flex="row" items="stretch" rounded={28} bg={C.white} stroke={BORDER} strokeWidth={1} shadow={SH_CARD}>
      {qr}
      {lado}
    </Frame>
  </Frame>,
  <Frame name="Espaço" w="fill" grow={1} />,
  DCheckoutFooter(),
])
