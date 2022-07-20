const turnon = document.getElementById( 'turnon' );
const turnoff = document.getElementById( 'turnoff' );
const lamp = document.getElementById( 'lamp' );
const restore = document.getElementById ('restore')
const quebrar = document.getElementById ('quebrar')
const TurnOnOff = document.getElementById ('TurnOnOff')


function lampon () {
    if (!isbroke ())
    lamp.src = './img/ligada.jpg'
}

function lampoff () {
    if (!isbroke ())
    lamp.src = './img/desligada.jpg'
}

function lampoffplus () {
    lamp.src = './img/desligada.jpg'
}

function lampbroke () {
    lamp.src = './img/quebrada.jpg'
}

function isbroke () {
    return lamp.src.indexOf ('quebrada') > -1
}

function desligada(){
    return lamp.src.indexOf ('desligada') > -1
}

function lamponoff(){
    if (desligada ()){
    lamp.src = './img/ligada.jpg';}
    else{lamp.src = './img/desligada.jpg'}
}





TurnOnOff.addEventListener ('click', lamponoff)
turnon.addEventListener ('click', lampon);
turnoff.addEventListener ('click', lampoff);
quebrar.addEventListener('click', lampbroke)
lamp.addEventListener('mouseover', lampon )
lamp.addEventListener('mouseleave', lampoff);
lamp.addEventListener('dblclick', lampbroke);
restore.addEventListener ('click', lampoffplus)



