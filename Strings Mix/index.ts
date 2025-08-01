import { assert } from 'chai';

type Counter = { [key: string]: number };

function mix(s1: string, s2: string): string {
    let counter1: Counter = countLetters(s1);
    let counter2: Counter = countLetters(s2);

    let resultArray: string[] = []

    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];

        let count1 = counter1[letter] || 0;
        let count2 = counter2[letter] || 0;
        let localMax = Math.max(count1, count2);

        if (localMax <= 1 || letter === '') continue

        if (count1 > count2) {
            resultArray.push(`1:${letter.repeat(counter1[letter])}`);
        } else if (count2 > count1) {
            resultArray.push(`2:${letter.repeat(counter2[letter])}`)
        } else {
            resultArray.push(`=:${letter.repeat(counter1[letter])}`)
        }
    }

    return resultArray.sort((a, b) => {
        if (b.length !== a.length) return b.length - a.length;

        const aPrefix = a[0];
        const bPrefix = b[0];
        if (aPrefix !== bPrefix) {
            const order: Record<'1' | '2' | '=', number> = { '1': 0, '2': 1, '=': 2 };
            return order[aPrefix as '1' | '2' | '='] - order[bPrefix as '1' | '2' | '='];
        }

        return a.slice(2).localeCompare(b.slice(2));
    }).join('/');
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
        assert.equal(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
        assert.equal(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
    })
})