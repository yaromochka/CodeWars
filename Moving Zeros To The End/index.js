"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function moveZeros(arr) {
    var _a;
    if (arr.length === 0) {
        return [];
    }
    var leftPointer = 0;
    var rightPointer = 0;
    while (rightPointer < arr.length) {
        if (arr[rightPointer] !== 0) {
            _a = [arr[rightPointer], arr[leftPointer]], arr[leftPointer] = _a[0], arr[rightPointer] = _a[1];
            leftPointer += 1;
        }
        rightPointer += 1;
    }
    return arr;
}
describe('Move zeros to end', function () {
    it('Empty arrays and w/o zeros', function () {
        chai_1.assert.deepEqual(moveZeros([]), []);
        chai_1.assert.deepEqual(moveZeros([12, 132, 'Wow', '']), [12, 132, 'Wow', '']);
    });
    it('Simple arrays', function () {
        chai_1.assert.deepEqual(moveZeros([0, 1]), [1, 0]);
        chai_1.assert.deepEqual(moveZeros([0, 1, 1]), [1, 1, 0]);
        chai_1.assert.deepEqual(moveZeros(['abc', 0, 0, 0, 'acd']), ['abc', 'acd', 0, 0, 0]);
        chai_1.assert.deepEqual(moveZeros([0, false, false, 0, true, Boolean(0), true]), [false, false, true, Boolean(0), true, 0, 0]);
    });
});
// [12, 0, 0, 0, 13, 14]
// 
