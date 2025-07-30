// Было так
type IsNever2<InputType> = InputType extends never ? true : false

type IsNever<InputType> = [InputType] extends [never] ? true : false

type Aa = IsNever<never> // expected to be true
type Bb = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false 