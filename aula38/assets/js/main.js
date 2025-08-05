const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorr = estilosBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor = backgroundColorr;
    p.style.color = 'white';
}