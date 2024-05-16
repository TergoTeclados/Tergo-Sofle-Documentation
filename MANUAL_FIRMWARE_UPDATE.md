# Manual de Atualização do Firmware

A Tergo Teclados pretende lançar futuramente melhorias no Firmware do teclado. Para atualizar o firmware é fácil, basta seguir as instruções aqui presentes.

## Visualizar versão atual

Você pode ver a versão do firmware do seu teclado indo para a camada de ajustes e visualizando a tela OLED direita.

## Baixar firmware atualizado

Sempre que houver um lançamento de uma nova versão do firwmare, ela será publicada no [repositório do Firwmare](https://github.com/TergoTeclados/vial-qmk-firmware/releases). 

Baixe a versão mais recente do firwmare que combine com o seu teclado, baseado se ele tem RGB e telas OLED. Você só precisa de 1 arquivo com final ".uf2".

## Salvar configuração atual do Vial

Você precisa do [aplicativo desktop do Vial](https://get.vial.today/download/) para fazer backup do seu layout atual. Importante para não perder suas configurações ao atualizar.

Salve seu layout atual no Vial clicando em "File>Save current layout". Você precisará adicioná-lo novamente após atualização.

## Colocar firmware no teclado

Lado esquerdo: 
- Inicialmente com o teclado desconectado do computador, mantenha pressionada a tecla superior esquerda e conecte o USB no teclado esquerdo;
- Espere um pouco para que o controlador entre no modo bootloader e uma pasta de armazenamento deve ser aberta no seu computador;
- Copie ou mova o arquivo com final .uf2 para a pasta que abriu.

Depois disso, o controlador deve reiniciar automaticamente e a pasta sumir.

Lado direito:
- Faça os mesmos passos que o lado esquerdo porém para o lado direito, sendo que a tecla a ser pressionada é a mais superior à direita.

## Importar configuração do Vial

Por fim, importe de volta seu layout salvo para o Vial clicando em "File>Load saved layout"
