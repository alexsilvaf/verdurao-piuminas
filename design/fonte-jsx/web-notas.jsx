const notas = [
  ['W01', 'Home', ['Busca, endereço, horário e carrinho com total no cabeçalho, sempre visíveis.', 'Menu de categorias fixo logo abaixo do cabeçalho.', 'Atalhos de recompra e do ponto da fruta ao lado do banner.']],
  ['W01', 'Home · continuação', ['Ofertas em 6 colunas com o mesmo card do celular.', 'Produtores capixabas e motivos para pedir lado a lado.', 'Rodapé com informações da loja e WhatsApp.']],
  ['W02', 'Bairro · área de entrega', ['A folha inferior do celular vira um modal central.', 'Bairros em grade, com taxa e próximo horário de cada um.', 'Interior (Aghá, Orobó…) combinado pelo WhatsApp.']],
  ['W03', 'Categoria', ['Filtros e subcategorias na lateral (no celular ficam em folha inferior).', 'Grade de 5 colunas com ordenação no topo.', 'Mesmos estados de card: oferta, chegou hoje, últimas e esgotado.']],
  ['W04', 'Produto', ['Imagem e decisão lado a lado: tudo acima da dobra.', 'Ponto de maturação em 3 cartões na mesma linha.', 'O botão de adicionar já mostra o total estimado.']],
  ['W05', 'Carrinho', ['Itens em lista à esquerda; resumo e cupom fixos à direita.', 'Preferência de troca em 3 cartões lado a lado.', '"Esqueceu alguma coisa?" na coluna lateral.']],
  ['W06', 'Checkout · Entrega', ['Endereço sem CEP: bairro, rua, número (ou s/n) e ponto de referência.', 'Checkout fechado: sem busca nem menu, para não distrair.', 'Etapas no cabeçalho e resumo sempre visível.', 'Dias e janelas em grade; esgotados aparecem riscados.']],
  ['W07', 'Checkout · Pagamento', ['Pagar agora e pagar na entrega lado a lado.', 'Passo a passo do Pix antes de finalizar.', 'Botão final com o valor, dentro do resumo.']],
  ['W08', 'Pagamento Pix', ['No computador o QR Code ganha destaque: a pessoa paga pelo celular.', 'Copia e cola ao lado do valor.', 'Prazo do código e reserva do horário visíveis.']],
  ['W09', 'Acompanhar pedido', ['Linha do tempo horizontal com a previsão em destaque.', 'Troca de item e ajuste de peso lado a lado.', 'Itens e total final sempre à direita.']],
]
const nota = ([num, title, bullets]) => (
  <Frame name={'Nota/' + num + ' ' + title} w={1920} h="hug" flex="row" items="center" gap={32} px={28} py={22} rounded={24} bg={C.white} stroke={BORDER} strokeWidth={1}>
    <Frame w={380} flex="row" items="center" gap={14}>
      <Frame h={40} px={14} rounded={20} bg={C.g900} flex="row" items="center" justify="center">
        <Text font={FD} size={17} weight={600} lineHeight={20} color={C.white}>{num}</Text>
      </Frame>
      <Text grow={1} font={FD} size={26} weight={600} lineHeight={32} color={C.g900}>{title}</Text>
    </Frame>
    <Frame grow={1} flex="row" gap={28} items="start">
      {bullets.map((b) => (
        <Frame w="fill" grow={1} flex="row" gap={8} items="start">
          <Frame w={20} h={24} flex="row" items="center">{I('check', 18, C.g700)}</Frame>
          <Text grow={1} font={FB} size={17} lineHeight={24} color={C.n900}>{b}</Text>
        </Frame>
      ))}
    </Frame>
  </Frame>
)
return (
  <Frame name="Notas web" w="hug" h="hug" flex="col" gap={40}>
    {notas.map(nota)}
  </Frame>
)
