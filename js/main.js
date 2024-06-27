const navLinks = document.querySelector('.nav-links');
const navMenu = document.querySelector('.nav-menu');
const progressBar = document.querySelector(".progress-bar");
const totalHeight = document.body.scrollHeight - window.innerHeight;

navMenu.addEventListener('click', onToggleMenu);

function onToggleMenu() {
    console.log("hoi :)");
    navLinks.classList.toggle('top-[8vh]');
}

window.onscroll = function () {
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progressHeight + "%";
};