
//let questionGenerationField = document.getElementById(question-generation-field);


function startQuiz (event) {
    const intro = document.getElementsByClassName("introduction")[0] 
    intro.remove();
    const button = document.getElementsByTagName("button")[0]
    button.remove();
    document.getElementById("question-generation-field").innerHTML = `<p class="test">Beaches or Mountains?</p>`
    $("#iw").addClass("images-wrapper");
    $("#op-a").addClass("left-image-wrapper");
    $("#op-b").addClass("right-image-wrapper");
    $("#reset-button").html("<button class='reset-button'>start again <i class='fa-solid fa-arrow-rotate-right'></i> </button>");
}


module.exports = startQuiz;

//$("#question-generation-field").html("<p class='test'>Beaches or Mountains?</p>");
  