import { SET_FILTER_MODE } from '../actionTypes'
import { FILTER_MODE_ALL } from '../../constants'

const filterModeReducer = (state = FILTER_MODE_ALL, { type, payload }) => {
  switch (type) {
    case SET_FILTER_MODE:
      return payload.mode
    default:
      return state
  }
}

export default filterModeReducer
