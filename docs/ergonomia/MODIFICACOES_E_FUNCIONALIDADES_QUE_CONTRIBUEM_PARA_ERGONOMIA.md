---
sidebar_label: 'Personalizar funcionalidades'
sidebar_position: 2
---

# Personalizar funcionalidades

Neste guia você descobrirá como diversas funcionalidades como modificar o layout de teclas ou teclas especiais da tecnologia utilizada pelo Tergo Sofle podem te fornecer uma experiência de digitação mais otimizada e aplicando ideias de ergonomia.

## Adapte o layout de teclas para suas necessidades

Procure entender que teclas você usa com mais frequência e posicioná-las estrategicamente de forma que seja confortável de usá-las.

Utilize a interface do software de customização para mudar o conteúdo de cada camada de teclas.

A principal dica para ter em mente ao modificar o layout das suas teclas para algo mais otimizado para você é que teclas as mais frequentemente utilizadas devem exigir o mínimo de esforço para serem digitadas.

Isso pode ser alcançado aplicando 3 conceitos:
- Reposicionar teclas de forma que as teclas mais frequentes fiquem próximas da "home row';
- Minimizar o número de passos necessários para realizar uma ação;
- Trocar o dedo escolhido para apertar a tecla.

## Sugestões de adaptações no layout do Tergo Sofle

### Tirar Backspace e Enter dos dedões

Pode ser que você prefira utilizar a tecla "backspace" e/ou "enter" com algum dedo que não seja o dedão.

Dessa forma, você pode colocá-lo(s), por exemplo, na coluna direita, de forma que sejam alcançáveis pelo seu dedo mindinho ou anelar, e usar a nova tecla disponível do dedão, por exemplo, para acessar uma nova camada com símbolos e funcionalidades úteis pra você.

O exemplo abaixo é uma aplicação disso.

<img src="/Tergo-Sofle-Documentation/img/exemplo_camada_base_diferente.svg" alt="Exemplo"  />

As teclas marcadas em vermelho foram as alteradas em relação ao layout original do Tergo Sofle.

### Criar camadas dedicadas

Complementando o exemplo acima que resultou em novas teclas para o dedão, que tal criar novas camadas?

Você pode criar uma camada só para números (ou deixar a camada do teclado numérico mais facilmente alcançável) de forma que você não precisa usar os números da linha de teclas superior do seu teclado.
Com eles vagos, você pode colocar novas funcionalidades para cada uma dessas teclas superiores, por exemplo.

### Teclas com duplo comportamento

Essa é uma das funcionalidades mais úteis e interessantes do teclado Tergo.

Como funciona: ao clicar, você tem a tecla. Ao segurar, ela faz outra coisa, como, por exemplo, mudar de camada.

Veja os exemplos abaixo.

### Colocar duplo comportamento nas teclas extras abaixo das telas

Por padrão, há 2 teclas abaixo da região das telas que servem para mudar a camada do seu teclado: uma vai para a camada de mídia ao ser segurada, e a outra para a camada de ajustes, conforme foto abaixo.

<img src="/Tergo-Sofle-Documentation/img/teclas-embaixo-da-tela.png" alt="Exemplo" width="300" />

Que tal modificarmos para que, quando eu apenas clicar nelas (ao invés de segurar), elas façam alguma outra coisa?

Como, por exemplo, uma pode ser usada para ativar o CapsLock. A outra para tirar _print_ da tela.

Para isso, ficamos com o exemplo abaixo:

<img src="/Tergo-Sofle-Documentation/img/teclas-embaixo-da-tela-depois.png" alt="Exemplo" width="300" />

:::note
No Vial (software da versão com fio), para fazer isso, basta ir para o submenu de teclas `layers` e colocar no lugar das teclas a tecla `LT` seguida do número da camada de destino que você quer que seja ativada ao segurar a tecla. Em seguida, você poderá escolher qual tecla por padrão será ativada ao simplesmente clicar a tecla.
:::

:::note
Já é suportado pelo ZMK Studio (software da versão sem fio) esta funcionalidade. Entenda a funcionalidade vendo a documentação do ZMK sobre [Mod-Tap](https://zmk.dev/docs/keymaps/behaviors/mod-tap), [Layer-Tap](https://zmk.dev/docs/keymaps/behaviors/layers#layer-tap) e [Hold-Tap](https://zmk.dev/docs/keymaps/behaviors/hold-tap).
:::

### Colocar duplo comportamento nas teclas do dedão para mudar de camada

Que tal adicionar duplo comportamento para as teclas mais próximas do seu dedão: `espaço` e `backspace`.

Repare nessas teclas comentadas no exemplo abaixo.

<img src="/Tergo-Sofle-Documentation/img/exemplo_tap_hold_layer.svg" alt="Exemplo"  />

Há 2 exemplos disso na camada especial do modo adepto, nas teclas do dedão esquerdo. Use-os como referência no software de customização.

:::note
No Vial (software da versão com fio), para fazer isso, resumidamente, abra o submenu de teclas "Layers" e coloque no lugar da tecla que você quer substituir o botão com nome `LT` seguido de um número que representa a camada de destino que você quer ativar ao segurar a tecla. Em seguida, escolha a tecla que será ativada caso você simplesmente clique a tecla.
:::

## Reposicionar teclas de forma que as teclas mais frequentes fiquem próximas da "home row"

O exemplo mais básico para você aplicar esse ponto pode ser rearranjar o posicionamento de símbolos na camada de símbolos e navegação.

Experimente trocar teclas da camada de forma que fique otimizado para que você tenha os símbolos que você usa com mais frequência pertos da home row, que é onde seus dedos descançam normalmente.

Assim, você minimiza a necessidade de ter que movê-los ao entrar na camada para digitar essas teclas.

### Home Row Mod

Um exemplo de aplicação muito popular desse conceito é o "home row mod", que adiciona duplo comportamento às teclas da "home row" (que são as teclas `A, S, D, F` e `J, K, L, ;`), de forma que:
- Clicá-la te fornece o caracter (como esperado normalmente)
- E segurá-la faz com que ela funcione como um modificador: SHIFT, CTRL, ALT e WIN/CMD.

<img src="/Tergo-Sofle-Documentation/img/exemplo_home_row_mod.svg" alt="Exemplo"  />

Esta é uma funcionalidade que já vem configurada na camada do modo Adepto (camada 1). Experimente mudar o teclado para o modo adepto, como explicado no manual do Tergo Sofle. Então, por exemplo, segure a letra `F` (que assim se comportará como se você estivesse segurando o `Shift`) e clique em uma letra, como a `U`, para ter o caracter maiúsculo.

Com isso, você não precisa mover os dedos para alcançar esses modificadores que normalmente ficam nas laterais do teclado.

_Como isto funciona é explicado com mais detalhes no próximo guia._

## Minimizar o número de passos necessários para realizar uma ação

### Tecla + modificador em um só clique

Se você usa com muita frequência alguma funcionalidade, como, por exemplo "Ctrl + Seta para o lado" (que resulta em pular uma palavra para a esquerda ou direita), você pode programar uma tecla para fazer esses passo com um só clique, na própria interface do software de customização.

Há um exemplo disso aplicado na camada de símbolos e navegação. Repare nas teclas abaixo de onde seriam as setas (Left e Right).

<img src="/Tergo-Sofle-Documentation/img/exemplo_tecla_control_seta.png" alt="Exemplo" width="500" />

:::note
No Vial (software da versão com fio), para fazer o que foi feito no exemplo acima, você pode usar as teclas especiais disponível no submenu "Quantum". Para entender o que cada tecla desse menu faz, você pode [consultar este trecho da documentação oficial do firmware QMK](https://github.com/qmk/qmk_firmware/blob/master/docs/keycodes.md#modifiers-modifiers).
:::

:::note
Já é suportado pelo ZMK Studio (software da versão sem fio) esta funcionalidade.
:::

### Macros

Com a ajuda de macros, você pode ser ainda mais criativo.

Macros simulam sequências de ações, como pressionar teclas específicas simultaneamente ou uma após a outra.

Um exemplo mostrado é abrir o gerenciador de tarefas do Windows, por exemplo, por meio de segurar o `Ctrl`+`Shift` e clicar `ESC`:

<img src="/Tergo-Sofle-Documentation/img/exemplo_macro.png" alt="Exemplo" width="500" />

:::note
No Vial (software da versão com fio), há vários exemplos de aplicações que você pode ver na [documentação do Vial sobre macros](https://get.vial.today/manual/macros.html#examples).
Você pode criar macros pelo submenu "Macros" no software Vial.
:::

:::note
No ZMK Studio (software da versão sem fio), até a data de escrita desta documentação, ainda não é possível customizar isso pelo software. É necessário modificar o código-fonte. Para isso, você pode consultar o guia de [como modificar o código fonte (ZMK)](./especifico_versao_wireless/COMO_MODIFICAR_CODIGO_FONTE.md).
É previsto que o ZMK Studio venha a suportar isso no futuro. Isso pode ser visto na [lista de funcionalidades previstas do ZMK Studio](https://zmk.dev/docs/features/studio).
:::

### Combos

Clique duas ou mais teclas ao mesmo tempo e tenha como resultado uma outra tecla.

Um exemplo de aplicação é fazer com que pressionar 2 teclas ao mesmo tempo resultem em teclas especiais como Enter, Backspace, ou mesmo Capslock.

### Ideias de combos

Experimente, por exemplo, fazer um macro que ative Capslock ao clicar `R` e `U`, que são 2 teclas que sempre estão próximas aos seus dedos.

<img src="/Tergo-Sofle-Documentation/img/exemplo_combo.png" alt="Exemplo" width="250" />

Ou então,

que tal `W`+`E`+`R` para ativar o `espaço` e `U`+`I`+`O` para ativar o `backspace`?

:::note
No Vial (software da versão com fio), você pode criar combos pelo submenu "Combos". Saiba mais vendo a [documentação do Vial sobre combos](https://get.vial.today/manual/combos.html).
:::

:::note
No ZMK Studio (software da versão sem fio), até a data de escrita desta documentação, ainda não é possível customizar isso pelo software. É necessário modificar o código-fonte. Para isso, você pode consultar o guia de [como modificar o código fonte (ZMK)](./especifico_versao_wireless/COMO_MODIFICAR_CODIGO_FONTE.md).
>
É previsto que o ZMK Studio venha a suportar isso no futuro. Isso pode ser visto na [lista de funcionalidades previstas do ZMK Studio](https://zmk.dev/docs/features/studio).
:::

## Knob (opcional): Para que usar?

Os knobs, também conhecidos como "encoders", "botões giratórios" ou "potenciômetros", permitem que você tenha funcionalidades ao girá-los no sentido horário ou anti-horário.

Essas funcionalidades podem ser teclas ou combinações de teclas.

Knobs vem configurados por padrão para ajustar volume ou rolar página (PageUp/PageDown).

Algumas dicas de customizações para utilizar os encoders:
- Volume
- Rolar página (PgUp/PgDown ou então MouseScrollUp/MouseScrollDown)
- Alternar abas no navegador (`shift+tab` e `ctrl+shift+tab`). Experimente esses atalhos no seu teclado
- Regular brilho RGB
- Avançar/Voltar coisas em geral, simulando setas ou botões de mídia

:::note
No Vial (software da versão com fio), você pode customizar isso na página principal.
:::

:::note
No ZMK Studio (software da versão sem fio), até a data de escrita desta documentação, ainda não é possível customizar isso pelo software. É necessário modificar o código-fonte. Para isso, você pode consultar o guia de [como modificar o código fonte (ZMK)](./especifico_versao_wireless/COMO_MODIFICAR_CODIGO_FONTE.md).

É previsto que o ZMK Studio venha a suportar isso no futuro. Isso pode ser visto na [lista de funcionalidades previstas do ZMK Studio](https://zmk.dev/docs/features/studio).
:::

## layouts de teclas além do QWERTY

Uma das aplicações da ideia de reposicionar as teclas como comentado [mais acima neste guia](#reposicionar-teclas-de-forma-que-as-teclas-mais-frequentes-fiquem-próximas-da-home-row) (e que exige mais sair da zona de conforto) é reposicionar as letras do seu teclado de forma a otimizar sua digitação.

A ideia por trás é super interessante, mesmo que não pretenda experimentar.

Já se perguntou o porquê do layout das suas teclas ser do jeito que ele é? Ou seja, por que os caracteres QWERTY ficam um ao lado do outro, por exemplo?

### Layout de teclas QWERTY

<img src="/Tergo-Sofle-Documentation/img/layout_qwert.png" alt="Exemplo" width="500" />

Não há uma resposta exata, mas foi algo que surgiu junto à máquina de escrever, e que foi historicamente herdado e é utilizado até hoje.

Ele não parece ter sido criado pensando em uma digitação otimizada e confortável.

Uma das teorias é que ele foi feito justamente para deixar o digitador mais lento, de forma a minimizar problemas nos mecanismos da máquina de escrever por digitar teclas muito próximas de forma rápida.

Visto isso, há diversos layouts criados pensando em otimizar a digitação. Vou te resumir 2 principais populares.

#### Layout de teclas Dvorak

<img src="/Tergo-Sofle-Documentation/img/layout_dvorak.png" alt="Exemplo" width="500" />

Antigo, criado em 1930 por Dvorak, mas já trazia melhorias em relação QWERTY, com a ideia de minimizar movimentos estranhos para combinações normalmente usadas de teclas.

#### Layout de teclas Colemak

<img src="/Tergo-Sofle-Documentation/img/layout_colemak.png" alt="Exemplo" width="500" />

Criado em 2006. Pega pontos positivos do Dvorak e do QWERTY, e otimiza posicionamento das teclas baseado na língua inglesa.

_Fonte e mais detalhes comparando no site: https://typingdonewell.com/blog/dvorak-vs-colemak-in-depth-comparison-with-my-own-tests/_

## Layout popular otimizado para poucas teclas: Miryoku

Um layout altamente popular na comunidade de teclados ergonômicos é o [Miryoku](https://github.com/manna-harbour/miryoku/tree/master/docs/reference#layers).

Ele foi pensado para usar pouquissimas teclas, utilizando altamente do sistema de camadas de teclas e teclas com duplo comportamento.

Ele aplica diversos conceitos:
- Utilização de um layout compacto, com poucas teclas
- Teclas com duplo comportamento que ao serem seguradas alteram funcionalidades do teclado
- Utilização das teclas do dedão para alteração das camadas
- Entre outros.

Caso queira ver cada camada individualmente para se inspirar e entender melhor, [clique aqui](https://github.com/manna-harbour/miryoku/tree/master/docs/reference#layers).

:::tip
Para entender a imagem abaixo, recomendo vê-las separadas [clicando aqui](https://github.com/manna-harbour/miryoku/tree/master/docs/reference#layers). Mas interpretá-la, repare nos textos que ficam na parte debaixo das **teclas do dedão**. O texto indica qual camada será ativada ao segurar a tecla. Assim, por exemplo, ao segurar a "Nav" (que tem cor azul claro), as funcionalidades das teclas mudarão para teclas de navegação (marcadas também na cor azul claro).
:::

<img src="/Tergo-Sofle-Documentation/img/miryoku.png" alt="Exemplo"  />

## Próximos passos

Considera-se que você já leu o manual do usuário, entendeu como digitar com  ergonomia e leu este manual.

Quando estiver ficando confiante com sua digitação ou caso queira entender melhor funcionalidades ainda mais avançadas, que podem inclusive contribuir para seu conforto, explore as funcionalidades presentes especialmente no modo adepto do seu teclado.

### Guias da comunidade

Deixamos abertos à nossa comunidade contribuir com guias e aprendizados! Você pode vê-los listados aqui.

Pode ser interessante na sua jornada ou resolver dúvidas que tenha no momento.

[Substituir uma sequência de teclas por outra tecla](./guias_da_comunidade/SUBSTITUIR_SEQUENCIA_DE_TECLAS_POR_OUTRA.md), por EGmux.
