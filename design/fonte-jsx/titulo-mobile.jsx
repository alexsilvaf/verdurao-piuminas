const passos = ['Home', 'Bairro', 'Categoria', 'Produto', 'Carrinho', 'Entrega', 'Pagamento', 'Pix', 'Acompanhar']
return (
  <Frame name="Cabeçalho da página" w={4150} h="hug" flex="row" items="end" justify="between">
    <Frame flex="col" gap={12}>
      <Rectangle name="Logo" w={180} h={64} />
      <Text font={FD} size={56} weight={600} lineHeight={64} color={C.g900}>Telas mobile · fluxo de compra</Text>
      <Text font={FB} size={22} lineHeight={30} color={C.n600}>Mobile-first em 390 px, do primeiro acesso ao pedido entregue. Notas de UX acima de cada tela.</Text>
    </Frame>
    <Frame name="Fluxo" flex="row" items="center" gap={10} pb={8}>
      {passos.map((p, i) => [
        <Frame name={'Passo/' + p} h={44} flex="row" items="center" gap={8} pl={6} pr={16} rounded={22} bg={C.white} stroke={BORDER} strokeWidth={1}>
          <Frame w={32} h={32} rounded={16} bg={i === 0 ? C.g900 : C.g100} flex="row" items="center" justify="center">
            <Text font={FD} size={14} weight={600} lineHeight={16} color={i === 0 ? C.white : C.g900}>{String(i + 1).padStart(2, '0')}</Text>
          </Frame>
          <Text font={FB} size={16} weight={800} lineHeight={20} color={C.n900}>{p}</Text>
        </Frame>,
        i < passos.length - 1 ? I('arrow-right', 20, C.n400) : null,
      ])}
    </Frame>
  </Frame>
)
