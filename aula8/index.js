const nome = 'Rafael';
const sobrenome = 'Leão';
const idade = 17;
const peso = 65;
const altura = 1.75;
const anoAtual = 2025
let imc = peso / (altura * altura)
let anoNascimento = anoAtual - idade

console.log(`Olá, meu nome é ${nome} ${sobrenome} `);
console.log(peso, " kgs, tem ", altura, "de altura, nasceu em",anoNascimento, "seu imc é de ", imc);