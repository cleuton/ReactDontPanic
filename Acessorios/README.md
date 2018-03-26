![](../react.png)
# React! Don't Panic!

## Strike three: Má notícia nunca vem sozinha...

É, meus amigos, a moda agora é criar frameworks Javascript. Isso é bom e ruim... É bom porque nos dá uma grande variedade de componentes e bibliotecas para usarmos em nossos projetos, e a maioria delas é open source. E é ruim porque são mais "roadmaps" para gerenciar! Sim, não raro, uma biblioteca é atualizada e quebra a compatibilidade com as outras, gerando uma grande dor de cabeça.

O React é exatamente assim. 

Então, vou mostrar alguns dos "**Acessórios**" mais utilizados em aplicações React. Falarei rapidamente sobre sua funcionalidade e utilidade, dando alguns pequenos exemplos de código. Em outro artigo, mostrarei um exemplo mais concreto de aplicação, usando alguns desses "acessórios".

## Flux (Facebook)

Flux é uma arquitetura de aplicação de fluxo unidirecional para o uso do React.

![](./flux-diagram-white-background.png)

Complicou, não? Ok... Vamos tentar uma coisa mais simples... Toda aplicação Flux tem alguns *"papéis"* básicos: 
- **View**: UI. Onde o usuário interage com a aplicação;
- **Store**: Armazena o estado da aplicação;
- **Action**: Muda o estado da aplicação;
- **Dispatcher**: Encaminha as ações às **stores**;

Entendeu? Não? Dê uma olhada nessa figura, que é bem mais simples: 

![](./flux-simple-f8-diagram-with-client-action-1300w.png)

1 - O usuário digita um campo em um form e tecla <ENTER>;
2 - A **View** envia uma **Action** para o **Dispatcher**;
3 - O **Dispatcher** envia a **Action** para as **Stores**;
4 - As **Stores** atualizam o estado;
5 - As **Views** refletem o novo estado (*).

As Views detectam a mudança e obtém o novo estado. Na verdade, existe um tipo de componente, o **Container**, que atualiza o estado das views filhas, a cada mudança de estado das **Stores**.

## REDUX

O **Flux** e o [**Redux**](https://redux.js.org) funcionam de maneira muito semelhante, implementando uma forma derivada de MVC no React. As diferenças são poucas, sendo que o **Flux** é um design pattern e uma biblioteca de classes e utilitários, e o **Redux** é um componente.

## Exemplo

Há um exemplo simples de aplicação **Flux** que você pode acessar para ver como funciona: 

https://github.com/facebook/flux/tree/master/examples/flux-todomvc

Em breve, mostrarei mais acessórios e um exemplo funcional com o **Flux**
