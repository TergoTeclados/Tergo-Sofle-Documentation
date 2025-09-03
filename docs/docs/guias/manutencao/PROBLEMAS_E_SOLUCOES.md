# Problemas e soluções

Neste guia você encontrará problemas e soluções que você pode ter com seu teclado.

Seu problema pode variar desde simples uma confusão com alguma funcionalidade até serem problemas técnicos que necessitem de manutenção.

:::tip
Veja o sumário de cada guia clicando no ícone de lista na parte superior direita da página - <img src="/img/icone-sumario.png" alt="Exemplo" width="20" />
:::

## Primeiros passos

A maioria dos problemas podem ser resolvidos realizando os seguintes passos.

Experimente realizá-los primeiro, antes de buscar soluções mais avançadas.

### Desligar e ligar teclado

Desligue-o totalmente da energia, desconectando-o do USB e desligando chaves de liga/desliga (apenas na Wireless).

### Restaurar configurações de fábrica

Uma costumização realizada no teclado pode estar causando problemas inesperados para você.

Caso pareça se aplicar ao seu caso, restaure o _firmware_ do teclado para as configurações de fábrica e veja se resolve.

#### Versão Padrão (com fio)

Veja o [guia de atualização do firmware (versão Padrão)](../especifico_versao_padrao/COMO_ATUALIZAR_FIRMWARE.md) e prossiga até a etapa de ativar o modo de gravacão (boot).

No momento em que a pasta para gravar o _firmware_ abre, seu teclado terá restaurado as configurações de fábrica do _firmware_.

Se você instalou um _firmware_ customizado seu, realize o processo completo do guia para gravar o _firmware_ fornecido pela Tergo Teclados para ver se resolve.

#### Versão Wireless (sem fio)

Um primeiro passo pode ser tentar limpar customizações realizadas no ZMK Studio.

Abra o ZMK Studio, e clique em `Tergo Sofle > Restore Stock Settings`.

Caso não tenha resolvido, veja o [guia de atualização do firmware (versão Wireless)](../especifico_versao_wireless/COMO_ATUALIZAR_FIRMWARE.md) e tente reinstalar o _firmware_ do seu teclado para o fornecido pela Tergo Teclados. Especialmente relevante caso tenha gravado uma versão sua customizada do _firmware_.

## Possíveis problemas

Veja aqui eventuais problemas que você pode ter com o teclado Tergo Sofle.

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

Solução: tente primeiro reiniciar todas as partes. Se não funcionar, consulte o [guia de como conectar múltiplos dispositivos](../especifico_versao_wireless/COMO_CONECTAR_MULTIPLOS_DISPOSITIVOS.md) para ver como resetar as configurações de bluetooth do teclado.

## USB da placa controladora com mal contato

### Causas

- Dano no USB
- Problemas com o cabo sendo usado
- Sujeira no USB

### Como diagnotiscar

- Veja se há danos visíveis no USB
- Experimente um cabo diferente
- Experimente limpar a entrada do USB, com a vassourinha por exemplo ou puxando sujeita com uma pinça

### Possíveis soluções

Caso não seja nenhum dos problemas anteriores e sim a placa, sugerimos as seguintes soluções:

#### Trocar placas controladoras entre si

Como apenas uma das placas é a principal que é conectada ao computador, pode ser que trocar as placas entre si já solucione o seu problema.

Nesse caso, siga [esse guia](./TROCAR_PLACA_CONTROLADORA.md) de forma que você troque as placas controladoras entre si ao invés de adquirir uma nova.

#### Trocar placa controladora por nova

Siga [esse guia](./TROCAR_PLACA_CONTROLADORA.md) para saber como adquirir uma e trocar.

## Não consigo mais dar unlock no meu teclado Wireless

### Causas

- Trocou as teclas usadas para desbloquear o firmware

### Solução

- Atualize o firmware para a versão 1.2.0 ou maior e utilize a segunda forma de desbloquear o firmware (pressionar teclas dos cantos do teclado simultaneamente).
