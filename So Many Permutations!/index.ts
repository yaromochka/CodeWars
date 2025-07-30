import { assert } from 'chai'

function permutations(string: string): string[] {

    let result: string[] = []

    function permute(array: string[], left: number, right: number) {
        if (left === right) {
            result.push(array.join(''))
        } else {
            for (let i = left; i <= right; i++) {
                [array[left], array[i]] = [array[i], array[left]];
                permute(array, left + 1, right);
                [array[left], array[i]] = [array[i], array[left]];
            }
        }
    }

    permute(string.split(''), 0, string.length - 1)
    return Array.from(new Set(result));
}

describe('', () => {
    it('', () => {
        assert.deepEqual(permutations('a').sort(), ['a'].sort())
        assert.deepEqual(permutations('ab').sort(), ['ab', 'ba'].sort())
        assert.deepEqual(permutations('abc').sort(), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort())
    })
})