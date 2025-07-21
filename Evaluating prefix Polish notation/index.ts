import { assert } from 'chai';

function calculate(expression: string): number {
    let tokens: string[] = expression.split(' ')
    tokens = Object.values(tokens).reverse()
    let stackOfNumbers = new Array<number>();
        
    for (const indexOfToken in tokens) {
        let token: string = tokens[indexOfToken]
        if (isNumber(token)) {
            stackOfNumbers.push(Number.parseFloat(token))
        } else {
            let resultOfExpression = switchOperation(token, stackOfNumbers)
            if (resultOfExpression) {
                stackOfNumbers.push(resultOfExpression)
            }
        }
    }  
    return stackOfNumbers.pop()!;
}

function isNumber(str: string): RegExpMatchArray | null {
  return str.match(/^[-+]?\d*\.?\d+([eE][-+]?\d+)?$/)
}

function switchOperation(token: string, stackOfNumbers: number[]): number | undefined {
    const firstNumberInStack = stackOfNumbers.pop()
    const secondNumberInStack = stackOfNumbers.pop()
    if (!firstNumberInStack || !secondNumberInStack) {
        return
    }
    let result: number | undefined
    switch (token) {
        case '-':
            result = firstNumberInStack - secondNumberInStack
            break;
        case '+':
            result = firstNumberInStack + secondNumberInStack
            break;
        case '*':
            result = firstNumberInStack * secondNumberInStack
            break;
        case '/':
            result = firstNumberInStack / secondNumberInStack
            break;
    }
    return result
}


describe('prefix polish notation calculator', () => {
  it('reads numbers', () => {
    assert.equal(calculate('0'), 0);
    assert.equal(calculate('123'), 123);
    assert.equal(calculate('123df'), 123);
    assert.approximately(calculate('12.456'), 12.456, 0.001);
  });
  
  it("performs operations", () => {
    assert.equal(calculate('+ 3 5'), 8);
    assert.equal(calculate('* + 2 2 3'), 12);
    assert.equal(calculate('/ + 3 5 * 2 2'), 2);
  });
});