import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from '../actions'

const useTodosFetching = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])
}

export { useTodosFetching }
