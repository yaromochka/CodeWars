"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function scramble(str1, str2) {
    var counterLettersInFirstString = new Map();
    var flag = true;
    for (var index = 0; index < str1.length; index++) {
        var letterInWord = str1[index];
        if (counterLettersInFirstString.has(letterInWord)) {
            counterLettersInFirstString.set(letterInWord, counterLettersInFirstString.get(letterInWord) + 1);
        }
        else {
            counterLettersInFirstString.set(letterInWord, 1);
        }
    }
    for (var index = 0; index < str2.length; index++) {
        var letterInWord = str2[index];
        if (counterLettersInFirstString.has(letterInWord)) {
            counterLettersInFirstString.set(letterInWord, counterLettersInFirstString.get(letterInWord) - 1);
            if (counterLettersInFirstString.get(letterInWord) === 0) {
                counterLettersInFirstString.delete(letterInWord);
            }
        }
        else {
            flag = false;
            break;
        }
    }
    return flag;
}
describe('Scramble tests', function () {
    it('Simple tests', function () {
        chai_1.assert.equal(scramble('orldw', 'world'), true);
        chai_1.assert.equal(scramble('helo', 'hello'), false);
        chai_1.assert.equal(scramble('qwertyuiopasdfghjklzxcvbnm', 'ok'), true);
        chai_1.assert.equal(scramble('wwwwwOOOOrrrrlllldddd', 'world'), false);
    });
    it('Large strings test', function () {
        var s1 = 'qwertyuiopasdfghjklxcvbnm'.repeat(100000);
        var s2 = 'abcgnjfdngkds'.repeat(50000);
        chai_1.assert.equal(scramble(s1, s2), true);
    });
});
