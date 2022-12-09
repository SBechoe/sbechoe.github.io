const nameTitle = document.querySelector('.title');
const centerElement = document.querySelector('.center-element');
const loader = document.querySelector('.hex-element');
const wrapper = document.querySelector('.start-website');
const nav = document.querySelector('.mobile');
const navItems= document.querySelectorAll('.nav-item');
const burger = document.querySelector('.icon');
const body = document.querySelector('body');

let navState = "closed";

nameTitle.addEventListener('click', startLoader);
burger.addEventListener('click', toggleNav);

for (const navItem of navItems) {
    navItem.addEventListener('click', function(event) {
        nav.classList.add('invisible');
    })
  }

function startLoader(){
    const loadWebsite = setTimeout(startWebsite, 3000);
    nameTitle.classList.add('invisible');
    loader.classList.add('visible');
}

function startWebsite(){
    centerElement.remove();
    wrapper.classList.add('wrapper');
    body.classList.add('border');
}

function toggleNav(){
    if(navState == "closed"){
        nav.classList.remove('invisible');
        navState = "open";
    }
    else if(navState == "open"){
        nav.classList.remove('visible');
        nav.classList.add('invisible');
        navState = "closed";
    }

}
