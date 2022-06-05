const UNSPLASH_API_KEY = "Gu2n4WYUlx5onlhkP2AvCODE2KHAO7eNX2noQdq2Tk0";

const OPTION_A_ID = "optionA";
const OPTION_B_ID = "optionB";
const backButton = document.getElementById("back-button");

const OPTIONS = [{
        a: {
            id: ["9357", "9937002"],
            name: "Beaches",
            searchQuery: "nYwfKdzB_Ds"
        }, //[Beach, Beach Club]
        b: {
            id: ["7302002", "8099002", "9935", "9362026"],
            name: "Mountains",
            searchQuery: "u5yopQOsFqg"
        } //[Mountain Bike Trail, Mountain Peak, Mountain Pass, Ski Resort]
    },
    {
        a: {
            id: ["7305", "9371", "7302004", "9902003"],
            name: "Adventurous",
            searchQuery: "kQu71SCrwns"
        }, //[Adventure Sports Facility, Water Sport, Hiking Trail, Amusement Park]
        b: {
            id: ["9378005", "7338", "7314005"],
            name: "Relaxing",
            searchQuery: "LmF4eBYs08c"
        } // [Sauna, Solarium & Massage, Swimming Pool, Resort]
    },
    {
        a: {
            id: ["7317", "7376003", "9362007", "9362004", "9362002"],
            name: "Historical",
            searchQuery: "jNQK0RnwCSo"
        }, //[Museum, Monument, Memorial, Historic Site, Battlefield ]
        b: {
            id: ["9379002", "9379006", "9379004", "9379008", "9379009"],
            name: "Party",
            searchQuery: "MxfcoxycH_Y"
        } // [Disco Club, Cocktail Bar, Bar, Jazz Club, Comedy Club ]
    },
    {
        a: {
            id: ["7318005", "7318004", "7339002", "7339003", "7339004", "7315"],
            name: "Cultural",
            searchQuery: "7k91OUDYAQ0"
        }, //[Theater, Opera House, Church, Mosque, Synagog, Restaurant]
        b: {
            id: ["9927003, 9362015", "8099025", "8099013", "9362030", "8099019"],
            name: "Nature",
            searchQuery: "dIMJcgCYZJw"
        } //[Zoo, Forest Area, Hill, Reservoir, Natural Recreation Attraction, Lagoon ]
    }
];

window.onload = function () {
    let launchQuestions = document.getElementById("launch-questions");
    launchQuestions.addEventListener("click", startQuiz);
};


function updateElementWithRandomPhoto(searchTerm, elementId) {
    const url = `https://api.unsplash.com/photos/${searchTerm}?client_id=${UNSPLASH_API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById(elementId).src = data.urls.regular;
        })
        .catch((err) => console.error("error getting image"));
}

function updateOptionPhotos(index) {
    updateElementWithRandomPhoto(OPTIONS[index].a.searchQuery, OPTION_A_ID);
    updateElementWithRandomPhoto(OPTIONS[index].b.searchQuery, OPTION_B_ID);
}

function updateQuestionText(index, id) {
    let nameA = OPTIONS[index].a.name;
    let nameB = OPTIONS[index].b.name;
    document.getElementById(id).innerHTML = `<p class="quiz-question">${nameA} or ${nameB}?</p>`;
}

function addAnswer(isAnswerA) {
    isAnswerA ? answers.push(OPTIONS[index].a) : answers.push(OPTIONS[index].b);
    console.log(answers);
}

function handleOptionClick(isOptionA) {
    if (index === OPTIONS.length - 1) {
        handleFinalOption(isOptionA);
        //setTimeout(displayDestination, 2500);
        //displayDestination();
    } else {
        addAnswer(isOptionA);
        index = index + 1;
        updateOptionPhotos(index);
        updateQuestionText(index, "question-generation-field");
    }
}

function handleFinalOption(isAnswerA) {
 addAnswer(isAnswerA);
 let quiz = document.getElementById("quiz");
 quiz.classList.add("hidden");
 backButton.classList.add("hidden");
 getDestination(getIdsForRequest(answers));
}


function initialiseImages() {
    let optionAImage = document.getElementById(OPTION_A_ID);
    let optionBImage = document.getElementById(OPTION_B_ID);

    updateOptionPhotos(0);
    updateQuestionText(0, "question-generation-field");

    optionAImage.addEventListener("click", () => handleOptionClick(true));
    optionBImage.addEventListener("click", () => handleOptionClick(true));
}

module.exports = {
    OPTIONS,
    initialiseImages,
}