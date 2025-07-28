"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var validDate = /\[(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])\]|\[(0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])\]|\[(0[469]|11)-(0[1-9]|[12][0-9]|30)\]/;
describe('', function () {
    it("Should match valid inputs", function () {
        [
            "[11-16]",
            "[02-28]",
            "[01-31]",
            "[03-30]",
            "[07-30]",
            "ignore [08-25] ignore",
            "[100-200] [1-1] [01-19]"
        ].forEach(function (input) {
            chai_1.assert.match(input, validDate);
        });
    });
    it("Should not match invalid inputs", function () {
        [
            "[02-31]",
            "[02-29]",
            "[6-3]",
            "[06- 3]",
            "[06/03]",
            "[12-00]"
        ].forEach(function (input) {
            chai_1.assert.notMatch(input, validDate);
        });
    });
});
