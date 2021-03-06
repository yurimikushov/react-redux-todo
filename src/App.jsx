import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from './store/selectors'
import { fetchTodos, deleteTodo } from './store/actions'
import TodoHeader from './components/TodoHeader'
import AddTodoForm from './containers/AddTodoForm'
import TodoItems from './components/TodoItems'
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
      <AddTodoForm />
      <TodoItems
        todos={todos}
        deleteTodo={(todoId) => dispatch(deleteTodo(todoId))}
      />
    </div>
  )
}
export default App
