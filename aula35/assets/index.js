const frases = [
    {tag: 'p', texto : 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'},
];

const container = document.querySelector('.container')
const div = document.createElement('div');

for (let i = 0; i < frases.length; i++) {
    let { tag, texto  } = frases[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div)