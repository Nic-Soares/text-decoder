import { ThemeToggle } from "./ui/theme.js";

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM está pronto")
  new ThemeToggle();
});

// ========== TIPOS E INTERFACES ==========
// Interface para definir tipo do switch customizado
// interface CustomSwitch extends HTMLElement {
//   selected: boolean;
// }

// Definição de tipos para tema
// type Theme = 'light' | 'dark';


// ========== SELETORES DOM ==========
// Seletor principal do switch
// const mdSwitch = document.querySelector(".header__switch") as CustomSwitch;

// Seletor alternativo do switch
// const mdSwitch = document.querySelector('.header__switch') as HTMLElement;


// ========== INICIALIZAÇÃO ==========
// Inicialização do ThemeToggle
// const themeToggle = new ThemeToggle();


// ========== EVENT LISTENERS ==========
// Event listener para detectar mudanças no switch
// mdSwitch.addEventListener('change', (event: Event) => {
//   const target = event.target as CustomSwitch;
//   console.log('Switch está:', target.selected);

//   if (target.selected) {
//     // Faça algo quando estiver ligado
//     console.log('Switch está ligado');
//   } else {
//     // Faça algo quando estiver desligado
//     console.log('Switch está desligado');
//   }
// });

// Event listener alternativo com tipagem composta
// mdSwitch.addEventListener('change', (event: Event) => {
//     const target = event.target as HTMLButtonElement & { selected: boolean };
//     console.log(target.selected); // boolean
// });

// Exemplo de uso do checkSwitch
// switchElement.addEventListener('change', function() {
//     console.log(checkSwitch());
// });


// ========== FUNÇÕES UTILITÁRIAS ==========
// Função auxiliar para verificar estado do switch
// function checkSwitch() {
//     // Retorna true se o switch estiver ativado (checked)
//     return switchElement.checked;
// }

// Função para obter tema do localStorage
// const getThemeInStorage = () => {
//   const savedTheme = localStorage.getItem('theme');
//   return (savedTheme as Theme) || 'light'
// };

// Função para obter tema do DOM
// const GetThemeInDOM = () => {
//   const element = document.querySelector('.page') as HTMLElement;
//   const classes = element.classList;
//   // console.log(element)
//   // console.log(classes)
// }

// Função para verificar status do switch (a implementar)
// const getSwitchStatus = () => {

// }