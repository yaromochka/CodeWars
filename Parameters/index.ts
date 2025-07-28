type MyParameters<TypesOfFunction> = TypesOfFunction extends (...args: infer Argument) => unknown ? Argument : never 

const foo = (): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]