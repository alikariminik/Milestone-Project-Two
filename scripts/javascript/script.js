const UNSPLASH_API_KEY = "Gu2n4WYUlx5onlhkP2AvCODE2KHAO7eNX2noQdq2Tk0";

const OPTION_A_ID = "optionA";
const OPTION_B_ID = "optionB";

const OPTIONS = [{
        a: {
            name: "Beaches",
            searchQuery: "beach resort",
            id: ["9357", "9937002"]
        }, //[Beach, Beach Club]
        b: {
            name: "Mountain Range",
            searchQuery: "mountain range",
            id: ["7302002", "8099002", "9935", "9362026"]
        }, //[Mountain Bike Trail, Mountain Peak, Mountain Pass, Ski Resort]
    },
    {
        a: {
            name: "Adventurous",
            searchQuery: "adventure activities",
            id: ["7305", "9371", "7302004", "9902003"]
        }, //[Adventure Sports Facility, Water Sport, Hiking Trail, Amusement Park]
        b: {
            name: "Relaxing",
            searchQuery: "massage",
            id: ["9378005", "7338", "7314005"]
        }, // [Sauna, Solarium & Massage, Swimming Pool, Resort]
    },
    {
        a: {
            name: "Historical",
            searchQuery: "historic monuments",
            id: ["7317", "7376003", "9362007", "9362004", "9362002"]
        }, //[Museum, Monument, Memorial, Historic Site, Battlefield ]
        b: {
            name: "Party",
            searchQuery: "nightlife",
            id: ["9379002", "9379006", "9379004", "9379008", "9379009"]
        }, // [Disco Club, Cocktail Bar, Bar, Jazz Club, Comedy Club ]
    },
    {
        a: {
            name: "Cultural",
            searchQuery: "cultural arts",
            id: ["7318005", "7318004", "7339002", "7339003", "7339004", "7315"]
        }, //[Theater, Opera House, Church, Mosque, Synagog, Restaurant]
        b: {
            name: "Nature",
            searchQuery: "forests",
            id: ["9927003, 9362015", "8099025", "8099013", "9362030", "8099019"]
        }, //[Zoo, Forest Area, Hill, Reservoir, Natural Recreation Attraction, Lagoon ] 
    },
];

window.onload = function () {
    let launchQuestions = document.getElementById('launch-questions');
    launchQuestions.addEventListener('click', startQuiz);
}


function updateElementWithRandomPhoto(searchTerm, elementId) {
    const url = `https://api.unsplash.com/photos/random?query=${searchTerm}&orientation=squarish&client_id=${UNSPLASH_API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById(elementId).src = data.urls.regular;
        })
        .catch((err) => console.error("error getting image"));
}

function updateOptionPhotos(index) {
    updateElementWithRandomPhoto(OPTIONS[index].a.searchQuery,OPTION_A_ID);
    updateElementWithRandomPhoto(OPTIONS[index].b.searchQuery, OPTION_B_ID);
}

function updateQuestionText(index, id) {
    let nameA = OPTIONS[index].a.name;
    let nameB = OPTIONS[index].b.name;
    document.getElementById(id).innerHTML = `<p class="quiz-question">${nameA} or ${nameB}</p>`;
}

function addAnswer(isAnswerA) {
    isAnswerA ? answers.push(OPTIONS[index].a) : answers.push(OPTIONS[index].b);
}

function handleOptionClick(isOptionA) {
    if (index === OPTIONS.length - 1) {
        handleFinalOption(isOptionA);
    } else {
        addAnswer(isOptionA);
        index = index + 1;
        updateOptionPhotos(index);
        updateQuestionText(index, "question-generation-field");
        $("#back-button").html(`<button" class="back-button"> back to last question <i class="fa-solid fa-arrow-left"></i></button>`)
    }
}


function handleFinalOption(isAnswerA) {
    addAnswer(isAnswerA);
    let quiz = document.getElementById("quiz");
    quiz.classList.add("hidden");
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
    initialiseImages
};