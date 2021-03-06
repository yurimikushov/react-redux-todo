import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../store/selectors'
import { deleteTodo } from '../store/actions'
import TodoItems from '../components/TodoItems'

const TodoItemsContainer = () => {
  const todos = useSelector(getTodos())
  const dispatch = useDispatch()

  return (
    <TodoItems
      todos={todos}
      deleteTodo={(todoId) => dispatch(deleteTodo(todoId))}
    />
  )
}

export default TodoItemsContainer
