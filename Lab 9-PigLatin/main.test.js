const {expect, test, describe} = require("@jest/globals");
const main = require('./main')


    test('word stats with a', () => {
        let testWord = main.translate('amazon');

        expect(testWord).toBe('amazonway');
    });

    test('word starts with e', () => {
        let testWord = main.translate('eagle');

        expect(testWord).toBe('eagleway');
    });

    test('word starts with i', () => {
        let testWord = main.translate('indigo');

        expect(testWord).toBe('indigoway');
    });

    test('word starts with o', () => {
        let testWord = main.translate('octopus');

        expect(testWord).toBe('octopusway');
    });

    test('word starts with u', () => {
        let testWord = main.translate('umbrella');

        expect(testWord).toBe('umbrellaway');
    });

    test('lower case conversion with vowel', () => {
        let testWord = main.translate('Ant');

        expect(testWord).toBe('antway');
    });

    test('one consonant and different vowels', () => {
        let testWord = main.translate('bee');

        expect(testWord).toBe('eebay');
    });

    test('word starts with one consonant', () => {
        let testWord = main.translate('dog');

        expect(testWord).toBe('ogday');
    });

    test('word starts with one consonant', () => {
        let testWord = main.translate('cat');

        expect(testWord).toBe('atcay');
    });

    test('word starts with two consonants', () => {
        let testWord = main.translate('black');

        expect(testWord).toBe('ackblay');
    });

    test('word starts with three consonats', () => {
        let testWord = main.translate('spray');

        expect(testWord).toBe('ayspray');
    });







