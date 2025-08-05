let numero = (Number(prompt('Qual seu numero: ')));

respostas = document.getElementById('respostas')
numeroTitulo = document.getElementById('numero-titulo')

numeroTitulo.innerHTML = numero;
respostas.innerHTML += `<p> A raiz quadrada do numero é: ${Math.sqrt(numero)}</p>`
respostas.innerHTML += `<p> O numero é inteiro? ${Number.isInteger(numero)}</p>`
respostas.innerHTML += `<p> é um NaN? ${Number.isNaN(numero)}</p>`
respostas.innerHTML += `<p> O Numero arredondado para baixo é: ${Math.floor(numero)}</p>`
respostas.innerHTML += `<p> O numero arredondado para cima é: ${Math.ceil(numero)}</p>`
respostas.innerHTML += `<p> O numero com duas casas decimais é: ${numero.toFixed(2)}</p>`