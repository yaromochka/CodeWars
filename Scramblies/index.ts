import { assert } from 'chai'

function scramble(str1: string, str2: string): boolean {
    let counterLettersInFirstString: Map<string, number> = new Map()
    let flag: boolean = true

    for (let index = 0; index < str1.length; index++) {

        let letterInWord: string = str1[index]

        if (counterLettersInFirstString.has(letterInWord)) {
            counterLettersInFirstString.set(letterInWord, counterLettersInFirstString.get(letterInWord)! + 1)
        } else {
            counterLettersInFirstString.set(letterInWord, 1)
        }
    }

    for (let index = 0; index < str2.length; index++) {
        
        let letterInWord: string = str2[index]

        if (counterLettersInFirstString.has(letterInWord)) {
            counterLettersInFirstString.set(letterInWord, counterLettersInFirstString.get(letterInWord)! - 1)
            if (counterLettersInFirstString.get(letterInWord) === 0) {
                counterLettersInFirstString.delete(letterInWord)
            }
        } else {
            flag = false
            break
        }
    }
    return flag
}

describe('Scramble tests', () => {
    it('Simple tests', () => {
        assert.equal(scramble('orldw', 'world'), true)
        assert.equal(scramble('helo', 'hello'), false)
        assert.equal(scramble('qwertyuiopasdfghjklzxcvbnm', 'ok'), true)
        assert.equal(scramble('wwwwwOOOOrrrrlllldddd', 'world'), false)
    })
    it('Large strings test', () => {
        let s1 = 'qwertyuiopasdfghjklxcvbnm'.repeat(100000)
        let s2 = 'abcgnjfdngkds'.repeat(50000)
        assert.equal(scramble(s1, s2), true)
    })
})