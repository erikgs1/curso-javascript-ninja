(function(){
    'use strict'
    /*
    Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
    `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
    */
    var erik = {
        name: 'Erik',
        lastName: 'Gomes'
    }

    var pedro = {
        name: 'Pedro',
        lastName: 'Santos'
    };
    /*
    Agora crie uma função chamada `getFullName` que retorne as propriedades
    `name` e `lastName` dos objetos acima, formando um nome completo.
    A função não deve receber nenhum parâmetro, mas as propriedades `name` e
    `lastName` devem ser dinâmicas.
    A mesma função deve servir para as duas pessoas (ou qualquer outra que for
    criada).
    Depois disso, invoque essa função, mostrando no console o nome completo das
    pessoas que foram criadas anteriormente, passando as pessoas acima como
    contexto da função. Use um console.log por pessoa.
    */
    console.log( 'O nome das pessoas é:' );
    function getFullName(){
        return this.name + ' ' + this.lastName;
}
    console.log(getFullName.call(erik));
    console.log(getFullName.call(pedro));

    /*
    Crie uma função chamada `sum`. Essa função pode receber uma lista de
    parâmetros variável, e deverá retornar a soma de todos eles.
    Não use estruturas de repetição para somar os argumentos.
    Na primeira linha, dentro da função, deixe um console.log para mostrar todos
    os parâmetros passados para essa função.
    */
   function sum(){
       console.log(args);
       Array.prototype.reduce.call(args, 
        function(accumulated, actualItem){
           return Number(accumulated) +  Number(actualItem);
       }
    );
   }

    /*
    Mostre no console que a função acima funciona, invocando-a em 3 console.log
    diferentes, com quantidades variáveis de parâmetros passados.
    */
    console.log( '\nSomar alguns números:' );
    console.log(sum(1, 2, 3, 4));
    console.log(sum(5, 6, 8));
    console.log(sum(11, 22, 13, 34));

    /*
    Declare uma variável chamada `userEntry`, que irá r eceber alguns valores
    entrados pelo usuário. Mostre para o usuário a seguinte frase:
    "Entre com alguns números que serão somados:"
    */
    // ?
    var userEntry = prompt('Entre com alguns números que serão somados: ')
    /*
    Mostre no console o valor entrado pelo usuário:
    */
    console.log( '\nEntrada do usuário:' );
    console.log(userEntry);

    /*
    Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
    e remove tudo o que não for número, retornando um array somente com os números
    da string. Mostre a representação em string dessa função no console.
    */
    console.log( '\nFunção que limpa entrada do usuário (somente números):' );
    function justNumbers(entry){
        return entry.replace(/\D+/g, ',').split( ',' );
    }

    /*
    Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
    atribuindo o resultado à uma variável `numbers`.
    */
    console.log( '\nEntrada do usuário limpa. Somente números:' );
    numbers = justNumbers(userEntry);
    console.log(numbers)
    /*
    Agora com o array de números, utilize a função `sum` para somar todos os
    números desse array e mostre o resultado no console.
    */
    console.log( '\nSomar números entrados pelo usuário:' );
    console.log(sum.apply(sum, numbers));

})();