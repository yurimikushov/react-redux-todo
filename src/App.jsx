import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from './store/selectors'
import { fetchTodos, addTodo, deleteTodo } from './store/actions'
import TodoHeader from './components/TodoHeader'
import AddTodoForm from './components/AddTodoForm'
import TodoItem from './components/TodoItem'
import './App.css'

const App = () => {
  const todos = useSelector(getTodos())
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='todo-container container'>
      <TodoHeader />
      <AddTodoForm
        addTodo={(newTodoTitle) => dispatch(addTodo(newTodoTitle))}
      />
      <div className='todo-items block'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            deleteTodo={() => dispatch(deleteTodo(todo.id))}
          />
        ))}
      </div>
    </div>
  )
}
export default App
