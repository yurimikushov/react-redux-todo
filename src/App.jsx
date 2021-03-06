import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from './store/selectors'
import { fetchTodos, addTodo, deleteTodo } from './store/actions'
import './App.css'

const App = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const todos = useSelector(getTodos())
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (!newTodoTitle) {
      return
    }

    dispatch(addTodo(newTodoTitle))
    setNewTodoTitle('')
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='todo-container container'>
      <header className='todo-title title'>Todo list</header>
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
      <div className='todo-items block'>
        {todos.map((todo) => (
          <div className='todo-item box' key={todo.id}>
            <input className='todo-item__completed' type='checkbox' />
            <span className='todo-item__title'>{todo.title}</span>
            <button
              className='todo-item__delete delete is-small'
              onClick={() => dispatch(deleteTodo(todo.id))}
            ></button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App
