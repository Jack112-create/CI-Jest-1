/**
 * @jest-environment jsdom
 */

const { beforeEach, describe, expect } = require("@jest/globals");
const buttonClick = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test('Expects p content to change', () => {
        buttonClick();
        expect((document.getElementById("par").innerHTML)).toEqual("You Clicked");
    });
    test('H1 should exist', () => {
        expect(document.getElementsByTagName("h1").length).toBe(1)
    });
    
});