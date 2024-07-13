const navLinks = document.querySelector('.nav-links');
const navMenu = document.querySelector('.nav-menu');
const progressBar = document.querySelector(".progress-bar");
const otherVersionBtn = document.querySelector('.other-version-btn');
const verionList = document.querySelector('.version-list');
const fameBlock = document.querySelector('.hall-of-fame');
const cohortBlock = document.querySelector('.work-of-students');
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
        .then(jsonData => createCards(jsonData, fameBlock));

    fetch("js/2022.json")
        .then(myData => myData.json())
        .then(jsonData => createCards(jsonData, cohortBlock));
}

function createCards(students, block) {

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (block == fameBlock) {
            const card = createFameCard(student.name, student.cohort, student.username);
            block.append(card);
        } else if(block == cohortBlock) {
            const card = createCohortCard(student.name, student.cohort, student.username);
            block.append(card);
        }
    }
}

function createFameCard(title, cohort, username) {
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

function createCohortCard(title, cohort, username) {
    const cardBox = document.createElement('div');
    cardBox.classList.add('bg-red-700', 'rounded-sm', 'h-52', 'transition', 'ease-in-out', 'delay-150', 'hover:-translate-y-1', 'hover:scale-110', 'text-2xl', 'duration-300');

    const cardUrlElement = document.createElement('a');
    cardUrlElement.classList.add('h-full', 'w-full', 'flex', 'justify-center', 'items-center', 'flex-col', 'transition', 'ease-in-out', 'duration-500', 'text-black', 'bg-white/70');
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