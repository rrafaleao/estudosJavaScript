    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    function recebeEventoForm(evento) {
        evento.preventDefault()
        const valorCalculo = calcular()
        resultado.innerHTML = `Resultado: ${valorCalculo}`
    }

    function pegaNumeros() {
        const num1 = form.querySelector('.num1').value
        const num2 = form.querySelector('.num2').value
        const operacao = form.querySelector('.operacao').value
        return [num1, num2, operacao]
    }

    function calcular() {
        const [num1, num2, operacao] = pegaNumeros()
        const numero1 = parseInt(num1)
        const numero2 = parseInt(num2)
        let resultado
        if (operacao === '-'){
            resultado = numero1 - numero2 
        } else if (operacao === '+'){
            resultado = numero1 + numero2
        } else if (operacao === 'x'){
            resultado = numero1 * numero2
        } else if (operacao === '/'){
            resultado = numero1 / numero2
        }
    return resultado
    }

    form.addEventListener('submit', recebeEventoForm)
