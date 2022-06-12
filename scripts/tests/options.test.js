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
describe("Images and Question Text update appropriately", () => {
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
