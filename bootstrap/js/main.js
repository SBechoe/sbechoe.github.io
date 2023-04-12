const portfolioBlock = document.querySelector('.class');
let counter = 0;

const studentsT1H = [
    {
        name: "Koen Aakster",
        profilePic: "",
        gitHubUsername: "Oranos-Dragon",
        gitHubLink: "Oranos-Dragon.github.io"
    },
    {
        name: "Jens Heijer",
        profilePic: "",
        gitHubUsername: "jensdh",
        gitHubLink: "jensdh.github.io"
    },
    {
        name: "Phoebe Groeneweg",
        profilePic: "",
        gitHubUsername: "phoebemeow",
        gitHubLink: "phoebemeow.github.io"
    },
    {
        name: "Harmanpreet Kaur",
        profilePic: "",
        gitHubUsername: "Harmanpreet21",
        gitHubLink: "Harmanpreet21.github.io"
    },
    {
        name: "Rafael Nunes Coelho",
        profilePic: "",
        gitHubUsername: "rafaelnun3s",
        gitHubLink: "rafaelnun3s.github.io"
    },
    {
        name: "Pawanpreet Singh",
        profilePic: "",
        gitHubUsername: "",
        gitHubLink: ""
    },
    {
        name: "Martijn Barel",
        profilePic: "",
        gitHubUsername: "mabarel",
        gitHubLink: "mabarel.github.io"
    },
    {
        name: "Olaf Krypczyk",
        profilePic: "",
        gitHubUsername: "jrasb",
        gitHubLink: "jrasb.github.io"
    },
    {
        name: "Kuray Baş",
        profilePic: "",
        gitHubUsername: "",
        gitHubLink: ""
    },
    {
        name: "Alexi Delidis",
        profilePic: "",
        gitHubUsername: "",
        gitHubLink: ""
    },
    {
        name: "Kevin Aarts",
        profilePic: "",
        gitHubUsername: "kevin-aarts",
        gitHubLink: "kevin-aarts.github.io"
    },
    {
        name: "Marnix Verstappen",
        profilePic: "",
        gitHubUsername: "MarnixVerstappen",
        gitHubLink: "MarnixVerstappen.github.io"
    },
    {
        name: "Nasim Saaïdi",
        profilePic: "",
        gitHubUsername: "nasim-saaidi",
        gitHubLink: "nasim-saaidi.github.io"
    },
    {
        name: "Tony Özbey",
        profilePic: "",
        gitHubUsername: "t-ozbey",
        gitHubLink: "t-ozbey.github.io"
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
        gitHubLink: "d-cyl.github.io"
    },
    {
        name: "Ilias Bousair",
        profilePic: "",
        gitHubUsername: "IliasBousair",
        gitHubLink: "IliasBousair.github.io"
    }
];

console.log(studentsT1H);

function createCards() {
    const row = createRow('mt-3');
    const colOne = createColumn(2);
    const colData = createColumn(2);
    const colTwo = createColumn(2);

    // for (let i = 0; i < studentsT1H.length; i++) {
    //     const student = studentsT1H[i];
    //     card = createCard(student.name, student.gitHubUsername, student.gitHubLink);

    //     if (counter == 0 || counter == 3) {
    //         colData.append(card);
    //         counter++;
    //         console.log(counter);
    //     } else if (counter < 4) {
    //         colData.append(card);
    //         counter++;
    //         console.log(counter);
    //     } else if (counter == 4) {
    //         counter = 0;
    //         row.append(colOne);
    //         row.append(colData);
    //         row.append(colTwo);
    //         break;
    //     }

    // }
    // portfolioBlock.append(row);
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
    cardElement.classList.add('card', 'mb-3');

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
    cardButtonElement.classList.add('btn', 'btn-danger-outline');
    cardButtonElement.textContent = cardButton;

    cardBodyElement.append(cardTitleElement);
    cardBodyElement.append(cardButtonElement);

    cardElement.append(cardHeaderElement);
    cardElement.append(cardBodyElement);

    return cardElement;
}
//   for later use
// <div class="col-md-2">
//     <div class="card">
//         <div class="card-header">
//             Header
//         </div>
//         <div class="card-body">
//             <h4 class="card-title">Title</h4>
//             <a class="btn btn-danger-outline">Text</p>
//         </div>
//     </div>
// </div>


createCards();