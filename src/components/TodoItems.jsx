import React from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import TodoItem from './TodoItem'

const TodoItems = ({ isLoading, todos, deleteTodo }) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='todo-items block'>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
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
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItems
