import { assert } from 'chai'

const SIZE_OF_CHUNK_BASE64_ENCODING = 6
const SIZE_OF_CHUNK_BASE64_DECODING = 8
const BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

declare global {
    interface String {
        toBase64(): string;
        fromBase64(): string;
    }
}

enum Base64 {
    ENCODING = 0,
    DECODING = 1
}

String.prototype.toBase64 = function (): string {
    let currentString = this.toString()

    let stringInBinaryArray = Array<string>()

    for (let str of currentString) {
        let binaryValueString = letterToBinary(str, Base64.ENCODING)
        stringInBinaryArray.push(binaryValueString);
    }

    let binaryString = stringInBinaryArray.join('');
    let splittedStringToChunks = splitStringIntoChunk(binaryString, SIZE_OF_CHUNK_BASE64_ENCODING);

    let resultCodingBase = Array<string>();

    for (let chunk of splittedStringToChunks) {
        resultCodingBase.push(binaryToLetter(chunk, Base64.ENCODING))
    }

    return resultCodingBase.join('')
}

String.prototype.fromBase64 = function (): string {
    let currentString = this.toString()

    let stringInBinaryArray = Array<string>()

    for (let str of currentString) {
        let binaryValueString = letterToBinary(str, Base64.DECODING)
        stringInBinaryArray.push(binaryValueString);
    }

    let binaryString = stringInBinaryArray.join('');
    let splittedStringToChunks = splitStringIntoChunk(binaryString, SIZE_OF_CHUNK_BASE64_DECODING);

    let resultCodingBase = Array<string>();

    for (let chunk of splittedStringToChunks) {
        resultCodingBase.push(binaryToLetter(chunk, Base64.DECODING))
    }

    return resultCodingBase.join('')
}

function letterToBinary(str: string, type: Base64): string {
    let asciiValueString: number
    let chunkSize: number
    if (type === Base64.ENCODING) {
        asciiValueString = str.charCodeAt(0)
        chunkSize = 8
    } else {
        asciiValueString = BASE64_CHARS.indexOf(str)
        chunkSize = 6
    }
    let binaryValueString = asciiValueString.toString(2).padStart(chunkSize, '0');
    return binaryValueString
}

function binaryToLetter(str: string, type: Base64): string {
    let asciiValueString: string
    let numberFromBinary = parseInt(str, 2);
    if (type === Base64.ENCODING) {
        asciiValueString = BASE64_CHARS[numberFromBinary];
    } else {
        asciiValueString = String.fromCharCode(numberFromBinary)
    }
    return asciiValueString
}

function splitStringIntoChunk(stringToSplit: string, chunkSize: number): Array<string> {
    const result = Array<string>()

    for (let i = 0; i < stringToSplit.length; i += chunkSize) {
        result.push(stringToSplit.slice(i, i + chunkSize))
    }

    return result
}

describe('', () => {
    it('Encoding', () => {
        assert.equal(''.toBase64(), ''),
            assert.equal('Hello World!'.toBase64(), 'SGVsbG8gV29ybGQh'),
            assert.equal('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh')
    }),
        it('Decoding', () => {
            assert.equal(''.fromBase64(), ''),
                assert.equal('SGVsbG8gV29ybGQh'.fromBase64(), 'Hello World!')
            assert.equal('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!')
        })
}) 