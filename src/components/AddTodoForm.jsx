import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodoForm = ({ addTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (!newTodoTitle) {
      return
    }

    addTodo(newTodoTitle)
    setNewTodoTitle('')
  }

  return (
    <form className='add-todo-form block is-flex'>
      <input
        className='add-todo-form__title input is-primary mr-1'
        type='text'
        value={newTodoTitle}
        placeholder='Type a todo'
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button
        className='add-todo-form__add-btn button is-primary'
        type='submit'
        onClick={addTodoHandler}
      >
        Add
      </button>
    </form>
  )
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodoForm
