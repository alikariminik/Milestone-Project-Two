let answers = [];
let index = 0;

function startQuiz (event) {
    removeIntroductionText();
    initialiseImages();

     $("#iw").addClass("images-wrapper");

     document.getElementById("back-button").addEventListener("click", previousQuestion);

     $("#reset-button").html("<button class='reset-button'>start again <i class='fa-solid fa-arrow-rotate-right'></i> </button>");
     document.getElementById("reset-button").addEventListener("click", () => {console.log(answers, index);resetQuestions(); console.log(answers, index);});   
}

function removeIntroductionText () {
    const intro = document.getElementsByClassName("introduction")[0] 
    intro.remove();
    const button = document.getElementsByTagName("button")[0]
    button.remove();
    $("img").removeClass("hidden");
}

function resetQuestions () {
    answers = [];
    index = 0;
    document.getElementById("quiz").classList.remove("hidden");
    initialiseImages(index);
}

function previousQuestion (event) {
    let answers = answers.pop();
    let index = - 1;

    updateElementWithRandomPhoto(OPTION_A_ID, index - 1);
    updateElementWithRandomPhoto(OPTION_B_ID, index - 1);
}

module.exports = startQuiz;

//$("#question-generation-field").html("<p class='test'>Beaches or Mountains?</p>");