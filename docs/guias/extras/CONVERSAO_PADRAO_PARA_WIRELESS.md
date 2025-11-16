# Conversão versão Padrão para Wireless

Esse guia explicará sobre o processo de conversão da versão com fio para a sem fio do teclado Tergo Sofle

## O processo de conversão

Há 2 formas de realizar a conversão:
- Sozinho em casa, com o kit de conversão da Tergo
- Enviando o teclado para nós aplicarmos o kit de conversão

Converta seu teclado ou entenda mais [clicando aqui para ir à loja da Tergo](https://tecladoergonomico.com.br/loja/conversao-tergo-sofle-com-fio-para-sem-fio/).

O processo consiste em substituir as placas controladoras das metades pelas novas placas especiais do kit de conversão.

## Diferenças da versão com fio

É importante notar a diferença entre as vesões com fio e sem fio.

As diferenças vão além de apenas possuir cabos ou não:

A versão Wireless:
- Não suporta iluminação;
- Não suporta telas integradas no teclado;
- Requer utilização de um receptor próprio;
- Suporta tela no receptor;

### Firmware e Software

A versão com fio e sem fio usam tecnologias de software (o aplicativo que te permite customizar o teclado) e firmware (a tecnologia que vai dentro do seu teclado) diferentes.

A versão Padrão (com fio) possui um software de customização chamado Vial, que é mais maduro e que permite realizar mais customizações pelo próprio aplicativo.

A versão Wireless possui o software ZMK Studio, que ainda não permite realizar pela interface algumas operações, como criar macros.

Entretanto, é possível modificar o código-fonte para implementar funcionalidades que ainda não são suportadas no aplicativo da versão Wireless. Nós te ensinamos isso nos nossos guias. Recomendamos ter um mínimo conhecimento com programação.

Você pode ver o que é suportado atualmente no ZMK Studio no link:
https://zmk.dev/docs/features/studio#capabilities.

Também são comentadas em notas no [guia de customizações](../../ergonomia/MODIFICACOES_E_FUNCIONALIDADES_QUE_CONTRIBUEM_PARA_ERGONOMIA.md).

O firmware da versão Padrão é o QMK e da Wireless é o ZMK. Ambos suportam as mesmas funcionalidades.

## Como fazer a conversão sozinho

:::warning
Caso tenha optado por realizar o processo sozinho, seja cuidadoso e fique atento às intruções do nosso guia.
:::

Para converter o seu teclado, basta seguir o guia de [como trocar as placas controladoras do seu teclado](../../CUIDADOS_E_RESOLUCAO/manutencao/TROCAR_PLACA_CONTROLADORA.md).

O processo de conversão consiste em substituir as placas controladoras antigas pelas novas, da versão Wireless.

Após isso, você pode ver o [manual da versão Wireless](../../MANUAL_TERGO_SOFLE_WIRELESS.md) para entender como a versão Wireless do teclado funciona.

## Diferenças do teclado convertido para Wireless e de um teclado que nasceu como Wireless

### Não conecte os USBs entre as metades

:::danger
No seu teclado convertido, os USBs entre as metades **não** devem ser conectados. Conectá-los pode causar danos inesperados no seu teclado.

Nós enviamos tampas para você encaixar nesses USBs laterais.
:::

### Como ligar o teclado

No seu teclado convertido, a chave de liga/desliga fica na parte da frente do teclado, próxima à entrada USB, enquanto em teclados que nasceram Wireless fica nas laterais, no lugar do USB.

### Fazer o teclado entrar em modo de gravação para versões da placa-base menores que 1.2.2

Caso a versão do seu teclado seja menor que 1.2.2 (1.2.1 ou menos) o seu teclado não possuirá um botão de reset.

Não há problemas com isso. O seu kit de conversão já virá com o firmware gravado e para ativar o modo de gravação do teclado no futuro você consegue clicando uma combinação de teclas no teclado.

Caso haja necessidade de ativar o modo de gravação das placas fisicamente, o processo pode ser feito de maneira alternativa, tocando um clips metálico em um pino específico do teclado, que será detalhado logo mais nesse guia.
