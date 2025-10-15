# Problemas e Soluções

Neste guia você encontrará problemas e soluções que você pode ter com seu teclado Tergo Sofle.

Seu problema pode variar desde simples uma confusão com alguma funcionalidade até serem problemas técnicos que necessitem de manutenção.

## Primeiros passos

A maioria dos problemas podem ser resolvidos realizando os seguintes passos.

Experimente realizá-los primeiro, antes de buscar soluções mais avançadas.

### Desligar e ligar teclado

Desligue-o totalmente da energia, desconectando-o do USB e desligando chaves de liga/desliga (apenas na Wireless).

### Restaurar configurações de fábrica

Uma costumização realizada no teclado pode estar causando problemas inesperados para você.

Caso pareça se aplicar ao seu caso, restaure o _firmware_ do teclado para as configurações de fábrica e veja se resolve.

#### Versão Padrão (com fio)

Veja o [guia de atualização do firmware (versão Padrão)](../guias/especifico_versao_padrao/COMO_ATUALIZAR_FIRMWARE.md) e prossiga até a etapa de ativar o modo de gravacão (boot).

No momento em que a pasta para gravar o _firmware_ abre, seu teclado terá restaurado as configurações de fábrica do _firmware_.

Se você instalou um _firmware_ customizado seu, realize o processo completo do guia para gravar o _firmware_ fornecido pela Tergo Teclados para ver se resolve.

#### Versão Wireless (sem fio)

Um primeiro passo pode ser tentar limpar customizações realizadas no ZMK Studio.

Abra o ZMK Studio, e clique em `Tergo Sofle > Restore Stock Settings`.

Caso não tenha resolvido, veja o [guia de atualização do firmware (versão Wireless)](../guias/especifico_versao_wireless/COMO_ATUALIZAR_FIRMWARE.md) e tente reinstalar o _firmware_ do seu teclado para o fornecido pela Tergo Teclados. Especialmente relevante caso tenha gravado uma versão sua customizada do _firmware_.

## Guias de Problemas Específicos

Se as soluções básicas não resolverem seu problema, consulte os guias específicos organizados por categoria:

### 🔧 [Problemas de Hardware](./hardware/README.md)
Problemas físicos e de conectividade:
- [USB com mal contato](./hardware/USB_MAL_CONTATO.md)
- Problemas com placas controladoras
- Problemas de montagem

### 💻 [Problemas de Software](./software/README.md)
Problemas relacionados ao firmware e configuração:
- [Teclado Wireless parou de funcionar](./software/TECLADO_WIRELESS_PAROU.md)
- [Não consigo dar unlock](./software/NAO_CONSIGO_UNLOCK.md)
- Problemas de conectividade

## Guias Relacionados

- [Como trocar placa controladora](../guias/manutencao/TROCAR_PLACA_CONTROLADORA.md)
- [Guia de atualização do firmware (versão Padrão)](../guias/especifico_versao_padrao/COMO_ATUALIZAR_FIRMWARE.md)
- [Guia de atualização do firmware (versão Wireless)](../guias/especifico_versao_wireless/COMO_ATUALIZAR_FIRMWARE.md)
- [Como conectar múltiplos dispositivos](../guias/especifico_versao_wireless/COMO_CONECTAR_MULTIPLOS_DISPOSITIVOS.md)
