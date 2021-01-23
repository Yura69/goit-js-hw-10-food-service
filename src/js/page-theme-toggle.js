const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('.theme-switch__toggle');
if (theme.DARK !== null) {
  checkboxRef.checked = true;
  document.body.classList.add(theme.LIGHT);
} else {
  checkboxRef.checked = false;
  document.body.classList.add(theme.DARK);
}

checkboxRef.addEventListener('change', () => {
  if (checkboxRef.checked === true) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'DARK');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'LIGHT');
  }
});
