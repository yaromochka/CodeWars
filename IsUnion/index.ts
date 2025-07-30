type IsUnion<InputType, U = InputType> = InputType extends any ? [U] extends [InputType] ? false : true : never;

type case1 = IsUnion<string> // false
type case2 = IsUnion<string | number> // true
type case3 = IsUnion<[string | number]> // false