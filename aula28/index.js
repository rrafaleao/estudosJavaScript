const data = new Date();
const diaSemana = data.getDay();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            break;
        case 1:
            diaSemanaTexto = 'segunda'
            break;
        case 2:
            diaSemanaTexto = 'Terça'
            break;
        case 3:
            diaSemanaTexto = 'Quarta'
            break;
        case 4:
            diaSemanaTexto = 'Quinta'
            break;
        case 5:
            diaSemanaTexto = 'Sexta'
            break;
        case 6:
            diaSemanaTexto = 'Sábado'
            break;    
        default:
            diaSemanaTexto = 'Sei la'
            break;
    }
    return diaSemanaTexto
}
console.log(getDiaSemanaTexto(diaSemana))