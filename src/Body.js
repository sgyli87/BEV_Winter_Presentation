import React, { useState } from 'react'

function Body () {
  const [selectedBodyType, setSelectedBodyType] = useState('None')
  const [outputBody, setOutputBody] = useState('Please select a body type first')

  const handleBodyTypeChange = (event) => {
    const value = event.target.value
    setSelectedBodyType(value)
    if (value === 'Body 2') {
      setOutputBody(`Body type: 2 seat with living area
Frontal area: 3m^3
Drag coefficient: 0.33
Cabin weight: 2000lb`)
    } else if (value === 'Body 3') {
      setOutputBody(`Body type: 1 seat with living area
Frontal area: 2m^3
Drag coefficient: 0.56
Cabin weight: 1230lb`)
    } else if (value === 'Body 4') {
      setOutputBody(`Body type: 3 seat with living area
Frontal area: 5m^3
Drag coefficient: 0.99
Cabin weight: 5000lb`)
    } else {
      setOutputBody('Please select a body type first')
    }
  }

  return (
    <div className="tab-content">
      <h2>Body</h2>
      <div className="body-type">
        <label htmlFor="body-type-select">Body type:</label>
        <select
          id="body-type-select"
          value={selectedBodyType}
          onChange={handleBodyTypeChange}
        >
          <option value="Body 1">None</option>
          <option value="Body 2">Body 1</option>
          <option value="Body 3">Body 2</option>
          <option value="Body 4">Body 3</option>
        </select>
      </div>
      <div className="output-body">
        <h3>Overview:</h3>
        <textarea value={outputBody} onChange={() => { }} style={{ resize: 'none', height: '200px', width: '300px' }} />
      </div>
    </div>
  )
}

export default Body
