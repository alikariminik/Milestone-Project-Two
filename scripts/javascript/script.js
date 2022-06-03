const UNSPLASH_API_KEY = "Gu2n4WYUlx5onlhkP2AvCODE2KHAO7eNX2noQdq2Tk0";

const OPTION_A_ID = "optionA";
const OPTION_B_ID = "optionB";

const OPTIONS = [{
        a: { name: "beach", id: ["9357", "9937002"]}, //[Beach, Beach Club]
        b: { name: "mountain range", id: ["7302002", "8099002", "9935", "9362026"]}, //[Mountain Bike Trail, Mountain Peak, Mountain Pass, Ski Resort]
    },
    {
        a: "city",
        b: "rural"
    },
    {
        a: { name: "adventure", id: ["7305", "9371", "7302004", "9902003"]}, //[Adventure Sports Facility, Water Sport, Hiking Trail, Amusement Park]
        b: { name: "relaxation", id: ["9378005", "7338", "7314005"]}, // [Sauna, Solarium & Massage, Swimming Pool, Resort]
    },
    {
        a: {name: "history", id: ["7317", "7376003", "9362007", "9362004", "9362002" ]}, //[Museum, Monument, Memorial, Historic Site, Battlefield ]
        b: {name: "nightlight", id: ["9379002", "9379006", "9379004", "9379008", "9379009" ]}, // [Disco Club, Cocktail Bar, Bar, Jazz Club, Comedy Club ]
    },
    {
        a: {name: "culture", id: ["7318005", "7318004", "7339002", "7339003", "7339004", "7315" ]}, //[Theater, Opera House, Church, Mosque, Synagog, Restaurant]
        b: {name: "nature", id: ["9927003, 9362015", "8099025", "8099013", "9362030", "8099019"]}, //[Zoo, Forest Area, Hill, Reservoir, Natural Recreation Attraction, Lagoon ] 
    },
]

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
    updateElementWithRandomPhoto(OPTIONS[index].a, OPTION_A_ID);
    updateElementWithRandomPhoto(OPTIONS[index].b, OPTION_B_ID);
}

function handleImageClick(option, index) {
    console.log(option, index);
    updateOptionPhotos(index + 1);
}

function initialiseImages(index) {
    let optionAImage = document.getElementById(OPTION_A_ID);
    let optionBImage = document.getElementById(OPTION_B_ID);

    updateOptionPhotos(index);

    optionAImage.addEventListener("click", () => {
        handleImageClick(OPTIONS[index].a, index);
        index = index + 1;
    })

    optionBImage.addEventListener("click", () => {
        handleImageClick(OPTIONS[index].b, index);
        index = index + 1;
    })
}



function startAgain(event) {

}

module.exports = initialiseImages;