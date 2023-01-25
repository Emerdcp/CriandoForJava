# CriandoForJava
 riando efeito no formulário com Javascript

Nesse tutorial você vai aprender a criar um efeito no formulário com Javascript, incrementando mais a experiência do usuário com seu site e usando separadamente as responsabilidades com HTML, CSS e claro, Javascript.

Para esse tutorial, na parte de Javascript, iremos utilizar só a linguagem JS, sem adotar algum framework ou biblioteca. Primeiro porque o script será pequeno e segundo porque sempre é interessante desacoplar sua aplicação de um framework. E de quebra, aprenderemos coisas novas, nesse caso, alguns recursos do ES6 ou ECMAScript 2015.

Vamos seguir a premissa de separar as responsabilidade: HTML para marcação, CSS para estilização e Javascript para comportamento.

## Escrevendo HTML

Vamos definir nossa marcação com HTML.

```<link rel="stylesheet" href="css/style.css">```

Definimos primeiro o formulário, que apenas terá uma classe. Nesse exemplo, .form-container.

É interessante adicionar classes a elementos aos quais você precise estilizar ou precise fazer alterações pontuais, mas não quer interferir em outros elementos iguais.

Prefira classes ao invés de id’s. Isso porque o id precisa ser único na página e existe uma tendência de querermos reaproveitar os estilos. Desta forma, não poderíamos adicionar o mesmo id em outro elemento para aproveitar o estilo.

```html
<form action="" class="form-container">
        <div class="fields">
          
        </div>
</form>
```

Vamos agora adicionar uma div com a classe .fields , que servirá para agrupar o elemento do formulário.

É comum utilizarmos a tag de parágrafo para este fim, mas semanticamente não seria o ideal, já que não se trata de um paragrafo. Além disso, a div é um elemento “não semântico” e nesse caso se encaixa perfeitamente.

```html
<form action="" class="form-container">
        <div class="fields">
            <input type="text" name="name"  class="input" placeholder="Digite seu nome"/>
            
        </div>
    </form>
```

Agora adicionamos um campo do formulário input do tipo text. Iremos adicionar uma classe chamada .input .

```html
<form action="" class="form-container">
        <div class="fields">
            <input type="text" name="name"  class="input" placeholder="Digite seu nome"/>
            <div class="highlight"></div>
        </div>
    </form>
```

Agora adicionaremos uma div com uma classe chamada .highlight. Ela irá ser responsável pelo efeito como fosse simular uma barra que vai acompanhando enquanto digitamos.

Pronto, basicamente esse é no nosso HTML.

## Escrevendo CSS

Antes de escrever o CSS, vamos linkar ao nosso arquivo index.html

```html
<link rel="stylesheet" href="css/style.css" />
```

Para utilizar esse arquivo css, adicionaremos a tag link e no atributo href, indicando onde está o arquivo. Esse código ficará dentro do bloco da tag head.

Para um melhor entendimento do nosso código CSS, deixarei os blocos separados para explicar melhor e depois, no final, mostro todo código CSS, ok?

```css
.form-container{
    width:500px;
    margin:0 auto;
}
```

- Na linha 1, selecionamos o elemento do formulário.
- Na linha 2, definimos a largura do formulário.
- Na linha 3, definimos para que ele fique centralizado na horizontal.

```css
.form-container .fields {
    position: relative;
    width: 100%;
    margin:25px auto;
}
```

- Na linha 1, selecionamos o .fields. Nesse caso, usamos a seleção a partir do elemento pai, que seria o .form-container.
- Na linha 2, definimos um position com valor relative, porque no elemento filho .highlight será definido como absoluto e para garantimos o posicionamento de acordo com elemento pai, esse elemento será definido como relativo.
- Na linha 3, definimos uma largura de 100%.
- Na linha 4, definimos um margin com altura e base de 25px e direito e esquerda com auto.

```css
.form-container .input {
    width:100%;
    height: 50px;
    font-size: 12px;
    line-height: 12px;
    font-family: Arial, Helvetica, sans-serif;
    border:0;
    outline: none;
    border-bottom:3px solid #000; 
}
```
- Na linha 1, selecionamos o elemento do formulário, que atribuímos a classe .input.
- Na linha 2, definimos uma largura de 100%.
- Na linha 3, uma altura de 50px.
- Na linha 4, o tamanho da fonte para 12px.
- Na linha 5, o espaço entre linhas também de 12px.
- Na linha 6, escolhemos a fonte Arial, Helvetica e sans-serif.
- Na linha 7, removemos a borda.
- Na linha 8, removemos o contorno.
- Na linha 9, adicionamos uma borda na base com 3px. Ele servirá como uma linha-guia para fazermos o efeito.


```css
.form-container .highlight{
    position: absolute;
    left:0;
    bottom: 0; 
    width: auto;
    max-width: 100%;
    height:0;
    overflow: hidden;
    border-top:3px solid #F00;
    font-size: 12px;
    line-height: 12px;
    font-family: Arial, Helvetica, sans-serif;
}
```

- Na linha 1, selecionamos a div.highlight.
- Na linha 2, definimos um position como absolute em relação ao elemento pai, que no caso é o form.form-container. Como definimos ele como position relative, o calculo da posição dele será baseado no do pai. Caso não tivéssemos definido o elemento pai como relative, a base do cálculo da posição seria o body.
- Na linha 3, definimos left:0 para que elemento encoste a esquerda.
- Na linha 4, definimos bottom:0, para o elemento encoste na base.
- Na linha 5, definimos uma largura como automática, onde navegador irá definir essa largura.
- Na linha 6, definimos uma largura máxima de 100%.
- Na linha 7, definimos uma altura como zero para não mostrar o conteúdo que existirá dentro dela.
- Na linha 8, definimos o overflow como hidden para não permitir que o conteúdo seja exibido além do que foi definido na width e height.
- Na linha 9, definimos uma borda no topo, que será o efeito quando a pessoa estiver digitando.
- Na linha 10, definimos o tamanho da fonte.
- Na linha 11, definimos o espaço entre linha.
- Na linha 13, definimos a fonte.

É importante as definições da tamanho, espaço de linha e fonte sejam a mesmas, tanto do campo input quanto na div.highlight

```css
.form-container{
    width:500px;
    margin:0 auto;
}

.form-container .fields {
    position: relative;
    width: 100%;
    margin:25px auto;
}

.form-container .input {
    width:100%;
    height: 50px;
    font-size: 12px;
    line-height: 12px;
    font-family: Arial, Helvetica, sans-serif;
    border:0;
    outline: none;
    border-bottom:3px solid #000; 
}

.form-container .highlight{
    position: absolute;
    left:0;
    bottom: 0; 
    width: auto;
    max-width: 100%;
    height:0;
    overflow: hidden;
    border-top:3px solid #F00;
    font-size: 12px;
    line-height: 12px;
    font-family: Arial, Helvetica, sans-serif;
}
```
## Escrevendo o Javascript

Vamos criar agora o código Javascript que definirá o comportamento que desejamos, que no caso seria o efeito ao digitar no campo input. Ele vai adicionar o mesmo conteúdo digitado no elemento .highlight .

Vamos criar um arquivo chamado main.js, e adicionar na pasta js.

Agora vamos adicionar o Javascript na nossa página html.

```js
<script type="text/javascript" src="js/main.js"></script>
```

Criamos uma tag script e com atributo src indicamos onde está o arquivo js. Esse código será adicionado antes do fechamento da tag body.

Nessa parte, iremos fazer como mostrado na parte do HTML, adicionaremos cada parte e comentando tudo para um melhor entendimento.


```js
let fields = document.querySelectorAll('.fields');
```

Definimos uma variável com palavra reservada let. Ele é diferente da palavra reservada var, porque a var define uma variável global e o let define de acordo com o escopo de bloco.

Nessa variável fields, ela recebe todos os elementos que tenham a classe .fields. Se você já usou jQuery, sabe que essa sintaxe já é familiar, só que você pode fazer nativamente com querySelectorAll .

```js
let fields = document.querySelectorAll('.fields');

fields.forEach( element => {

});
```
Com document.querySelectorAll você terá o retorno de uma lista de elementos, mas precisamos percorrer essa lista. E para isso, usamos o forEach. Dentro desse forEach, executamos uma função anônima, que é passado o parâmetro e o elemento que foi percorrido.

Essa sintaxe da função anônima é chamado arrow function. Seria uma forma curta para criação de uma função anônima e onde o this é relacionado ao contexto, mas não define na função em si.

Isso poderia ser feito dessa forma:

```js
fields.forEach(function(element) {

});
```

Mas sempre é bom ver novos recursos, pois iremos ver esta sintaxe cada vez mais.

```js
let fields = document.querySelectorAll('.fields');

fields.forEach( element => {
    let input = element.querySelector('.input');
    let highlight = element.querySelector('.highlight');
});
```

Iremos recuperar o .input e o .highlight. Agora, usaremos o querySelector, que diferente do querySelectorAll retorna uma coleção de elementos, mas ele retorna apenas o primeiro. Usaremos o querySelector a partir dos itens retornados do forEach.

```js
let fields = document.querySelectorAll('.fields');

fields.forEach( element => {
    let input = element.querySelector('.input');
    let highlight = element.querySelector('.highlight');
    
    input.addEventListener('keyup', e => {

    });
});
```

Agora precisamos capturar o que foi digitado pelo usuário. E para isso, adicionamos um evento ao input. Para adicionar o evento, utilizamos addEventListener. No primeiro parâmetro, informamos qual evento queremos, que no caso seria keyup. No segundo, o callback, que será executado quando for disparado o evento. Como é uma função anônima, usamos a sintaxe do arrow function.


```js
let fields = document.querySelectorAll('.fields');

fields.forEach( element => {
    let input = element.querySelector('.input');
    let highlight = element.querySelector('.highlight');
    
    input.addEventListener('keyup', e => {
        let value = input.value;
        highlight.innerHTML = value;

    });
});
```

Agora, criamos uma variável com nome value, que recebe o valor digitado no input. Depois, adicionamos esse valor digitado dentro do elemento .highlight.

Pronto, dessa forma, basta digitar o valor do formulário que ele vai exibindo a barra acompanhando. Veja ele funcionando:

## Algumas considerações


Quando foi solicitado para adicionar o Javascript no final do body, estamos fazendo uma boa prática para melhorar o carregamento da página. Outra questão importante é que precisamos carregar a estrutura dos elementos primeiro, para depois selecioná-los. Mas e se você precisar adicionar na tag head,? Precisaríamos informar para carregar o script só depois do carregamento do DOM. Para isso, podemos fazer dessa forma:


```js
ocument.addEventListener('DOMContentLoaded', function(){

 /*Aqui dentro iria o código*/

});
```

Adicionamos a um evento DOMContentLoaded, que vai executar só quando carrega o DOM.

Outra questão é sobre o arrow functions. Lembre que informei sobre this que é relacionado ao contexto e não a ele mesmo? Vamos utilizar o tutorial para vermos isso na prática. Vamos trocar arrow functions para função anônima (expression functions).

```js
let fields = document.querySelectorAll('.fields');

fields.forEach(function(element){
    let input = element.querySelector('.input');
    let highlight = element.querySelector('.highlight');
    input.addEventListener('keyup', function() {
        let value = this.value;
        highlight.innerHTML = value;
    });
})
```
eja que o código permaneceu o mesmo, trocamos só arrow functions pelas funções anônimas (expression functions), mas dentro do evento keyup. Ao invés de usar o input para recuperar o valor, usamos o this. O this nesse caso está relacionado à função e não ao contexto. Então ele pega o valor do evento disparado.

Nesse tutorial, vimos conceitos ES6, a definição de variável com let, arrow functions e a diferença com expression functions além de como utilizar addEventListener. Vimos ainda como esperar a execução do código só após carregar o DOM usando DOMContentLoaded.