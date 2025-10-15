# Não consigo mais dar unlock no meu teclado Wireless

## Causas

- Trocou as teclas usadas para desbloquear o firmware

## Solução

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

- [Voltar ao índice de problemas de software](./README.md)
- [Instruções Básicas](../README.md) - Volte aqui se as soluções básicas não foram tentadas
- [Problemas de Hardware](../hardware/README.md) - Para problemas físicos e de conectividade
