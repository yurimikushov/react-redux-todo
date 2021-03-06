import { nanoid } from 'nanoid'
import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  ADD_TODO,
  DELETE_TODO,
} from '../actionTypes'

const initialState = {
  data: [],
  isLoading: false,
  error: '',
}

const fetchTodosLoading = (state) => {
  return { ...state, isLoading: true }
}

const fetchTodosSuccess = (state, { todos }) => {
  return { ...state, data: todos, isLoading: false }
}

const fetchTodosError = (state, { errorMessage }) => {
  return { ...state, isLoading: false, error: errorMessage }
}

const addTodo = (state, { title }) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  }

  return { ...state, data: [...state.data, newTodo] }
}

const deleteTodo = (state, { id }) => {
  return { ...state, data: state.data.filter((todo) => todo.id !== id) }
}

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TODOS_LOADING:
      return fetchTodosLoading(state)
    case FETCH_TODOS_SUCCESS:
      return fetchTodosSuccess(state, payload)
    case FETCH_TODOS_ERROR:
      return fetchTodosError(state, payload)
    case ADD_TODO:
      return addTodo(state, payload)
    case DELETE_TODO:
      return deleteTodo(state, payload)
    default:
      return state
  }
}

export default counterReducer
