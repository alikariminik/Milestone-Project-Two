let launchQuestions = document.getElementById('launch-questions');
launchQuestions.addEventListener('click', startQuiz);

let pictureGenerationField = document.getElementsByClassName(picture-generation-field);


function startQuiz (event) {
    let button = document.getElementsByTagName("button")[0] 
    button.remove();
    $("#picture-generation-field").html("<p>Beach or Mountains?</p>").addClass("test");
    /*let launchQuestions = document.getElementById('launch-questions');
    launchQuestions.innerHTML += "Mountains or Beaches?";
    let newHeading = document.createElement("h3");
    div[1].appendChild(newHeading);*/
}
