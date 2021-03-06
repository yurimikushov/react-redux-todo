import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isTodosLoading, getTodos } from '../store/selectors'
import { deleteTodo } from '../store/actions'
import TodoItems from '../components/TodoItems'

const TodoItemsContainer = () => {
  const isLoading = useSelector(isTodosLoading())
  const todos = useSelector(getTodos())
  const dispatch = useDispatch()

  return (
    <TodoItems
      isLoading={isLoading}
      todos={todos}
      deleteTodo={(todoId) => dispatch(deleteTodo(todoId))}
    />
  )
}

export default TodoItemsContainer
