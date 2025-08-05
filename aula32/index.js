const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(primeiroNumero, resto)

const [um, ,tres, ,cinco] = [1,2,3,4,5,6,7];
console.log(um, tres, cinco)

const numeros = [[1,2,3], [4,5,6], [7,8,9]]
const [lista1, lista2, lista3] = numeros
console.log(lista1[2], lista3[1])