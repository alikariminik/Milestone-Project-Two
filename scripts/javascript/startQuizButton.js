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

     $("#home-button").html(`<button style="cursor: pointer" title="Back to Home Page" class="home-button">Home
        <i class="fa-solid fa-house"></i> </button>`);
        document.getElementById("home-button").addEventListener("click", reloadPage);

}

function reloadPage () {
    document.location.reload();
}

// function previousQuestion () {
//     answers.pop();
//     index = index - 1;

//     updateOptionPhotos(index);
//     updateQuestionText(index, "question-generation-field")
    // if (index === 0){
    //     document.getElementById("back-button").classList.add("hidden");
    //  } else if (index === 1 ) {
    //     document.getElementById("back-button").classList.remove("hidden");
    //  }
// }

module.exports = startQuiz;

//$("#question-generation-field").html("<p class='test'>Beaches or Mountains?</p>")