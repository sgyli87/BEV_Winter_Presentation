import React from 'react'

function Algorithm () {
  return (
    <div className="tab-content">
      <h2>Algorithm</h2>
      <div className="algo-type">
        <label>Algorithm: </label>
        <select id="algo-type-select">
          <option value="algo1">None</option>
          <option value="algo2">Algo 1</option>
        </select>
      </div>
      <div className='algo-description'>
        <label>Description: </label>
        <text>this is the description </text>
      </div>
    </div>
  )
}

export default Algorithm