import { useSelector, useDispatch } from 'react-redux'
import { getFilterMode } from '../selectors'
import { setFilterMode } from '../actions'

const useFilterMode = () => {
  const filterMode = useSelector(getFilterMode())
  const dispatch = useDispatch()

  const setFilterModeHandler = (mode) => {
    dispatch(setFilterMode(mode))
  }

  return [filterMode, setFilterModeHandler]
}

export { useFilterMode }
