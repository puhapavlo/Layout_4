const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.header__link');
const menuWrapper = document.querySelector('.header__wrapper');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active');
    menu.classList.toggle('header__menu_active');
    document.body.classList.toggle('lock');
    menuWrapper.classList.toggle('header__wrapper_active');
});

menuLink.forEach((link) => {
    link.addEventListener('click', () => {
        burger.classList.remove('header__burger_active');
        menu.classList.remove('header__menu_active');
        document.body.classList.remove('lock');
        menuWrapper.classList.remove('header__wrapper_active');
    })
});

