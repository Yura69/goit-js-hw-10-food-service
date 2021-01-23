const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('.theme-switch__toggle');

if (localStorage.getItem('DARK') !== null) {
  document.body.classList.add(theme.DARK);
  checkboxRef.checked = true;
} else {
  checkboxRef.checked = false;
  document.body.classList.add(theme.LIGHT);
}

checkboxRef.addEventListener('change', () => {
  if (checkboxRef.checked === true) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'DARK');
    localStorage.removeItem('theme', 'LIGHT');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'LIGHT');
    localStorage.removeItem('theme', 'DARK');
  }
});
