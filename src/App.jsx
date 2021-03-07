import React from 'react'
import { useTodosFetching } from './store/hooks'
import TodoHeader from './components/TodoHeader'
import AddTodoForm from './containers/AddTodoForm'
import TodoFilter from './containers/TodoFilter'
import TodoItems from './containers/TodoItems'

const App = () => {
  useTodosFetching()

  return (
    <div className='container my-3'>
      <TodoHeader />
      <AddTodoForm />
      <TodoFilter />
      <TodoItems />
    </div>
  )
}
export default App
