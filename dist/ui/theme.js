export class ThemeToggle {
    button;
    static STORAGE_KEY = 'theme';
    static DEFAULT_THEME = 'light';
    constructor() {
        const buttonElement = document.querySelector("md-outlined-icon-button[toggle]");
        if (!buttonElement) {
            throw new Error("Required theme toggle button not found");
        }
        this.button = buttonElement;
        this.initialize();
    }
    initialize() {
        const savedTheme = localStorage.getItem(ThemeToggle.STORAGE_KEY) || ThemeToggle.DEFAULT_THEME;
        this.applyTheme(savedTheme);
        this.setupEventListeners();
    }
    applyTheme(theme) {
        const isDark = theme === 'dark';
        document.body.classList.toggle('dark', isDark);
        this.button.selected = isDark;
        localStorage.setItem(ThemeToggle.STORAGE_KEY, theme);
    }
    setupEventListeners() {
        this.button.addEventListener('click', this.handleButtonClick.bind(this));
    }
    handleButtonClick() {
        const newTheme = this.button.selected ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }
}
//# sourceMappingURL=theme.js.map