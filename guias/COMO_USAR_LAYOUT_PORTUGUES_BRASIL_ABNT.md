# Como usar layout em Português (Brasil) ABNT

## Resumo

Este guia vai te ensinar a como utilizar o layout de teclas do seu teclado no padrão Português (Brasil) ABNT, ou seja, com teclas como "Ç" e outros acentos na camada base.

## Introdução

Por padrão, o Tergo Sofle vem com o layout internacional. Ou seja, teclas como o "Ç" são feitas com atalhos, sem muitas dificuldades. Caso não esteja acostumado, você pode espiar [esse vídeo](https://youtu.be/r9vUzQyXdps?t=40) para entender melhor como utilizar acentos e outros símbolos.

Mude o layout do seu teclado no seu sistema operacional para "Estados Unidos (Internacional)", que é o padrão do teclado. 

Agora seu teclado deve estar pronto para digitação.

Porém, se você está mais acostumado com o padrão brasileiro e preferir ele, você pode alterar pela interface visual do Vial.

## Alterar layout para português Brasil ABNT

Para fazer isso, você precisa primeiro entender como abrir o software de configuração Vial, explicado no [Manual do Usuário](../MANUAL_DO_USUARIO.md).

1 -  Baixe o layout brasileiro presente [nesta página](https://github.com/TergoTeclados/vial-qmk-firmware/releases/tag/Tergo-Sofle-v1.2). Basta clicar no arquivo para baixá-lo.

#### Exemplo de arquivo

<img src="../imagens/botao_do_arquivo_vil.png" alt="Exemplo" width="">

2 - Baixe o aplicativo do Vial para seu dispositivo [nesta página](https://get.vial.today/download/). Somente a versão baixada do Vial (e não a de navegador) te permite realizar uma operação que será feita mais a frente.

3 - Abra o aplicativo do Vial com seu teclado conectado e selecione seu teclado.

4 - Vá para o menu "File" e clique em "Load saved layout", e carregue seu arquivo recém baixado com o layout brasileiro (o arquivo comentado anteriomente que possui final `.vil`). 

_Carregar este arquivo não é obrigatório para seu teclado funcionar, mas ele adapta o layout de teclas e o deixa otimizado para português._

5- Após carregá-lo, vá para o submenu "Keyboard layout" e selecione "Brazilian". Porém, não basta só seu teclado estar em português no Vial, mas também precisa estar no seu sistema operacional (que é o próximo passo).

6 - Garanta que o layout de teclado do seu sistema operacional seja "Português (Brasil ABNT)". [Clicando aqui](https://support.microsoft.com/pt-br/windows/gerenciar-as-configura%C3%A7%C3%B5es-de-idioma-de-entrada-e-exibi%C3%A7%C3%A3o-no-windows-12a10cb4-8626-9b77-0ccb-5013e0c7c7a2#WindowsVersion=Windows_11) você vê como fazer isso no Windows 11, mas varia dependendo do seu sistema operacional.

Está pronto! Experimente digitar e se guie pela interface do Vial para entender claramente o que cada tecla faz.

### Por que botar em português duas vezes: uma no Vial e outra no sistema operacional?

Os teclados traduzem a tecla que você apertou em um código e o enviam para o computador.

O computador recebe uma mensagem do teclado e traduz baseado na linguagem do teclado configurado no sistema operacional.

O que acontece é que normalmente teclados não permitem que você mude a linguagem dele, e sim apenas configurar no sistema operacional.

No nosso caso, podemos configurar ambos.

O que fazemos então é garantir que ambos teclado e sistema operacional estão se comunicando na mesma linguagem.
