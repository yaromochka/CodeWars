interface TodoReadonly {
  title: string
  description: string
}

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
}

const todoReadonly: MyReadonly<TodoReadonly> = {
  title: "Hey",
  description: "foobar"
}

todoReadonly.title = "Hello" // Error: cannot reassign a readonly property
todoReadonly.description = "barFoo" // Error: cannot reassign a readonly property
