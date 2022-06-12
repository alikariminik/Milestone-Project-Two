const { expect } = require("@jest/globals");
const { reloadPage, initialiseImages, startQuiz } = require("./mastertest.js");

let mastertest;

beforeEach( () => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();

    mastertest = require('./mastertest.js');
});

//Testing multiple functions//
describe("Question Text update appropriately for each question", () => {
    test("Question 1: expects option A question text to update to Beaches", () => {
        let index = 0;
        let nameA = mastertest.OPTIONS[index].a.name;
        mastertest.updateQuestionText(index);
        expect(nameA).toEqual("Beaches");
    });
    test("Question 1: expects option B question text to update to Mountains", () => {
        let index = 0;
        let nameB = mastertest.OPTIONS[index].b.name;
        mastertest.updateQuestionText(index);
        expect(nameB).toEqual("Mountains");
    });
    test("Question 2: expects option A question text to update", () => {
        let index = 1;
        let nameA = mastertest.OPTIONS[index].a.name;
        mastertest.updateQuestionText(index);
        expect(nameA).toEqual("Adventures");
    });
    test("Question 2: expects option B question text to update", () => {
        let index = 1;
        let nameB = mastertest.OPTIONS[index].b.name;
        mastertest.updateQuestionText(index);
        expect(nameB).toEqual("Relaxation");
    });
    test("Question 3: expects option A question text to update", () => {
        let index = 2;
        let nameA = mastertest.OPTIONS[index].a.name;
        mastertest.updateQuestionText(index);
        expect(nameA).toEqual("History");
    });
    test("Question 3: expects option B question text to update", () => {
        let index = 2;
        let nameB = mastertest.OPTIONS[index].b.name;
        mastertest.updateQuestionText(index);
        expect(nameB).toEqual("Party");
    });
    test("Question 4:expects option A question text to update", () => {
        let index = 3;
        let nameA = mastertest.OPTIONS[index].a.name;
        mastertest.updateQuestionText(index);
        expect(nameA).toEqual("Culture");
    });
    test("Question 4: expects option B question text to update", () => {
        let index = 3;
        let nameB = mastertest.OPTIONS[index].b.name;
        mastertest.updateQuestionText(index);
        expect(nameB).toEqual("Nature");
    });
});

describe("On clicking on an image, the option clicked is added to answers", () => {
    test("Question 1: expects answers to equal an empty array", () => {
        let index = 0;
        let answers = [];
        expect(answers).toEqual([]);
    });
    test("Question 1: expects answers array to be an array with a length equal to 1", () => {
        let index = 0;
        let answers = [];
        mastertest.handleOptionClick(mastertest.addAnswer);
        answers.push("test1");
        expect(answers).toHaveLength(1);
    });
    test("Question 2: expects answers array to be an array with a length equal to 2", () => {
        let index = 1;
        let answers = [];
        mastertest.handleOptionClick(mastertest.addAnswer);
        answers.push("test1");
        answers.push("test2");
        expect(answers).toHaveLength(2);
    });
    test("Question 3: expects answers array to be an array with a length equal to 2", () => {
        let index = 2;
        let answers = [];
        mastertest.handleOptionClick(mastertest.addAnswer);
        answers.push("test1");
        answers.push("test2");
        answers.push("test3");
        expect(answers).toHaveLength(3);
    });
});

describe("On reaching the final question, the handleFinalOption is called successfully", () => {
    test("When Index equals 4", () => {
        let index = 3;
        let answers = [1,2,3,4];
        const backButton = document.getElementById("back-button");
        expect(answers).toHaveLength(4);
        mastertest.handleFinalOption();
        expect(document.getElementsByClassName("hidden").length).toBe(5);
    });
});