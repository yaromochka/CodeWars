type Chunk<TypeToInput extends any[], ChunkLength extends number, AccumulateChunk extends any[] = []> =
    AccumulateChunk['length'] extends ChunkLength
        ? [AccumulateChunk, ...Chunk<TypeToInput, ChunkLength>]
        : TypeToInput extends [infer K, ...infer L]
            ? Chunk<L, ChunkLength, [...AccumulateChunk, K]>
            : AccumulateChunk extends [] ? AccumulateChunk : [AccumulateChunk]

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]