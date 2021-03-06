import { TOGGLE_TODO } from '../actionTypes'

const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: {
    id: todoId,
  },
})

export { toggleTodo }
