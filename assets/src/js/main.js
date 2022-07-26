//Textarea de entrada de texto
const inputText = document.querySelector('[data-content="userText"]');
//Textarea de saida de texto
const outputText = document.querySelector('[data-content="resultText"]');
//Botao de encrypt
const actionEncrypt = document.querySelector('[data-btn="encryptText"]');
//Botao de encrypt
const actionDecrypt = document.querySelector('[data-btn="decryptText"]');

const actionCopy = document.querySelector('[data-btn="copyText"]');

let codeTxt = ''

actionEncrypt.addEventListener('click', () => {

  if (inputText.value !== ''){
    codeTxt = inputText.value;
    codeTxt = codeTxt.replace(/e/g, "enter");
    codeTxt = codeTxt.replace(/i/g, "imes");
    codeTxt = codeTxt.replace(/a/g, "ai");
    codeTxt = codeTxt.replace(/o/g, "ober");
    codeTxt = codeTxt.replace(/u/g, "ufat");

    outputText.textContent = '';
    outputText.textContent = codeTxt;
    actionCopy.style.display = 'block';
    inputText.value = '';
  }
})

actionDecrypt.addEventListener('click', () => {

  if (inputText.value != ''){
    codeTxt = inputText.value;
    codeTxt = codeTxt.replace(/enter/g, "e");
    codeTxt = codeTxt.replace(/imes/g, "i");
    codeTxt = codeTxt.replace(/ai/g, "a");
    codeTxt = codeTxt.replace(/ober/g, "o");
    codeTxt = codeTxt.replace(/ufat/g, "u");

    outputText.textContent = '';
    outputText.textContent = codeTxt;
    inputText.value = '';
  }
})

actionCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(outputText.textContent)
})

inputText.addEventListener('keypress', function(e) {
  if(!checkChar(e)) {
    e.preventDefault();
  }
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  if(char.match('[a-z]')) {
    console.log(char);
    return true;
  }
}

inputText.addEventListener("paste", function() {
  
  const regex = new RegExp("^[0-9a-zA-Z\b]+$")
  const self = this;

  setTimeout(function() {
    const text = self.value;

    if(!regex.test(text)) {
      self.value = ""
    }
  }, 10)
})