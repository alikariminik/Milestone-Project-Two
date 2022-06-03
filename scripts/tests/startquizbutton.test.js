const { expect } = require("@jest/globals");
const startQuiz = require("../javascript/startquizbutton")


beforeEach( () => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

const mockInitialiseImages = "mock";
const mockUpdateElementWithRandomPhoto = "mock";

describe("DOM tests on button click which call startQuiz function", () => {
    test("expects class=introduction to be removed from HTML", () => {
        startQuiz();
        expect(document.getElementsByClassName("introduction").length).toBe(0);
    });
    test("expects startquiz button to be removed from HTML. Back Button and Reset Button should be added", () => {
        startQuiz();
        expect(document.getElementsByTagName("button").length).toBe(2);
    });
    test("expects insert of a question at at div with ID of question-generation-field", () => {
        startQuiz();
        expect(document.getElementById("question-generation-field").innerHTML).toEqual(`<p class="test">Beaches or Mountains?</p>` )
    });
    test("expects class='hidden' to be removed from the <img>", () => {
        startQuiz();
        expect(document.getElementsByClassName("hidden").length).toBe(0);
    });
    test("expects class='images-wrapper' to be added", () => {
        startQuiz();
        expect(document.getElementsByClassName("images-wrapper").length).toBe(1);
    });
    test("expects class='left-image-wrapper' to be added", () => {
        startQuiz();
        expect(document.getElementsByClassName("left-image-wrapper").length).toBe(1);
    });
    test("expects class='right-image-wrapper' to be added", () => {
        startQuiz();
        expect(document.getElementsByClassName("right-image-wrapper").length).toBe(1);
    });
    test("expects class='back-button' to be added", () => {
        startQuiz();
        expect(document.getElementsByClassName("back-button").length).toBe(1);
    });
    test("expects class='reset-button' to be added", () => {
        startQuiz();
        expect(document.getElementsByClassName("reset-button").length).toBe(1);
    });
});

/*describe("DOM tests on button click which call startQuiz function", () => {
    test("expects startquiz button to be removed from HTML", () => {
        startQuiz();
        expect(document.getElementsByTagName("button").length).toBe(0);
    });
});*/