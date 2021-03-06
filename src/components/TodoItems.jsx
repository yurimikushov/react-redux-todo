import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoItems = ({ todos, deleteTodo }) => {
  return (
    <div className='todo-items block'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  )
}

TodoItems.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItems
