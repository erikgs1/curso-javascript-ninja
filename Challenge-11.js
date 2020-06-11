(function(){
    // Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

    /*
    Crie uma variável chamada `once`, que recebe `false` como seu valor.
    Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
    loop, mostre no console a mensagem:
    'Entrou ao menos uma vez!'
    Qual loop você deve usar para que essa mensagem seja mostrada no console?
    */
    var once = false;
    do {
    console.log('Entrou ao menos uma vez!');
    } while(once);
    /*
    Crie um objeto chamado `person`, que receba as seguintes propriedades:
    - 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
    para o nome, idade, peso e data de nascimento dessa pessoa.
    */
    var person = {
        name: 'Erik',
        age: '18',
        weight: '70',
        birthday: '23/08'
    };

    /*
    Use um loop para percorrer o objeto criado acima, mostrando no console
    a frase:
    'The [PROPERTY] of person is [VALUE]'
    Aproveite e crie uma variável `counter` que vai contar quantas propriedades
    esse objeto tem.
    Após o loop, mostre a frase:
    'The person has [COUNTER] properties'
    */
    var counter = 0;
    for (var properties in person ){
        console.log('The ' + properties + ' of person is ' + person[properties] + '.');
        counter++;
    }   
    console.log('The person has ' + counter + ' proprieties');
    /*
    Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
    criado acima) é mais velha que a idade passada por parâmetro.
    Se verdadeiro, retornar `true`. Senão, retornar false.
    Após a função, mostrar a mensagem no console:
    'The person has more than 25 years old? [TRUE/FALSE]'
    */
    function moreThan(age){
        if(person.age > age){
            return true
        }
        else{
            return false
        }
    }
    console.log('The person has more than 25 years old? ' + moreThan(25))

    /*
    Faça um loop de 0 a 20, que adicione cada número como um item de um
    array chamado `numbers`. Se o contador for maior que 10, saia do loop.
    Mostre no console os números no array.
    */
    console.log( 'De 0 a 10:' );
    var numbers = [];
    for(var number = 0; number < 20; number++){
        if(number > 10){
            break
        }
        numbers.push(number);
    }
    console.log(numbers);
    /*
    Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
    criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
    esses. Se o número for ímpar, pular para o próximo número.
    Mostrar no console os números do array.
    */
    console.log( 'Pares de 0 a 20:' );
    numbers = [];
    for (var number = 0; number <= 20; number++){
        if(number % 2 === 0){
            continue;
        }
        numbers.push(number);
    }
    console.log(numbers);
})();