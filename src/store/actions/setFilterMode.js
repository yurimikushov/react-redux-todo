import { SET_FILTER_MODE } from '../actionTypes'

const setFilterMode = (mode) => ({
  type: SET_FILTER_MODE,
  payload: {
    mode,
  },
})

export { setFilterMode }
