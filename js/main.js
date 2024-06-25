const navLinks = document.querySelector('.nav-links');
const navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', onToggleMenu);

function onToggleMenu() {
    console.log("WAAROMMMM");
    navLinks.classList.toggle('top-[8vh]');
}