import { ThemeToggle } from "./ui/theme.js";
import { initializeTextAreaController } from "./core/textAreaController.js";
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM está pronto");
    new ThemeToggle();
    initializeTextAreaController();
});
//# sourceMappingURL=index.js.map