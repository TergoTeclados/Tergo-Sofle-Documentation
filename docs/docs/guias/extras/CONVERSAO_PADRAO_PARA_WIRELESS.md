# Conversão versão Padrão para Wireless

:::warning
Guia em desenvolvimento.

Até então, fornece uma visão geral do processo de conversão.

O serviço de conversão será oferecido em breve pela Tergo Teclados.
:::

Esse guia explicará sobre o processo de conversão da versão com fio para a sem fio do teclado Tergo Sofle

## Diferenças

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

Também são comentadas em notas no [guia de customizações](../MODIFICACOES_E_FUNCIONALIDADES_QUE_CONTRIBUEM_PARA_ERGONOMIA.md).

O firmware da versão Padrão é o QMK e da Wireless é o ZMK. Ambos suportam as mesmas funcionalidades.

## Resumo do processo de conversão

Consiste em:
- Substituir placas controladoras
- Adicionar baterias
- Pequenas modificações na placa base
- Gravar firmware nas placas

## Limitações atuais do processo de conversão

### Requer algum nível de solda

Mesmo que enviemos a placa controladora já com o firmware gravado e com os devidos pinos soldados, é necessário realizar pequenas soldas na placa-base.

São muito simples, mas requerem ferro de solda.

### Versão da placa-base do seu teclado

As placas-base do teclado Tergo Sofle vieram recebendo melhorias e cada uma possui diferenças sutis.

Você pode consultar a versão da placa-base abrindo seu teclado e procurando pelo texto Tergo Sofle em alguma região próxima à borda da placa.

#### Versão menor que 1.2.2

Caso a versão do seu teclado seja menor que 1.2.2 (1.2.1 ou menos) o seu teclado não possuirá um botão de reset, o que facilitaria ativar o modo de gravação do teclado para gravação do firmware.

Mesmo assim, o processo pode ser feito de maneira alternativa, tocando com um clips em um pino específico do teclado, que deve ser detalhado futuramente.

## Atenção: em desenvolvimento

:::warning
A Tergo Teclados busca soluções para tornar o processo de conversão o mais amigável e simples possível.

Ainda não fornecemos o serviço de conversão pois estamos buscando resolver as limitações descritas anteriomente.

Nosso objetivo é fornecer um serviço de conversão rápido e eficaz, que envolvam o mínimo de alterações no seu teclado.

Também, ainda não fornecemos de forma detalhada o processo de conversão, por estarmos estudando ele.
:::