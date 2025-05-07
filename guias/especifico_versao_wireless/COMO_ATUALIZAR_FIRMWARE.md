# Manual de Atualização do Firmware - Versão Wireless

A Tergo Teclados pretende continuar realizando melhorias no _firmware_ do teclado. Para atualizá-lo é fácil, basta seguir as instruções aqui presentes.

> [!TIP]
>
> Veja o sumário de cada guia clicando no ícone de lista na parte superior direita da página - <img src="../../imagens/icone-sumario.png" alt="Exemplo" width="20">

## Para que atualizar o firwmare?

Alguns motivos do porquê você pode querer atualizar o firmware:

- Trocar entre a versão ABNT2 ou Internacional
- Instalar uma atualização nova do firmware fornecida pela Tergo Teclados
- Colocar sua versão customizada do firmware
- Usar um novo receptor para o teclado

## Baixar firmware atualizado

Sempre que houver um lançamento de uma nova versão do firwmare, ela será publicada no [repositório do Firmware](https://github.com/TergoTeclados/zmk-config-tergo-sofle/releases) e cada usuário notificado.

Baixe a versão mais recente do firwmare para garantir que você está em dia com as atualizações.

Basta clicar em cada arquivo do tipo `.uf2` para baixar cada um.

> [!IMPORTANT]
> Baixe o arquivo para o receptor com o padrão de linguagem desejado: internacional ou ABNT2.
>
> Escolha apenas um deles para gravar no seu receptor.

## Colocar firmware no teclado

O processo de gravação do _firmware_ no teclado consiste em colocar em modo de gravação e copiar e colar o arquivo do firmware do teclado em cada parte do teclado que precisa ser atualizada.

> [!NOTE]
>
> Atualizar o _firmware_ não irá remover as customizações que você realizou no teclado pelo ZMK Studio. Isso é feito diretamente no painel do ZMK Studio.

## Firmware de reset: o que é e quando usar

É importante ficar atento a quando você deve utilizar o firmware de reset.

Você precisa utilizá-lo em alguns casos como:
- Você tentou instalar a atualização sem aplicar o firmware de reset e o teclado não funcionou
- Se você estiver fazendo essa operação para configurar um novo receptor diferente do que você usava
- Alguma customização no firmware que você mesmo fez e que é disruptiva

Ele pode ser aplicado a cada parte do teclado antes de gravar o firmware daquela parte.

Ou seja, você pode:
- Colocar a parte do teclado em modo de gravação
- Colocar o firmware de reset
- Após gravado, colocar em modo de gravação novamente
- Colocar firmware da parte do teclado (receptor, esquerda ou direita)

### Gravar o firmware no receptor - método por atalhos no teclado

Muitas vezes customizações ou atualizações requerem apenas atualizar o firmware do receptor.

O processo é o seguinte:

1 - Copie o arquivo que será gravado no receptor

> [!NOTE]
>
> Se for necessário aplicar o firmware de reset, ele será gravado primeiro, e depois o processo repetido com o firmware correto.

2 - Com o receptor do teclado conectado ao seu computador e o teclado em pleno funcionamento, coloque o receptor em modo de gravação clicando ao mesmo tempo as 4 teclas abaixo no seu teclado:

<img src="../../imagens/ativar-bootloader-receptor.svg" alt="Exemplo" width="800">

3 - Uma pasta chamada `NICENANO` se abrirá no seu sistema operacional. Caso não abra automaticamente na sua tela, você pode procurar no menu de dispositivos:

<img src="../../imagens/exemplo_modo_boot_wireless.png" alt="Exemplo" width="800">

4 - Cole o arquivo copiado na pasta que abriu

Após isso, a pasta sumirá automaticamente e seu dispositivo estará utilizando a nova versão do _firmware_.

5 - Teste se o teclado funciona

> [!IMPORTANT]
>
> Caso o teclado pare de responder a comandos após atualização, recomenda-se desligar e ligar todas as partes do teclado novamente.
>
> Desconecte e conecte novamente o receptor ao seu computador. Caso o teclado ainda não responda, desligue e ligue novamente as metades do teclado.
>
> Caso ainda assim, após tentar reiniciar todas as partes, o teclado não responda, você provavelmente terá que aplicar o firmware de reset e gravar o firmware pelo método mais abaixo nesse guia: [como ativar o modo de gravação fisicamente](#ativar-modo-de-gravação-de-cada-parte-fisicamente).

### Gravar as metades do teclado

> [!NOTE]
>
> Caso você esteja realizando customizações no código-fonte do teclado por conta própria que alterem apenas o arquivo `sofle.keymap`, você geralmente só irá precisar atualizar o _firmware_ do receptor, pois é ele que gere a maioria das funcionalidades.

Agora, para cada metade do teclado, você gravará a versão mais recente do _firmware_.

Repita os passos abaixo para cada metade:

5 - Copie o arquivo do _firmware_ corresponde à metade do teclado que será atualizada (esquerda e então direita)

> [!IMPORTANT]
>
> Grave primeiro a metade esquerda, pois facilita possíveis resoluções de problemas.

6 - Com o teclado em funcionamento, conecte um cabo USB extra do seu computador à metade do teclado que será atualizada

7 - Coloque a metade do teclado em modo de gravação. Para isso, segure a tecla de acesso a camada de ajustes (marcada em vermelho na imagem abaixo) e pressione a tecla que ativa o modo de gravação da metade desejada: `Boot Left` caso você vá gravar a metade esquerda do teclado ou `Boot Right` caso seja a direita.

Ambas teclas estão localizadas respectivamente no canto inferior esquerdo e canto inferior direito, conforme imagem abaixo:

<img src="../../imagens/camada-ajustes-wireless.svg" alt="Exemplo" width="800">

8 - Repita os passos (3) e (4), que é localizar a pasta que abriu e colar o arquivo do _firmware_ nela.

Repita para as metades do teclado.

> [!TIP]
>
> Caso você tenha alterado a camada de ajustes e/ou a localização da tecla `Bootloader` (que é a tecla que ativa o modo de gravação), você pode acessar o software ZMK Studio e alocar a tecla `Bootloader` temporariamente na metade do teclado que você pretende colocar no modo de gravação.

## Solução de problemas - teclado não responde após gravação

Caso seu teclado tenha parado de responder após atualizar alguma parte e você já tentou reiniciar individualmente cada parte, é provável que tenha acontecido algum dos itens abaixo:

- A atualização aplicada é disruptiva e ela requer a gravação prévia do _firmware_ de _reset_ ou ativação do modo de gravação fisicamente
- Você gravou o firmware de _reset_ na parte do teclado que parou de funcionar e ainda não gravou o firmware da parte após isso
- Você usou uma versão customizada por você do _firmware_ que contém algum erro

Para solucionar o problema, vamos ativar o modo de gravação de cada parte do teclado **fisicamente**.

## Ativar modo de gravação de cada parte fisicamente

Ao invés de ativar o modo de gravação das partes por meio de atalhos no teclado, você pode querer ativar de forma física.

Isso é bem comum para casos, por exemplo, onde a atualização faz com que o teclado pare de responder e em casos que precisa gravar o firmware de reset.

Para isso, siga os passos abaixo:

### Ativar modo de gravação do receptor por meio do hardware

**Para o receptor**

Ao olhar para o seu receptor, você notará que ele possui um pequeno buraco na parte debaixo. 

- Pegue um objeto metálico fino que possa ser inserido no buraco, como um _clipe_, uma pinça metálica, ou um pininho metálico

> [!TIP]
>
> Nós enviamos um _clipe_ com o teclado.

- Com o receptor conectado ao computador, toque brevemente 2 vezes na parte metálica vista nesse furo (normalmente dourada) com o objeto metálico

> [!NOTE]
>
> Às vezes 1 único toque, curto ou longo, basta para entrar em modo de gravação.
>
> Espere um breve intervalo para ver se a pasta abrirá.
>
> É normal que você não consiga de primeira, então tente novamente.

Caso você tenha feito isso com sucesso, deverá abrir a pasta de gravação do seu dispositivo no seu sistema operacional, como visto nos tópicos anteriores.

Grave o firwmare de reset, e então o firmware da partes específica do teclado.

**Para as metades do teclado**

Você precisará de acesso ao botão que está na placa eletrônica do seu teclado.

Para isso, você deverá abrir o protetor da placa controladora, que é a peça da parte de cima do teclado presa por 2 parafusos.

> [!TIP]
> Use a chave philips que acompanha seu teclado para abrir os parafusos.
>
> Remover apenas o parafuso que fica mais perto das teclas já te permite mover o protetor para o lado e ter acesso ao botão.

Assim, você encontrará um pequeno botão abaixo da chave de ligar/desligar.

Então, com a metade do teclado conectada ao seu computador por meio de cabo, pressione 2 vezes rapidamente o botão para o dispositivo entrar no modo de gravação.

Grave o firwmare de reset, e então o firmware da parte específica do teclado.

> [!TIP]
>
> Use a parte de trás da chave (parte plástica) para pressionar o botão com facilidade.

> [!NOTE]
>
> Às vezes 1 único clique, curto ou longo, basta para entrar em modo de gravação.
>
> Espere um breve intervalo para ver se a pasta abrirá.
>
> É normal que você não consiga de primeira, então tente novamente.
