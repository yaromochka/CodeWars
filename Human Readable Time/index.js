"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function humanReadable(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds % 3600 / 60);
    var sec = Math.floor((seconds % 3600) % 60);
    return "".concat(formatNumber(hours), ":").concat(formatNumber(minutes), ":").concat(formatNumber(sec));
}
function formatNumber(num) {
    return String(num).padStart(2, '0');
}
describe('', function () {
    it('', function () {
        chai_1.assert.equal(humanReadable(0), '00:00:00');
        chai_1.assert.equal(humanReadable(59), '00:00:59');
        chai_1.assert.equal(humanReadable(60), '00:01:00');
        chai_1.assert.equal(humanReadable(3599), '00:59:59');
        chai_1.assert.equal(humanReadable(3600), '01:00:00');
        chai_1.assert.equal(humanReadable(123), '00:02:03'),
            chai_1.assert.equal(humanReadable(1234), '00:20:34'),
            chai_1.assert.equal(humanReadable(86400), '24:00:00');
    });
});
