import { Modal } from './modal.js'
import { alertError} from './alertError.js'
import {calculeteIMC, notNumber} from './utils.js'


//váriaveis 
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');



//Ao clicar fecha a janela de erro 
inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()



// três maneiras de criar e atribuir função a um evento
//ARROW FUNCTION
// form.onsubmit =() =>{}


// CRIA O NOME DPS FAZ/
//form.onsubmit = handleSubmit 
//function handleSubmit () {}

form.onsubmit = function (event) {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const ShowAlertError = notNumber(weight) || notNumber(height)
  if (ShowAlertError) {
    alertError.open()
    return;
  }
    alertError.close()
 
  const result = calculeteIMC (weight, height)
  const message = `Seu IMC é de ${result}`


  Modal.message.innerText = message
  Modal.open ()
 
}


