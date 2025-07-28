"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function hexStringToRGB(hexString) {
    hexString = hexString.replace('#', '');
    var mapOfRGB = {
        r: fromHexToDecimal(hexString.slice(0, 2)),
        g: fromHexToDecimal(hexString.slice(2, 4)),
        b: fromHexToDecimal(hexString.slice(4, 6))
    };
    return mapOfRGB;
}
function fromHexToDecimal(str) {
    return Number("0x".concat(str));
}
describe('', function () {
    it('', function () {
        chai_1.assert.deepEqual(hexStringToRGB('#FF9933'), { r: 255, g: 153, b: 51 });
    });
});
