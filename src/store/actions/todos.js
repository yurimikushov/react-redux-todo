import { ADD_TODO, DELETE_TODO } from '../actionTypes'

const addTodo = () => ({ type: ADD_TODO })
const deleteTodo = () => ({ type: DELETE_TODO })

export { addTodo, deleteTodo }
