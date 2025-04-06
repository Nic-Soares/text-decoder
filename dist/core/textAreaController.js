import encodeText from "./encoder.js";
import decodeText from "./decoder.js";
const inputTextArea = document.querySelector('[data-content="userText"]');
const resultTextArea = document.querySelector('[data-content="resultText"]');
const resultBox = document.querySelector('.result__output');
const resultBoxEmpty = document.querySelector('.result__empty');
const main = document.querySelector('.main');
const encryptButtons = document.querySelectorAll('[data-btn="encoder__button--encrypt"]');
const decryptButtons = document.querySelectorAll('[data-btn="encoder__button--decrypt"]');
const resultSection = document.querySelector('.result__output');
export function filterInput(event) {
    const input = event.target;
    const resultado = input.value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z\s]/g, '')
        .replace(/\s+/g, ' ');
    input.value = resultado;
}
function handleEncryption() {
    if (inputTextArea.value !== '') {
        const encryptedText = encodeText(inputTextArea.value);
        updateUI(encryptedText);
        clearInput();
    }
}
function handleDecryption() {
    if (inputTextArea.value !== '') {
        const decryptedText = decodeText(inputTextArea.value);
        updateUI(decryptedText);
        clearInput();
    }
}
function handleCopy() {
    if (resultTextArea.textContent) {
        navigator.clipboard.writeText(resultTextArea.textContent)
            .then(() => {
            const originalBgColor = resultSection.style.backgroundColor;
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Copiado!';
            tooltip.style.position = 'absolute';
            tooltip.style.padding = '5px 10px';
            tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            tooltip.style.color = 'white';
            tooltip.style.borderRadius = '4px';
            tooltip.style.top = '50%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translate(-50%, -50%)';
            tooltip.style.zIndex = '1000';
            resultSection.style.position = 'relative';
            resultSection.appendChild(tooltip);
            setTimeout(() => {
                resultSection.style.backgroundColor = originalBgColor;
                resultSection.removeChild(tooltip);
            }, 1500);
        })
            .catch(err => {
            console.error('Falha ao copiar o texto: ', err);
        });
    }
}
function updateUI(text) {
    resultBoxEmpty.classList.add('hidden');
    main.classList.add('expanded');
    resultBox.classList.remove('hidden');
    resultBox.classList.add('visible');
    resultTextArea.textContent = text;
}
function clearInput() {
    inputTextArea.value = '';
}
export function initializeTextAreaController() {
    inputTextArea.addEventListener('input', filterInput);
    encryptButtons.forEach(button => {
        button.addEventListener('click', handleEncryption);
    });
    decryptButtons.forEach(button => {
        button.addEventListener('click', handleDecryption);
    });
    resultSection.addEventListener('click', handleCopy);
}
//# sourceMappingURL=textAreaController.js.map