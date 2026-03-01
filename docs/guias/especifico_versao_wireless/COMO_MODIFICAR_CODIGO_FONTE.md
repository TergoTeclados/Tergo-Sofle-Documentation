# Modificar Firmware - Versão Wireless

Este manual vai te guiar em relação a como modificar o firmware presente no seu teclado para ter controle total de todos aspectos do seu teclado e funcionalidades disponibilizadas pelo [firmware ZMK](https://zmk.dev/).

## Para que você pode querer modificar o código-fonte

Algumas funcionalidades requerem alterar o código-fonte, como:

- Alterar o tempo para o teclado entrar em modo de descanso;
- Customizações no layout que o software ZMK ainda não permite realizar diretamente, como knob, macros e combos;

## Requisitos

Espera-se que você tenha conhecimento mínimo em programação para modificar diretamente o firmware. Ficará facilitado caso você tenha experiência com sistema de versionamento Git.

:::tip Experimente usar o GitHub Desktop

Caso não tenha muita experiência com a ferramente Git por interface de comando, sugerimos o uso do [GitHub Desktop](https://desktop.github.com/).

Com ele, você terá facilidade em salvar as customizações. Tudo pela interface visual do aplicativo.
:::

## Visão Geral do firmware

O [firmware ZMK](https://zmk.dev/) é um firmware open-source e dedicado para uso em teclados.

O software ZMK Studio é uma tecnologia nova e permite diversas customizações no teclado. Porém, ele ainda possui diversas limitações. Você pode ver o que o ZMK Studio permite customizar e o que está planejado de ser implementado [clicando aqui](https://zmk.dev/docs/features/studio).

O firmware do teclado Tergo Sofle pode ser encontrado no [nosso repositório](https://github.com/TergoTeclados/zmk-config-tergo-sofle).

## Visão geral do processo de desenvolvimento

Cada commit que você realizar e der push ao repositório irá executar automaticamente um workflow que compilará seu firmware.

Ou seja, você não precisará executar nada no seu computador além de usar o sistema de versionamento git e um editor de texto para realizar as modificações no seu código-fonte.

## Preparar ambiente de programação

1 - Com o GitHub, faça um fork do [nosso repositório do Tergo Sofle Wireless](https://github.com/TergoTeclados/zmk-config-tergo-sofle).

2 - No seu fork, visite a página "Actions" e garante que as "actions" estão ativadas. Será nessa aba que seu firmware será compilado.

:::tip
Após isso você pode mandar manualmente executar a "action" que constrói o firmware do seu teclado clicando na que aparece nessa aba.
:::

3 - Faça um clone do fork para seu computador, para começar a realizar modificações.

A partir de agora você está preparado para modificar o código-fonte.

:::tip

Tenha um editor de texto para modificar com eficácia o firmware, como o [VSCode](https://code.visualstudio.com/).
:::

## Modificar código-fonte

4 - Faça as alterações que quiser no código-fonte

:::tip

O próximo tópico deste guia vai te indicar customizações que você pode querer fazer.
:::

5 - Salve as alterações no código, faça commit e então faça push ao seu repositório

6 - No repositório, visite a página `Actions`. Nela, você deve ver um `job` executando automaticamente com o nome do último commit que você deu push. Esse é o job referente a compilação do firmware do seu teclado

7 - Abra o job e perceba que **quando ele completar com sucesso** ele deixará um arquivo compactado com nome `firmware` ao final da página, na sessão "Artifacts".

:::tip
Caso o job tenha completado com sucesso mas você não esteja vendo o arquivo com nome `firmware`, atualize a página e olhe novamente.
:::

:::warning
Caso ocorra algum erro durante o processo, clique no evento que deu erro e localize a origem lendo o registro da compilação.
:::

8 - Baixe o arquivo e extraia o conteúdo dele para uma pasta. Você verá diversos arquivos que serão usados para gravar o firmware do seu teclado.

Pronto! Agora você já pode utilizar os arquivos para gravar seu teclado. Para isso, consulte o guia de [como atualizar o firmware](./COMO_ATUALIZAR_FIRMWARE.mdx).

## Começar a modificar

### Como aprender a customizar

Bem vindo à comunidade do firmware ZMK!

Continue lendo este guia para entender o nosso código-fonte e sugestões do que customizar.

O [próximo tópico](#entendendo-o-repositório) te ajudará a entender os arquivos do repositório e onde serão realizadas customizações.

Em seguida, mostraremos [como realizar algumas customizações que você pode ter interesse](#customizar-funcionalidades-da-versão-wireless-no-código-fonte).

Consulte também o site da [documentação oficial do firmware ZMK](https://zmk.dev/docs) e descubra funcionalidades do teclado e como implementá-las.

Busque pelo seu problema no google e você provavelmente encontrará pessoas que tiveram o mesmo. Em especial, você encontra muitos usuários nos Reddits [r/olkb](https://www.reddit.com/r/olkb/) e [r/ErgoMechKeyboards](https://www.reddit.com/r/ErgoMechKeyboards/).

[Tire dúvidas diretamente com a comunidade ZMK no Discord](https://discord.com/invite/sycytVQ). Eles são ótimas pessoas dispostas a ajudas.

:::note
A comunidade do ZMK fornece ótima ajuda. Saiba usar do tempo dos ajudantes com moderação e siga as regras corretamente.
:::

### Entendendo o repositório

O firmware ZMK não espera que você modifique o código-fonte do firmware em si, mas sim crie uma configuração para o teclado, que é o caso do repositório do firmware do Tergo Sofle.

A partir desses arquivos de configuração você customiza seu teclado.

#### Resumo sobre as pastas do repositório do Tergo Sofle wireless

##### Configurações gerais

A pasta `config` possui a configuração e customizações do teclado.

Você irá querer customizar o layout e funcionalidades como macro e combos no arquivo `config/sofle.keymap`, que possui diversos comentário para te ajudar.

Além disso, há configurações que são feitas no `config/sofle.conf`, como o tempo para o teclado entrar em modo de descanso.

##### Shields

Na pasta `boards/shields` você encontra "shields".

"Shields" são customizações adicionais que originam do hardware.

Nela você encontrará as shields:
- `dongle_display`, que configura uma tela para o receptor;
- `sofle`, que cria as **metades** do teclado.

#### O coração do seu teclado é o receptor (dongle)

:::tip Entendendo o receptor

As configurações gerais do teclado são aplicadas no arquivo `config/sofle.keymap`, como falado antes, e não na pasta `boards/shields/sofle`.

Isso pois essa configuração é colocada no dongle em si.

Quem interpreta todos sinais das partes do teclado é o receptor.

As partes do teclado são meramente "shields", que enviam ao receptor os sinais de digitação.

É o receptor quem processa esses sinais.

É por isso que a maioria das customizações que você realizar no `sofle.keymap` que adicionem funcionalidades não necessitam da regravação do firmware nas partes do teclado, e sim apenas no receptor.

:::

##### Outros

A pasta `.github` contém configurações que fazem com que uma "action" para compilar o firmware seja executada automaticamente ao dar push no repositório.

O arquivo [build.yaml](./build.yaml) especifica o que deve ser compilado e com quais configurações.

### Contribua também!

A Tergo Teclados possui uma equipe super dedicada, porém pequena. Mas que busca dar o máximo possível de suporte para a criação de novas funcionalidades para nossos teclados!

Ficariamos gratos caso queira contribuir com a comunidade, compartilhando funcionalidades que você fez, resolvendo issues no [nosso repositório do firwmare](https://github.com/TergoTeclados/zmk-config-tergo-sofle), entre outros!

## Customizar funcionalidades da versão Wireless no código-fonte

Agora que você já preparou seu ambiente de trabalho, é hora de customizar!

### Mudar tempo para o teclado dormir

- Modifique a variável `CONFIG_ZMK_IDLE_SLEEP_TIMEOUT` do arquivo `config/sofle.conf`.

Calcule de forma simples com base nos minutos que quer que ele demore e coloque o valor em milisegundos.

Exemplo: 15 minutos = `15 * 60 (segundos) * 1000 (mili)` = 900000

### Modificar comportamento do knob

No arquivo `config/sofle.keymap`, procure pelas camadas do teclado. Busque por "keymap".

Você verá que em cada camada de teclas, há uma linha dizendo `sensor-bindings`. Exemplo:

`sensor-bindings = <&inc_dec_kp C_VOL_UP C_VOL_DN &inc_dec_kp PG_UP PG_DN>;`

Você pode modificar essa linha **para cada camada do teclado** para especificar o comportamento do knob em cada camada.

Para saber o que você pode colocar no lugar do comportamento padrão, veja a [lista de keycodes do ZMK](https://zmk.dev/docs/keymaps/list-of-keycodes), e então escolha o que interessa a você colocar no lugar.

:::warning Sobre colocar scroll horizontal e vertical nos knobs

Caso queira colocar scroll horizontal ou vertical de mouse, ao invés de PG_UP/PG_DN, não é possível fazer isso simplesmente utilizando o keycode que se refere a scroll de mouse. Não funcionará se utilizá-los.

Estamos investigando como habilitar isso da melhor maneira possível.

:::

