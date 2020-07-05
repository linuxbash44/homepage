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
    }
    changeTheme()
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
        changeTheme()
    })
});
