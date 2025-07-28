"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function workOnStrings(a, b) {
    var matchedToStringA = findMatches(a, b);
    var matchedToStringB = findMatches(b, a);
    var resultStringMerged = toggleLettersInString(a, matchedToStringB) + toggleLettersInString(b, matchedToStringA);
    return resultStringMerged;
}
function toggleLettersInString(strToToggleMatches, matchedMap) {
    matchedMap.forEach(function (_, letterToToggle) {
        var countOfRepeat = matchedMap.get(letterToToggle);
        if (countOfRepeat !== 0) {
            var FIND_LETTER_IN_STRING_REGEXP = new RegExp("[".concat(letterToToggle.toLocaleUpperCase()).concat(letterToToggle.toLowerCase(), "]"), "g");
            strToToggleMatches = strToToggleMatches.replace(FIND_LETTER_IN_STRING_REGEXP, function (matchedChar) {
                return toggleCaseString(matchedChar);
            });
        }
    });
    return strToToggleMatches;
}
function findMatches(a, b) {
    var matchedMap = new Map();
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var letter = a_1[_i];
        var FIND_IGNORE_CASE_REGEXP = RegExp("[".concat(letter.toUpperCase()).concat(letter.toLowerCase(), "]"), 'g');
        if (b.match(FIND_IGNORE_CASE_REGEXP) && !matchedMap.has(letter)) {
            var countInSecondString = countOccurrences(a, letter) % 2;
            matchedMap.set(letter.toLowerCase(), countInSecondString);
        }
    }
    return matchedMap;
}
function countOccurrences(stringWhereFind, valueToFind) {
    var FIND_COUNT_VALUE_REGEXP = new RegExp("[".concat(valueToFind.toLocaleUpperCase()).concat(valueToFind.toLowerCase(), "]"), "g");
    return (stringWhereFind.match(FIND_COUNT_VALUE_REGEXP) || []).length;
}
function toggleCaseString(s) {
    if (s === s.toUpperCase()) {
        return s.toLowerCase();
    }
    else {
        return s.toUpperCase();
    }
}
describe('', function () {
    it('', function () {
        chai_1.assert.equal(workOnStrings('', ''), ''),
            chai_1.assert.equal(workOnStrings('abc', 'cde'), 'abCCde'),
            chai_1.assert.equal(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe"), "abcDeFGtrzWDEFGgGFhjkWqE"),
            chai_1.assert.equal(workOnStrings('ab', 'aba'), 'aBABA'),
            chai_1.assert.equal(workOnStrings('aaa', 'aaa'), 'AAAAAA');
        chai_1.assert.equal(workOnStrings('aaa', 'AAA'), 'AAAaaa');
    });
});
