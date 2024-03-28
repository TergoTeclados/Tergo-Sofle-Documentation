# Tergo Sofle - Manual de Modificação do Firmware

Este manual vai te guiar em relação a como modificar o firmware presente no seu teclado para ter controle total de todos aspectos do seu teclado e funcionalidades disponibilizadas pelo [firmware QMK](https://docs.qmk.fm/#/).

## Requisitos

Espera-se que você tenha conhecimento em programação para modificar diretamente o firmware. Ficará facilitado caso você tenha experiência com linguagem C e sistema de versionamento Git.

## Visão Geral do firmware

O firmware QMK é open-source e dedicado para uso em teclados. Ele é baseado na linguagem C.

O Vial é um fork do QMK e trás como adicional a interface visual para configuração Vial, que é o firmware que vem com seu teclado.

A Tergo tem o [fork do firmware Vial QMK](https://github.com/TergoTeclados/vial-qmk-firmware) que deve ser usado, pois possui modificações importantes para funcionalidades do seu teclado.

## Preparar ambiente de programação

Siga até o tópico 3 do guia [Setting Up Your QMK Environment](https://docs.qmk.fm/#/newbs_getting_started), da página oficial do QMK. Não esqueça de executar o `qmk setup`.

Com o GitHub faça um fork ou simplesmente clone o [fork do firmware Vial QMK](https://github.com/TergoTeclados/vial-qmk-firmware). Caso não tenha muita experiência com git por interface de comando, você pode experimentar o [GitHub Desktop](https://desktop.github.com/).

Então, dentro da pasta do firmware, execute `qmk git-submodule`. Por garantia caso ache que o comando não funcionou, execute `git submodule update --init --recursive`.

## Compilar firmware do seu teclado

Seu Tergo Sofle pode ter ou não RGB e telas OLED. Então, é importante saber o que ele possui para configurar o firmware a ser compilado corretamente.

Caso falhe a compilação, tente repetir todos passos para garantir que você preparou o ambiente corretamente.

### Configurando diretamente nos arquivos e compilando

**Ps: não é mais necessário seguir todos esses passos. Basta chamar o comando genérico para compilar com tudo, pois o teclado funciona normalmente mesmo não tendo RGB ou telas.**

No firmware [Vial QMK](https://github.com/TergoTeclados/vial-qmk-firmware) disponibilizado pela Tergo, dentro da pasta `keyboards/tergo_sofle/rev1`, você vai encontrar o arquivo `rules.mk` que contém regras que podem ser alteradas. Um jeito fácil de encontrar essas linhas a serem alteradas é usando o mecanismo de busca do seu editor e pesquisando pela palavra `CONFIG-ME` que marca essas linhas. Troque "no" por "yes" onde for necessário. Esta configuração só é necessária fazer 1 vez.

E então, neste caso, para compilar basta usar o comando `qmk compile -kb tergo_sofle/rev1 -km default -j 0`.

### Configurando na própria chamada do comando de compilação

Por padrão, o firmware é compilado considerando que você tem telas OLED e RGB.

Adicione parâmetros específicos ao comando de compilação para especificar se o seu teclado não possui OLEDs (`-e OLED_ENABLE=no`) ou se não possui RGB (`-e RGB_MATRIX_ENABLE=no -e VIALRGB_ENABLE=no`)

Um exemplo para um Tergo Sofle que não possui nem OLEDs nem RGB é: `qmk compile -kb tergo_sofle/rev1 -km default -j 0 -e OLED_ENABLE=no -e RGB_MATRIX_ENABLE=no -e VIALRGB_ENABLE=no`.

## Começar as modificações

Você agora pode encontrar as configurações do teclado na pasta `keyboards/tergo_sofle`. Essa pasta é um submodulo git que possui seu próprio versionamento.

## Se aventure na documentação e nos fóruns

Bem vindo à comunidade do QMK!

[Aqui há uma lista de features populares do QMK](https://github.com/samhocevar-forks/qmk-firmware/blob/master/docs/features.md). Ps: lista meio desatualizada, use apenas para ter noção das features.

[Consulte o site da documentação oficial](https://docs.qmk.fm/#/) ou, como eu prefiro, essa mesma [documentação diretamente no github](https://github.com/qmk/qmk_firmware).

Pesquise seu problema no google e você encontrará pessoas que tiveram o mesmo. Em especial, você encontra muitos usuários nos Reddits [r/olkb](https://www.reddit.com/r/olkb/) e [r/ErgoMechKeyboards](https://www.reddit.com/r/ErgoMechKeyboards/).

[Venha conversar no discord da Tergo](https://discord.gg/uJwf5hnurs). Venha compartilhar experiências com outros usuários!

[Tire dúvidas diretamente com a comunidade QMK no Discord](https://discord.com/invite/qmk). Eles são ótimas pessoas dispostas a ajudas. Saiba usar com moderação.

## FAQ

### Quando devo usar o firmware 'qmk' normal ao invés do 'vial-qmk' dos repositório da TergoTeclados?

Usar o fork default do QMK é caso você não tenha interesse no Vial ou queira modificar coisas que o Vial limita.

Alguns exemplos principais são:
- [tap-hold per key](https://github.com/qmk/qmk_firmware/blob/master/docs/tap_hold.md): O Vial não permite isso mas pode ser interessante para sua aplicação;
- Outras funcionalidades novas lançadas no QMK que o fork do Vial ainda não acompanhou.

Além disso, o qmk default tem a interface [VIA](https://www.caniusevia.com/), que permite alterar teclas, mas que é muito mais limitada.

### E se os Forks da Tergo estiverem desatualizados?

É só nos notificar que atualizaremos eles em relação às origens.
