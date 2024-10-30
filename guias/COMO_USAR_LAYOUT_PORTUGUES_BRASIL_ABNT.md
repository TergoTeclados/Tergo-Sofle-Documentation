# Como usar layout em Português (Brasil) ABNT

## Resumo

Este guia vai te ensinar a como utilizar o layout de teclas do seu teclado no padrão Português (Brasil) ABNT, ou seja, com teclas como "Ç" e outros acentos na camada base.

## Alterar layout para português Brasil ABNT

### Exemplo layout ABNT

Nós fornecemos também um layout no padrão ABNT para quem está mais familiarizado. As teclas em vermelho são as que mudam em relação ao layout internacional.

<img src="../imagens/base_abnt.svg" alt="Exemplo" width="800">

### Como mudar para o padrão ABNT

**Atenção: se resume a realizar 2 configurações: uma no teclado, outra no computador.**

Para fazer isso, você precisa primeiro entender como abrir o software de configuração Vial, explicado no [Manual do Usuário](../MANUAL_DO_USUARIO.md), e então seguir o passo a passo aqui descrito.

1 -  Baixe o layout brasileiro presente [nesta página](https://github.com/TergoTeclados/vial-qmk-firmware/releases/tag/Tergo-Sofle-v1.2). Basta clicar no arquivo para baixá-lo. 

_Exemplo de nome de arquivo que você encontrará: `layout_brasileiro_v1_03.vil`_

2 - **Baixe** o aplicativo do Vial para seu dispositivo [nesta página](https://get.vial.today/download/). 

_Somente a versão baixada do Vial (e não a de navegador) te permite realizar uma operação que será feita mais a frente, de carregar o layout._

3 - Abra o aplicativo do Vial com seu teclado conectado e selecione seu teclado.

4 - Vá para o menu "File" e clique em "Load saved layout", e carregue seu arquivo recém baixado com o layout brasileiro (o arquivo comentado anteriomente que possui final `.vil`). 

5- **Importante!** Após carregá-lo, vá para o submenu "Keyboard layout" e selecione "Brazilian". Porém, não basta só seu teclado estar em português no Vial, mas também precisa estar no seu sistema operacional (que é o próximo passo).

6 - Garanta que o layout de teclado do seu sistema operacional seja "Português (Brasil ABNT)". No Windows, caso você tenha mais que um layout de teclado, você provavelmente verá o seguinte:

<img src="../imagens/teclados_no_windows.png" alt="Exemplo" width="500">

Está pronto! Experimente digitar e se guie pela interface do Vial para entender claramente o que cada tecla faz.

### Por que botar em português duas vezes: uma no Vial e outra no sistema operacional?

Os teclados traduzem a tecla que você apertou em um código e o enviam para o computador.

O computador recebe uma mensagem do teclado e traduz baseado na linguagem do teclado configurado no sistema operacional.

O que acontece é que normalmente teclados não permitem que você mude a linguagem dele, e sim apenas configurar no sistema operacional.

No nosso caso, podemos configurar ambos.

O que fazemos então é garantir que ambos teclado e sistema operacional estão se comunicando na mesma linguagem.
