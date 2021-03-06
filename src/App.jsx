import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from './store/selectors'
import { fetchTodos, addTodo, deleteTodo } from './store/actions'
import TodoItem from './components/TodoItem'
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
