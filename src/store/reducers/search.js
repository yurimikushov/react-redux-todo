import { SET_SEARCH_TEXT } from '../actionTypes'

const searchTextReducer = (state = { text: '' }, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_TEXT:
      return { ...state, text: payload.searchText }
    default:
      return state
  }
}

export default searchTextReducer
