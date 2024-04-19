var ligar = document.getElementById("ligar")
var desligar = document.getElementById("desligar")
var lampada = document.getElementById("lampada")

function ligarLamp(){

    lampada.src = './img/ligada.jpg'

}

function desligarLamp(){

    lampada.src = './img/desligada.jpg'

}

ligar.addEventListener('click', ligarLamp)
desligar.addEventListener('click', desligarLamp)
