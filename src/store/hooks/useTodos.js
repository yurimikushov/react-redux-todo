import { useSelector } from 'react-redux'
import { getAllTodos, getDontCompletedTodos } from '../selectors'
import { useFilterMode, useSearch } from '../hooks'
import { FILTER_MODE_ALL } from '../../constants'

const useTodos = () => {
  const [filterMode] = useFilterMode()
  const [searchText] = useSearch()

  const todosSelector =
    filterMode === FILTER_MODE_ALL ? getAllTodos() : getDontCompletedTodos()

  const todos = useSelector(todosSelector)

  if (!searchText) {
    return todos
  }

  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  )
}

export { useTodos }
