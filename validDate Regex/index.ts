import { assert } from 'chai';

var validDate = /\[(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])\]|\[(0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])\]|\[(0[469]|11)-(0[1-9]|[12][0-9]|30)\]/;

describe('', () => {
    it("Should match valid inputs", function () {
        [ // valid
            "[11-16]",
            "[02-28]",
            "[01-31]",
            "[03-30]",
            "[07-30]",
            "ignore [08-25] ignore",
            "[100-200] [1-1] [01-19]"
        ].forEach(input => {
            assert.match(input, validDate);
        });
    });

    it("Should not match invalid inputs", function () {
        [ // invalid
            "[02-31]",
            "[02-29]",
            "[6-3]",
            "[06- 3]",
            "[06/03]",
            "[12-00]"
        ].forEach(input => {
            assert.notMatch(input, validDate);
        });
    });
})