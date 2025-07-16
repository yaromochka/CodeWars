import { assert } from 'chai';

function moveZeros(arr: any[]) {
    if (arr.length === 0) {
        return []
    }

    let leftPointer: number = 0;
    let rightPointer: number = 0;

    while (rightPointer < arr.length ) {
        if (arr[rightPointer] !== 0) {
            [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]]
            leftPointer += 1
        }
        
        rightPointer += 1
    }

    return arr
}

describe('Move zeros to end', () => {
    it('Empty arrays and w/o zeros', () => {
        assert.deepEqual(moveZeros([]), [])
        assert.deepEqual(moveZeros([12, 132, 'Wow', '']), [12, 132, 'Wow', ''])
    })
    it('Simple arrays', () => {
        assert.deepEqual(moveZeros([0, 1]), [1, 0])
        assert.deepEqual(moveZeros([0, 1, 1]), [1, 1, 0])
        assert.deepEqual(moveZeros(['abc', 0, 0, 0, 'acd']), ['abc', 'acd', 0, 0, 0])
        assert.deepEqual(moveZeros([0, false, false, 0, true, Boolean(0), true]), [false, false, true, Boolean(0), true, 0, 0])
    })
})




// [12, 0, 0, 0, 13, 14]
// 