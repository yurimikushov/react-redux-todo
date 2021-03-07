import { useSelector } from 'react-redux'
import { isTodosLoading } from '../selectors'

const useIsTodosLoading = () => useSelector(isTodosLoading())

export { useIsTodosLoading }
