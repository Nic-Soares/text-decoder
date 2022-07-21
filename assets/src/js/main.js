const inputText = document.querySelector('[data-content="userText"]');
const actionEncrypt = document.querySelector('[data-btn="encryptText"]')

actionEncrypt.addEventListener("click", () => {
    console.log(inputText.value)
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