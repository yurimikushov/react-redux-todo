import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'

const useAddTodo = () => {
  const dispatch = useDispatch()

  return (todoTitle) => dispatch(addTodo(todoTitle))
}

export { useAddTodo }
