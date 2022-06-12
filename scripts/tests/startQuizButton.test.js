/**
 * @jest-environment jsdom
 */

const { expect } = require("@jest/globals");

let mastertest;

beforeEach( () => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();

    mastertest = require('./mastertest.js');
});
//Testing removeIntroductionText//
describe("DOM tests on button click which call removeIntroductionText function  first", () => {
    test("expects class=introduction to be removed from HTML", () => {
        mastertest.removeIntroductionText();
        expect(document.getElementsByClassName("introduction").length).toBe(0);
    });
    test("expects 'Find My Dream Holiday' button to be removed from HTML", () => {
        mastertest.removeIntroductionText();
        expect(document.getElementsByTagName("button").length).toBe(0);
    });
    test("expects the two img tags to have class=hidden to be removed from HTML. There are 4 instances of the hidden class so there should be 2 after this function is called", () => {
        mastertest.removeIntroductionText();
        expect(document.getElementsByClassName("hidden").length).toBe(2);
    });
});

//Testing startQuiz//
describe("DOM tests on button click which call startQuiz function", () => {
    test("expects class=introduction to be removed from HTML", () => {
        mastertest.startQuiz();
        expect(document.getElementsByClassName("introduction").length).toBe(0);
    });
    test("expects 'Find My Dream Holiday' button to be removed from HTML", () => {
        mastertest.startQuiz();
        expect(document.getElementsByTagName("button").length).toBe(0);
    });
    test("expects the two img tags to have class=hidden to be removed from HTML. There are 4 instances of the hidden class so there should be 2 after this function is called", () => {
        mastertest.startQuiz();
        expect(document.getElementsByClassName("hidden").length).toBe(2);
    });
});
