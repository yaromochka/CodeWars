"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function solution(list) {
    var resultArray = [];
    var lastPushedElement;
    for (var i = 0; i < list.length; i++) {
        var dim = Math.abs(list[i + 1] - list[i]);
        var lastElement = resultArray[resultArray.length - 1];
        if (dim === 1 && lastElement !== '-') {
            resultArray.push(String(list[i]));
            resultArray.push('-');
            lastPushedElement = list[i];
        }
        else if (dim === 1) {
            continue;
        }
        else {
            if (lastPushedElement && Math.abs(lastPushedElement - list[i]) <= 1) {
                resultArray.pop();
                resultArray.push(',');
            }
            resultArray.push(String(list[i]));
            if (i < list.length - 1) {
                resultArray.push(',');
            }
        }
    }
    return resultArray.join('');
}
describe('rangeExtraction', function () {
    it('should handle empty input', function () {
        chai_1.assert.deepEqual(solution([-5, -4, -3, 0, 2, 3, 4, 10, 12, 13, 14, 15]), '-5--3,0,2-4,10,12-15');
        chai_1.assert.deepEqual(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20");
    });
});
