const pessoa1 = {
    nome:'Rafael',
    sobrenome:'Leão',
    idade: 25
};

console.log(pessoa1.nome)

function criaPessoa(nome, sobrenome, idade){
    return { nome,sobrenome,idade}
}

const pessoa01 = criaPessoa('Rafael', 'Leão', 17)

console.log(pessoa01.idade)


const pessoa001 = {
    nome:'Luisa',
    sobrenome:'Greenfield',
    idade: 17,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi`)
    }
}

pessoa001.fala()