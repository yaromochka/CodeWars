type Push<ArrayToPush extends Array<unknown>, ElementToPush> = [...ArrayToPush, ElementToPush]

type ResultPush = Push<[1, 2], '3'> // [1, 2, '3']