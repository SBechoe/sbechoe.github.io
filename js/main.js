const nameTitle = document.querySelector('.title');
const centerElement = document.querySelector('.center-element');
const loader = document.querySelector('.hex-element');
const wrapper = document.querySelector('.start-website');
const nav = document.querySelector('.mobile');
const burger = document.querySelector('.icon');

let navState = "closed";

nameTitle.addEventListener('click', startLoader);
burger.addEventListener('click', toggleNav);

function startLoader(){
    const loadWebsite = setTimeout(startWebsite, 5000);
    nameTitle.classList.add('invisible');
    loader.classList.add('visible');
}

function startWebsite(){
    centerElement.remove();
    wrapper.classList.add('wrapper');
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