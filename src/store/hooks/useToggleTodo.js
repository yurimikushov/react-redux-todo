import { useDispatch } from 'react-redux'
import { toggleTodo } from '../actions'

const useToggleTodo = () => {
  const dispatch = useDispatch()

  return (todoId) => dispatch(toggleTodo(todoId))
}

export { useToggleTodo }
