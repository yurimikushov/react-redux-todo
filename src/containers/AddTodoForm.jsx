import React from 'react'
import { useAddTodo } from '../store/hooks'
import AddTodoForm from '../components/AddTodoForm'

const AddTodoFormContainer = () => {
  const addTodo = useAddTodo()

  return <AddTodoForm addTodo={addTodo} />
}

export default AddTodoFormContainer
