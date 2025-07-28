"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var MONTH_CODE = {
    1: 1,
    2: 4,
    3: 4,
    4: 0,
    5: 2,
    6: 5,
    7: 0,
    8: 3,
    9: 6,
    10: 1,
    11: 4,
    12: 6
};
var DAYS_NAME = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function getGoodOldDay(input) {
    var _a = input.split('-').map(Number), day = _a[0], month = _a[1], year = _a[2];
    var dayCode = MONTH_CODE[month];
    if (isLeap(year) && (month === 1 || month === 2)) {
        dayCode = MONTH_CODE[month] - 1;
    }
    var yearCode = (4 + year + Math.floor(year / 4)) % 7;
    var numberOfDay = (day + dayCode + yearCode) % 7;
    return DAYS_NAME[numberOfDay];
}
;
function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    else {
        return false;
    }
}
describe('', function () {
    it('', function () {
        chai_1.assert.equal(getGoodOldDay('19-11-0017'), 'Sunday');
        chai_1.assert.equal(getGoodOldDay('5-7-53'), 'Saturday');
    });
});
