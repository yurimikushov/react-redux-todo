import { useDispatch } from 'react-redux'
import { deleteTodo } from '../actions'

const useDeleteTodo = () => {
  const dispatch = useDispatch()

  return (todoId) => dispatch(deleteTodo(todoId))
}

export { useDeleteTodo }
