interface Todo {
  title: string
  description: string
  completed: boolean
}

// Было так, но не работает
type MyOmit2<InputType, PropsToDelete extends keyof InputType> = {
    [Prop in keyof InputType]: Prop extends PropsToDelete ? never : InputType[Prop]
}

type MyOmit<InputType, PropsToDelete extends keyof InputType> = {
    [Prop in keyof InputType as Prop extends PropsToDelete ? never : Prop]: InputType[Prop]
}

type TodoPreview2 = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview2 = {
  completed: false,
}