import { SET_SEARCH_TEXT } from '../actionTypes'

const setSearchText = (searchText) => ({
  type: SET_SEARCH_TEXT,
  payload: {
    searchText: searchText,
  },
})

export { setSearchText }
