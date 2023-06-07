const portfolioBlockH = document.querySelector('.t1h');
const portfolioBlockJ = document.querySelector('.t1j');
const portfolioBlockK = document.querySelector('.t1k');

const cardsPerRow = 5;

document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};

function getUrls() {
    fetch("js/t1h.json")
        .then(myData => myData.json())
        .then(jsonData => createCards(jsonData, portfolioBlockH));

    fetch("js/t1j.json")
        .then(myData => myData.json())
        .then(jsonData => createCards(jsonData, portfolioBlockJ));

    fetch("js/t1k.json")
        .then(myData => myData.json())
        .then(jsonData => createCards(jsonData, portfolioBlockK));
}

function createCards(students, block) {
    let row = createRow('mt-3');
    let cardCounter = 0;

    console.log(students);
    console.log(block);


    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const card = createCard(student.name, student.gitHubUsername, student.gitHubLink, student.gitHubUsername);

        let col2 = createColumn(1);
        const colData = createColumn(2);

        colData.append(card);

        if (cardCounter == 0) {
            row.append(col2);
        }

        row.append(colData);

        cardCounter++;
        if (cardCounter == cardsPerRow) {
            row.append(col2);
            block.appendChild(row);
            cardCounter = 0;
            row = createRow('mt-3');
        }
    }

    if (cardCounter < cardsPerRow) {
        while (cardCounter < cardsPerRow) {
            let col2 = createColumn(1);
            row.append(col2);
            cardCounter++;
        }
        block.appendChild(row);
    }
}

//creates a row with and extra class
function createRow(rowClass) {
    const row = document.createElement('div');
    row.classList.add('row', rowClass);
    return row;
}

//creates a column with a specific size
function createColumn(size) {
    const col = document.createElement('div');
    col.classList.add('col-sm-' + size);
    return col;
}

function createCard(cardHeader, cardTitle, cardButton, cardButton2) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'h-100', 'mb-3');

    // const cardImgElement = document.createElement('img');
    // cardImgElement.classList.add('img-fluid', 'h-100', 'rounded-start')
    // cardImgElement.src = imgUrl;

    const cardHeaderElement = document.createElement('div');
    cardHeaderElement.classList.add('card-header');
    cardHeaderElement.textContent = cardHeader;

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');

    const cardTitleElement = document.createElement('h5');
    cardTitleElement.classList.add('card-title');
    cardTitleElement.textContent = cardTitle;

    const cardButtonElement = document.createElement('a');
    cardButtonElement.classList.add('btn', "mb-2", 'btn-outline-danger');
    cardButtonElement.href = cardButton;
    cardButtonElement.target = "_blank";
    cardButtonElement.textContent = "Go to GitHub.io page!";

    const cardButtonElement2 = document.createElement('a');
    cardButtonElement2.classList.add('btn','btn-outline-info');
    cardButtonElement2.href = `https://github.com/${cardButton2}/${cardButton2}.github.io`;
    cardButtonElement2.target = "_blank";
    cardButtonElement2.textContent = "Go to GitHub page!";

    cardBodyElement.append(cardTitleElement);
    cardBodyElement.append(cardButtonElement);
    cardBodyElement.append(cardButtonElement2);

    cardElement.append(cardHeaderElement);
    cardElement.append(cardBodyElement);

    return cardElement;
}

getUrls();