const passos = ['Home', 'Bairro', 'Categoria', 'Produto', 'Carrinho', 'Entrega', 'Pagamento', 'Pix', 'Acompanhar']
return (
  <Frame name="Cabeçalho da página" w={6080} h="hug" flex="row" items="end" justify="between">
    <Frame flex="col" gap={16}>
      <Rectangle name="Logo" w={240} h={85} />
      <Text font={FD} size={88} weight={600} lineHeight={96} color={C.g900}>Telas web · desktop 16:9</Text>
      <Text font={FB} size={30} lineHeight={40} color={C.n600}>Telas de 1920 × 1080 com conteúdo de 1280 px, adaptadas do fluxo mobile-first. Notas acima de cada tela explicam o que muda em relação ao celular.</Text>
    </Frame>
    <Frame name="Fluxo" flex="row" items="center" gap={14} pb={10}>
      {passos.map((p, i) => [
        <Frame name={'Passo/' + p} h={60} flex="row" items="center" gap={10} pl={8} pr={22} rounded={30} bg={C.white} stroke={BORDER} strokeWidth={1}>
          <Frame w={44} h={44} rounded={22} bg={i === 0 ? C.g900 : C.g100} flex="row" items="center" justify="center">
            <Text font={FD} size={18} weight={600} lineHeight={22} color={i === 0 ? C.white : C.g900}>{String(i + 1).padStart(2, '0')}</Text>
          </Frame>
          <Text font={FB} size={22} weight={800} lineHeight={28} color={C.n900}>{p}</Text>
        </Frame>,
        i < passos.length - 1 ? I('arrow-right', 26, C.n400) : null,
      ])}
    </Frame>
  </Frame>
)
