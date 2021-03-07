import { combineReducers } from 'redux'
import todos from './todos'
import filterMode from './filterMode'
import search from './search'

const rootReducer = combineReducers({
  todos,
  filterMode,
  search,
})

export default rootReducer
