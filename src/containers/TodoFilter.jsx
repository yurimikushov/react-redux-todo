import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilterMode } from '../store/selectors'
import { setFilterMode } from '../store/actions'
import TodoFilter from '../components/TodoFilter'

const TodoFilterContainer = () => {
  const filterMode = useSelector(getFilterMode())
  const dispatch = useDispatch()

  return (
    <TodoFilter
      filterMode={filterMode}
      setFilterMode={(mode) => dispatch(setFilterMode(mode))}
    />
  )
}

export default TodoFilterContainer
