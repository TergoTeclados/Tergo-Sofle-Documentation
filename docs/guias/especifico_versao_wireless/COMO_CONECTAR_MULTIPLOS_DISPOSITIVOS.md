# Como conectar múltiplos dispositivos Bluetooth - Versão Wireless

## Visão Geral

O Tergo Sofle Wireless suporta conectar e controlar individualmente múltiplos dispositivos que possuem _Bluetooth_.

Você pode, por exemplo, usar o teclado no seu computador e, eventualmente, trocar o foco dele para seu notebook ou smartphone para responder alguém.

Por padrão, o Tergo Sofle suporta conectar até 5 dispositivos por meio de _Bluetooth_ + o seu dispositivo no qual o receptor está conectado.

## Camada de ajustes

Na camada de ajustes você possui teclas especiais para manipular essa funcionalidade.

![Exemplo](/img/camada-ajustes-wireless.svg)

## Como ver dispositivo conectado na tela

Se seu receptor tem tela, você consegue identificar com mais precisão em que dispositivo seu teclado está conectado.

Nos exemplos abaixo, repare no canto superior esquerdo:
- O primeiro ícone refere-se ao receptor, que pode ter um `✓` se ele conseguir se comunicar com seu computador ou um `X` se tiver falhado (incomum)
- O próximo ícone, com símbolo de bluetooth, indica o perfil de bluetooth selecionado (de 1 a 5) e se tem algo pareado (símbolo de `✓`) ou não (símbolo de bolinha).
- O "risco" acima do ícone indica qual que está selecionado no momento: a conexão com o computador ou com o dispositivo bluetooth.

Veja os exemplos abaixo de como interpretar a tela:

### Exemplo 1

- Receptor conectado com sucesso (ícone de `✓`)
- Conexão pelo receptor selecionada (traço em cima do ícone dele)
- Bluetooth com perfil 2 selecionado (número 2 ao lado do ícone)
- Bluetooth sem dispositivo pareado no perfil 2 (ícone de bolinha acima do número 2)

![Exemplo](/img/ex_1_bluetooth.jpg)

### Exemplo 2

- Receptor não consegue se comunicar com o dispositivo na qual está conectado (ícone de `X`)
- Conexão pelo Bluetooth está selecionada (traço em cima do ícone dele)
- Bluetooth com perfil 1 selecionado (número 1 ao lado do ícone)
- Bluetooth pareado com sucesso a algum dispositivo no perfil 1 (ícone de `✓` acima do número 2)

![Exemplo](/img/ex_2_bluetooth.jpg)

## Conectar dispositivo

:::tip O que fazer se falhar a conexão

Se for sua primeira vez conectando um dispositivo e alguma parte do processo falhar, faça todos os seguintes passos e tente o processo novamente:

- Limpe a configuração de bluetooth do teclado clicando em `Clear All`, na camada de ajustes. Consulte foto anterior para ver localização (fica onde seria a letra `I`)
- Desligue as metades do teclado
- Desligue o receptor
- Desemparelhe o bluetooth no seu dispositivo (celular/computador) para esquecer tentativas prévias de pareamento
- Desligue e ligue o bluetooth no seu dispositivo
- Ligue novamente todas partes do teclado
- Tente o passo a passo abaixo novamente para conectar um dispositivo bluetooth

Dica: Dispositivos móveis com tecnologia _Bluetooth_ (smartphones e tablets) tendem a conectar mais facilmente do que computadores.

:::

### Passo a passo

1 - Selecione um perfil que será responsável pelo dispositivo a ser conectado. Por padrão será o perfil 1.

Exemplo: acesse a camada de ajustes e clique no botão referente ao `🛜BT1`, que é a tecla `1` no seu teclado. Consulte imagem da camada se necessário.

2 - Caso você já tenha tentado conectar ou tenha algum dispositivo conectado a este perfil, limpe-o clicando na tecla `🛜Clear Profile`, que é a tecla `K` ao estar na camada de ajustes.

3 - No seu dispositivo _Bluetooth_ que você deseja conectar ao seu teclado, no menu de dispositivos _Bluetooth, desemparelhe o teclado caso você já tenha o emparelhado anteriormente.

:::note
Geralmente há alguma opção chamada "esquecer dispositivo" ou "desemparelhar" que faz isso.
:::

4 - Ainda no seu dispositivo _Bluetooth_, procure por dispositivos disponíveis para conexão. Busque por `Tergo Sofle` e clique nele.

:::note
Caso você clique no dispositivo e, ao invés dele tentar conexão, ele se desconectar automaticamente ou nada acontecer, desligue e ligue novamente o receptor do seu teclado (desconectando e conectando novamente ao seu computador) ou siga a diga mais acima de como recomeçar o processo.
:::

5 (condicional): Inserir senha para parear teclado. Veja detalhes a seguir:

:::tip Teclados que não precisam fazer isso

Teclados com a versão a partir da `v1.3.0` do firmware não precisam fazer isso.

Se você adquiriu o teclado antes de 31/03/2026 e nunca atualizou o firmware você provavelmente precisará.

Ou então, atualize o firmware para a versão mais recente e evite esta etapa.
:::

Pode aparecer na tela do seu dispositivo um número ou senha que deve ser digitado **a partir do seu teclado Tergo** e, em seguida, clicado `Enter` para parear com sucesso.

Exemplo disso:
- Seu dispositivo mostra a senha `9217349`
- Você digita em sequência no seu teclado essa senha `9217349`
- Você clica `Enter` no seu teclado para enviar a senha

:::tip
Caso você erre a senha durante a conexão e não consiga tentar conectar novamente ao teclado, recomenda-se desligar e ligar novamente o receptor do seu teclado (para reiniciá-lo) e, opcionalmente, refazer todos os passos.
:::

6 - Caso a senha tenha sido inserida com sucesso ou não tenha precisado de senha, o teclado deve se conectar automaticamente ao seu dispositivo.

Agora, veja o próximo tópico para entender como alterar entre dispositivos.

## Alterar entre dispositivos

Caso você tenha algum dispositivo _Bluetooth_ já pareado:
- Você pode alternar o foco do seu teclado entre seu computador (dispositivo em que está conectado o repector) e dispositivos _Bluetooth_ clicando a tecla `🛜PC<->BT` no seu teclado, que consiste em acessar a camada de ajustes e clicar a letra `D`.
- Você pode alterar entre dispositivos _Bluetooth_ conectados acessando a camada de ajustes e clicando no dispositivo desejado (1, 2, 3, 4 ou 5).

![Exemplo](/img/camada-ajustes-wireless.svg)

### Outras funcionalidades

A tecla `🛜Clear All` limpa todas as configurações de todos dispositivos conectados. Assim, ao clicá-la (por padrão acessando a camada de ajustes e clicando `I`) você precisará conectar novamente todos dispositivos individualemnte.

:::note
Você pode entender mais sobre a funcionalidade de conectar múltiplos dispositivos oferecida pelo _firmware_ ZMK diretamente na [documentação oficial do ZMK](https://zmk.dev/docs/keymaps/behaviors/bluetooth#bluetooth-pairing-and-profiles).
:::

## Receptor pode ser conectado a qualquer fonte 5V

- Você pode conectar o receptor do seu teclado a qualquer alimentação de 5V, como uma fonte de carregador de celular ou uma porta USB que está energizada;
- A partir disso, você pode conectar seus dispositivos por meio de bluetooth para o teclado, pois é o receptor que gerencia as conexões;
- Por fim, pelo próprio teclado, você pode alternar entre qual é o dispositivo que você quer digitar.
