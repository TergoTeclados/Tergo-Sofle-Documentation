# Teclado não liga

Seu teclado não está ligando ou respondendo? Siga este guia passo a passo para diagnosticar o problema.

:::tip Importante
Anote os resultados de cada teste que você fizer. Isso ajudará a identificar a causa do problema.
:::

## Teste inicial

Antes de testar componentes específicos, tente estas soluções mais simples:

- **Desligue e ligue completamente o teclado**
  - Versão Padrão: desconecte o cabo USB do computador (não precisa desconectar as metades)
  - Versão Wireless: desligue ambas as metades e o receptor USB
- **Conecte o teclado em um USB diferente do seu computador**

## Específico Versão Padrão

O problema provavelmente estará relacionado a um dos 3 pontos abaixo:
- Placa controladora problemática
- Algum cabo USB problemático
- Conector USB lateral problemático

:::danger Atenção
Para ligar o teclado, lembre-se de usar sempre a conexão **USB superior** do teclado (não a USB entre as metades).

O USB entre as metades serve **apenas** para conectar as duas metades.
:::

:::warning

Apenas desconecte ou conecte o cabo USB entre as metades **apenas com o teclado desligado**.

Fazer com ele ligado pode gerar comportamentos inesperados.

:::

### Com USB entre metades conectado

- Mantenha o cabo USB conectando as duas metades
- Conecte o cabo USB ao computador na **metade direita**
- Teste se o teclado responde
- Se não funcionar, desconecte da esquerda e conecte novamente na **metade esquerda** (a normalmente usada)
- Teste novamente

### Com USB entre metades desconectado

- Desconecte o cabo USB que conecta as duas metades
- Conecte o cabo USB ao computador apenas na **metade esquerda**
- Teste se o teclado responde
- Se não funcionar, desconecte da esquerda e conecte apenas na **metade direita**
- Teste novamente

### Analisar conexão USB lateral

- Desconecte o cabo USB que conecta as duas metades
- Observe se o conector USB parece ter danos, como estar rachado ou solto
- Se quiser uma melhor análise visual, abra a tampa superior e procure por rachaduras no USB

### Trocar cabo USB

- Experimente usar outro cabo USB para conectar o teclado ao computador
- Certifique-se de que o cabo está funcionando (teste em outro dispositivo)

## Específico Versão Wireless

### Verificar LED de inicialização

Faça os passos abaixo para ambas metades do teclado:
- Desligue a metade do teclado
- Observe o teclado pela **entrada USB superior** e ligue a chave de liga/desliga
- Uma luz vermelha deve acender brevemente ao ligar
- Repita o teste com a outra metade

### Testar metades individualmente

- Desligue ambas as metades e o receptor
- Ligue apenas a **metade esquerda** e o receptor
- Teste se o teclado responde
- Desligue tudo e repita com apenas a **metade direita** ligada

## Próximos passos

Se nenhum dos testes acima resolveu o problema:

- **Anote todos os resultados** dos testes realizados
- **Entre em contato**
- Informe quais testes foram feitos e seus resultados
- Experimente os testes avançados seguintes

Também há testes mais avançados que devem ser relevantes para descobrirmos a causa do problema.

## Testes avançados

Esses testes visam descobrir outras possíveis causas mais incomuns:
- Mal contato da placa controladora
- Tela OLED causando problema

### Testar mal contato da placa controladora

Primeiramente:
- Abra a tampa da metade do teclado suspeita de problema
- Levante a tela OLED conforme imagem abaixo para ter mais acesso à placa controladora

![Exemplo](/img/oled-levantado.jpg)

- Ligue o cabo USB à metade do teclado que será testada
- Faça pressão com o dedo a placa controladora
- Veja se alguma tecla responde ou se o teclado liga

:::tip

A foto abaixo não está com o cabo USB que liga ao computador conectado, mas deve ser conectado para energizar e ver se o teclado liga.

:::

![Exemplo](/img/apertando-placa.jpg)

### Tela OLED com problema

Por mais que extremamente raro, é válido testar:
- Remova a tela OLED, puxando ela pelas laterais para cima aos poucos, aplicando a força necessária
  - Veja [essa seção de outro guia nosso](../../manutencao/TROCAR_PLACA_CONTROLADORA.md#remoção-da-tela-oled) que explica isso com detalhes
