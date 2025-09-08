---
sidebar_label: 'Manual de Modificação do Firmware'
sidebar_position: 1
---

# Tergo Sofle - Manual de Modificação do Firmware

Este manual vai te guiar em relação a como modificar o firmware presente no seu teclado para ter controle total de todos aspectos do seu teclado e funcionalidades disponibilizadas pelo [firmware QMK](https://docs.qmk.fm/#/).

## Requisitos

Espera-se que você tenha conhecimento em programação para modificar diretamente o firmware. Ficará facilitado caso você tenha experiência com linguagem C e sistema de versionamento Git.

## Visão Geral do firmware

O firmware QMK é open-source e dedicado para uso em teclados. Ele é baseado na linguagem C.

O Vial é um fork do QMK e trás como adicional a interface visual para configuração Vial, que é o firmware que vem com seu teclado.

A Tergo tem o [fork do firmware Vial QMK](https://github.com/TergoTeclados/vial-qmk-firmware), onde se encontra o código-fonte do teclado com suas modificações.

## Preparar ambiente de programação

Siga até o tópico 3 do guia [Setting Up Your QMK Environment](https://docs.qmk.fm/#/newbs_getting_started), da página oficial do QMK. Não esqueça de executar o `qmk setup`.

Com o GitHub faça um fork ou simplesmente clone o [fork do firmware Vial QMK](https://github.com/TergoTeclados/vial-qmk-firmware). Caso não tenha muita experiência com git por interface de comando, você pode experimentar o [GitHub Desktop](https://desktop.github.com/).

Então, dentro da pasta do firmware, execute `qmk git-submodule`.

_Por garantia, caso ache que o comando não funcionou, execute `git submodule update --init --recursive`._

## Compilar firmware do seu teclado

Após realizar os passos anteriores, abra o QMK MSYS na pasta do firmware e execute o comando `qmk compile -kb tergo_sofle/rev1 -km default -j 0`.

_Ps: Seu Tergo Sofle pode ter ou não RGB e telas OLED. Você não precisa se preocupar em desabilitar essas funcionalidades ao compilar o firmware caso não tenha algo pois funcionará normalmente._

## Gravar firmware no teclado

Caso tenha conseguido compilar sem erros o firmware, o arquivo com o firmware a ser usado se encontrará na pasta `.build`, na raiz do repositório.

Ele tem a extensão `.uf2`, e o nome será algo semelhante a `tergo_sofle_rev1_default_rp2040_ce.uf2`.

Copie esse arquivo e use ele para gravar seu teclado.

Para fazer isso, basta seguir os passos do [guia de como atualizar o firmware](../COMO_ATUALIZAR_FIRMWARE.md).

## Começar as modificações

Você agora pode encontrar as configurações do teclado na pasta `keyboards/tergo_sofle`.

Faça suas customizações e aproveite sua jornada!

## Atenção em relação a compatibilidade do Vial

O Vial é um fork do QMK. A maioria da documentação que você vai encontrar é diretamente relacionada ao QMK.

Dado isso, há certas funcionalidades do Vial (não muito claras) que, de acordo com nossos testes e pesquisas, parecem não ser compatíveis com o fork do Vial (que é usado), e não resultam em nenhum efeito pois são sobrepostas pelo Vial.

O que parece não funcionar:

- `TAPPING_TERM_PER_KEY` e semelhantes (como `PERMISSIVE_HOLD_PER_KEY`)

O que houve dúvida se funcionava mas parece ter funcionado:

- `QUICK_TAP_TERM`

_Caso encontre outras, agradecemos caso possa contribuir a essa lista_

## Se aventure na documentação e nos fóruns

Bem vindo à comunidade do QMK!

[Aqui há uma lista de features populares do QMK](https://github.com/samhocevar-forks/qmk-firmware/blob/master/docs/features.md). Ps: lista meio desatualizada, use apenas para ter noção das features.

[Consulte o site da documentação oficial](https://docs.qmk.fm/#/) ou, como eu prefiro, essa mesma [documentação diretamente no github](https://github.com/qmk/qmk_firmware).

No [repositório do QMK Firmware](https://github.com/qmk/qmk_firmware), pesquise nas issues e PRs pessoas que tiveram problemas semelhantes ou que implementaram funcionalidades semelhantes.

Busque pelo seu problema no google e você provavelmente encontrará pessoas que tiveram o mesmo. Em especial, você encontra muitos usuários nos Reddits [r/olkb](https://www.reddit.com/r/olkb/) e [r/ErgoMechKeyboards](https://www.reddit.com/r/ErgoMechKeyboards/).

[Venha conversar no discord da Tergo](https://discord.gg/uJwf5hnurs). Venha compartilhar experiências com outros usuários!

[Tire dúvidas diretamente com a comunidade QMK no Discord](https://discord.com/invite/qmk). Eles são ótimas pessoas dispostas a ajudas. Saiba usar com moderação.

## Contribua também!

A Tergo Teclados possui uma equipe super dedicada, porém pequena. Mas que busca dar o máximo possível de suporte para a criação de novas funcionalidades para nossos teclados!

Ficariamos gratos caso queira contribuir com a comunidade, compartilhando funcionalidades que você fez, resolvendo issues no [nosso repositório do firwmare](https://github.com/TergoTeclados/vial-qmk-firmware), entre outros!

## FAQ

### Quando devo usar o firmware 'qmk' normal ao invés do 'vial-qmk' dos repositório da TergoTeclados?

Usar o fork default do QMK é caso você não tenha interesse no Vial ou queira modificar coisas que o Vial limita.

Alguns exemplos principais são:
- [tap-hold per key](https://github.com/qmk/qmk_firmware/blob/master/docs/tap_hold.md): O Vial não permite isso mas pode ser interessante para sua aplicação;
- Outras funcionalidades novas lançadas no QMK que o fork do Vial ainda não acompanhou.

Além disso, o qmk default tem a interface [VIA](https://www.caniusevia.com/), que permite alterar teclas, mas que é muito mais limitada.

### E se os Forks da Tergo estiverem desatualizados?

É só nos notificar que atualizaremos eles em relação às origens.
