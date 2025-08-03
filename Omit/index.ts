interface Todo {
  title: string
  description: number
  bool: boolean
  completed: boolean
}

// Было так, но не работает
type MyOmit2<InputType, PropsToDelete extends keyof InputType> = {
    [Prop in keyof InputType]: Prop extends PropsToDelete ? never : InputType[Prop]
}

type MyOmit<InputType, PropsToDelete extends keyof InputType> = {
    [Prop in keyof InputType as Prop extends PropsToDelete ? 'banana' : Prop]: InputType[Prop]
}

type TodoPreview2 = MyOmit<Todo, 'description' | 'title' | 'bool'>

const todo: TodoPreview2 = {
  completed: false,
  banana: true
}