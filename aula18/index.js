function saudacao(nome){
    console.log(`bom dia ${nome}!`)
}

saudacao('Luisa')
saudacao('Rafael')

function somar(x, y){
    const resultado = x + y
    return resultado
}

console.log(somar(2, 4))
console.log(somar(10, 5))


const raiz = function(n){
    return Math.sqrt(n)
};

console.log(raiz(9))

const nMais2 = (n) => n + 2

console.log(nMais2(10))