const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('.theme-switch__toggle');

if (localStorage.getItem('DARK') !== null) {
    document.body.classList.add(localStorage.getItem('DARK'));
    checkboxRef.checked = true;
} else {
    checkboxRef.checked = false;
};

checkboxRef.addEventListener('change', () => {
    if (checkboxRef.checked === true) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        localStorage.setItem('DARK', theme.DARK);
        localStorage.removeItem('LIGHT', theme.LIGHT);
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        localStorage.setItem('LIGHT', theme.LIGHT);
        localStorage.removeItem('DARK', theme.DARK);
    }
});