# Tergo Sofle - Funcionalidades

Neste é um manual mais avançado onde você descobrirá mais a fundo funcionalidades do teclado Tergo Sofle.

Para uma visão geral das funcionalidades, consulte o [Manual do Usuário](../MANUAL_DO_USUARIO.md).

## Sumário
  * [Vial](#vial)
    + [O que encontro no Vial](#o-que-encontro-no-vial)
    + [Como aprender a usar o Vial](#como-aprender-a-usar-o-vial)
    + [Keycodes](#keycodes)
    + [Aba QMK Settings](#aba-qmk-settings)
  * [Detalhes avançados das telas OLED](#detalhes-avançados-das-telas-oled)
    + [Configurações do OLED](#configurações-do-oled)
  * [Sistema de Camadas de Teclas](#sistema-de-camadas-de-teclas)
    + [Visão geral](#visão-geral)
    + [Dica para entender as camadas](#dica-para-entender-as-camadas)
  * [Tap-Hold](#tap-hold)
    + [Tap-Hold para mudança de camadas](#tap-hold-para-mudança-de-camadas)
    + [Modificadores](#modificadores)
      - [Home Row Mod](#home-row-mod)
    + [Configurações do Tap Hold](#configurações-do-tap-hold)
      - [Tapping Term](#tapping-term)
      - [Comportamento do Tap Hold padrão do Tergo Sofle](#comportamento-do-tap-hold-padr-o-do-tergo-sofle)
      - [Tecnologia usada para diferenciar o comportamento](#tecnologia-usada-para-diferenciar-o-comportamento)

## Vial

Com o [Vial](https://get.vial.today/), você pode desfrutar do poder de diversas funcionalidades do seu teclado de forma rápida.

### O que encontro no Vial

O Vial te permite desfrutar da maioria das funcionalidades possibilitadas pelo _firmware_ do seu teclado, que é o QMK, no seu próprio navegador ou desktop, sem necessidade de saber programar.

### Como aprender a usar o Vial

Para você entender o potencial do Vial e como ele pode ser usado ao seu favor, recomendo que use como referência o [guia de modificações e funcionalidades que contribuem para ergonomia](./MODIFICACOES_E_FUNCIONALIDADES_QUE_CONTRIBUEM_PARA_ERGONOMIA.md), que te mostra como usar diversas funcionalidades encontradas no Vial para adaptar seu teclado para novas possibilidades.

Caso não encontre respostas para o que quer fazer no guia, você pode pesquisar pela documentação oficial do QMK.

Por exemplo, caso olhe para as teclas no submenu "layers" e não entenda o significado delas, você pode pesquisar por "QMK layers" e cair na [documentação oficial do QMK](https://docs.qmk.fm/feature_layers) sobre camadas.

Caso queira uma visão geral de como você pode atingir um objetivo seu, pode nos mandar mensagem que te guiaremos com dicas e caminhos!

### Keycodes

O firmware QMK oferece muitas teclas (ou keycodes) com nomes diferentes que você pode estranhar. [Aqui é a lista completa de keycodes suportados pelo QMK](https://github.com/qmk/qmk_firmware/blob/master/docs/keycodes.md). É importante destacar que nem todos o Vial oferece.

Um keycode relevante de ser entendido é o símbolo de um triângulo ao contrário que pode ser visto na maioria das camadas. Ele significa que a tecla é a mesma da camada inferior ativa.

### Aba QMK Settings

A aba QMK Settings permite modificar aspectos mais profundos de funcionalidades oferecidas pelo QMK.

Algumas relevantes são: 
- Tap-Hold e Tapping Term
- Variáveis de velocidade do simulador de mouse (Mouse keys);

Nem todas funcionalidades do QMK podem ser modificados diretamente na interface Vial. Alguns pontos mais profundos precisam de modificação no código.

## Sistema de Camadas de Teclas

### Visão geral

O sistema de camadas de teclas é uma das partes mais interessantes e importantes do teclado.

### Dica para entender as camadas

Acesse a camada de configurações e clique a tecla B. Por padrão, ao fazer isso, os textos da tela OLED do seu teclado relacionados a camada serão substituídos pelo número da camada. Isso pode te ajudar a entender em exatamente qual é a camada base do seu teclado e qual é a camada ativa mais alta.

## Tap-Hold

O Tap-Hold é uma das modificações mais incríveis que o teclado fornece.

A essência é simples: teclas com duplo comportamento. Ao apertar (tap) ela funciona como a própria tecla. Ao segurar, ela se comporta como outra.

Isso é notável e aplicado em 2 casos:

- Mudança de camadas
- Modificadores

Vejamos os casos

### Tap-Hold para mudança de camadas

Na camada 2 do Vial (Adept) você pode perceber que há uma tecla do dedão esquerdo com duplo comportamento: Espaço ou mudança de camada.

Ao clicar ela, o botão se comporta como Espaço. 

Ao segurar, ela muda a camada do teclado para a camada de simulador de mouse. 

Se você clicar duas vezes em um curto período de tempo e segurar, ele repetirá a tecla inicial várias vezes (nesse caso diversos espaços) que nem como se você segurasse a tecla normalmente para repetir o caractere.

### Modificadores

Esse comportamento também pode ser aplicado a modificadores, por exemplo. Ao clicar, se comporta como a tecla. Ao segurar, se comporta como um modificador. Pode ser Alt, Ctrl, Shift ou GUI.

O exemplo mais notável é o Home Row Mod presente no teclado no modo Adept.

#### Home Row Mod

Home Row Mod consiste de colocar os modificadores GUI, Alt, Ctrl e Shift na home row usando o comportamento Tap-Hold.

Ou seja, esses modificadores que são muito usados na digitação e para navegação (especialmente em desenvolvimento de software) ficam disponíveis no lugar onde os dedos ficam naturalmente: a home row.

Assim, você pode digitar normalmente e caso queira usar um modificador basta manter uma das teclas da home row pressionadas e clicar a tecla destino que deseja.

[Este guia sobre Home Row](https://precondition.github.io/home-row-mods#what-are-home-row-mods) explica essencialmente o que é e ajuda a entender melhor as motivações por trás do uso dessa funcionalidade.

### Configurações do Tap Hold

Este tópico pode soar mais complexo, mas é muito interessante de entender aos que tem interesse em compreender totalmente seu teclado.

#### Tapping Term

Essa é uma variável relacionada ao tempo necessário que você precisa manter a tecla pressinada para que ela seja interpretada como "tap" ou como "hold". Você pode experimentar aumentar o valor caso perceba que está ativando a função hold muitas vezes por acidente ou diminuir se sentir que ela demora para ser ativada. Isso depende do seu ritmo de digitação.

Você encontra ela e pode modificá-la no Vial, na aba QMK Settings > Tap-Hold do Vial. 

O tempo padrão que vem configurado é de 300ms.

Caso esteja usando teclas com comportamento Tap Hold, você pode ajustar essa variável para entender qual o tempo que fica mais agradável para você. Se você estiver ativando o comportamento de "Hold" sem querer muitas vezes, você pode aumentá-la. Caso sinta que demora para ativar quando quer que ative, você pode diminuí-la.

#### Comportamento do Tap Hold padrão do Tergo Sofle

Agora, um exemplo de como funciona por padrão no Tergo Sofle.

Imagine uma tecla com o duplo comportamento de retornar o caractere "f" ao clicar ou funciona como o modificador "Shift" ao segurar. Essa tecla específica existe, e está na camada "1", que é a camada base do modo adepto por padrão no seu Tergo Sofle.

Os comportamentos que ocorrem são:
- Se você clicar e soltar ela dentro do tapping term, ela retorna a letra "f";
- Se você manter ela pressionada por um tempo que passe o do tapping term, ela se comportará como se você estiver segurando o "Shift";
- Se você manter ela pressionada, pressionar outra tecla (por exemplo a tecla "h"), e soltar essa segunda tecla pressionada ("h") DENTRO do tempo do tapping term, você receberá como retorno o "H" maiúsculo.

Repare que esse último caso é especial.
Seu teclado ainda não tinha interpretado a tecla "f" como o modificador "Shift" pois o tempo que você estava segurando não passou o tapping term, mas ele entende pela sequência de ações que você queria o modificador "Shift".

Você pode testar o comportamento com mais facilidade, caso queira entender melhor, modificando o valor do tapping term para valores mais altos.

#### Tecnologia usada para diferenciar o comportamento

Existem diferentes tecnologias usadas para o comportamento do Tap-Hold. Você pode explorá-las na [documentação oficial](https://github.com/qmk/qmk_firmware/blob/master/docs/tap_hold.md).

O Tergo Sofle, para identificar se você quer o caractere ou o modificador, vem configurado com a tecnologia de Tap-Hold chamada [Permissive Hold](https://github.com/qmk/qmk_firmware/blob/master/docs/tap_hold.md#permissive-hold).

A peculiaridade dela é que é ela que permite o último caso dado como exemplo no tópico anterior.

## Detalhes avançados das telas OLED

### Configurações do OLED

Você pode modificar o conteúdo das telas OLED e outras variáveis modificando diretamente o firmware do teclado. Veja o [guia de como modificar o código-fonte](./COMO_MODIFICAR_CODIGO_FONTE.md.md) para isso.
