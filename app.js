const button = document.querySelector('.button');
const divInput = document.querySelector('.input');
const divError = document.querySelector('.error');
const divCorrect = document.querySelector('.correct');
const campoEmail = document.querySelector('.container2');

button.addEventListener('click', addCorrect);

function addCorrect(){
    const input = divInput.value;
    if (input != '') {
        campoEmail.classList.add('esconder');
        divCorrect.classList.remove('esconder');
        divError.classList.add('esconder');
    } else {
        divError.classList.remove('esconder');
    }return
}