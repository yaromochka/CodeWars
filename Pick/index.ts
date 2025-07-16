interface TodoPick {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type TodoPreview = MyPick<TodoPick, 'title' | 'completed'>

const todoPick: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

