const themeSelector = document.querySelector('#theme-select');
function changeTheme() {
    const selectorValue = themeSelector.value;
    if (selectorValue == 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.logo').src = 'byui-logo_white.png';
    }
    else{
        document.body.classList.remove('dark');
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
    }

}

themeSelector.addEventListener('change', changeTheme);