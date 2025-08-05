// exercicio 3
// Escreva uma função que recebe um numero e retorne o seguinte
// numero é divisivel por 3 = fizz 
// numero é divisivel por 5 = buzz
// numero é divisivel por 3 e 5 = fizzbuzz
// numero não é divisivel por 3, 5 = retorna o proprio numero
// checar se o numero é realmente um numero
// use a função com numeros de 0 a 100

function fizzBuzz(numero){
    if (typeof(numero) != 'number') return numero
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    else if(numero % 3 === 0) return 'Fizz'
    else if(numero % 5 === 0) return 'Buzz'
    else return numero
}

for(let i = 0; i < 100; i++){
    console.log(fizzBuzz(i))
}