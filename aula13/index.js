//               01234567
let umaString = 'Um texto';
let RatoRoeu = 'O rato roeu a roupa do rei de roma';

console.log(umaString[1]); // Busca uma string pela posição especificada;
console.log(umaString.indexOf('U')); // Procura a posição da letra especificada
console.log(umaString.replace('Um', 'Rato')); // substitui o 'Um' pela palavra desejada
console.log(RatoRoeu.replace(/r/g, 'G')); //substitui todos os 'r' Da string
console.log(RatoRoeu.length) //Tamanho da string
console.log(RatoRoeu.slice(1, 10)) // Fatia a string do indice especificado até o outro
console.log(RatoRoeu.split('r')) // divide em arrays cada parte da string com tal caractere;
console.log(RatoRoeu.toLocaleLowerCase()) // retorna tudo em minusculo
console.log(RatoRoeu.toUpperCase()) // tudo em maiusculo