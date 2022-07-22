//Textarea de entrada de texto
const inputText = document.querySelector('[data-content="userText"]')
//Textarea de saida de texto
const outputText = document.querySelector('[data-content="resultText"]')
//Botao de encrypt
const actionEncrypt = document.querySelector('[data-btn="encryptText"]')
//Botao de encrypt
const actionDecrypt = document.querySelector('[data-btn="decryptText"]')

console.log(inputText)
console.log(outputText)
console.log(actionEncrypt)
console.log(actionDecrypt)

let codeTxt = ''

actionEncrypt.addEventListener('click', () => {

  if (inputText.value != ''){
    codeTxt = inputText.value;
    codeTxt = codeTxt.replace(/e/g, "enter");
    codeTxt = codeTxt.replace(/i/g, "imes");
    codeTxt = codeTxt.replace(/a/g, "ai");
    codeTxt = codeTxt.replace(/o/g, "ober");
    codeTxt = codeTxt.replace(/u/g, "ufat");

    inputText.value = '';
    outputText.textContent = '';
    outputText.textContent = codeTxt;

    console.log(outputText)
  }

  inputText.textContent = ''
})

actionDecrypt.addEventListener('click', () => {

  if (inputText.value != ''){
    codeTxt = inputText.value;
    codeTxt = codeTxt.replace(/enter/g, "e");
    codeTxt = codeTxt.replace(/imes/g, "i");
    codeTxt = codeTxt.replace(/ai/g, "a");
    codeTxt = codeTxt.replace(/ober/g, "o");
    codeTxt = codeTxt.replace(/ufat/g, "u");

    inputText.value = '';
    outputText.textContent = '';
    outputText.textContent = codeTxt;

    console.log(outputText)
  }

  inputText.textContent = ''
})

// encryptButton.addEventListener("click", event => {
//     event.preventDefault();

//     let el = event.target; //capta o click

//     if (el.classList.contains("submitText")){

//         console.log(userInput.value)
//         userInput.focus();
//     }
// })

// window.addEventListener("keyup", event => {

//     if (event.keyCode === 13){
//         console.log(userInput.value)
//         userInput.focus();
//     }

// })