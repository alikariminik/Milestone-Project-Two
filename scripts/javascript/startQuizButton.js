let answers = [];
let index = 0;

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

     document.getElementById("back-button").addEventListener("click", previousQuestion);

     $("#reset-button").html("<button class='reset-button'>start again <i class='fa-solid fa-arrow-rotate-right'></i> </button>");
     document.getElementById("reset-button").addEventListener("click", "resetQuestions")
}

// function reloadPage() {
//     sessionStorage.setItem("restart", "true");
//     location.reload();  
// }

// var reStart = sessionStorage.getItem("restart");

// window.onload = () => {
//     if (reStart) {
//         sessionStorage.removeItem("restart");
//         startQuiz();
//     }
// }


function resetQuestions (event) {
    answers = [];
    index = 0;
    document.getElementById("quiz").classList.remove("hidden");
    initialiseImages();
    document.getElementById("back-button").classList.add("hidden");
}

function previousQuestion (event) {
    answers.pop();
    index = index - 1;

    updateOptionPhotos(index);
    updateQuestionText(index, "question-generation-field")
    if (index === 0){
        document.getElementById("back-button").classList.add("hidden");
     } else if (index === 1 ) {
        document.getElementById("back-button").classList.remove("hidden");
     }
}

module.exports = startQuiz;

//$("#question-generation-field").html("<p class='test'>Beaches or Mountains?</p>")