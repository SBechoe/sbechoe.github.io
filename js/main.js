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
const quoteBlock = document.querySelector('.quote');
const currentTheme = localStorage.getItem('theme');

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

themes.forEach(theme => {
    theme.addEventListener('click', () => changeTheme(theme.dataset.theme));
});

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

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
    // if (navState == "closed") {
    //     nav.classList.remove('invisible');
    //     mobileNav.classList.add('bg-color');
    //     navState = "open";
    // }
    // else if (navState == "open") {
    //     mobileNav.classList.remove('bg-color');
    //     nav.classList.remove('visible');
    //     nav.classList.add('invisible');
    //     navState = "closed";
    // }
    nav.classList.toggle('invisible');
    mobileNav.classList.toggle('bg-color');
}

function changeTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    showThemes();
}
function showThemes() {
    dropdown.classList.toggle("flex");
    body.classList.toggle('border');
}

fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
    .then(myData => myData.json())
    .then(textData => alterData(textData));

function alterData(data) {
    const quoteDiv = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(data[i].content.rendered);
        quoteDiv.innerHTML = `${data[i].content.rendered}`;
    }
    quoteBlock.append(quoteDiv);
}
