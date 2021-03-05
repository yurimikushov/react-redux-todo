import React from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from './store/selectors'
import './App.css'

const App = () => {
  const todos = useSelector(getTodos())

  return (
    <div className='todo-container container'>
      <header className='todo-title title'>Todo list</header>
      <div className='todo-items block'>
        {todos.map((todo) => (
          <div className='todo-item box' key={todo.id}>
            <input className='todo-item__completed' type='checkbox' />
            <input
              className='todo-item__title input'
              type='text'
              value={todo.title}
            />
            <button className='todo-item__delete delete is-small'></button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App
