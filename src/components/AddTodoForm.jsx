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
    <form className='add-new-todo-from block'>
      <input
        className='add-new-todo-from__title input my-1'
        type='text'
        value={newTodoTitle}
        placeholder='Type a todo title'
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button
        className='add-new-todo-from__add-btn button is-primary my-1'
        type='submit'
        onClick={addTodoHandler}
      >
        + Add a todo
      </button>
    </form>
  )
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodoForm
