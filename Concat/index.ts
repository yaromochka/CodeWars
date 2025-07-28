type Concat<Variable1 extends Array<unknown>, Variable2 extends unknown[]> = [...Variable1, ...Variable2]

type ResultConcat = Concat<[1], [2]> // expected to be [1, 2]