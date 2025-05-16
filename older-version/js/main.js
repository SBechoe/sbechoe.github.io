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
const quoteDiv = document.createElement('div');
const quoteBlock = document.querySelector('.quote');
// const nextQuote = document.querySelector('.quote-btn');
const currentTheme = localStorage.getItem('theme');

let navState = "closed";
let quoteData = [];
let quoteIndex = 0;

nameTitle.addEventListener('click', startLoader);
burger.addEventListener('click', toggleNav);
toggleTheme.addEventListener('click', showThemes);
// nextQuote.addEventListener('click', getQuotes);

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

let url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";
// url = "https://api.kanye.rest/";

function getQuotes() {
    fetch(url)
        .then(myData => myData.json())
        .then(textData => showData(textData));
}

function showData(data) {
    console.log(data);
    quoteDiv.innerHTML = `${data.quote}`;
    quoteData = data;
    quoteIndex = 0;
    nextQuoteFnc();

    quoteBlock.append(quoteDiv);
}

function nextQuoteFnc() {
    quoteDiv.innerHTML = `${quoteData[quoteIndex].content.rendered}`;
    quoteIndex++;
    if (quoteIndex >= quoteData.length) {
        getQuotes();
    }
}

getQuotes();


