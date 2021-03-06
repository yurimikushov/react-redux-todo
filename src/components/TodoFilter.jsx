import React from 'react'
import PropTypes from 'prop-types'
import { FILTER_MODE_ALL, FILTER_MODE_DONT_COMPLETED } from '../constants'

const TodoFilter = ({ filterMode, setFilterMode }) => (
  <div className='tabs is-boxed'>
    <ul>
      <li className={filterMode === FILTER_MODE_ALL ? 'is-active' : ''}>
        <a onClick={() => setFilterMode(FILTER_MODE_ALL)}>All</a>
      </li>
      <li
        className={filterMode === FILTER_MODE_DONT_COMPLETED ? 'is-active' : ''}
      >
        <a onClick={() => setFilterMode(FILTER_MODE_DONT_COMPLETED)}>
          Don&apos;t completed
        </a>
      </li>
    </ul>
  </div>
)

TodoFilter.propTypes = {
  filterMode: PropTypes.string.isRequired,
  setFilterMode: PropTypes.func.isRequired,
}

export default TodoFilter
