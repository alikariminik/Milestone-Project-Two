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
    $("#home-button").html(`<button style="cursor: pointer" title="Back to Home Page" class="home-button">Home
    <i class="fa-solid fa-house"></i> </button>`);
    document.getElementById("home-button").addEventListener("click", reloadPage);

}

function reloadPage () {
    document.location.reload();
}

module.exports = startQuiz, removeIntroductionText, reloadPage, initialiseImages;
