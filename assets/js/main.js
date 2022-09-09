const navBlock = document.querySelector('.nav__block');
const navMenu = document.querySelector('.nav__menu');
console.log(navBlock);
navBlock.addEventListener('click', () => {
    navBlock.classList.toggle('active');
    navMenu.classList.toggle('active__menu');
});
