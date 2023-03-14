import React, { useState } from 'react'

function Algorithm () {

  const [selectedAlgo, setAlgo] = useState('None')
  const [outputAlgo, setOutputAlgo] = useState('Please select an algorithm')

  const handleAlgoChange = (event) => {
    const value = event.target.value
    setAlgo(value)
    if (value === 'Algo 1') {
      setOutputAlgo(`This is algorithm type: 1`)
    } else if (value === 'Algo 2') {
      setOutputAlgo(`This is algorithm type: 2`)
    } else if (value === 'Algo 3') {
      setOutputAlgo(`This is algorithm type: 3`)
    } else {
      setOutputAlgo('Please select algorithm type first')
    }
  }

  return (
    <div className="tab-content">
      <h2>Algorithm</h2>
      <div className="algo-type">
        <label>Algorithm: </label>
        <select id="algo-type-select" value={selectedAlgo} onChange={handleAlgoChange}>
          <option value="algo1">None</option>
          <option value="algo2">Algo 1</option>
        </select>
      </div>
      <div className='algo-description'>
        <label>Description: </label>
        <text value={outputAlgo} onChange={() => { }}>this is the description </text>
      </div>
    </div>
  )
}

export default Algorithm