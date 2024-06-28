const navLinks = document.querySelector('.nav-links');
const navMenu = document.querySelector('.nav-menu');
const progressBar = document.querySelector(".progress-bar");
const otherVersionBtn = document.querySelector('.other-version-btn');
const verionList = document.querySelector('.version-list');
const totalHeight = document.body.scrollHeight - window.innerHeight;

navMenu.addEventListener('click', onToggleMenu);
otherVersionBtn.addEventListener('click', openVersionList);

function onToggleMenu() {
    navLinks.classList.toggle('top-[8vh]');
}

function openVersionList() {
    verionList.classList.toggle('hidden');
    const closeList = setTimeout(closeVerionlist, 3000);
}

function closeVerionlist() {    
    verionList.classList.toggle('hidden');
}

window.onscroll = function () {
    const progressHeight = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progressHeight + "%";
};