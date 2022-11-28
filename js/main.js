const nameTitle = document.querySelector('.title');
const intro = document.querySelector('.title');
const loader = document.querySelector('.hex-element');

nameTitle.addEventListener('click', startLoader);

function startLoader(){
    intro.classList.add('invisible');
    loader.classList.add('visible');
}