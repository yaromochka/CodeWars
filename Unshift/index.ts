type Unshift<ArrayToUnshift extends Array<unknown>, ElementToUnshift> = [ElementToUnshift, ...ArrayToUnshift]

type ResultUnshift = Unshift<[1, 2], 0> // [0, 1, 2]