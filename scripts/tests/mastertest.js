let answers = [];
let index = 0;

let TOMTOM_API_KEY = "Ss34b0BCennQsGT7hCzfgvlWNmh35biC";

const UNSPLASH_API_KEY = "Gu2n4WYUlx5onlhkP2AvCODE2KHAO7eNX2noQdq2Tk0";

const OPTION_A_ID = "optionA";
const OPTION_B_ID = "optionB";
const backButton = document.getElementById("back-button");

function getIdsForRequest(answers) {
    return answers.reduce((prev, current) => {
        prev = prev.concat(current.id);
        return prev;
    }, []);
}

function displaySpinner(yes) {
    if (yes) {
        document.getElementById("spinner").classList.remove("hidden");
    } else {
        document.getElementById("spinner").classList.add("hidden");
    }
}

function getDestination(ids) {
    displaySpinner(true);
    const tenIds = getRandomFromArray(ids, 10); // API can only have 10 ids so need to sort
    const tenCountryCodes = getRandomFromArray(countryCodes, 10);
    const url = `https://api.tomtom.com/search/2/categorySearch/.json?key=${TOMTOM_API_KEY}&categorySet=${tenIds.join(
        ","
      )}&countrySet=${tenCountryCodes.join(",")}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.results.length > 0) {
                const location = data.results[getRandomNumber(data.results.length) - 1];
                getDestinationImage(location).then((image) => {
                    document.getElementById("destination-image").src =image.urls.regular;
                    displayDestination(location);
                    displaySpinner(false);
                });
            }
        })
        .catch((err) => console.error("error getting destination", err));
}

function getDestinationImage(location) {
    return new Promise ((resolve, reject) => {
        const url = `https://api.unsplash.com/search/photos?query=${location.address.country}&client_id=${UNSPLASH_API_KEY}&orientation=squarish&`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.results.length > 0) {
                    resolve(data.results[0]);
                }
                reject()
            })
            .catch((err) => reject(err));
    });
}

function getRandomFromArray(array, n) {
    return array.sort(() => 0.5 - Math.random()).slice(0, n - 1);
}

function getRandomNumber(n) {
    return Math.round(Math.random() * n);
}

function displayDestination(location) {
    document.getElementById("destination").classList.remove("hidden");
    document.getElementById("city").innerHTML =`<p>${location.address.localName}</p>`;
    document.getElementById("country").innerHTML =`<p>${location.address.country}</p>`;
}

function removeIntroductionText () {
    const intro = document.getElementsByClassName("introduction")[0]
    intro.remove();
    const button = document.getElementsByTagName("button")[0]
    button.remove();
    $("img").removeClass("hidden");
}

function startQuiz () {
    removeIntroductionText();
    initialiseImages();

     $("#iw").addClass("images-wrapper");

     $("#home-button").html(`<button style="cursor: pointer" title="Back to Home Page" class="home-button">Home
        <i class="fa-solid fa-house"></i> </button>`);
        document.getElementById("home-button").addEventListener("click", reloadPage);

}

function reloadPage () {
    document.location.reload();
}

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
        name: "Adventures",
        searchQuery: "kQu71SCrwns"
    }, //[Adventure Sports Facility, Water Sport, Hiking Trail, Amusement Park]
    b: {
        id: ["9378005", "7338", "7314005"],
        name: "Relaxation",
        searchQuery: "LmF4eBYs08c"
    } // [Sauna, Solarium & Massage, Swimming Pool, Resort]
},
{
    a: {
        id: ["7317", "7376003", "9362007", "9362004", "9362002"],
        name: "History",
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
        name: "Culture",
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

optionAImage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleOptionClick(true);
    }
});

optionBImage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleOptionClick(true);
    }
});
}

var countryCodes = [
    "AFG", 
    "ALA", 
    "ALB",
    "DZA",
    "ASM",
    "AND",
    "AGO",
    "AIA",
    "ATA",
    "ATG",
    "ARG",
    "ARM",
    "ABW",
    "AUS",
    "AUT",
    "AZE",
    "BHS",
    "BHR",
    "BGD",
    "BRB",
    "BLR",
    "BEL",
    "BLZ",
    "BEN",
    "BMU",
    "BTN",
    "BOL",
    "BES",
    "BIH",
    "BWA",
    "BVT",
    "BRA",
    "IOT",
    "BRN",
    "BGR",
    "BFA",
    "BDI",
    "KHM",
    "CMR",
    "CAN",
    "CPV",
    "CYM",
    "CAF",
    "TCD",
    "CHL",
    "CHN",
    "CXR",
    "CCK",
    "COL",
    "COM",
    "COG",
    "COD",
    "COK",
    "CRI",
    "CIV",
    "HRV",
    "CUB",
    "CUW",
    "CYP",
    "CZE",
    "DNK",
    "DJI",
    "DMA",
    "DOM",
    "ECU",
    "EGY",
    "SLV",
    "GNQ",
    "ERI",
    "EST",
    "ETH",
    "FLK",
    "FRO",
    "FJI",
    "FIN",
    "FRA",
    "GUF",
    "PYF",
    "ATF",
    "GAB",
    "GMB",
    "GEO",
    "DEU",
    "GHA",
    "GIB",
    "GRC",
    "GRL",
    "GRD",
    "GLP",
    "GUM",
    "GTM",
    "GGY",
    "GIN",
    "GNB",
    "GUY",
    "HTI",
    "HMD",
    "HND",
    "HKG",
    "HUN",
    "ISL",
    "IND",
    "IDN",
    "IRN",
    "IRQ",
    "IRL",
    "IMN",
    "ISR",
    "ITA",
    "JAM",
    "JPN",
    "JEY",
    "JOR",
    "KAZ",
    "KEN",
    "KIR",
    "PRK",
    "KOR",
    "KWT",
    "KGZ",
    "LAO",
    "LVA",
    "LBN",
    "LSO",
    "LBR",
    "LBY",
    "LIE",
    "LTU",
    "LUX",
    "MAC",
    "MKD",
    "MDG",
    "MWI",
    "MYS",
    "MDV",
    "MLI",
    "MLT",
    "MHL",
    "MTQ",
    "MRT",
    "MUS",
    "MYT",
    "MEX",
    "FSM",
    "MDA",
    "MCO",
    "MNG",
    "MNE",
    "MSR",
    "MAR",
    "MOZ",
    "MMR",
    "NAM",
    "NRU",
    "NPL",
    "NLD",
    "NCL",
    "NZL",
    "NIC",
    "NER",
    "NGA",
    "NIU",
    "NFK",
    "MNP",
    "NOR",
    "OMN",
    "PAK",
    "PLW",
    "PSE",
    "PAN",
    "PNG",
    "PRY",
    "PER",
    "PHL",
    "PCN",
    "POL",
    "PRT",
    "PRI",
    "QAT",
    "REU",
    "ROU",
    "RUS",
    "RWA",
    "BLM",
    "SHN",
    "KNA",
    "LCA",
    "MAF",
    "SPM",
    "VCT",
    "WSM",
    "SMR",
    "STP",
    "SAU",
    "SEN",
    "SRB",
    "SYC",
    "SLE",
    "SGP",
    "SXM",
    "SVK",
    "SVN",
    "SLB",
    "SOM",
    "ZAF",
    "SGS",
    "SSD",
    "ESP",
    "LKA",
    "SDN",
    "SUR",
    "SJM",
    "SWZ",
    "SWE",
    "CHE",
    "SYR",
    "TWN",
    "TJK",
    "TZA",
    "THA",
    "TLS",
    "TGO",
    "TKL",
    "TON",
    "TTO",
    "TUN",
    "TUR",
    "TKM",
    "TCA",
    "TUV",
    "UGA",
    "UKR",
    "ARE",
    "GBR",
    "UMI",
    "USA",
    "URY",
    "UZB",
    "VUT",
    "VAT",
    "VEN",
    "VNM",
    "VGB",
    "VIR",
    "WLF",
    "ESH",
    "YEM",
    "ZMB",
    "ZWE",
];

module.exports = { removeIntroductionText };