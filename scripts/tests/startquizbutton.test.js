const { expect } = require("@jest/globals");
const startQuiz = require("../javascript/startquizbutton")

beforeEach( () => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests on button click which call startQuiz function", () => {
    test("expects class=introduction to be removed from HTML", () => {
        startQuiz();
        expect(document.getElementsByClassName("introduction").length).toBe(0);
    });
    test("expects startquiz button to be removed from HTML", () => {
        startQuiz();
        expect(document.getElementsByTagName("button").length).toBe(0);
    });
    test("expects insert of a question at at div with ID of question-generation-field", () => {
        startQuiz();
        expect(document.getElementById("question-generation-field").innerHTML).toEqual(`<p class="test">Beaches or Mountains?</p>`)
    });
});

/*describe("DOM tests on button click which call startQuiz function", () => {
    test("expects startquiz button to be removed from HTML", () => {
        startQuiz();
        expect(document.getElementsByTagName("button").length).toBe(0);
    });
});*/
