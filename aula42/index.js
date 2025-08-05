// exercicio 2
// escreva uma função chamada ePaisagem que recebe dois numeros, largura e altura de uma imagem (number).
// retorne True se a imagem estiver no modo paisagem

function ePaisagem(largura, altura){
    if(largura > altura){
        return true
    }
    return false
}

const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1280, 720))