type MyAwaited<T> = T extends PromiseLike<infer TypeInGeneric> ? TypeInGeneric : never

type ExampleType = Promise<string>

type resultAwaited = MyAwaited<ExampleType> // string