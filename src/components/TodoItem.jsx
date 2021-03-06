import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ id, title, deleteTodo }) => (
  <div className='todo-item box'>
    <input className='todo-item__completed' type='checkbox' />
    <span className='todo-item__title'>{title}</span>
    <button
      className='todo-item__delete delete is-small'
      onClick={deleteTodo}
    />
  </div>
)

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
