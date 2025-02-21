// src/ui/theme.ts

// Definir a interface
interface CustomSwitch extends HTMLElement {
  selected: boolean;
}

// Implementar a classe ThemeToggle
export class ThemeToggle {
  private readonly switch: CustomSwitch;
  private readonly textReference: HTMLElement;
  public defaultTheme: String;

  constructor() {
    this.switch = document.querySelector(".header__switch") as CustomSwitch;
    this.textReference = document.querySelector(".header__switch-label") as HTMLElement;

    const pageElement = document.querySelector(".page");
      
    if (!this.switch || !this.textReference || !pageElement) {
      throw new Error("Required elements not found");
    }
      
    this.defaultTheme = pageElement.classList[1];
    this.setupEventListeners();
  }
  
  private setupEventListeners(): void {
    this.switch.addEventListener('change', this.handleSwitchChange.bind(this));
  }
  
  private handleSwitchChange(event: Event): void {
    const target = event.target as CustomSwitch;
    this.textReference.textContent = target.selected ? "Dark mode" : "Light mode";
    
    document.body.classList.toggle('dark', target.selected);
    
    // Salvar preferência
    // localStorage.setItem('theme', target.selected ? 'dark' : 'light');
    
    // console.log(this.defaultTheme)
    // console.log(localStorage.getItem("theme"))
  }
}