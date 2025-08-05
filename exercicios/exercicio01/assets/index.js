const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado')

function recebeEventoForm(evento){
    evento.preventDefault()
    passarHtml()
}

function celsiusToFahrenheit() {
    const celsius = form.querySelector('.celsius').value
    const fahrenheit = ((celsius * 1.8) + 32)
    return fahrenheit
}

function passarHtml() {
    const fahrenheit = celsiusToFahrenheit()
    resultado.innerHTML = `<p> Fahrenheit: ${fahrenheit} </p> `
}

form.addEventListener('submit', recebeEventoForm)