import { nanoid } from 'nanoid'
import { delay } from '../utils'

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
  await delay(1000)

  return todos
}

export { fetchTodos }
