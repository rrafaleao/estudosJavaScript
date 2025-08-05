const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Leão',
    idade: 18,
    endereco : {
        rua: 'Rua flores',
        numero: 320
    }
}

const{ nome:nomePessoa, idade, endereco:{rua, numero}, endereco } = pessoa
console.log(nomePessoa, idade, rua, numero, endereco)