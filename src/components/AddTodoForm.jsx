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
    <form>
      <input
        className='input'
        type='text'
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button className='' type='submit' onClick={addTodoHandler}>
        Add
      </button>
    </form>
  )
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodoForm
