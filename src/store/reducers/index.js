import { combineReducers } from 'redux'
import todos from './todos'
import filterMode from './filterMode'

const rootReducer = combineReducers({
  todos,
  filterMode,
})

export default rootReducer
