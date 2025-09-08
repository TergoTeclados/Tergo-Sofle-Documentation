# Customizar arte na tela OLED

Aqui te ensinaremos a customizar a arte ou animação que fica na tela OLED da versão com fio do teclado Tergo Sofle.

## Como funciona o código original

A função `render_logo` contém a lógica para renderizar a animação.

A cada intervalo de tempo, determinado pela variável `TIME_BETWEEN_LOOPING_ANIMATION`, a animação é executada na tela.

Quando é a hora de executar a animação, o código percorre cada frame da animação e renderiza eles na tela, um por vez.

## Como modificar a arte

Vamos te ensinar a modificar a arte atual existente para colocar algo que você quiser.

Você pode ter uma arte estática ou uma animação se preferir.

### Crie a arte

#### Softwares

Sugerimos o [pixilart](https://www.pixilart.com/draw) para esboçar uma arte de forma simples e rápida no navegador ou o [asesprite](https://www.aseprite.org/) para ter uma experiência mais completa para criar animações.

Crie um novo projeto com a resolução de 32 x 128 pixeis.

:::tip

- Prefira por artes com fundo preto e traços brancos. É o que fica mais bonito na tela.
- A arte não precisa necessariamente ter a resolução de 32 x 128, por mais que seja sugerido para garantir um resultado final bonito como esperado. No próximo passo você poderá ver como que o software de conversão deixará ela.

:::

### Converta a arte

Utilizaremos o [image2cpp](https://javl.github.io/image2cpp/) para converter a imagem para código:
- Selecione a imagem no site
- Na seção 2, em background color, selecione "Black"
- Realize mais ajustes necessário na seção 2 para que a imagem na seção 3 fique com o resultado esperado
- Na seção 4, mude Code output format para "Plain bytes" e Draw mode para "Vertical"
- Clique em Generate code

Assim, você obterá um código final que contém dados da imagem convertidos.

### Inserindo a arte no código

#### Arte estática

Vamos primeiro aprender a ter uma única imagem estática ao invés de uma animação.

- No arquivo `oled.c`, comente ou apague a linha `#define TERGO_ENABLE_ANIMATION` para desabilitar a funcionalidade de animação;
- No arquivo `moon_tergo.c`, cole o conteúdo da arte convertida no primeiro elemento da variável `moon_tergo`, onde há a linha comentada `// 'Stars1', 32x128px`;
- Salve e compile o código.

Assim, o firmware carregará apenas a primeira arte da variável que contém as artes.

#### Animação

Nesse caso:

- Altere a variável `TERGO_ANIMATION_NUM_OF_FRAMES` no arquivo `moon_tergo.h` para o número de frames da sua animação;
- Ajuste o array `moon_tergo` no arquivo `moon_tergo.c` para que tenha a exata quantidade de frames da sua animação, apagando ou adicionando itens nele para suprir a necessidade;
- Assim como para a arte estática, converta cada frame da sua animação para código e cole na sua respectiva posição dentro da variável `moon_tergo`;
- Ajuste a variável `TIME_BETWEEN_LOOPING_ANIMATION` para especificar um intervalo entre os loops da animação;
- Salve e compile o código.

:::tip

O primeiro frame é o que permanecerá na tela até ocorrer o próximo loop da animação.

:::

## Extras

- [Esse vídeo](https://youtu.be/OJSOEStpPIo?t=183) mostra de forma semelhante o que foi explicado neste guia.
