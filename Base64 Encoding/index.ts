import { assert } from 'chai'

const SIZE_OF_CHUNK_BASE64 = 6

declare global {
    interface String {
        toBase64(): string;
        fromBase64(): string;
    }
}

String.prototype.toBase64 = function (): string {
    let currentString = this.toString()

    let stringInBinaryArray = Array<string>()

    for (let str of currentString) {
        let binaryValueString = letterToBinary(str)
        stringInBinaryArray.push(binaryValueString);
    }

    let binaryString = stringInBinaryArray.join('');
    let splittedStringToChunks = splitStringIntoChunk(binaryString, SIZE_OF_CHUNK_BASE64);

    let resultCodingBase = Array<string>();

    for (let chunk of splittedStringToChunks) {
        console.log('Как выглядит чанк из шести символов', chunk)
        resultCodingBase.push(binaryToLetter(chunk))
    }

    return resultCodingBase.join('')
}

String.prototype.fromBase64 = function (): string {
    return this.toString()
}

function letterToBinary(str: string): string {
    let asciiValueString = str.charCodeAt(0);
    console.log('Значение буквы в ASCII', str, '->', asciiValueString)
    let binaryValueString = asciiValueString.toString(2).padStart(8, '0');
    console.log('ASCII код в бинарном виде', binaryValueString)
    return binaryValueString
}

function binaryToLetter(str: string): string {
    let numberFromBinary = parseInt(str, 2);
    console.log('Из бинарного чанка (6 символов) в десятичное число', numberFromBinary)
    let asciiValueString = String.fromCharCode(numberFromBinary);
    console.log('Десятичное число в ASCII', asciiValueString)
    return asciiValueString
}

function addedArrayToChunks(arrayToAdded: Array<string>): Array<string> {
    return arrayToAdded
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
        console.log(String.fromCharCode(5))
        assert.equal(''.toBase64(), ''),
            assert.equal('Hello World!'.toBase64(), 'SGVsbG8gV29ybGQh')
    }),
        it('Decoding', () => {
            assert.equal(''.fromBase64(), ''),
                assert.equal('SGVsbG8gV29ybGQh'.fromBase64(), 'Hello World!')
        })
}) 