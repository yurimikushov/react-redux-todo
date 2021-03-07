import { useSelector } from 'react-redux'
import { getAllTodos, getDontCompletedTodos } from '../selectors'
import { useFilterMode } from '../hooks'
import { FILTER_MODE_ALL } from '../../constants'

const useTodos = () => {
  const [filterMode] = useFilterMode()

  const todosSelector =
    filterMode === FILTER_MODE_ALL ? getAllTodos() : getDontCompletedTodos()

  return useSelector(todosSelector)
}

export { useTodos }
