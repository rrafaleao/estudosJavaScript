const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros){
    if(numero === 3){
        continue;
    }
    console.log(numero)

    if(numero === 7){
        console.log("achei o 7");
        break;
    }
}

// continue pula para a proxima iteração do laço, fazendo com que não seja executado o que estiver abaixo dele, naquela iteração;
// break quebra a iteração do laço, fazendo com que não seja buscado mais nada.