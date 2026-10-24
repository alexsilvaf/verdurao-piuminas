# Verdurão Piuminas — pesquisa regional de preços de manutenção

**Atualizado em 23/10/2026.** Objetivo: definir uma mensalidade de **manutenção técnica**, sem cobrança pelo desenvolvimento inicial, para a loja online planejada para o Verdurão em Piúma, ES.

## Escopo usado na comparação

O projeto nesta pasta é um **protótipo de UX/UI**, não uma loja em produção. O [arquivo de design](../design/verdurao-piuminas.fig), as [telas exportadas](../design/exports/) e a [pesquisa de UX](pesquisa-ux.md) descrevem o fluxo pretendido:

- catálogo, busca, carrinho, favoritos e recompra;
- produtos por unidade e por quilo, com preço estimado no pedido e acerto pelo peso separado; a regra para peso acima do previsto ainda precisa ser definida;
- preferência de maturação, observações e substituição por pedido ou por item;
- cobertura e taxa de entrega por bairro, endereço com ponto de referência e escolha de janela de entrega;
- Pix, cartão ou pagamento na entrega, acompanhamento do pedido e contato pelo WhatsApp.

O backup automático será feito no servidor, conforme informado pelo responsável pelo projeto. Isso reduz trabalho manual, mas a manutenção ainda precisa verificar se as cópias estão sendo feitas e se podem ser restauradas. As telas não demonstram que integrações, reembolsos, notificações ou rotinas de backup já estejam implementados.

## Como pesquisei

Consultei **páginas oficiais das próprias empresas** em 23/10/2026. Priorizei sede ou unidade declarada em Cachoeiro de Itapemirim, Guarapari e Grande Vitória. Preço publicado não é proposta para o escopo do Verdurão. Separei **implantação única**, **licença de plataforma**, **pacote de marketing** e **trabalho técnico recorrente**. Não foram solicitadas cotações privadas às empresas.

## Empresas da região

| Empresa e localização declarada | Preço público | Serviço a que se refere | Leitura para o Verdurão |
|---|---:|---|---|
| [X-Commerce / Grupo Arco](https://www.xcommerceweb.com.br/pt/quem-somos), Cachoeiro | **Sob proposta** na [plataforma atual](https://xcommerceweb.com.br/) | Plataforma de e-commerce customizável, pagamentos, logística, ERP e suporte | Concorrente regional próximo de um e-commerce adaptado; mensalidade e customizações precisam de orçamento. X-Commerce e Arco são o **mesmo grupo**, não duas cotações. |
| [SYX Tecnologia](https://syxtecnologia.com.br/), Cachoeiro | **Sob orçamento** para sistemas e contratos de TI | Sistemas sob medida e manutenção; a empresa diz atender supermercados, entre outros negócios | É um comparável regional relevante. O **SYX Chat, a partir de R$ 149/mês**, é apenas o produto de atendimento por WhatsApp, não o preço de uma loja. |
| [Genuine Agência](https://genuineag.com.br/contato/), Cachoeiro | [R$ 1.250, R$ 2.500 e R$ 4.500/mês](https://genuineag.com.br/precos/) | Pacotes de branding, site, redes sociais e marketing; e-commerce aparece no pacote mais amplo | **Não é preço de manutenção isolada** do e-commerce. Preço técnico específico não publicado. |
| [Agência Seven](https://agseven.com.br/), Cachoeiro | **Não localizado** | Anuncia loja virtual, aplicativos e sistemas | A página consultada confirma a oferta e a localização, mas não apresentou tabela verificável de manutenção. |
| [TH Designer](https://www.webth.com.br/), Guarapari | **Loja a partir de R$ 1.500**, pagamento de criação | Catálogo, carrinho, checkout e painel; diz incluir manutenção e suporte, com hospedagem e domínio à parte | O site não define duração nem horas do suporte incluído. O preço inicial é de **criação**, não mensalidade equivalente. |
| [Hostnet, unidade Vila Velha](https://vilavelha.hostnet.com.br/criacao-de-loja-virtual-express/) | **3 × R$ 200 de criação + R$ 99,90/mês** | Loja Express com hospedagem, backup, atualizações e suporte, até 100 produtos, baseada em modelos prontos | É piso de loja padronizada. A própria empresa direciona projetos mais personalizados ao pacote premium, sem preço nessa página. |
| [HostSoft](https://hostsoft.com.br/sistema-delivery.html), Vila Velha | **Delivery R$ 99,90/mês**; com app Android R$ 155,90; com Android e iOS R$ 239 | Sistema de pedidos com hospedagem e suporte; cadastro de bairros e taxas de entrega; implantação sob consulta | Concorrente funcional para delivery local. Bot WhatsApp custa **a partir de R$ 200/mês à parte**. O site não comprova acerto de peso, estorno e aprovação de substituição no fluxo anunciado. |
| [HostSoft Loja Virtual](https://hostsoft.com.br/loja-virtual.html), Vila Velha | **R$ 99,90 a R$ 248,90/mês** | Licença de plataforma com hospedagem e suporte, planos por limite de produtos | Outra oferta da **mesma empresa**; não contar como agência independente nem como manutenção de código próprio. |
| [Alexandre Queiroz](https://www.alexandrequeiroz.com.br/areas-de-atendimento), sede em Vila Velha | [E-commerce R$ 5.000–18.000](https://www.alexandrequeiroz.com.br/precos/) de criação; **R$ 297/mês** para site institucional | Criação de loja e assinatura de presença digital | Anuncia manutenção de e-commerce, mas não publica a mensalidade específica. Os R$ 297 são de **site institucional**, não de loja. |
| [Bizadox](https://bizadox.com/), Vitória | **Sob consulta** | E-commerce personalizado, PDV/delivery e suporte técnico | Concorrente regional, sem tabela pública de manutenção da loja. |

**Atenção sobre X-Commerce:** encontrei uma [página em subdomínio de testes](https://novoxcommerce.arcoinformatica.com.br/) com R$ 1.000 de implantação e R$ 1.000/mês repetidos em *todos* os cinco planos. Como a [página principal](https://xcommerceweb.com.br/) pede proposta e aquela tabela parece conteúdo de demonstração, **não tratei R$ 1.000 como preço comercial confirmado**.

## Referências de manutenção e supermercado fora da região

Estas referências ajudam a precificar o **trabalho recorrente**, mas não são empresas sediadas no sul do ES ou na Grande Vitória.

| Empresa | Preço publicado | O que está incluso / limite |
|---|---:|---|
| [AGTI, AgCare](https://www.agti.eng.br/module/agtilayout/agcare) | **R$ 300/mês por 2 h**; R$ 720 por 6 h; R$ 1.260 por 12 h | Suporte técnico, alterações e integrações por horas para lojas AGTI ou PrestaShop elegíveis; permanência mínima de seis meses. Não é licença de loja nova. |
| [DIO Digital Agency](https://www.diodigital.agency/precos/) | **R$ 599/mês por 1 h**; R$ 999 por 2 h; R$ 1.399 por 3 h | Manutenção de loja WooCommerce com servidor dedicado, backup, monitoramento e atualizações; horas extras a R$ 150. O serviço é faturado por empresa dos EUA. |
| [Mercadapp](https://mercadapp.com.br/planos/) | **Site R$ 399/mês + R$ 2,50 por pedido**, além de R$ 1.500 de implantação e R$ 2.000 de setup | Plataforma para supermercados com ERP/PDV, pagamentos e suporte, contrato de 12 meses. É um comparável setorial mais próximo, mas continua sendo licença de produto. |

Exemplo de custo publicado da Mercadapp: com 100 pedidos, **R$ 649/mês** antes das taxas de pagamento e dos custos iniciais; com 300 pedidos, **R$ 1.149/mês**. São contas aritméticas sobre a tabela da empresa, não previsão de volume do Verdurão.

## O que é realmente diferente no projeto

Alguns recursos **não são exclusivos**. A HostSoft já anuncia taxa por bairro; [lojas que usam Instabuy](https://www.supermercadoportaldascolinas.instabuy.com.br/p/Kiwi-Importado-1) exibem produtos de peso variável; a X-Commerce anuncia personalização de regras, pagamentos e acompanhamento do pedido. Portanto, seria incorreto dizer que plataformas prontas não conseguem atender hortifrúti.

O valor potencial do Verdurão está na **combinação e adaptação para sua operação em Piúma**: bairro antes do CEP no fluxo de entrega, escolha de maturação e observações de separação, substituição por item, política clara de acerto de peso e pagamento/estorno, janela de entrega e recompra. As páginas públicas dos planos baratos **não comprovam** esse conjunto completo nem seu custo de implantação. Para comparar ofertas de forma justa, seria preciso pedir uma demonstração do mesmo fluxo a cada fornecedor.

## Recomendação de preço

**Preço definido para a proposta: R$ 300/mês de manutenção técnica**, sem taxa de desenvolvimento, **quando a loja estiver funcionando em produção**. É uma decisão comercial ajustada ao orçamento esperado para um comércio local de Piúma, não uma média estatística de propostas do sul do ES: as empresas regionais mais próximas de desenvolvimento sob medida não publicam preço de manutenção equivalente. O valor coincide com o plano de entrada de 2 h da AGTI e fica acima das licenças padronizadas regionais de aproximadamente R$ 100–239/mês.

Premissas da proposta de R$ 300:

- até **2 horas por mês** para acompanhamento técnico, pequenas correções e ajustes simples;
- monitorar disponibilidade, conferir os backups automáticos do servidor e testar uma restauração periodicamente;
- suporte em horário comercial, com primeira resposta em até **1 dia útil**; falha que impeça pedidos ou pagamentos recebe prioridade no mesmo dia útil;
- o **servidor, domínio, gateway de pagamento e eventual API de WhatsApp** ficam em nome do Verdurão e são pagos diretamente aos fornecedores, pelo custo real;
- cadastro rotineiro de produtos, operação dos pedidos, campanhas de marketing, novas funções e horas adicionais ficam fora da mensalidade e exigem combinação específica.

Se a hospedagem for paga pelo desenvolvedor, é preciso **somar seu custo real** à mensalidade; não inventar um valor de VPS antes de escolher o servidor. Backup automático no servidor já contratado **não justifica cobrar uma segunda ferramenta de backup** sem necessidade técnica demonstrada. Também não se deve cobrar uma parcela escondida de desenvolvimento: o contrato pode dizer explicitamente que o desenvolvimento inicial custa R$ 0 e que a mensalidade remunera o trabalho recorrente definido acima.

Para um orçamento fechado, faltam o servidor escolhido, volume esperado de pedidos, canal de WhatsApp, forma de tratar peso maior que o estimado, regra de estorno, responsáveis pelo cadastro do catálogo e necessidade de plantão fora do horário comercial. Após **60 a 90 dias de uso real**, revisar as horas consumidas e ajustar o contrato se a demanda superar o pacote de 2 h de forma recorrente. Serviços além das 2 h devem ser combinados antes da execução.

## Limites desta pesquisa

- Os valores são **preços anunciados**, sem negociação, impostos ou proposta individual para o design.
- Algumas páginas regionais anunciam atendimento na cidade sem provar sede local; por isso a lista prioriza sede ou unidade expressamente declarada.
- Não há demonstração pública suficiente para afirmar equivalência funcional entre qualquer plano de tabela e o fluxo completo planejado para o Verdurão.
- O projeto ainda não tem código operacional nesta pasta; custo de manutenção real dependerá também da arquitetura entregue e do servidor contratado.
