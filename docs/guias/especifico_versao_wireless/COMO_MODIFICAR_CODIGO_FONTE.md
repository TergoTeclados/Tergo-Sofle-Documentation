# Modificar Firmware - Versão Wireless

Este manual vai te guiar em relação a como modificar o firmware presente no seu teclado para ter controle total de todos aspectos do seu teclado e funcionalidades disponibilizadas pelo [firmware ZMK](https://zmk.dev/).

## Para que você pode querer modificar o código-fonte

- Alterar o tempo para o teclado entrar em modo de descanso;
- Customizações no layout que o software ZMK ainda não permite realizar diretamente;
- Entre outros.

## Requisitos

Espera-se que você tenha conhecimento em programação para modificar diretamente o firmware. Ficará facilitado caso você tenha experiência com sistema de versionamento Git.

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

:::tip

Caso não tenha muita experiência com git por interface de comando, sugerimos o uso do [GitHub Desktop](https://desktop.github.com/).
:::

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

Pronto! Agora você já pode utilizar os arquivos para gravar seu teclado. Para isso, consulte o guia de [como atualizar o firmware](./COMO_ATUALIZAR_FIRMWARE.md).

## Começar a modificar

:::warning

A documentação no próprio [repositório do _firmware_](https://github.com/TergoTeclados/zmk-config-tergo-sofle) (arquivo README.md) te mostra:
- Sugestão de customizações comuns que você pode querer;
- Sobre as pastas do firmware;
- Visão geral de como ele funciona.

Além disso, o código possui comentários nos pontos relevantes.
:::

### Se aventure na documentação e nos fóruns

Bem vindo à comunidade do ZMK!

Visite nosso [repositório do _firmware_](https://github.com/TergoTeclados/zmk-config-tergo-sofle) para entender o nosso código-fonte e sugestões do que customizar.

Consulte também o site da [documentação oficial do firmware ZMK](https://zmk.dev/docs) e descubra funcionalidades do teclado e como implementá-las.

Busque pelo seu problema no google e você provavelmente encontrará pessoas que tiveram o mesmo. Em especial, você encontra muitos usuários nos Reddits [r/olkb](https://www.reddit.com/r/olkb/) e [r/ErgoMechKeyboards](https://www.reddit.com/r/ErgoMechKeyboards/).

[Tire dúvidas diretamente com a comunidade ZMK no Discord](https://discord.com/invite/sycytVQ). Eles são ótimas pessoas dispostas a ajudas.

:::note
A comunidade do ZMK fornece ótima ajuda. Saiba usar do tempo dos ajudantes com moderação e siga as regras corretamente.
:::

## Contribua também!

A Tergo Teclados possui uma equipe super dedicada, porém pequena. Mas que busca dar o máximo possível de suporte para a criação de novas funcionalidades para nossos teclados!

Ficariamos gratos caso queira contribuir com a comunidade, compartilhando funcionalidades que você fez, resolvendo issues no [nosso repositório do firwmare](https://github.com/TergoTeclados/zmk-config-tergo-sofle), entre outros!
