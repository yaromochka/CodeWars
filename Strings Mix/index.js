"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function mix(s1, s2) {
    var counter1 = countLetters(s1);
    var counter2 = countLetters(s2);
    var resultArray = [];
    var mergeLetters = Array.from(new Set(__spreadArray(__spreadArray([], s1.split(''), true), s2.split(''), true)));
    for (var i = 0; i < mergeLetters.length; i++) {
        var letter = mergeLetters[i];
        if (!isLowerLetter(letter) || (counter1[letter] === 1 && counter2[letter] === 1))
            continue;
        console.log(counter1[letter], counter2[letter]);
        if (counter1[letter] > counter2[letter]) {
            resultArray.push("1:".concat(letter.repeat(counter1[letter])));
        }
        else if (counter2[letter] > counter1[letter]) {
            resultArray.push("2:".concat(letter.repeat(counter2[letter])));
        }
        else {
            resultArray.push("=:".concat(letter.repeat(counter1[letter])));
        }
        resultArray.push('/');
    }
    return resultArray.join('');
}
function countLetters(s) {
    var counter = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var letter = s_1[_i];
        if (isLowerLetter(letter)) {
            counter[letter] = (counter[letter] || 0) + 1;
        }
    }
    return counter;
}
function isLowerLetter(c) {
    return c.match(/[a-z]/g);
}
describe('', function () {
    it('', function () {
        chai_1.assert.equal(mix('my&friend&Paul has heavy hats! &', 'my friend John has many many friends &'), '2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss');
    });
});
