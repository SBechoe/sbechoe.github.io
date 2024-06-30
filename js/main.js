const navLinks = document.querySelector('.nav-links');
const navMenu = document.querySelector('.nav-menu');
const progressBar = document.querySelector(".progress-bar");
const otherVersionBtn = document.querySelector('.other-version-btn');
const verionList = document.querySelector('.version-list');
const fameBlock = document.querySelector('.hall-of-fame');
// const portfolioBlockH = document.querySelector('.t1h');
// const portfolioBlockJ = document.querySelector('.t1j');
// const portfolioBlockK = document.querySelector('.t1k');
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

function getUrls() {
    fetch("js/fame.json")
        .then(myData => myData.json())
        .then(jsonData => createCards(jsonData));
  
    // fetch("js/t1h.json")
    //     .then(myData => myData.json())
    //     .then(jsonData => createCards(jsonData, portfolioBlockH));

    // fetch("js/t1j.json")
    //     .then(myData => myData.json())
    //     .then(jsonData => createCards(jsonData, portfolioBlockJ));

    // fetch("js/t1k.json")
    //     .then(myData => myData.json())
    //     .then(jsonData => createCards(jsonData, portfolioBlockK));
}

function createCards(students) {

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const card = createCard(student.name, student.cohort, student.username);

        fameBlock.append(card);

    }
}

function createCard(title, cohort, username) {
    const cardBox = document.createElement('div');
    cardBox.classList.add(`bg-[url('assets/img/${username}.png')]`, 'bg-cover', 'rounded-sm', 'h-52', 'transition', 'ease-in-out', 'delay-150', 'hover:-translate-y-1', 'hover:scale-110', 'text-2xl', 'duration-300');
    
    const cardUrlElement = document.createElement('a');
    cardUrlElement.classList.add('h-full', 'w-full', 'flex', 'justify-center', 'items-center', 'flex-col', 'transition', 'ease-in-out', 'duration-500', 'text-black', 'bg-white/70', 'hover:backdrop-blur-lg');
    cardUrlElement.href = `https://${username}.github.io/`;
    cardUrlElement.target = "_blank";

    const cardTitleElement = document.createElement('h2');
    cardTitleElement.textContent = title;

    const cardCohortElement = document.createElement('em');
    cardCohortElement.textContent = 'Cohort ' + cohort;

    cardUrlElement.append(cardTitleElement);
    cardUrlElement.append(cardCohortElement);

    cardBox.append(cardUrlElement);

    return cardBox;
}

getUrls();