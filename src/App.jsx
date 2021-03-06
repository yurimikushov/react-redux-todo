import React from 'react'
import { useTodosFetching } from './store/hooks'
import TodoHeader from './components/TodoHeader'
import AddTodoForm from './containers/AddTodoForm'
import TodoItems from './containers/TodoItems'

const App = () => {
  useTodosFetching()

  return (
    <div className='todo-container container my-3'>
      <TodoHeader />
      <AddTodoForm />
      <TodoItems />
    </div>
  )
}
export default App
