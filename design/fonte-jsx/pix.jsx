// QR Code ilustrativo (padrão pseudoaleatório, não é um código Pix real)
const N = 25
let seed = 7
const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 }
const finderCell = (r, c) => {
  for (const [fx, fy] of [[0, 0], [N - 7, 0], [0, N - 7]]) {
    if (r >= fy && r < fy + 7 && c >= fx && c < fx + 7) {
      const rr = r - fy, cc = c - fx
      const ring = rr === 0 || rr === 6 || cc === 0 || cc === 6
      const core = rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4
      return ring || core
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
    <Frame w={28} h={28} rounded={14} bg={C.g100} flex="row" items="center" justify="center">
      <Text font={FB} size={13} weight={800} lineHeight={16} color={C.g900}>{String(n)}</Text>
    </Frame>
    <Text grow={1} font={FB} size={14} lineHeight={20} color={C.n900}>{text}</Text>
  </Frame>
)

return Screen('08 · Pagamento Pix', [
  TopBar('Pagamento via Pix', { sub: 'Pedido #4821', back: false, right: [IconBtn('x', { size: 40, bg: C.white, stroke: BORDER, name: 'Fechar' })] }),
  <Frame name="Conteúdo" w="fill" flex="col" items="center" gap={20} px={16} pt={8} pb={24}>
    <Frame name="Status" h={32} flex="row" items="center" gap={6} px={12} rounded={16} bg={C.a100}>
      {I('clock', 16, C.a700)}
      <Text font={FB} size={13} weight={800} lineHeight={16} color={C.a700}>Aguardando pagamento · expira em 29:41</Text>
    </Frame>
    <Frame w="fill" flex="col" items="center" gap={4}>
      <Text font={FB} size={14} lineHeight={20} color={C.n600}>Valor a pagar</Text>
      <Text font={FD} size={34} weight={600} lineHeight={40} color={C.w900}>R$ 65,62</Text>
    </Frame>
    <Frame name="QR Code" w={252} h={252} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1} flex="row" items="center" justify="center" shadow={SH_CARD}>
      <svg viewBox="0 0 25 25" size={210}><path d={d} fill="#1F2A26" /></svg>
      <Frame name="Selo" position="absolute" x={106} y={106} w={40} h={40} rounded={12} bg={C.white} flex="row" items="center" justify="center">
        <Frame w={32} h={32} rounded={10} bg={C.g900} flex="row" items="center" justify="center">{I('leaf', 18, C.c400)}</Frame>
      </Frame>
    </Frame>
    <Frame name="Copia e cola" w="fill" flex="col" gap={10}>
      {Btn({ label: 'Copiar código Pix', icon: 'copy', w: 'fill' })}
      <Frame w="fill" h={40} flex="row" items="center" px={12} rounded={10} bg={C.n100}>
        <Text grow={1} maxLines={1} truncate font={FB} size={13} lineHeight={18} color={C.n600}>00020126580014br.gov.bcb.pix0136a7f3c2e1-9b4d-4e8a-b1c5-2d7f6e9a0b3c5204000053039865406</Text>
      </Frame>
    </Frame>
    <Frame name="Como pagar" w="fill" flex="col" gap={14} p={16} rounded={16} bg={C.white} stroke={BORDER} strokeWidth={1}>
      <Text font={FD} size={17} weight={600} lineHeight={22} color={C.g900}>Como pagar</Text>
      {passo(1, 'Abra o app do seu banco e escolha Pix.')}
      {passo(2, 'Escaneie o QR Code ou cole o código copiado.')}
      {passo(3, 'Pronto! A confirmação aparece aqui na hora.')}
    </Frame>
    {InfoBox({ icon: 'calendar-check', text: 'Seu horário de hoje, 16h–18h, fica reservado enquanto o código estiver válido.', kind: 'verde', name: 'Aviso/Reserva de horário' })}
    <Text font={FB} size={14} weight={800} lineHeight={20} color={C.g700} textDecoration="underline">Escolher outra forma de pagamento</Text>
  </Frame>,
])
