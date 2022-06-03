
//let questionGenerationField = document.getElementById(question-generation-field);


function startQuiz (event) {
    let answers = [];
    let index = 0;

    initialiseImages(index);
    
    const intro = document.getElementsByClassName("introduction")[0] 
    intro.remove();
    const button = document.getElementsByTagName("button")[0]
    button.remove();
    $("img").removeClass("hidden");

    
    // updateElementWithRandomPhoto("beaches", OPTION_A_ID, index + 1);
    // updateElementWithRandomPhoto("mountain range", OPTION_B_ID, index + 1);

    document.getElementById("question-generation-field").innerHTML = `<p class="test">Beaches or Mountains?</p>`;
     $("#iw").addClass("images-wrapper");
     $("#op-a").addClass("left-image-wrapper");
     $("#op-b").addClass("right-image-wrapper");
     $("#back-button").html("<button class='back-button'>back to last question <i class='fa-solid fa-arrow-left'></i> </button>");
    // document.getElementById("back-button").addEventListener("click", previousQuestion);

     $("#reset-button").html("<button class='reset-button'>start again <i class='fa-solid fa-arrow-rotate-right'></i> </button>");
    // document.getElementById("reset-button").addEventListener("click", resetQuestions);   
}

function resetQuestions (event) {
    let answers = [];
    let index = 0;

    initialiseImages(index);

    updateElementWithRandomPhoto("beaches", OPTION_A_ID, index + 1);
    updateElementWithRandomPhoto("mountain range", OPTION_B_ID, index + 1);

    document.getElementById("question-generation-field").innerHTML = `<p class="test">Beaches or Mountains?</p>`;

}

function previousQuestion (event) {
    let answers = []
    answers.pop();
    let index = -1
}

module.exports = startQuiz;

//$("#question-generation-field").html("<p class='test'>Beaches or Mountains?</p>");