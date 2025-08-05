// Parametros de função / um pouco mais avançado kkkk

function funcao(){
    // arguments guarda todos os parametros que estão sendo passados, mesmo que a funcao nao receba nenhum parametro
    // Arguments so existe dentro de uma function
    console.log(arguments[10])
}

// Passando parametros para uma funcao que não recebe parametros, se esperaria um erro, mas nada acontece,
// pois esses parametros estão sendo guardados no arguments.
funcao('valor',1,2,3,4,5,6,7,8,9,10)

//////////////////////////////
// é possivel enviar menos parametros do que a função pede, isso não da erro, mas as variaveis que faltaram ser preenchidas viram undefined
function aaaaa(a, b, c, d, e){
    console.log(a,b,c,d,e)
}
aaaaa(1,2,3)

//////////////////////
// jeito de fazer com que seja assumido um valor, caso ele não seja enviado.
function soma(a, b = 2, c = 4){
    console.log(a + b + c)
}

soma(1) 



// Desestruturação de objetos ou arrays 

function desestrutura({nome: nome, sobrenome:sobrenome, idade:idade}){
    console.log(nome, sobrenome, idade)
}

// funciona para array também;
desestrutura({nome: 'Rafael', sobrenome:'Leão', idade:20})



////////////

function restoParametros(op, acumulador, ...numeros){
    console.log(op, acumulador, numeros)
}
// salva todos os parametors restantes no parametro numeros, como um array;
restoParametros('+', 0, 1,2,3,4,5)