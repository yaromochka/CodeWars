"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function permutations(string) {
    var result = [];
    function permute(array, left, right) {
        var _a, _b;
        if (left === right) {
            result.push(array.join(''));
        }
        else {
            for (var i = left; i <= right; i++) {
                _a = [array[i], array[left]], array[left] = _a[0], array[i] = _a[1];
                permute(array, left + 1, right);
                _b = [array[i], array[left]], array[left] = _b[0], array[i] = _b[1];
            }
        }
    }
    permute(string.split(''), 0, string.length - 1);
    return Array.from(new Set(result));
}
describe('', function () {
    it('', function () {
        chai_1.assert.deepEqual(permutations('a').sort(), ['a'].sort());
        chai_1.assert.deepEqual(permutations('ab').sort(), ['ab', 'ba'].sort());
        chai_1.assert.deepEqual(permutations('abc').sort(), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort());
    });
});
