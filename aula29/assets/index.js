data = new Date()

let diaSemana = data.getDay()
const dia = data.getDate()
const mes = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const minutos = data.getMinutes()

function diaSemanaToString(diaSemana){
    let diaSemanaTexto
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = 'ERRO: Dia não encontrado';
            break;
    }
    return diaSemanaTexto
}

function mesToString(mes) {
    let mesString
    switch (mes) {
        case 0:
            mesString = 'Janeiro';
            break;
        case 1:
            mesString = 'Fevereiro';
            break;
        case 2:
            mesString = 'Março';
            break;
        case 3:
            mesString = 'Abril';
            break;
        case 4:
            mesString = 'Maio';
            break;
        case 5:
            mesString = 'Junho';
            break;
        case 6:
            mesString = 'Julho';
            break;
        case 7:
            mesString = 'Agosto';
            break;
        case 8:
            mesString = 'Setembro';
            break;
        case 9:
            mesString = 'Outubro';
            break;
        case 10:
            mesString = 'Novembro';
            break;
        case 11:
            mesString = 'Dezembro';
            break;
        default:
            mesString = 'ERRO: mes não encontrado'
            break;
    }
    return mesString    
}

const mesString = (mesToString(mes))
const diaSemanaString = (diaSemanaToString(diaSemana))

function passarHtml(diaSemanaString, dia, mesString, ano, hora, minutos){
    const passaInfo = document.querySelector('.horario')
    passaInfo.innerHTML = `${diaSemanaString}, ${dia} de ${mesString} de ${ano}, ${hora}:${minutos}`
}

console.log(passarHtml(diaSemanaString, dia, mesString, ano, hora, minutos))