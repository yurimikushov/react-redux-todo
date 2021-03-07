import React from 'react'
import {
  useIsTodosLoading,
  useTodos,
  useToggleTodo,
  useDeleteTodo,
} from '../store/hooks'
import TodoItems from '../components/TodoItems'

const TodoItemsContainer = () => {
  const isLoading = useIsTodosLoading()
  const todos = useTodos()
  const toggleTodo = useToggleTodo()
  const deleteTodo = useDeleteTodo()

  return (
    <TodoItems
      isLoading={isLoading}
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default TodoItemsContainer
