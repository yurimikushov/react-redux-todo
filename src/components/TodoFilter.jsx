import React from 'react'
import PropTypes from 'prop-types'
import { FILTER_MODE_ALL, FILTER_MODE_DONT_COMPLETED } from '../constants'

const TodoFilter = ({
  filterMode,
  setFilterMode,
  searchText,
  setSearchText,
}) => (
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
      <li style={{ marginLeft: 'auto' }}>
        <input
          className='input'
          type='text'
          value={searchText}
          placeholder='Search'
          onChange={(e) => setSearchText(e.target.value)}
          style={{ top: '1px', maxWidth: '250px' }}
        />
      </li>
    </ul>
  </div>
)

TodoFilter.propTypes = {
  filterMode: PropTypes.string.isRequired,
  setFilterMode: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
}

export default TodoFilter
