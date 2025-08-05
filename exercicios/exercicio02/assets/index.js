const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')

function recebeEventoForm(evento) {
    evento.preventDefault()
    passarHtml()
}

function adicionaPessoa(){
    const nome = form.querySelector('.nome').value
    const nota = form.querySelector('.nota').value
    const pessoas = []

    pessoas.push([{
        nome:nome,
        nota:nota
    }])
    console.log(pessoas.nome)
    return pessoas
}

function passarHtml(){
    pessoas = adicionaPessoa()
    console.log(pessoas)
    resultado.innerHTML += `${pessoas[0][0].nome}, ${pessoas[0][0].nota} <br>`
}

form.addEventListener('submit', recebeEventoForm)