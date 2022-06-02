
//let questionGenerationField = document.getElementById(question-generation-field);


function startQuiz (event) {
    let answers = []
    let index = 0

    initialiseImages(index);
    
    const intro = document.getElementsByClassName("introduction")[0] 
    intro.remove();
    const button = document.getElementsByTagName("button")[0]
    button.remove();
    $("img").removeClass("hidden");
    
    updateElementWithRandomPhoto("beaches", OPTION_A_ID, index + 1);
    updateElementWithRandomPhoto("mountain range", OPTION_B_ID, index + 1);

    document.getElementById("question-generation-field").innerHTML = `<p class="test">Beaches or Mountains?</p>`
    $("#iw").addClass("images-wrapper");
    $("#op-a").addClass("left-image-wrapper");
    $("#op-b").addClass("right-image-wrapper");
    $("#reset-button").html("<button class='reset-button'>start again <i class='fa-solid fa-arrow-rotate-right'></i> </button>");
}


module.exports = startQuiz;

//$("#question-generation-field").html("<p class='test'>Beaches or Mountains?</p>");
  