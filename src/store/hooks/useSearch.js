import { useSelector, useDispatch } from 'react-redux'
import { getSearchText } from '../selectors'
import { setSearchText } from '../actions'

const useSearch = () => {
  const searchText = useSelector(getSearchText())
  
  const dispatch = useDispatch()

  const setSearchTextHandler = (searchText) => {
    dispatch(setSearchText(searchText))
  }

  return [searchText, setSearchTextHandler]
}

export { useSearch }
