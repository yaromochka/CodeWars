"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function mix(s1, s2) {
    var counter1 = countLetters(s1);
    var counter2 = countLetters(s2);
    var resultArray = [];
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i];
        var count1 = counter1[letter] || 0;
        var count2 = counter2[letter] || 0;
        var localMax = Math.max(count1, count2);
        if (localMax <= 1 || letter === '')
            continue;
        if (count1 > count2) {
            resultArray.push("1:".concat(letter.repeat(counter1[letter])));
        }
        else if (count2 > count1) {
            resultArray.push("2:".concat(letter.repeat(counter2[letter])));
        }
        else {
            resultArray.push("=:".concat(letter.repeat(counter1[letter])));
        }
    }
    return resultArray.sort(function (a, b) {
        if (b.length !== a.length)
            return b.length - a.length;
        var aPrefix = a[0];
        var bPrefix = b[0];
        if (aPrefix !== bPrefix) {
            var order = { '1': 0, '2': 1, '=': 2 };
            return order[aPrefix] - order[bPrefix];
        }
        return a.slice(2).localeCompare(b.slice(2));
    }).join('/');
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
        chai_1.assert.equal(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr");
        chai_1.assert.equal(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt");
    });
});
