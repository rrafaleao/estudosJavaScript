// for in - estrutura repetição;

const frutas = ['Uva','Maça','Banana'];

for(i in frutas){
    console.log(i)
}

const pessoa = {
    nome:'Rafael',
    sobrenome:'Leão',
    idade: 18,
};

for(chave in pessoa){
    console.log(chave, pessoa[chave])
}