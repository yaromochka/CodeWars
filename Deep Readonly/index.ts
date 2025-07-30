type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type DeepReadonly<InputType> = {
    readonly [K in keyof InputType]: InputType[K]
}
type TodoDeepReadonly = DeepReadonly<X> // should be same as `Expected`