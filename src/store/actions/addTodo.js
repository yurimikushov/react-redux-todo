import { ADD_TODO } from '../actionTypes'

const addTodo = (newTodoTitle) => ({
  type: ADD_TODO,
  payload: {
    title: newTodoTitle,
  },
})

export { addTodo }
