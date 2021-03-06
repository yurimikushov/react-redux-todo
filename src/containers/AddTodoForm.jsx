import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions'
import AddTodoForm from '../components/AddTodoForm'

const AddTodoFormContainer = () => {
  const dispatch = useDispatch()

  return (
    <AddTodoForm addTodo={(newTodoTitle) => dispatch(addTodo(newTodoTitle))} />
  )
}

export default AddTodoFormContainer
