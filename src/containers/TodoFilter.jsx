import React from 'react'
import { useFilterMode } from '../store/hooks'
import TodoFilter from '../components/TodoFilter'

const TodoFilterContainer = () => {
  const [filterMode, setFilterMode] = useFilterMode()

  return <TodoFilter filterMode={filterMode} setFilterMode={setFilterMode} />
}

export default TodoFilterContainer
