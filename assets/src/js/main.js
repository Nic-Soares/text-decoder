//Extrai o data-content="userText" do HTML e armazena em uma variavel
const inputText = document.querySelector('[data-content="userText"]')
const outputText = document.querySelector('[data-content="resultText"]')
const actionEncrypt = document.querySelector('[data-btn="encryptText"]')

console.log(actionEncrypt)
console.log(inputText)
console.log(outputText)

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