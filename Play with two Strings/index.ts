import { assert } from 'chai'

function workOnStrings(a: string, b: string): string {
    let matchedToStringA: Map<string, number> = findMatches(a, b)
    let matchedToStringB: Map<string, number> = findMatches(b, a)

    let resultStringMerged: string = toggleLettersInString(a, matchedToStringB) + toggleLettersInString(b, matchedToStringA)

    return resultStringMerged
}

function toggleLettersInString(strToToggleMatches: string, matchedMap: Map<string, number>): string {
    matchedMap.forEach((_, letterToToggle) => {
        let countOfRepeat = matchedMap.get(letterToToggle)
        if (countOfRepeat !== 0) {
            const FIND_LETTER_IN_STRING_REGEXP = new RegExp(`[${letterToToggle.toLocaleUpperCase()}${letterToToggle.toLowerCase()}]`, "g");
            strToToggleMatches = strToToggleMatches.replace(FIND_LETTER_IN_STRING_REGEXP, (matchedChar) => {
                return toggleCaseString(matchedChar)
            })
        }
    })

    return strToToggleMatches
}

function findMatches(a: string, b: string): Map<string, number> {
    let matchedMap = new Map<string, number>()
    for (let letter of a) {
        const FIND_IGNORE_CASE_REGEXP = RegExp(`[${letter.toUpperCase()}${letter.toLowerCase()}]`, 'g')
        if (b.match(FIND_IGNORE_CASE_REGEXP) && !matchedMap.has(letter)) {
            let countInSecondString = countOccurrences(a, letter) % 2
            matchedMap.set(letter.toLowerCase(), countInSecondString)
        }
    }

    return matchedMap
}

function countOccurrences(stringWhereFind: string, valueToFind: string) {
    const FIND_COUNT_VALUE_REGEXP = new RegExp(`[${valueToFind.toLocaleUpperCase()}${valueToFind.toLowerCase()}]`, "g");
    return (stringWhereFind.match(FIND_COUNT_VALUE_REGEXP) || []).length;
}

function toggleCaseString(s: string) {
    if (s === s.toUpperCase()) {
        return s.toLowerCase()
    } else {
        return s.toUpperCase()
    }
}


describe('', () => {
    it('', () => {
        assert.equal(workOnStrings('', ''), ''),
            assert.equal(workOnStrings('abc', 'cde'), 'abCCde'),
            assert.equal(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe"), "abcDeFGtrzWDEFGgGFhjkWqE"),
            assert.equal(workOnStrings('ab', 'aba'), 'aBABA'),
            assert.equal(workOnStrings('aaa', 'aaa'), 'AAAAAA')
            assert.equal(workOnStrings('aaa', 'AAA'), 'AAAaaa')      
    })
})