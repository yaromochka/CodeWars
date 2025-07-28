"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var SIZE_OF_CHUNK_BASE64_ENCODING = 6;
var SIZE_OF_CHUNK_BASE64_DECODING = 8;
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var Base64;
(function (Base64) {
    Base64[Base64["ENCODING"] = 0] = "ENCODING";
    Base64[Base64["DECODING"] = 1] = "DECODING";
})(Base64 || (Base64 = {}));
String.prototype.toBase64 = function () {
    var currentString = this.toString();
    var stringInBinaryArray = Array();
    for (var _i = 0, currentString_1 = currentString; _i < currentString_1.length; _i++) {
        var str = currentString_1[_i];
        var binaryValueString = letterToBinary(str, Base64.ENCODING);
        stringInBinaryArray.push(binaryValueString);
    }
    var binaryString = stringInBinaryArray.join('');
    var splittedStringToChunks = splitStringIntoChunk(binaryString, SIZE_OF_CHUNK_BASE64_ENCODING);
    var resultCodingBase = Array();
    for (var _a = 0, splittedStringToChunks_1 = splittedStringToChunks; _a < splittedStringToChunks_1.length; _a++) {
        var chunk = splittedStringToChunks_1[_a];
        resultCodingBase.push(binaryToLetter(chunk, Base64.ENCODING));
    }
    return resultCodingBase.join('');
};
String.prototype.fromBase64 = function () {
    var currentString = this.toString();
    var stringInBinaryArray = Array();
    for (var _i = 0, currentString_2 = currentString; _i < currentString_2.length; _i++) {
        var str = currentString_2[_i];
        var binaryValueString = letterToBinary(str, Base64.DECODING);
        stringInBinaryArray.push(binaryValueString);
    }
    var binaryString = stringInBinaryArray.join('');
    var splittedStringToChunks = splitStringIntoChunk(binaryString, SIZE_OF_CHUNK_BASE64_DECODING);
    var resultCodingBase = Array();
    for (var _a = 0, splittedStringToChunks_2 = splittedStringToChunks; _a < splittedStringToChunks_2.length; _a++) {
        var chunk = splittedStringToChunks_2[_a];
        resultCodingBase.push(binaryToLetter(chunk, Base64.DECODING));
    }
    return resultCodingBase.join('');
};
function letterToBinary(str, type) {
    var asciiValueString;
    var chunkSize;
    if (type === Base64.ENCODING) {
        asciiValueString = str.charCodeAt(0);
        chunkSize = 8;
    }
    else {
        asciiValueString = BASE64_CHARS.indexOf(str);
        chunkSize = 6;
    }
    var binaryValueString = asciiValueString.toString(2).padStart(chunkSize, '0');
    return binaryValueString;
}
function binaryToLetter(str, type) {
    var asciiValueString;
    var numberFromBinary = parseInt(str, 2);
    if (type === Base64.ENCODING) {
        asciiValueString = BASE64_CHARS[numberFromBinary];
    }
    else {
        asciiValueString = String.fromCharCode(numberFromBinary);
    }
    return asciiValueString;
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
        chai_1.assert.equal(''.toBase64(), ''),
            chai_1.assert.equal('Hello World!'.toBase64(), 'SGVsbG8gV29ybGQh'),
            chai_1.assert.equal('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh');
    }),
        it('Decoding', function () {
            chai_1.assert.equal(''.fromBase64(), ''),
                chai_1.assert.equal('SGVsbG8gV29ybGQh'.fromBase64(), 'Hello World!');
            chai_1.assert.equal('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!');
        });
});
