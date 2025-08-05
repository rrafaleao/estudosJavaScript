// Function hoisting = Não importa onde a função é criada, ela sempre é elevada, pelo motor do js, para o topo do arquivo
falaOi()


function falaOi() {
    console.log('oi')
}

// first class objects
// function expression
// uma constante recebendo o valor de uma função
const souUmDado = function () {
    console.log('Sou um dado')
}
souUmDado()

function executaFuncao(funcao) {
    funcao()
    // função que executa outra função recebida por parametro (que loucura kkkk)
}

// arrow function
const arrowFunction = () => {
    console.log('arrow function')
}

// Função dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando')
    }
}

obj.falar()