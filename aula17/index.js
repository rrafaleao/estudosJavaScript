const alunos = ['Rafael', 'Roberta', 'Luisa']

alunos[1] = 'Pedro' // altera o valor do indice 1
alunos[3] = 'Maria' // adiciona mais um valor para o array, mas é necessario saber a casa final.
alunos[alunos.length] = 'Carlos'; // adiciona sempre no final do array
alunos[alunos.length] = 'Kurt';
alunos.push('Fabio') // outra forma de adicionar no final de um array
alunos.unshift('luisa greenfield') // adiciona no inicio

const removidoFim = alunos.pop() // remove o ultimo elemento do array e salva em uma variavel
const removidoInicio = alunos.pop() // remove o primeiro elemento do array e salva em uma variavel
 

console.log(alunos.slice(0,3)) // fatia o array do espaço 0 até o espaco definido

console.log(removidoInicio)
console.log(alunos[1])
console.log(alunos)