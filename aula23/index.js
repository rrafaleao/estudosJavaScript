/*`

Valores avaliados em false - FALSY
false
"" '' ``
undefined / null
NaN
0

*/

function falaOi(){
    return 'Oi!'
}
const vaiExecutar = true
console.log(vaiExecutar && falaOi())


const corPadrao = 'Azul'
const corUsuario = null

console.log(corUsuario || corPadrao)