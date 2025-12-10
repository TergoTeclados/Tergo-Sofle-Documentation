# Atualizar Firmware - Versão Wireless

A Tergo Teclados pretende continuar realizando melhorias no _firmware_ do teclado. Para atualizá-lo é fácil, basta seguir as instruções aqui presentes.

## Vídeo sobre o processo

Fizemos um vídeo que resume parte do passo a passo abaixo que pode ajudar você.

Ele explica um dos processos de gravação, que grava completamente todas as partes do teclado.

Entretanto, dependendo do seu objetivo, o processo pode ser mais simples que isso. Porém, o descrito no vídeo funcionará para todos.

Assim, recomendamos a leitura desse guia conforme necessário por possuir maior nível de detalhamento e ser mais atualizado.

Vídeo abaixo:

:::tip O vídeo pode estar um pouco desatualizado

Fique atento também aos textos deste guia que são mais atualizados.

:::

<a href="https://youtu.be/1R6661NIb30" target="_blank">
<img src="/Tergo-Sofle-Documentation/img/youtube-icon.png" alt="Exemplo" width="100" />
</a>

[Veja no Youtube](https://youtu.be/1R6661NIb30)

## Para que atualizar o firwmare?

Alguns motivos do porquê você pode querer atualizar o firmware:

- Trocar entre a versão ABNT2 ou Internacional
- Instalar uma atualização nova do firmware fornecida pela Tergo Teclados
- Colocar sua versão customizada do firmware
- Usar um novo receptor para o teclado

## Onde baixar o firmware

:::warning Atenção para baixar o arquivo correto para seu receptor

Há 2 critérios a ter atenção ao baixar o arquivo para seu receptor, pois há 4 versões diferentes:
- Linguagem desejada: **ABNT2** ou **ANSI**
- Versão ta tela utilizada: **displayV1** ou **displayV2**

Baixe o arquivo que o nome equivale ao seu.

:::

:::tip Qual versão da tela é a minha?

Para isso, basta verificar quando adquiriu o teclado ou o número do seu pedido.

- Se foi **antes de 04/12/2025** (ou pedido **7261**), você tem o **displayV1**
- Se foi **depois de 04/12/2025** (ou pedido **7261**), você tem o **displayV2**

Obs.: Ambas versões de telas são fisicamente iguais, mas usam tecnologias diferentes, por isso a diferença. Caso não tenha telas, qualquer uma delas pode ser utilizada.

:::

Sempre que houver um lançamento de uma nova versão do firwmare, ela será publicada no [repositório do Firmware](https://github.com/TergoTeclados/zmk-config-tergo-sofle/releases) e cada usuário notificado.

Basta clicar em cada arquivo do tipo `.uf2` para baixar cada um.

## Colocar firmware no teclado

O processo de gravação do _firmware_ no teclado consiste em:
- Colocar a parte do teclado em modo de gravação
- Copiar e colar o arquivo de `reset-firmware` para a parte
- Colocar novamente a parte em modo de gravação
- Então copiar e colar o arquivo especifico do firmware para essa parte
- Repetir o processo conforme necessário para cada parte: receptor, metade esquerda e metade direita

:::note
Atualizar o _firmware_ pode acabar removendo as customizações que você realizou no teclado pelo ZMK Studio.

Por padrão, para resetar essas customizações isso é feito diretamente no painel do ZMK Studio.
:::

## Há 2 formas de colocar o teclado em modo de gravação

Você precisará colocar o teclado em modo de gravação para colocar o firmware.

Há 2 maneiras:
- Por meio de interações com componentes do seu teclado;
- Ou por meio de clicar uma combinação de atalhos no teclado.

A segunda é mais simples, mas apenas funcionará caso seu teclado esteja funcionando normalmente, como por exemplo:
- Instalar atualização no seu teclado que adicionou funcionalidades novas.

A primeira maneira funcionará para todos os casos. Por exemplo:
- Seu teclado parou de funcionar e precisa regravar o firmware;
- Você está trocando o receptor do seu teclado por um novo e precisa reconfigurá-lo.

Mais abaixo nesse guia te mostraremos isso.

## Como gravar o firmware

Primeiramente, desligue as metades do seu teclado.

Então, o processo é o seguinte:

1 - Copie o arquivo que será gravado no receptor: Primeiramente será o de reset, e, em uma segunda gravação, o do receptor.

:::warning

Antes de gravar o _firwmare_ do teclado em sua respectiva parte, pode ser necessário gravar primeiro o firmware de reset.

Ou seja, a sequência para gravar o firmware acabará sendo:

`Colocar em modo de gravação -> Colocar o firmware de reset -> Colocar novamente em modo de gravação -> Colocar firmware da parte do teclado`

Alguns casos em que você não vai precisar gravar o firmware de reset é caso esteja instalando uma customização que requer gravar apenas o firmware no receptor, como:
- Customizações que você mesmo fez no firmware;
- Atualizações no firwmare que a Tergo Teclados deixou explícito que basta atualizar o receptor.
:::

2 - Com a parte do teclado a ser gravada conectada no computador, ative o modo de gravação dela.

:::tip

Isso é mostrado mais abaixo, em:

[Como ativar modo de gravação (forma física)](#ativar-modo-de-gravação-de-cada-parte-fisicamente).

Ou em [como ativar modo de gravação por meio de atalhos no teclado.](#gravar-o-firmware-no-receptor---método-por-atalhos-no-teclado).
:::

3 - Uma pasta chamada `NICENANO` se abrirá no seu sistema operacional. Caso não abra automaticamente na sua tela, você pode procurar no menu de dispositivos:

![Exemplo](/img/exemplo_modo_boot_wireless.png)

4 - Cole o arquivo copiado na pasta que abriu.

Após isso, a pasta sumirá automaticamente e seu dispositivo estará utilizando a nova versão do _firmware_.

:::note

Em alguns dispositivos, pode ser que, ao colocar o arquivo na pasta, a pasta suma antes mesmo do sistema avisar que o arquivo foi transferido com sucesso, e assim aparecer na sua tela um erro de falha na transferência.

Isso é algo comum e que pode ser ignorado. Normalmente, o firmware foi gravado com sucesso e o que acontece é apenas uma falha de comunicação entre o sistema operacional e a placa do seu teclado, que fecha com o novo firwmare antes de avisar seu computador.

Se tiver algum outro problema tente [ver a documentação oficial do ZMK](https://zmk.dev/docs/troubleshooting/flashing-issues) ou nos notifique.
:::

:::note
Sempre que você colocar o teclado em modo de gravação e abrir a pasta NICENANO, você não verá nela o arquivo do firmware que você colocou nela.

Isso é normal, pois na verdade o seu teclado "consome" o arquivo do firmware.
:::

5 - Repita o processo após gravar o firmware de reset para gravar o firmware da parte do teclado.

6 - Faça os mesmos passos para cada parte do teclado: receptor, metade esquerda e metade direita.

:::warning

Caso o teclado pare de responder a comandos após atualização, recomenda-se desligar e ligar todas as partes do teclado novamente.

Desconecte e conecte novamente o receptor ao seu computador. Caso o teclado ainda não responda, desligue e ligue novamente as metades do teclado.

Caso ainda assim, após tentar reiniciar todas as partes, o teclado não responda, repita todo o processo.
:::

## Ativar modo de gravação de cada parte fisicamente

Para cada parte do teclado você precisará ativar o modo de gravação dela para gravar o firmware nela.

Há uma técnica para ativar o modo de gravação por meio de atalhos no teclado, mostrada [mais abaixo](#gravar-o-firmware-no-receptor---método-por-atalhos-no-teclado). Entretanto, ela é recomendada apenas para quem fez customizações no firmware e está atualizando apenas o receptor.

### Ativar modo de gravação das partes do teclado

**Para o receptor**

Ao olhar para o seu receptor, você notará que ele possui um pequeno buraco na parte debaixo.

- Pegue um objeto metálico fino que possa ser inserido no buraco, como um _clipe_, uma pinça metálica, ou um pininho metálico

:::tip
Nós enviamos um _clipe_ com o teclado.
:::

- Com o receptor conectado ao computador por cabo, toque brevemente 2 vezes na parte metálica vista nesse furo (normalmente dourada) com o objeto metálico

:::note

Às vezes 1 único toque, curto ou longo, basta para entrar em modo de gravação.

Espere um breve intervalo para ver se a pasta abrirá.

É normal que você não consiga de primeira, então tente novamente.
:::

Caso você tenha feito isso com sucesso, deverá abrir a pasta de gravação do seu dispositivo no seu sistema operacional.

Grave o firwmare de reset, e então o firmware da partes específica do teclado.

**Para as metades do teclado**

Você precisará de acesso ao botão que está na placa eletrônica do seu teclado.

Para isso, você deverá abrir o protetor da placa controladora, que é a peça da parte de cima do teclado presa por 2 parafusos.

:::tip
Use a chave philips que acompanha seu teclado para abrir os parafusos.

Remover apenas o parafuso que fica mais perto das teclas já te permite mover o protetor para o lado e ter acesso ao botão.
:::

Assim, você encontrará um pequeno botão abaixo da chave de ligar/desligar.

Então, com a metade do teclado conectada ao seu computador por meio de cabo, pressione 2 vezes rapidamente o botão para o dispositivo entrar no modo de gravação.

Grave o firwmare de reset, e então o firmware da parte específica do teclado.

:::tip

Use a parte de trás da chave (parte plástica) para pressionar o botão com facilidade.
:::

:::note

Às vezes 1 único clique, curto ou longo, basta para entrar em modo de gravação.

Espere um breve intervalo para ver se a pasta abrirá.

É normal que você não consiga de primeira, então tente novamente.
:::

### Gravar o firmware no receptor - método por atalhos no teclado

Muitas vezes customizações ou atualizações requerem apenas atualizar o firmware do receptor.

Esse método de mostra como fazer isso por meio de atalhos no teclado.

O processo é o seguinte:

1 - Copie o arquivo que será gravado no receptor

:::note

Se for necessário aplicar o firmware de reset, ele será gravado primeiro, e depois o processo repetido com o firmware correto.
:::

2 - Com o receptor do teclado conectado ao seu computador e o teclado em pleno funcionamento, coloque o receptor em modo de gravação clicando ao mesmo tempo as 4 teclas abaixo no seu teclado:

![Exemplo](/img/ativar-bootloader-receptor.svg)

3 - Uma pasta chamada `NICENANO` se abrirá no seu sistema operacional. Caso não abra automaticamente na sua tela, você pode procurar no menu de dispositivos:

![Exemplo](/img/exemplo_modo_boot_wireless.png)

4 - Cole o arquivo copiado na pasta que abriu

Após isso, a pasta sumirá automaticamente e seu dispositivo estará utilizando a nova versão do _firmware_.

5 - Teste se o teclado funciona

:::warning

Caso o teclado pare de responder a comandos após atualização, recomenda-se desligar e ligar todas as partes do teclado novamente.

Desconecte e conecte novamente o receptor ao seu computador. Caso o teclado ainda não responda, desligue e ligue novamente as metades do teclado.

Caso ainda assim, após tentar reiniciar todas as partes, o teclado não responda, você provavelmente terá que aplicar o firmware de reset e gravar o firmware pelo método mais abaixo nesse guia: [como ativar o modo de gravação fisicamente](#ativar-modo-de-gravação-de-cada-parte-fisicamente).
:::

### Gravar as metades do teclado

:::note

Caso você esteja realizando customizações no código-fonte do teclado por conta própria que alterem apenas o arquivo `sofle.keymap`, você geralmente só irá precisar atualizar o _firmware_ do receptor, pois é ele que gere a maioria das funcionalidades.
:::

Agora, para cada metade do teclado, você gravará a versão mais recente do _firmware_.

Repita os passos abaixo para cada metade:

5 - Copie o arquivo do _firmware_ corresponde à metade do teclado que será atualizada (esquerda e então direita)

:::warning

Grave primeiro a metade esquerda, pois facilita possíveis resoluções de problemas.
:::

6 - Com o teclado em funcionamento, conecte um cabo USB extra do seu computador à metade do teclado que será atualizada

7 - Coloque a metade do teclado em modo de gravação. Para isso, segure a tecla de acesso a camada de ajustes (marcada em vermelho na imagem abaixo) e pressione a tecla que ativa o modo de gravação da metade desejada: `Boot Left` caso você vá gravar a metade esquerda do teclado ou `Boot Right` caso seja a direita.

Ambas teclas estão localizadas respectivamente no canto inferior esquerdo e canto inferior direito, conforme imagem abaixo:

![Exemplo](/img/camada-ajustes-wireless.svg)

8 - Repita os passos (3) e (4), que é localizar a pasta que abriu e colar o arquivo do _firmware_ nela.

Repita para as metades do teclado.

:::tip

Caso você tenha alterado a camada de ajustes e/ou a localização da tecla `Bootloader` (que é a tecla que ativa o modo de gravação), você pode acessar o software ZMK Studio e alocar a tecla `Bootloader` temporariamente na metade do teclado que você pretende colocar no modo de gravação.
:::

## Solução de problemas - teclado não responde após gravação

Caso seu teclado tenha parado de responder após atualizar alguma parte e você já tentou reiniciar individualmente cada parte, é provável que tenha acontecido algum dos itens abaixo:

- A atualização aplicada é disruptiva e ela requer a gravação prévia do _firmware_ de _reset_ ou ativação do modo de gravação fisicamente
- Você gravou o firmware de _reset_ na parte do teclado que parou de funcionar e ainda não gravou o firmware da parte após isso
- Você usou uma versão customizada por você do _firmware_ que contém algum erro

Para solucionar o problema, refaça o processo de gravação do firwmare fisicamente.
