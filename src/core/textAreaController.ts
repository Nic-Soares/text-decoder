// export class InputAreaController {
//   private inputText: HTMLTextAreaElement;
  
//   constructor() {
//     this.inputText = document.querySelector('[data-content=userText]') as HTMLTextAreaElement;
//   }
// }

import encodeText from "./encoder.js"

// Elementos DOM
const inputTextArea = document.querySelector('[data-content="userText"]') as HTMLTextAreaElement;
const resultTextArea = document.querySelector('[data-content="resultText"]') as HTMLTextAreaElement;
const resultBox = document.querySelector('.result__output') as HTMLElement;
const resultBoxEmpty = document.querySelector('.result__empty') as HTMLElement;
const main = document.querySelector('.main') as HTMLElement;

// Obtém TODOS os botões de criptografar e descriptografar (nas seções de encoder e result)
const encryptButtons = document.querySelectorAll('[data-btn="encoder__button--encrypt"]') as NodeListOf<HTMLElement>;
const decryptButtons = document.querySelectorAll('[data-btn="encoder__button--decrypt"]') as NodeListOf<HTMLElement>;
const copyButton = document.querySelector('[data-btn="copyText"]') as HTMLElement;

// Controle de input
export function filterInput(event: Event) {
  const input = event.target as HTMLTextAreaElement;
  const resultado = input.value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z\s]/g, '')
      .replace(/\s+/g, ' ');
  
  input.value = resultado;
}

// Manipulação da UI
function handleEncryption() {
  if (inputTextArea.value !== '') {
    const encryptedText = encodeText(inputTextArea.value);
    updateUI(encryptedText);
    clearInput();
  }
}

function handleDecryption() {
  if (inputTextArea.value !== '') {
    const decryptedText = encodeText(inputTextArea.value);
    updateUI(decryptedText);
    clearInput();
  }
}

function handleCopy() {
  if (resultTextArea.textContent) {
    navigator.clipboard.writeText(resultTextArea.textContent)
      .then(() => {
        // Feedback visual opcional de que a cópia foi bem-sucedida
        copyButton.textContent = "Copiado!";
        setTimeout(() => {
          copyButton.textContent = "Copiar";
        }, 2000);
      })
      .catch(err => {
        console.error('Falha ao copiar o texto: ', err);
      });
  }
}

function updateUI(text: string) {
  resultBoxEmpty.classList.add('hidden');
  main.classList.add('expanded');
  resultBox.classList.remove('hidden');
  resultBox.classList.add('visible');
  resultTextArea.textContent = text;
}

function clearInput() {
  inputTextArea.value = '';
}

// Inicialização dos event listeners
export function initializeTextAreaController() {
  inputTextArea.addEventListener('input', filterInput);
  
  // Adiciona event listeners para TODOS os botões de criptografar e descriptografar
  encryptButtons.forEach(button => {
    button.addEventListener('click', handleEncryption);
  });
  
  decryptButtons.forEach(button => {
    button.addEventListener('click', handleDecryption);
  });
  
  // Adiciona funcionalidade de cópia
  copyButton.addEventListener('click', handleCopy);
}