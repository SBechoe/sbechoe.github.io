const nameTitle = document.querySelector('.title');
const centerElement = document.querySelector('.center-element');
const loader = document.querySelector('.hex-element');
const wrapper = document.querySelector('.start-website');

nameTitle.addEventListener('click', startLoader);

function startLoader(){
    const loadWebsite = setTimeout(startWebsite, 3000);
    nameTitle.classList.add('invisible');
    loader.classList.add('visible');
}

function startWebsite(){
    centerElement.remove();
    wrapper.classList.add('wrapper');
}