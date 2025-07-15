import { assert } from 'chai'

function inArray(array1: string[], array2: string[]): string[] {

    let arrayWithSubstrings: string[] = []

    for (let indexFirstArray in array1) {

        let firstArrayElem: string = array1[indexFirstArray]

        for (let indexSecondArray in array2) {
            let secondArrayElem: string = array2[indexSecondArray]
            if (secondArrayElem.includes(firstArrayElem)) {
                arrayWithSubstrings.push(firstArrayElem)
                break;
            }
        }
    }

    return arrayWithSubstrings.sort()
}


describe('Find substrings in array', () => {
    it('Empty arrays', () => {
        let array2: string[] = []
        let array1: string[] = []

        assert.deepEqual(inArray(array1, array2), [])
        
        array1 = ['live', 'one', 'use', 'round']

        assert.deepEqual(inArray(array1, array2), [])

    })
    it('', () => {
        let array2: string[] = ['alive', 'alone', 'abuse', 'agile', 'around', 'abba']

        let array1: string[] = ['live', 'one', 'two', 'three', 'going', 'use', 'round']
        assert.deepEqual(inArray(array1, array2), ['live', 'one', 'round', 'use'])

        array1 = ['rose', 'pink', 'blue', 'yellow']
        assert.deepEqual(inArray(array1, array2), [])
    });
})