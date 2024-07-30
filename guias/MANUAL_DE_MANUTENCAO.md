# Tergo Sofle - Manual de Manutenção

Neste manual você descobrirá como montar/desmontar seu teclado Tergo Sofle e como solucionar problemas diversos.

Atenção: danos causados por tentativa de manutenção manual são sujeitos a perda de garantia.

## Nós te ajudamos!

Caso tenha qualquer problema que não encontrou a solução na documentação, nos contate que te ajudaremos a descobrir qual é a causa e também arrumamos para você!

Lembre-se de que você tem garantia e assistência técnica. Estamos aqui para te ajudar.

## Voltar para configuração de fábrica

Problemas que você tem relacionados ao firmware podem estar relacionados com alguma configuração que você fez.

Resete para as configurações de fábrica do Tergo Sofle (e opcionalmente atualize para a versão mais recente) seguindo o [guia de como atualizar o Firmware](./COMO_ATUALIZAR_FIRMWARE.md). Em especial, caso queira apenas resetar as configurações de fábrica, pode parar na parte que o seu teclado entra em modo de _boot_.

## Montar e desmontar a estrutura do teclado

Cada metade do teclado consiste de:
- Top plate: onde os switches mecânicos estão;
- Placa de Circuito Integrado (PCI): onde estão os componentes eletrônicos;
- Bottom plate: a parte debaixo da estrutura que fecha o teclado
- Cover: peça que cobre a região onde fica a tela e placa controladora.

Para cada metade do teclado, ele possui 14 parafusos, 5 espaçadores de 7mm e 2 espaçadores de 9mm:

- 5 parafusos na bottom plate (embaixo do teclado), prendendo a bottom plate aos espaçadores de 7mm que vão à top plate;
- 5 parafusos na top plate, escondidos entre os switches, prendendo a top plate aos espaçadores de 7mm que vão à bottom plate;
- 2 parafusos na PCI, prendendo a PCI aos espaçadores de 9mm que vão ao cover;
- 2 parafusos no cover, prendendo o cover aos espaçadores de 9mm que vão para a PCI.

### Atenção ao parafusar/desparafusar

Não aperte muito os parafusos, pois, ao tentar desrosqueá-lo depois, pode acontecer da força exercida fazer com que o parafuso conectado ao outro lado do espaçador perca pressão. Assim, você tentará parafusar/desparafusar e vai sentir que o parafuso está rodando em falso e não está entrando/saindo, pois o parafuso do outro lado que segurava o espaçador afroxou e agora o espaçador está girando junto ao seu parafuso.

Tome cuidado especialmente em relação a isso com os parafusos dos covers: se o parafuso conectado à PCI afrouxar pode acabar sendo difícil de apertá-lo novamente, já que para acessá-lo você precisaria chegar na PCI e para isso precisaria abrir a parte debaixo do teclado.

A solução é achar o parafuso equivalente no outro lado e segurá-lo também com uma chave.

## Trocar Switch ou keycaps

Com a tecnologia _hotswap_ é muito fácil trocar os switches mecânicos.

Cada switch tem a vida útil estimada de 50 milhões de cliques. Se você deseja trocá-lo é provavelmente porque encontrou algum problema ou quer experimentar outros tipos de switch.

<img src="../imagens/tirar_keycaps_e_switch.png" alt="Exemplo Cabos" width="800">

### Remover Keycap

Remova a keycap com o removedor de keycaps, conforme imagem exemplo. Basta encaixar a ferramenta na keycap e puxar.

### Trocar Switch

Remova o switch com o removedor de switch apertando e puxando a parte superio e inferior do switch que é onde ficam as travas.

Você pode sentir pouca ou muita resistencia para puxá-lo. Evite apertar demais: aperte apenas o necessário para agarrar as travas e puxe para cima.

## Atenção ao montar ou trocar switches

### Troque um por vez

Caso queira trocar todos switches do seu teclado ou uma grande quantidade, dê preferência por trocar um por vez.

Isso porque os switches ao redor do switch que você retirou ajudam a sustentar a top plate no lugar, evitando que ela envergue ao tentar colocar um novo switch.

Ter a top plate envergada não gera problemas muito relevantes. É principalmente uma questão estética e pode fazer com que switches saiam sem querer quando você tentar retirar uma keycap.

### Cuidado para não entortar as pernas ao tentar inserir

Fique atento para não entortar as pernas do switch ao encaixá-lo novamente. Caso encaixe e ele não funcione, é provável que você entortou alguma perna. Retire-o e então desentortar manualmente já deve ser suficiente para resolver o problema.

### Resistência ao colocar novo switch

Caso sinta resistência para encaixar o switch, fique atento a 2 pontos:

#### Perna entortada

Nesse caso, manualmente desentortá-la costuma resolver o problema.

Forçar a entrada com a perna torta pode danificar o _hotswap_, então fique atento a isso.

#### Top plate resistindo

Microvariações na fabricação fazem com que alguns buracos tenham um pouco mais de resistencia para suportar a largura do switch.

Recomenda-se lixar levemente se possível o buraco. Mas, em geral, um pouco mais de força já deve fazer com que ele encaixe, porém pode gerar dificuldade ao tentar tirá-lo da próxima vez.

## Resolução de problemas

### Relacionado a switches

Caso queira trocar pois está tendo experiência com algum problema relacionado a tecla não estar enviando o caracter esperado, verifique primeiramente se está configurado corretamente no Vial e se você está na camada esperada. Se não, tente remover o switch, ver se não entortou as pernas deles, e botar outro no lugar. Caso não detecte o problema entre em contato conosco.

### Trocar placa controladora

Caso esteja certo de que você tem problemas na placa controladora e queira trocá-la, entre em contato conosco que podemos trocar ou enviar uma nova para você mesmo colocar e te orientar.

Para mais detalhes de como realizar esta manutenção entre em contato.
