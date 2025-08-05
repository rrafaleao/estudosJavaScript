const relogio = document.querySelector('.relogio')
const zerar = document.querySelector('.zerar')
const pausar = document.querySelector('.pausar')
const iniciar = document.querySelector('.iniciar')
let segundos = 0;
let timer;

function criaHoraDosSegundo(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'UTC'
    })
}

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundo(segundos)
    }, 1000)}

iniciar.addEventListener('click', function() {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()  
})

pausar.addEventListener('click', function() {
    clearInterval(timer)
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function() {
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = `00:00:00`
})

// Maneira de selecionar todos os cliques do documento, simplificando bastante o codigo :)
// Dessa maneira, faz com que as variaveis (relogio, zerar, pausar, iniciar) que são pegadas no inicio do codigo de maneira manual, não precisem
// ser pegas, pois tudo já está sendo pego; 
//
// document.addEventListener('click', function(e) {
//     el = e.target;

//     if(el.classList.contains('zerar')){
//         clearInterval(timer)
//          segundos = 0
//           relogio.innerHTML = `00:00:00`
//     }
// })
//     if(el.classList.contains('pausar')){
//         clearInterval(timer)
//         relogio.classList.add('pausado')
//     }
// })
//     if(el.classList.contains('iniciar')){
//         relogio.classList.remove('pausado')
//         clearInterval(timer)
//         iniciaRelogio()  
//     }
// })
