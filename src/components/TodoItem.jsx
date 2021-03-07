import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ completed, title, toggleTodo, deleteTodo }) => (
  <li className='todo-item box is-flex is-justify-content-space-between is-align-items-center my-2'>
    <div className='todo-item__content is-flex is-align-items-center'>
      <input
        className='todo-item__completed'
        type='checkbox'
        checked={completed}
        onChange={toggleTodo}
      />
      <span className='todo-item__title ml-2'>{title}</span>
    </div>
    <button
      className='todo-item__delete-btn delete is-small'
      onClick={deleteTodo}
    />
  </li>
)

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
