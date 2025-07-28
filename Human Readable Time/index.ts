import { assert } from 'chai'

function humanReadable(seconds: number): string {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor(seconds % 3600 / 60)
    let sec = Math.floor((seconds % 3600) % 60)

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(sec)}`
}

function formatNumber(num: number): string {
    return String(num).padStart(2, '0')
}

describe('', () => {
    it('', () => {
        assert.equal(humanReadable(0), '00:00:00')
        assert.equal(humanReadable(59), '00:00:59')
        assert.equal(humanReadable(60), '00:01:00')
        assert.equal(humanReadable(3599), '00:59:59')
        assert.equal(humanReadable(3600), '01:00:00')
        assert.equal(humanReadable(123), '00:02:03'),
        assert.equal(humanReadable(1234), '00:20:34'),
        assert.equal(humanReadable(86400), '24:00:00')
    })
})