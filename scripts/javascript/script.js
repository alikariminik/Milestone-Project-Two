const UNSPLASH_API_KEY = "Gu2n4WYUlx5onlhkP2AvCODE2KHAO7eNX2noQdq2Tk0";

const OPTION_A_ID = "optionA";
const OPTION_B_ID = "optionB";

const OPTIONS = [
    {a: "beach", b: "mountain range"},
    {a: "city", b: "rural"},
    {a: "adventure", b: "relaxation"},
    {a: "history", b: "nightlight"},
    {a: "culture", b: "nature"},
]

let launchQuestions = document.getElementById('launch-questions');
launchQuestions.addEventListener('click', startQuiz);

function updateElementWithRandomPhotos() {
    const url = `https://api.unsplash.com/photos/random?query=${searchTerm}*orientation=squarish&client-id=${UNSPLASH_API_KEY}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById(elementId).src = data.urls.regular;
    })
    .catch((err) => console.error("error getting image"));
}

function updateOptionPhotos() {
    updateElementWithRandomPhotos(OPTIONS[index].a, OPTION_A_ID);
    updateElementWithRandomPhotos(OPTIONS[index].b, OPTION_B_ID);
}

function initialiseImages() {
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

function startAgain (event) {
    
}

