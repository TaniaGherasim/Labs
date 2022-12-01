const {expect, test, describe} = require("@jest/globals");

let main = require('./main');

// words that start with vowels… write tests for several different starting vowels

test('translate to pig latin', () => {

    let testPiglatin = main('Good Night');

    expect(testPiglatin).toBe('oodGay ightNay');

});




