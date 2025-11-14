# Substituir uma sequência de teclas por  outra tecla

_Este guia foi criado pela comunidade._

_Autor: EGmux99._

_Obrigado pela contribuição!_

Uma das desvantagens de utilizar camadas é a necessidade de não poder reutilizar a tecla pressionada como modificador.
Suponha que uma de suas camadas seja ativada ao apertar a tecla *Control*, caso deseje executar atalhos como *Control C* ou *Control v* comuns em diversas aplicações não seria possível sem utilizar combos, *Tap-Dance* ou substituindo a tecla na interface do *Vial* por *Any*.

Se você for um usuário mais experiente pode ser que *Any* seja uma solução aceitável, mas para usuários iniciantes consultar [código de teclas](https://docs.qmk.fm/features/command) pode prejudicar o período de adaptação. Utilização de *Tap-Dance* é sensível a latência da sua digitação e combos são fáceis de errar o "timing" , assim como nos games de Luta 😞 [demonstração do combo ](https://www.youtube.com/shorts/MjQF17hFAzg).

A solução para esses casos é utilizar a funcionalidade de [key overrides](https://docs.qmk.fm/features/key_overrides)

![Funcionalidade.png](/img/funcionalidade_override.png)

#### Compreendendo *trigger, suspended e negative mods*

Para compreender tais modificadores considere o seguinte exemplo, uma "camada" de navegação.

Ao apertar e segurar *Control e h* seria como se tivesse sido apertado a *seta esquerda(⬅️)* do teclado.

Ao apertar e segurar *Control e l* seria como se tivesesse sido apertado a *seta direita(➡️)* do teclado.

Ao apertar e segurar *Control e k* seria como se tivesesse sido apertado a *seta para cima(⬆️)* do teclado.

Ao apertar e segurar *Control e j* seria como se tivesesse sido apertado a *seta para baixo(⬇️)* do teclado.

esse tipo de remapeamento pode ser bastante útil nos casos que já existem atalhos de teclado pré-configurados
como por exemplo os de navegação no gerenciador de tarefas ou até mesmo no seu navegador, nesses casos tais atalhos podem não ser reconfiguráveis.

então o que essencialmente queremos é que ao pressionarmos e não soltar *Control* ao apertar uma das teclas mencionadas,(h,j,k,l) tenhamos accesso as "teclas" e caso não deixemos soltar as teclas depois do *Control* que continue parecendo que estamos apertando as setas do teclado.

Para que seja possível executar a primeira etapa do nosso remapeamento é preciso que *Control* seja tratado como uma tecla especial que "dirá" para o teclado que o remapeamento é possível a partir do momento quue a tecla é segurada, no caso do menu do Vial essa tecla está sendo tratada como um exemplo de **trigger  mod** ou seja ela o passo inicial para que o nosso remapeamento ocorra, segue um breve tutorial:

Clique no checkbox ao lado de *Enable*

Clique no quadrado ao lado de *Trigger* e selecione a tecla *h*

Clique na palavra *LCtrl* na linha que está localizado o nome *Trigger mods*

Clique no quadrado ao lado de *Replacement* e selecione a tecla *seta para esquerda*

agora teste algum dos remapeamentos, você notará que ao segurar *Control* e não soltar e depois apertar *h* o comportamento não é de uma seta para cima, isto se deve ao fato que a tecla Control está sendo considerada como pressionada depois de apertar *d*, que problema!

Mas há uma solução, **suppresed mods*** tais modificadores permitem que ao pressionar o *Control* e depois o *h*  o *Control* é ignorado e o resultado é o remapeamento como esperado 😄.

Clique na palavra LCtrl na linha que está localizado o nome Supressed mods.

Pronto agora repita o procedimento para as outras teclas e sua "camada" está pronta para uso em qualquer app que utilize atalho envolvendo seta de teclado como por exemplo *Alt ➡️, Shift ⬆️*, **note que esse método exibe uma desvantagem que pode ser significativa, as teclas Control h, Control j, Control k e Control l ficarão inutilizadas, sendo sempre substítuidas pelas setas de teclado**.

Como solução para o problema acima podemos aplicar um  **negative mod** evitando assim que um remapeamento aconteça se uma tecla modificadora esteja pressionada.

Clique em qualquer tecla modificador na linha *Negative mods* que não seja *LCtrl*.
