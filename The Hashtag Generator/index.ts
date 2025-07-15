import { assert } from 'chai';
 
function generateHashtag(str: string) {
  if (str.trim().length === 0) {
    return false
  }
  
  let strSequence: string[] = str.split(' ')
  let resultHashtagArray: string[] = ['#']

  for (let index in strSequence) {
    let partOfString: string = strSequence[index]
    partOfString = partOfString.charAt(0).toUpperCase() + partOfString.slice(1)
    resultHashtagArray.push(partOfString)
  }


  let resultHashtagString: string = resultHashtagArray.join('')
  
  if (resultHashtagString.length <= 140) {
    return resultHashtagString
  } else {
    return false
  }
}


describe('Generating hashtags', () => {
  it('Empty sttings', () => {
    assert.equal(generateHashtag(''), false)
    assert.equal(generateHashtag(''.repeat(50)), false)
  })
  it('Normal strings', () => {
    assert.equal(generateHashtag('Hello world'), '#HelloWorld')
    assert.equal(generateHashtag('vSem PriVet eTo StrokA SO stRANge sYYmbOls'), '#VSemPriVetEToStrokASOStRANgeSYYmbOls')
    assert.equal(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138))
  })
  it('Too long strings', () => {
    assert.equal(generateHashtag('a'.repeat(150)), false)
    assert.equal(generateHashtag('abab'.repeat(40)), false)
    assert.equal(generateHashtag(''.repeat(140)), false)
  })
})