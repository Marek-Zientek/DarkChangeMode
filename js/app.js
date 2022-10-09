class DarkMode {
    constructor() {
        this.button = document.querySelector("#checkbox");
        this.init();
        this.theme = localStorage.getItem("theme");
    }

    init() {
        if ( this.theme ) {
            document.documentElement.setAttribute("data-theme", this.theme);
        }

        if ( this.theme === "dark" ) this.button.checked = true;

        this.button.addEventListener("change", this.switchTheme);
    }

    switchTheme = (e) => {
        let theme = e.target.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
}

const darkMode = new DarkMode();
