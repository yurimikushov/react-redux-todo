import React from 'react'
import { useFilterMode, useSearch } from '../store/hooks'
import TodoFilter from '../components/TodoFilter'

const TodoFilterContainer = () => {
  const [filterMode, setFilterMode] = useFilterMode()
  const [searchText, setSearchText] = useSearch()

  return (
    <TodoFilter
      filterMode={filterMode}
      setFilterMode={setFilterMode}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  )
}

export default TodoFilterContainer
