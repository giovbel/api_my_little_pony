'use strict'

const divLinks = document.getElementById('links')
const botaoLinks = document.getElementById('icone')

function mostrarBotao(){
    divLinks.classList.toggle('mostrar')
}

botaoLinks.addEventListener('click', mostrarBotao)