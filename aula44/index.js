// try, catch, throw;
// se ocorrer qualquer erro dentro do bloco try, ele vai ficar armazenado na variavel do catch e pode ser tratato de lá. catch só
// é executado quando acontece algum erro. 

// function soma(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw('x e y precisam ser números');
//     }
//     return x + y
// }

// try{
//     soma(1,2);
//     soma('1', 2)
// } catch(e){
//     console.log(e);
// }

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números');
    }
    return x + y
}

try{
    soma(1,2);
    soma('1', 2)
} catch(e){
    console.log(e);
}