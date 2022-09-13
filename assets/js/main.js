const navBlock = document.querySelector('.nav__block');
const navMenu = document.querySelector('.nav__menu');

const handleClick = (e) => {
    navBlock.classList.toggle('active');
    navMenu.classList.toggle('active__menu');
}


navBlock.addEventListener('click', handleClick);
