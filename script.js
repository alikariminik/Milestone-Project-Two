let launchQuestions = document.getElementById('launch-questions');
launchQuestions.addEventListener('click', startQuiz);

let questionGenerationField = document.getElementsByClassName(question-generation-field);


function startQuiz (event) {
    let button = document.getElementsByTagName("button")[0] 
    button.remove();
    let intro = document.getElementsByClassName("introduction")[0] 
    intro.remove();
    $("#question-generation-field").html("<p>Beach or Mountains?</p>").addClass("test");
    /*let launchQuestions = document.getElementById('launch-questions');
    launchQuestions.innerHTML += "Mountains or Beaches?";
    let newHeading = document.createElement("h3");
    div[1].appendChild(newHeading);*/
}
