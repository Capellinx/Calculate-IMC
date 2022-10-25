import { AlertError } from './alert-error.js';
import { IMC, notNumber } from './utils.js';
import { Modal } from './modal.js';

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () =>  AlertError.close()
inputHeight.oninput = () =>  AlertError.close()

form.onsubmit = (e) => {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
    
    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }
        
    const result = IMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}
