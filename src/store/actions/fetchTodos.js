import { fetchTodos as fetchTodosFromServer } from '../../api'
import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from '../actionTypes'

const fetchTodosLoading = () => ({
  type: FETCH_TODOS_LOADING,
})

const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: {
    todos,
  },
})

const fetchTodosError = (errorMessage) => ({
  type: FETCH_TODOS_ERROR,
  payload: {
    errorMessage,
  },
})

const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosLoading())

  try {
    dispatch(fetchTodosSuccess(await fetchTodosFromServer()))
  } catch (err) {
    dispatch(fetchTodosError(err))
  }
}

export { fetchTodos }
