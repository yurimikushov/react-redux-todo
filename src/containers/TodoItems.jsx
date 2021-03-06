import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getFilterMode,
  isTodosLoading,
  getTodos,
  getDontCompletedTodos,
} from '../store/selectors'
import { toggleTodo, deleteTodo } from '../store/actions'
import { FILTER_MODE_ALL } from '../constants'
import TodoItems from '../components/TodoItems'

const TodoItemsContainer = () => {
  const filterMode = useSelector(getFilterMode())
  const isLoading = useSelector(isTodosLoading())
  const todos = useSelector(
    filterMode === FILTER_MODE_ALL ? getTodos() : getDontCompletedTodos()
  )
  const dispatch = useDispatch()

  return (
    <TodoItems
      isLoading={isLoading}
      todos={todos}
      toggleTodo={(todoId) => dispatch(toggleTodo(todoId))}
      deleteTodo={(todoId) => dispatch(deleteTodo(todoId))}
    />
  )
}

export default TodoItemsContainer
