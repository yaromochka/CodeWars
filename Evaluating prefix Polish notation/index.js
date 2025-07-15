"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function calculate(expression) {
    var tokens = expression.split(' ');
    tokens = Object.values(tokens).reverse();
    var stackOfNumbers = new Array();
    for (var indexOfToken in tokens) {
        var token = tokens[indexOfToken];
        if (isNumber(token)) {
            stackOfNumbers.push(Number.parseFloat(token));
        }
        else {
            var resultOfExpression = switchOperation(token, stackOfNumbers);
            stackOfNumbers.push(resultOfExpression);
        }
    }
    return stackOfNumbers.pop();
}
function isNumber(str) {
    return str.match(/^[-+]?\d*\.?\d+([eE][-+]?\d+)?$/);
}
function switchOperation(token, stackOfNumbers) {
    var firstNumberInStack = stackOfNumbers.pop();
    var secondNumberInStack = stackOfNumbers.pop();
    var result = Number.NaN;
    switch (token) {
        case '-':
            result = firstNumberInStack - secondNumberInStack;
            break;
        case '+':
            result = firstNumberInStack + secondNumberInStack;
            break;
        case '*':
            result = firstNumberInStack * secondNumberInStack;
            break;
        case '/':
            result = firstNumberInStack / secondNumberInStack;
            break;
    }
    return result;
}
describe('prefix polish notation calculator', function () {
    it('reads numbers', function () {
        chai_1.assert.equal(calculate('0'), 0);
        chai_1.assert.equal(calculate('123'), 123);
        chai_1.assert.approximately(calculate('12.456'), 12.456, 0.001);
    });
    it("performs operations", function () {
        chai_1.assert.equal(calculate('+ 3 5'), 8);
        chai_1.assert.equal(calculate('* + 2 2 3'), 12);
        chai_1.assert.equal(calculate('/ + 3 5 * 2 2'), 2);
    });
});
