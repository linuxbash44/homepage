const setValue = (property, value) => {
    if (value) {
        document.documentElement.style.setProperty(`--${property}`, value);

        const input = document.querySelector(`#${property}`);
        if (input) {
            value = value.replace('px', '');
            input.value = value;
        }
    }
};

const setTheme = options => {
    for (let option of Object.keys(options)) {
        const property = option;
        const value = options[option];

        setValue(property, value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const statusBar = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "black-translucent" : "default"
    const theme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "#242B33" : "#F2F7FF"
    const lightTheme = () => setTheme({
        'color-background': '#F2F7FF',
        'color-text-pri': '#000000',
        'color-text-acc': '#5c5c5c'
    });
    const darkTheme = () => setTheme({
        'color-background': '#242B33',
        'color-text-pri': '#EFFBFF',
        'color-text-acc': '#6EE2FF'
    });
    const changeTheme = () => {
        window.matchMedia('(prefers-color-scheme: dark)').matches ?  darkTheme() : lightTheme()
        document.getElementById("theme").setAttribute("content", theme())
        document.getElementById("status-bar").setAttribute("content", statusBar())
    }
    changeTheme()
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
        changeTheme()
    })
});
