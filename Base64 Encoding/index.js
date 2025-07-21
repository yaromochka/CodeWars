"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var SIZE_OF_CHUNK_BASE64 = 6;
String.prototype.toBase64 = function () {
    var currentString = this.toString();
    var stringInBinaryArray = Array();
    for (var _i = 0, currentString_1 = currentString; _i < currentString_1.length; _i++) {
        var str = currentString_1[_i];
        var binaryValueString = letterToBinary(str);
        stringInBinaryArray.push(binaryValueString);
    }
    var binaryString = stringInBinaryArray.join('');
    var splittedStringToChunks = splitStringIntoChunk(binaryString, SIZE_OF_CHUNK_BASE64);
    var resultCodingBase = Array();
    for (var _a = 0, splittedStringToChunks_1 = splittedStringToChunks; _a < splittedStringToChunks_1.length; _a++) {
        var chunk = splittedStringToChunks_1[_a];
        console.log('Как выглядит чанк из шести символов', chunk);
        resultCodingBase.push(binaryToLetter(chunk));
    }
    return resultCodingBase.join('');
};
String.prototype.fromBase64 = function () {
    return this.toString();
};
function letterToBinary(str) {
    var asciiValueString = str.charCodeAt(0);
    console.log('Значение буквы в ASCII', str, '->', asciiValueString);
    var binaryValueString = asciiValueString.toString(2).padStart(8, '0');
    console.log('ASCII код в бинарном виде', binaryValueString);
    return binaryValueString;
}
function binaryToLetter(str) {
    var numberFromBinary = parseInt(str, 2);
    console.log('Из бинарного чанка (6 символов) в десятичное число', numberFromBinary);
    var asciiValueString = String.fromCharCode(numberFromBinary);
    console.log('Десятичное число в ASCII', asciiValueString);
    return asciiValueString;
}
function addedArrayToChunks(arrayToAdded) {
    return arrayToAdded;
}
function splitStringIntoChunk(stringToSplit, chunkSize) {
    var result = Array();
    for (var i = 0; i < stringToSplit.length; i += chunkSize) {
        result.push(stringToSplit.slice(i, i + chunkSize));
    }
    return result;
}
describe('', function () {
    it('Encoding', function () {
        console.log(String.fromCharCode(5));
        chai_1.assert.equal(''.toBase64(), ''),
            chai_1.assert.equal('Hello World!'.toBase64(), 'SGVsbG8gV29ybGQh');
    }),
        it('Decoding', function () {
            chai_1.assert.equal(''.fromBase64(), ''),
                chai_1.assert.equal('SGVsbG8gV29ybGQh'.fromBase64(), 'Hello World!');
        });
});
