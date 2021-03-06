import { DELETE_TODO } from '../actionTypes'

const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: {
    id: todoId,
  },
})

export { deleteTodo }
