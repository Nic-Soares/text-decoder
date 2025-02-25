// src/ui/theme.ts

type Theme = 'light' | 'dark';

interface CustomIconButton extends HTMLElement {
  selected: boolean;
}

export class ThemeToggle {
  private readonly button: CustomIconButton;
  private static readonly STORAGE_KEY = 'theme';
  private static readonly DEFAULT_THEME: Theme = 'light';

  constructor() {
    const buttonElement = document.querySelector("md-outlined-icon-button[toggle]");

    if (!buttonElement) {
      throw new Error("Required theme toggle button not found");
    }

    this.button = buttonElement as CustomIconButton;
    this.initialize();
  }

  private initialize(): void {
    const savedTheme = localStorage.getItem(ThemeToggle.STORAGE_KEY) as Theme || ThemeToggle.DEFAULT_THEME;
    this.applyTheme(savedTheme);
    this.setupEventListeners();
  }

  private applyTheme(theme: Theme): void {
    const isDark = theme === 'dark';
    
    // Atualiza a classe no body
    document.body.classList.toggle('dark', isDark);
    
    // Atualiza o estado do botão
    this.button.selected = isDark;
    
    // Salva a preferência
    localStorage.setItem(ThemeToggle.STORAGE_KEY, theme);
  }

  private setupEventListeners(): void {
    this.button.addEventListener('click', this.handleButtonClick.bind(this));
  }

  private handleButtonClick(): void {
    // O botão já alterna automaticamente o estado 'selected'
    const newTheme: Theme = this.button.selected ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }
}