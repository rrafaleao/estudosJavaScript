const nome = "Pedro"

function falaOi() {
    const nome = 'Rafael'
    console.log(`Olá ${nome}`)
}

function testeEscopo() {
    const nome = 'João'
    falaOi()
}

testeEscopo()