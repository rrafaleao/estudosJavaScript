// try {
//     // executado quando não há erros.
// } catch (e) {
//     // executado quando há erros
// }
// finally{
//     // sempre executado
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date');
    }

    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {

    });
}
try{
    console.log(retornaHora())
} catch(e){
    console.log(e)
} finally{
    console.log('finally')
}