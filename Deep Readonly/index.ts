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


type DeepReadonly<InputType> = keyof InputType extends never ? InputType : {
  readonly [Key in keyof InputType]: DeepReadonly<InputType[Key]>
}
type TodoDeepReadonly = DeepReadonly<X> // should be same as `Expected`