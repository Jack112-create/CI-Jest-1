/**
 * @jest-environment jsdom
 */

const { beforeEach, describe, expect } = require("@jest/globals");
const buttonClick = require("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"
});

describe("DOM tests", () => {
    test('Expects p content to change', () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML == "You Clicked");
    });
});