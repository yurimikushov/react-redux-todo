import { nanoid } from 'nanoid'
import { ADD_TODO, DELETE_TODO } from '../actionTypes'

const initialState = [
  {
    id: nanoid(),
    title: 'Buy a milk',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'Buy a flour',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'Buy a milk',
    completed: false,
  },
]

const addTodo = (state, { title }) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  }

  return [...state, newTodo]
}

const deleteTodo = (state, { id }) => {
  return state.filter((todo) => todo.id !== id)
}

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return addTodo(state, payload)
    case DELETE_TODO:
      return deleteTodo(state, payload)
    default:
      return state
  }
}

export default counterReducer
