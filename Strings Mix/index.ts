import { assert } from 'chai';

type Counter = { [key: string]: number };

function mix(s1: string, s2: string): string {
    let counter1: Counter = countLetters(s1);
    let counter2: Counter = countLetters(s2);

    let resultArray: string[] = []

    let mergeLetters = Array.from(new Set([...s1.split(''), ...s2.split('')]));

    for (let i = 0; i < mergeLetters.length; i++) {
        let letter = mergeLetters[i];
        if (!isLowerLetter(letter) || (counter1[letter] === 1 && counter2[letter] === 1)) continue
        console.log(counter1[letter], counter2[letter])
        if (counter1[letter] > counter2[letter]) {
            resultArray.push(`1:${letter.repeat(counter1[letter])}`);
        } else if (counter2[letter] > counter1[letter]) {
            resultArray.push(`2:${letter.repeat(counter2[letter])}`)
        } else {
            resultArray.push(`=:${letter.repeat(counter1[letter])}`)
        }
        resultArray.push('/')
    }

    return resultArray.join('')
}

function countLetters(s: string): Counter {
    let counter: Counter = {};

    for (let letter of s) {
        if (isLowerLetter(letter)) {
            counter[letter] = (counter[letter] || 0) + 1
        }
    }

    return counter
}

function isLowerLetter(c: string): RegExpMatchArray | null {
    return c.match(/[a-z]/g)
}


describe('', () => {
    it('', () => {
        assert.equal(mix('my&friend&Paul has heavy hats! &', 'my friend John has many many friends &'), '2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss')
    })
})