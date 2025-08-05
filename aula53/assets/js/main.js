let contador = Number(localStorage.getItem('contador')) || 0;
let pagina = Number(localStorage.getItem('pagina')) ;

function recomecar(){
    window.location.reload();

}

if (pagina >= 4){
    document.body.innerHTML = `<h1>Quiz finalizado!</h1><p>Você acertou ${contador} de 4 perguntas.</p> <br> <button type='reset'> recomecar</button>`;
    localStorage.removeItem('pagina');
    localStorage.removeItem('contador');
}

console.log(pagina)

const pergunta = document.getElementById('titulo-pergunta');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

const quiz = {
    perguntas: ['Quanto é 1+1?', 'Quanto é 4+2?', 'Quanto é 1+9?', 'Quanto é 7+5?'],
    opcoes: [[2,4,5,6], [5,2,1,6], [11,9,10,14], [12, 11, 10, 13]],
    respostaCorreta: [2, 6, 10, 12],
};
pergunta.innerHTML = quiz.perguntas[pagina];


op1.innerHTML = quiz.opcoes[pagina][0];
op2.innerHTML = quiz.opcoes[pagina][1];
op3.innerHTML = quiz.opcoes[pagina][2];
op4.innerHTML = quiz.opcoes[pagina][3];


document.addEventListener('click', function(e){
    const el = e.target;
    const botao = e.target.tagName;

    if(el === op1){
        if (quiz.opcoes[pagina][0] === quiz.respostaCorreta[pagina]){
            contador++;
            localStorage.setItem('contador', contador);
        }
    }
    else if(el === op2){
        if (quiz.opcoes[pagina][1] === quiz.respostaCorreta[pagina]){
            contador++;
            localStorage.setItem('contador', contador);
        }
    }
    else if(el === op3){
        if (quiz.opcoes[pagina][2] === quiz.respostaCorreta[pagina]){
            contador++;
            localStorage.setItem('contador', contador);
        }
    }
    else if(el === op4){
        if (quiz.opcoes[pagina][3] === quiz.respostaCorreta[pagina]){
            contador++;
            localStorage.setItem('contador', contador);
        }
    }

    if(botao === 'BUTTON'){
        localStorage.setItem('pagina', pagina + 1);
        window.location.reload();
    }
});