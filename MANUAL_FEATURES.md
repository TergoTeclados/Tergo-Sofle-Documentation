# Tergo Sofle - Funcionalidades

Neste manual você descobrirá mais a fundo funcionalidades do teclado Tergo Sofle.

Para uma visão geral das funcionalidades, consulte o [Manual do Usuário](/MANUAL_USER.md).

## Detalhes avançados das telas OLED

### Descanso automático

As telas apagam sozinhas depois de 1 minuto sem interações com o teclado. Ao interagir, voltam ao normal.

### Configurações do OLED

Você pode modificar o conteúdo das telas OLED e outras variáveis modificando diretamente o firmware do teclado. Veja o [Manual de Modificações](/MANUAL_MODIFICATION.md) para isso.

## Sistema de Camadas de Teclas

### Visão geral

O sistema de camadas de teclas é uma das partes mais interessantes e importantes do teclado.

### Visualizar e modificar camadas

Veja as camadas que vem pré-configuradas com seu teclado (e edite-as o quanto quiser) no [Vial](#vial).

### Modo Basic e modo Adept

Os modos Basic e Adept são basicamente extensões do sistema de camada de teclas. Alterar entre esses modos simplesmente altera qual é a camada base que fica ativa no teclado: camada 0 (Basic) ou 1 (Adept).

O modo Adept é uma extensão do modo Basic. Ele adiciona funcionalidades especiais úteis focadas para quem está digitando. Em especial o simulador de mouse e o [home row mod](#home-row-mod).

O modo Basic é recomendado especialmente caso você pretenda jogar ou não esteja ainda acostumado com a funcionalidade de [Tap-Hold](#tap-hold).

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

Ao clicar, se comporta como a tecla. Ao segurar, se comporta como um modificador. Pode ser Alt, Ctrl, Shift ou GUI.

O exemplo mais notável é o Home Row Mod presente no teclado no modo Adept.

#### Home Row Mod

Home Row Mod consiste de colocar os modificadores GUI, Alt, Ctrl e Shift na home row usando o comportamento Tap-Hold.

Ou seja, esses modificadores que são muito usados na digitação e para navegação (especialmente em desenvolvimento de software) ficam disponíveis no lugar onde os dedos ficam naturalmente: a home row.

Assim, você pode digitar normalmente e caso queira usar um modificador basta manter uma das teclas da home row pressionadas e clicar a tecla destino que deseja.

[Este guia sobre Home Row](https://precondition.github.io/home-row-mods#what-are-home-row-mods) explica essencialmente o que é e ajuda a entender melhor as motivações por trás do uso dessa funcionalidade.

### Configurações do Tap Hold

Este tópico pode ser mais complexo, mas muito interessante de entender aos que tem interesse em compreender totalmente seu teclado.

Existem diferentes tecnologias usadas para o coportamento do Tap-Hold. Você pode entender elas melhor na [documentação oficial](https://github.com/qmk/qmk_firmware/blob/master/docs/tap_hold.md).

O Tergo Sofle, para identificar se você quer o caractere ou o modificador, vem configurado com a tecnologia de Tap-Hold chamada [Permissive Hold](https://github.com/qmk/qmk_firmware/blob/master/docs/tap_hold.md#permissive-hold). O resumo sobre como funciona essa técnologia para detectar o comportamento que você deseja é (traduzido da documentação): 

_"Se você pressionar uma tecla de função dupla, tocar em outra tecla (pressionar e soltar) e depois soltar a tecla de função dupla, tudo dentro do Tapping Term, por padrão a tecla de função dupla executará sua ação de toque. Se a opção PERMISSIVE_HOLD estiver habilitada, a chave de função dupla executará sua ação de retenção."_

#### Tapping Term

Essa é uma variável relacionada ao tempo necessário que você precisa manter a tecla pressinada para que ela seja interpretada como "tap" ou como "hold". Você pode experimentar aumentar o valor caso perceba que está ativando a função hold muitas vezes por acidente ou diminuir se sentir que ela demora para ser ativada. Isso depende do seu ritmo de digitação.

Você encontra ela no Vial, na aba QMK Settings > Tap-Hold do Vial.

## Vial

Com o [Vial](https://get.vial.today/), você pode ver o mapeamento de cada tecla e modificar o que cada uma faz, configurar o RGB, configurar variáveis específicas de funcionalidades do firmware QMK, entre outros. Aqui mostrarei alguns dos mais relevantes.

### Keycodes

O firmware QMK oferece muitos keycodes diferentes que você pode estranhar. [Aqui é a lista completa de keycodes suportados pelo QMK](https://github.com/qmk/qmk_firmware/blob/master/docs/keycodes.md). É importante destacar que nem todos o Vial oferece.

Um keycode relevante de ser entendido é o símbolo de um triângulo ao contrário que pode ser visto na maioria das camadas. Ele significa que a tecla é a mesma da camada inferior ativa.

### Aba QMK Settings

A aba QMK Settings permite modificar aspectos mais profundos de funcionalidades oferecidas pelo QMK.

Algumas relevantes são: 
- Tap-Hold e Tapping Term
- Variáveis de velocidade do simulador de mouse (Mouse keys);

Nem todas funcionalidades do QMK podem ser modificados diretamente na interface Vial. Alguns pontos mais profundos precisam de modificação no código.
