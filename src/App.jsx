import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from './store/actions'
import TodoHeader from './components/TodoHeader'
import AddTodoForm from './containers/AddTodoForm'
import TodoItems from './containers/TodoItems'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='todo-container container my-3'>
      <TodoHeader />
      <AddTodoForm />
      <TodoItems />
    </div>
  )
}
export default App
