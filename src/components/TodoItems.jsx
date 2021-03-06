import React from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import TodoItem from './TodoItem'

const TodoItems = ({ isLoading, todos, toggleTodo, deleteTodo }) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='todo-items block mx-1'>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))
      ) : (
        <div className='dont-have-todos-message has-text-grey'>
          You don&apos;t have any todo
        </div>
      )}
    </div>
  )
}

TodoItems.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItems
