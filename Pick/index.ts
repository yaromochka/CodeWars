interface TodoPick {
  title: string
  description: string
  completed: boolean
}

type MyPick<InputType, KeysForPicking extends keyof InputType> = {
    [P in KeysForPicking]: InputType[P];
}

type a = keyof TodoPick

type TodoPreview = MyPick<TodoPick, 'title' | 'completed'>

const todoPick: TodoPreview = {
    title: 'Clean room',
    completed: false,
}