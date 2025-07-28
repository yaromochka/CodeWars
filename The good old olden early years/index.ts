import { assert } from 'chai';

type MonthCode = {
    [key: number]: number
}

const MONTH_CODE: MonthCode = {
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
}

const DAYS_NAME = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function getGoodOldDay(input: string): string {
    let [day, month, year] = input.split('-').map(Number);

    let dayCode = MONTH_CODE[month];

    if (isLeap(year) && (month === 1 || month === 2)) {
        dayCode = MONTH_CODE[month] - 1
    }

    let yearCode: number = (4 + year + Math.floor(year / 4)) % 7

    let numberOfDay = (day + dayCode + yearCode) % 7

    return DAYS_NAME[numberOfDay]
};

function isLeap(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true
    } else {
        return false
    }
}

describe('', () => {
    it('', () => {
        assert.equal(getGoodOldDay('19-11-0017'), 'Sunday')
        assert.equal(getGoodOldDay('5-7-53'), 'Saturday')
    })
})