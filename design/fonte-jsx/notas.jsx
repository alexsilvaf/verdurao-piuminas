const notas = [
  ['01', 'Home', ['Endereço, próxima entrega e busca sempre no topo: a pessoa sabe na hora quando recebe.', '"Compre de novo" e "Repetir último pedido" aceleram a compra da semana.', 'Card com peso, preço por kg e botão Adicionar: dá pra comprar sem abrir o produto.', 'Barra do carrinho fixa com total e quantidade de itens.']],
  ['02', 'Bairro · área de entrega', ['Não bloqueia: dá pra fechar e olhar os produtos antes.', 'Taxa e próximo horário de cada bairro, mais frete grátis e pedido mínimo.', 'Piúma tem CEP único (29285-000): a área de entrega é escolhida pelo bairro.']],
  ['03', 'Categoria', ['Subcategorias em chips; ordenar e filtrar a um toque.', '"Adicionar" vira seletor de quantidade (− 1 kg +) depois do primeiro toque.', 'Estados visíveis: oferta, chegou hoje, últimas unidades e esgotado com "Avise-me".']],
  ['04', 'Produto', ['Diferencial: escolher o ponto de maturação (pra hoje, 2–3 dias, mais verde).', 'Compra por unidade ou quilo, com peso aproximado e total estimado.', 'Observação por item e aviso claro de produto pesável.', '"Combina com" sugere os itens da receita.']],
  ['05', 'Carrinho', ['Entrega e frete grátis no topo: nada de surpresa no checkout.', 'Itens agrupados por seção, com quantidade e observação editáveis.', 'Uma preferência de troca para o pedido todo, com ajuste por item opcional.', 'Sugestões "Esqueceu alguma coisa?" antes do resumo.']],
  ['06', 'Checkout · Entrega', ['Endereço sem CEP: bairro, rua, número (ou s/n) e ponto de referência.', 'Endereços salvos e janelas de 2 horas com vagas em tempo real.', 'Janelas esgotadas aparecem riscadas, não somem: a pessoa entende o porquê.', 'Avisos pelo WhatsApp ligados por padrão.']],
  ['07', 'Checkout · Pagamento', ['Pix em destaque, cartão online e pagamento na entrega (maquininha ou dinheiro).', 'Resumo com a regra de troca e o ajuste de peso explicados.', 'Um único botão final, já com o valor.']],
  ['08', 'Pagamento Pix', ['Botão grande de "copiar código" (no celular é mais usado que o QR Code).', 'Tempo de expiração e reserva do horário sempre visíveis.', 'Passo a passo curto para quem usa pouco o Pix.']],
  ['09', 'Acompanhar pedido', ['Linha do tempo com o status atual e quem está separando.', 'Trocas e ajustes de peso avisados com opção de desfazer.', 'Atendimento pelo WhatsApp a um toque.']],
]
const nota = ([num, title, bullets]) => (
  <Frame name={'Nota/' + num + ' ' + title} w={390} h="hug" flex="col" gap={12} p={20} rounded={20} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w="fill" flex="row" items="center" gap={10}>
      <Frame w={34} h={34} rounded={17} bg={C.g900} flex="row" items="center" justify="center">
        <Text font={FD} size={15} weight={600} lineHeight={18} color={C.white}>{num}</Text>
      </Frame>
      <Text grow={1} font={FD} size={20} weight={600} lineHeight={26} color={C.g900}>{title}</Text>
    </Frame>
    {bullets.map((b) => (
      <Frame w="fill" flex="row" gap={8} items="start">
        <Frame w={18} h={20} flex="row" items="center" justify="center">{I('check', 16, C.g700)}</Frame>
        <Text grow={1} w="fill" font={FB} size={14} lineHeight={20} color={C.n900}>{b}</Text>
      </Frame>
    ))}
  </Frame>
)
return (
  <Frame name="Notas de UX" w="hug" h="hug" flex="row" gap={80} items="end">
    {notas.map(nota)}
  </Frame>
)
