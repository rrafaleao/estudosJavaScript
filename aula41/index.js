// exercicio
// escreva uma função que recebe dois numeros e retorna o maior deles;

function checaMaior(num1, num2) {
    let numMaior
    if(num1 > num2){
        numMaior = num1
    }else{
        numMaior = num2
    }
    return numMaior
}

const numMaior = checaMaior(5, 10)
console.log(numMaior)

// codigo refatorado

function max(x, y) {
    return x > y ? x : y
}

// codigo mais simplificado ainda

const max2 = (x, y) => x > y ? x : y