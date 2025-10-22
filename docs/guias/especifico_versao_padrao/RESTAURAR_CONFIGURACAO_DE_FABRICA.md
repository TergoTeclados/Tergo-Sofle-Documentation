# Restaurar Configuração de Fábrica - Versão com fio

Este guia explica como restaurar seu teclado Tergo Sofle para as configurações de fábrica, removendo todas as customizações que foram feitas através do Vial.

## Para que restaurar a configuração de fábrica?

Alguns motivos do porquê você pode querer restaurar a configuração de fábrica:

- Remover customizações que estão causando problemas
- Voltar ao layout padrão após experimentar configurações personalizadas
- Resolver problemas de funcionamento do teclado
- Preparar o teclado para uma nova configuração do zero

## Salvar configurações atuais (opcional)

Caso tenha customizações que realizou no Vial e pretende mantê-las como backup, você pode salvá-las no seu computador antes de restaurar.

Para isso, você pode precisar da [versão desktop do aplicativo do Vial](https://get.vial.today/download/) para salvar seu layout atual.

Clique em "File > Save current layout" (ou use o atalho `Ctrl+S`), e o salve em uma pasta no seu computador.

## Restaurar configuração de fábrica

Cada metade do teclado conta com uma placa controladora independente, que pode ser acessada a partir do USB **superior** de cada metade. É a partir dele que restauraremos cada metade para as configurações de fábrica.

:::warning
Atenção às entradas USB que serão usadas para restaurar a configuração: são as entradas superiores de cada metade do teclado.
As entradas USBs das laterais servem puramente para a comunicação entre as metades do teclado.
:::

### Restaurar o lado esquerdo

- Inicialmente, desconecte o cabo que conecta o teclado ao computador, que fica conectado à parte superior do teclado.

- Mantenha pressionada a tecla superior mais à esquerda (que por padrão é o `ESC`) e conecte novamente o cabo energizado. [Este breve vídeo](https://www.youtube.com/watch?v=cs2bDVUJNUQ) mostra este passo.

- Ao largar a tecla, uma pasta deve se abrir no seu computador, conforme exemplo mais abaixo, indicando que seu teclado entrou em modo de _boot_.

- **A partir desse momento seu teclado já foi restaurado para as configurações de fábrica**.

- Agora, basta desconectar o teclado do seu computador e conectá-lo novamente para que ele volte a funcionar normalmente.

<img src="/Tergo-Sofle-Documentation/img/exemplo_modo_boot.png" alt="Exemplo"  />

### E o lado direito?

Você não precisa se preocupar em fazer o processo para a metade direita do teclado.

Isso porque as configurações e customizações ficam salvas na placa esquerda.

## Verificar a restauração

Após restaurar ambas as metades:

1. Reconecte o teclado normalmente ao computador
2. Abra o Vial e verifique se o teclado está funcionando com as configurações padrão
3. Teste algumas teclas para confirmar que o layout está no padrão de fábrica

## Alternativa: gravar novamente o firmware

Você pode querer gravar novamente o firmware caso seu problema não tenha sido resolvido.

Para isso, siga o [guia de como atualizar o firmware](./COMO_ATUALIZAR_FIRMWARE.md).
