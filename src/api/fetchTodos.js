import { nanoid } from 'nanoid'

const todos = [
  {
    id: nanoid(),
    title: 'Read a book',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'Check email',
    completed: true,
  },
  {
    id: nanoid(),
    title: 'Buy a milk',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'Call John',
    completed: false,
  },
]

const fetchTodos = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(todos)
    }, 1000)
  )
}

export { fetchTodos }
