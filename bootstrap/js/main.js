const portfolioBlock = document.querySelector('.class');
let cardCounter = 0;
const cardsPerRow = 4;

const studentsT1H = [
    {
        name: "Koen Aakster",
        profilePic: "",
        gitHubUsername: "Oranos-Dragon",
        gitHubLink: "https://Oranos-Dragon.github.io"
    },
    {
        name: "Jens Heijer",
        profilePic: "",
        gitHubUsername: "jensdh",
        gitHubLink: "https://jensdh.github.io"
    },
    {
        name: "Phoebe Groeneweg",
        profilePic: "",
        gitHubUsername: "phoebemeow",
        gitHubLink: "https://phoebemeow.github.io"
    },
    {
        name: "Harmanpreet Kaur",
        profilePic: "",
        gitHubUsername: "Harmanpreet21",
        gitHubLink: "https://Harmanpreet21.github.io"
    },
    {
        name: "Rafael Nunes Coelho",
        profilePic: "",
        gitHubUsername: "rafaelnun3s",
        gitHubLink: "https://rafaelnun3s.github.io"
    },
    {
        name: "Pawanpreet Singh",
        profilePic: "",
        gitHubUsername: "",
        gitHubLink: "https://"
    },
    {
        name: "Martijn Barel",
        profilePic: "",
        gitHubUsername: "mabarel",
        gitHubLink: "https://mabarel.github.io"
    },
    {
        name: "Olaf Krypczyk",
        profilePic: "",
        gitHubUsername: "jrasb",
        gitHubLink: "https://jrasb.github.io"
    },
    {
        name: "Kuray Baş",
        profilePic: "",
        gitHubUsername: "",
        gitHubLink: "https://"
    },
    {
        name: "Alexi Delidis",
        profilePic: "",
        gitHubUsername: "",
        gitHubLink: "https://"
    },
    {
        name: "Kevin Aarts",
        profilePic: "",
        gitHubUsername: "kevin-aarts",
        gitHubLink: "https://kevin-aarts.github.io"
    },
    {
        name: "Marnix Verstappen",
        profilePic: "",
        gitHubUsername: "MarnixVerstappen",
        gitHubLink: "https://MarnixVerstappen.github.io"
    },
    {
        name: "Nasim Saaïdi",
        profilePic: "",
        gitHubUsername: "nasim-saaidi",
        gitHubLink: "https://nasim-saaidi.github.io"
    },
    {
        name: "Tony Özbey",
        profilePic: "",
        gitHubUsername: "t-ozbey",
        gitHubLink: "https://t-ozbey.github.io"
    },
    {
        name: "Arjun Santokhi",
        profilePic: "",
        gitHubUsername: "",
        gitHubLink: ""
    },
    {
        name: "Mamadou Bah",
        profilePic: "",
        gitHubUsername: "",
        gitHubLink: ""
    },
    {
        name: "Dean Cheung Yue Loi",
        profilePic: "",
        gitHubUsername: "d-cyl",
        gitHubLink: "https://d-cyl.github.io"
    },
    {
        name: "Ilias Bousair",
        profilePic: "",
        gitHubUsername: "IliasBousair",
        gitHubLink: "https://IliasBousair.github.io"
    }
];

console.log(studentsT1H);

function createCards() {
    let row = createRow('mt-3');

    for (let i = 0; i < studentsT1H.length; i++) {
        const student = studentsT1H[i];
        const card = createCard(student.name, student.gitHubUsername, student.gitHubLink);

        let col2 = createColumn(2);
        const colData = createColumn(2);

        colData.append(card);

        if (cardCounter == 0) {
            row.append(col2);
        }

        row.append(colData);

        cardCounter++;
        if (cardCounter == cardsPerRow) {
            row.append(col2);
            portfolioBlock.appendChild(row);
            cardCounter = 0;
            row = createRow('mt-3');
        }
    }

    if (cardCounter < cardsPerRow) {
        while (cardCounter < cardsPerRow) {
            let col2 = createColumn(2); 
            row.append(col2);
            cardCounter++;
        }
        portfolioBlock.appendChild(row);
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

function createCard(cardHeader, cardTitle, cardButton) {
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

    const cardTitleElement = document.createElement('h4');
    cardTitleElement.classList.add('card-title');
    cardTitleElement.textContent = cardTitle;

    const cardButtonElement = document.createElement('a');
    cardButtonElement.classList.add('btn', 'stretched-link', 'btn-outline-danger');
    cardButtonElement.href = cardButton;
    cardButtonElement.textContent = "Go to GitHub.io page!";

    cardBodyElement.append(cardTitleElement);
    cardBodyElement.append(cardButtonElement);

    cardElement.append(cardHeaderElement);
    cardElement.append(cardBodyElement);

    return cardElement;
}


createCards();