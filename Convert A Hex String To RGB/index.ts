import { assert } from 'chai';

function hexStringToRGB(hexString: string): Object {
    hexString = hexString.replace('#', '');

    let mapOfRGB = {
        r: fromHexToDecimal(hexString.slice(0, 2)),
        g: fromHexToDecimal(hexString.slice(2, 4)),
        b: fromHexToDecimal(hexString.slice(4, 6))
    }
    return mapOfRGB
}

function fromHexToDecimal(str: string) : number {
    return Number(`0x${str}`)
}

describe('', () => {
    it('', () => {
        assert.deepEqual(hexStringToRGB('#FF9933'), {r:255, g:153, b:51})
    })
})