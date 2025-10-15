# Problemas de Software

Este guia contém problemas e soluções relacionados ao firmware e configuração do teclado Tergo Sofle.

## Teclado Wireless estava funcionando normalmente mas alguma parte parou

Como solução inicial geral, tente desligar todas as partes do teclado e ligar novamente (metades e receptor).

### Outras causas e soluções

#### Modo de descanso

Após 15 minutos parado, ele entra em modo de descanso.

Solução: Pressione qualquer tecla para voltar ao normal.

#### Bateria baixa

Uma metade do teclado estar desconectando com certa frequência pode indicar bateria baixa.

Recarregue-a.

#### Teclado conectou-se a um dispositivo bluetooth e você não percebeu

Se está tentando digitar no teclado para enviar texto ao computador e você tem algum dispositivo bluetooth por perto, pode ser que o teclado tenha tentado se conectar a ele, dado você clicar em algo por acidente ou não.

Se você tiver tela no receptor, tente ver no canto superior esquerdo qual opção está selecionada para enviar os inputs: dispositivo no qual o receptor está conectado ou dispositivo bluetooth conectado.

Solução: tente primeiro reiniciar todas as partes. Se não funcionar, consulte o [guia de como conectar múltiplos dispositivos](../../guias/especifico_versao_wireless/COMO_CONECTAR_MULTIPLOS_DISPOSITIVOS.md) para ver como resetar as configurações de bluetooth do teclado.

## Não consigo mais dar unlock no meu teclado Wireless

### Causas

- Trocou as teclas usadas para desbloquear o firmware

### Solução

1. Utilize a segunda forma de desbloquear o firmware (pressionar teclas dos cantos do teclado simultaneamente) conforme descrito no manual da versão Wireless.

2. Caso a anterior não funcione, faça o seguinte:
- Baixe um firmware especial nosso que fornece o ZMK Studio já desbloqueado. [Clique aqui para baixá-lo](https://drive.google.com/file/d/10Cg9ifkHMFN5sqUrocjji1m3S-rXUi6Z/view?usp=sharing).
- Grave esse firmware, seguindo o guia de como atualizar o firmware da versão Wireless.
- Agora, abra o ZMK Studio e procure pela opção para restaurar configuração de fábrica.
- Feito isso, baixe e grave o [firmware original do Tergo Sofle](https://github.com/TergoTeclados/zmk-config-tergo-sofle/releases) e o grave novamente no seu teclado.

:::warning

É importante gravar novamente o firmware do Tergo Sofle com o ZMK Studio bloqueado, pois tê-lo desbloqueado é uma vulnerabilidade de segurança para seu teclado e seu computador.

:::

## Guias Relacionados

- [Instruções Básicas](../README.md) - Volte aqui se as soluções básicas não foram tentadas
- [Problemas de Hardware](../hardware/README.md) - Para problemas físicos e de conectividade
