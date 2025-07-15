"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function generateHashtag(str) {
    if (str.trim().length === 0) {
        return false;
    }
    var strSequence = str.split(' ');
    var resultHashtagArray = ['#'];
    for (var index in strSequence) {
        var partOfString = strSequence[index];
        partOfString = partOfString.charAt(0).toUpperCase() + partOfString.slice(1);
        resultHashtagArray.push(partOfString);
    }
    var resultHashtagString = resultHashtagArray.join('');
    if (resultHashtagString.length <= 140) {
        return resultHashtagString;
    }
    else {
        return false;
    }
}
describe('Generating hashtags', function () {
    it('Empty sttings', function () {
        chai_1.assert.equal(generateHashtag(''), false);
        chai_1.assert.equal(generateHashtag(''.repeat(50)), false);
    });
    it('Normal strings', function () {
        chai_1.assert.equal(generateHashtag('Hello world'), '#HelloWorld');
        chai_1.assert.equal(generateHashtag('vSem PriVet eTo StrokA SO stRANge sYYmbOls'), '#VSemPriVetEToStrokASOStRANgeSYYmbOls');
        chai_1.assert.equal(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138));
    });
    it('Too long strings', function () {
        chai_1.assert.equal(generateHashtag('a'.repeat(150)), false);
        chai_1.assert.equal(generateHashtag('abab'.repeat(40)), false);
        chai_1.assert.equal(generateHashtag(''.repeat(140)), false);
    });
});
