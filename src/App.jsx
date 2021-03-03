import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCounter } from './store/selectors'
import { increment, decrement } from './store/actions'
import './App.css'

const App = () => {
  const counter = useSelector(getCounter())
  const dispatch = useDispatch()

  return (
    <>
      <span>Count: {counter}</span>
      <button className='increment' onClick={() => dispatch(increment())}>
        +
      </button>
      <button className='decrement' onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  )
}
export default App
