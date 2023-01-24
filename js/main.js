const nameTitle = document.querySelector('.title');
const centerElement = document.querySelector('.center-element');
const loader = document.querySelector('.hex-element');
const wrapper = document.querySelector('.start-website');
const nav = document.querySelector('.mobile');
const navItems = document.querySelectorAll('.nav-item');
const mobileNav = document.querySelector('.nav-mobile');
const burger = document.querySelector('.icon');
const body = document.querySelector('body');
const themes = document.querySelectorAll('.theme-button');
const toggleTheme = document.querySelector('.switch-theme');
const dropdown = document.querySelector('.dropdown');

let navState = "closed";

nameTitle.addEventListener('click', startLoader);
burger.addEventListener('click', toggleNav);
toggleTheme.addEventListener('click', showThemes);

for (const navItem of navItems) {
    navItem.addEventListener('click', function (event) {
        nav.classList.add('invisible');
        mobileNav.classList.remove('bg-color');
    })
}

themes.forEach((theme) => {
    theme.addEventListener('click', (event) => {
        const themeName = event.target.value;
        document.body.setAttribute('data-theme', themeName);
    });
});

function startLoader() {
    const loadWebsite = setTimeout(startWebsite, 3000);
    nameTitle.classList.add('invisible');
    loader.classList.add('visible');
}

function startWebsite() {
    centerElement.remove();
    wrapper.classList.add('wrapper');
    body.classList.add('border');
}

function toggleNav() {
    if (navState == "closed") {
        nav.classList.remove('invisible');
        mobileNav.classList.add('bg-color');
        navState = "open";
    }
    else if (navState == "open") {
        mobileNav.classList.remove('bg-color');
        nav.classList.remove('visible');
        nav.classList.add('invisible');
        navState = "closed";
    }

}

function showThemes() {
    dropdown.classList.toggle("visible");
}