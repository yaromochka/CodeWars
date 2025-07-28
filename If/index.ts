type If<State, Variable1, Variable2> = State extends true ? Variable1 : Variable2

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'