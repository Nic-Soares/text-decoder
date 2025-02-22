// src/ui/theme.ts

// Define os temas possíveis: claro ou escuro
type Theme = 'light' | 'dark';

// Interface para extender o elemento HTML do switch com a propriedade selected
interface CustomSwitch extends HTMLElement {
  selected: boolean;
}

export class ThemeToggle {
  // Propriedades privadas da classe
  private readonly switch: CustomSwitch;
  private readonly textReference: HTMLElement;
  // Chave usada para armazenar o tema no localStorage
  private static readonly STORAGE_KEY = 'theme';
  // Tema padrão caso nenhum seja definido
  private static readonly DEFAULT_THEME: Theme = 'light';

  constructor() {
    // Seleciona os elementos do DOM necessários
    const switchElement = document.querySelector(".header__switch");
    const textElement = document.querySelector(".header__switch-label");

    // Verifica se os elementos necessários foram encontrados
    if (!switchElement || !textElement) {
      throw new Error("Required theme toggle elements not found");
    }

    // Atribui os elementos às propriedades da classe
    this.switch = switchElement as CustomSwitch;
    this.textReference = textElement as HTMLElement;

    // Inicializa o tema
    this.initialize();
  }

  private initialize(): void {
    // Recupera o tema salvo no localStorage ou usa o tema padrão
    const savedTheme = localStorage.getItem(ThemeToggle.STORAGE_KEY) as Theme || ThemeToggle.DEFAULT_THEME;
    this.applyTheme(savedTheme);
    this.setupEventListeners();
  }

  private applyTheme(theme: Theme): void {
    const isDark = theme === 'dark';
    
    // Adiciona ou remove a classe 'dark' do body
    document.body.classList.toggle('dark', isDark);
    // Atualiza o texto do label
    this.textReference.textContent = isDark ? "Dark mode" : "Light mode";
    
    // Atualiza o estado visual do switch
    this.updateSwitch(theme);
    
    // Salva a preferência do tema no localStorage
    localStorage.setItem(ThemeToggle.STORAGE_KEY, theme);
  }

  private updateSwitch(theme: Theme): void {
    // Acessa o shadow DOM do switch
    const mdSwitch = document.querySelector('md-switch')?.shadowRoot;
    if (!mdSwitch) return;

    // Busca elementos dentro do shadow DOM
    const switchDiv = mdSwitch.querySelector('.switch');
    const input = mdSwitch.querySelector('input[type="checkbox"]') as HTMLInputElement;
    
    if (switchDiv && input) {
      const isDark = theme === 'dark';
      // Atualiza as classes do switch conforme o tema
      switchDiv.classList.toggle('selected', isDark);
      switchDiv.classList.toggle('unselected', !isDark);
      // Atualiza o estado do checkbox
      input.checked = isDark;
    }
  }

  private setupEventListeners(): void {
    // Adiciona listener para mudanças no switch
    this.switch.addEventListener('change', this.handleSwitchChange.bind(this));
  }

  private handleSwitchChange(event: Event): void {
    // Manipula a mudança de estado do switch
    const target = event.target as CustomSwitch;
    // Define o novo tema baseado no estado do switch
    const newTheme: Theme = target.selected ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }
}