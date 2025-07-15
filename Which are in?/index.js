"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function inArray(array1, array2) {
    var arrayWithSubstrings = [];
    for (var indexFirstArray in array1) {
        var firstArrayElem = array1[indexFirstArray];
        for (var indexSecondArray in array2) {
            var secondArrayElem = array2[indexSecondArray];
            if (secondArrayElem.includes(firstArrayElem)) {
                arrayWithSubstrings.push(firstArrayElem);
                break;
            }
        }
    }
    return arrayWithSubstrings.sort();
}
describe('Find substrings in array', function () {
    it('Empty arrays', function () {
        var array2 = [];
        var array1 = [];
        chai_1.assert.deepEqual(inArray(array1, array2), []);
        array1 = ['live', 'one', 'use', 'round'];
        chai_1.assert.deepEqual(inArray(array1, array2), []);
    });
    it('', function () {
        var array2 = ['alive', 'alone', 'abuse', 'agile', 'around', 'abba'];
        var array1 = ['live', 'one', 'two', 'three', 'going', 'use', 'round'];
        chai_1.assert.deepEqual(inArray(array1, array2), ['live', 'one', 'round', 'use']);
        array1 = ['rose', 'pink', 'blue', 'yellow'];
        chai_1.assert.deepEqual(inArray(array1, array2), []);
    });
});
