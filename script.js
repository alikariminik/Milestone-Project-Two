let launchQuestions = document.getElementById('launch-questions');
launchQuestions.addEventListener('click', startQuiz);

let questionGenerationField = document.getElementsByClassName(question-generation-field);


function startQuiz (event) {
    let intro = document.getElementsByClassName("introduction")[0] 
    intro.remove();
    /*let wastefulRealEstate = document.getElementsByClassName("launch-positioning")[0]
    wastefulRealEstate.remove(); */
    let button = document.getElementsByTagName("button")[0] 
    button.remove();
    $("#question-generation-field").html("<p>Beaches or Mountains?</p>").addClass("test");
    $("#op-a").addClass("left-image-wrapper");
    $("#op-b").addClass("right-image-wrapper");
    /*let launchQuestions = document.getElementById('launch-questions');
    launchQuestions.innerHTML += "Mountains or Beaches?";
    let newHeading = document.createElement("h3");
    div[1].appendChild(newHeading);*/
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.unsplash.com/")
xhr.send();
