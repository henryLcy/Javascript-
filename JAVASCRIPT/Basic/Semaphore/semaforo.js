const img = document.getElementById ('img');
const buttons = document.getElementById('buttons');
let colorindex = 0;
let intervalID = null;



const traffic = ( event ) => {
    stopautomatic();
    turnOn[event.target.id]();
}

const nextindex = () => {
    if (colorindex < 2) {
    colorindex++
    } else {
        colorindex = 0;
    }
}

const stopautomatic = () => {
    clearInterval (intervalID);
}

const changecolor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorindex];
    turnOn[color]();
    nextindex();
}
    
const turnOn = {
    'red': () => img.src ='./img/vermelho.png',
    'yellow': () => img.src ='./img/amarelo.png',
    'green': () => img.src ='./img/verde.png',
    'desligar': () => img.src ='./img/desligado.png',
    'automatic': () => intervalID = setInterval(changecolor, 1000)
}
buttons.addEventListener('click', traffic)
