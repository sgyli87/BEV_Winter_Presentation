import React, { useState } from 'react'

function Battery () {

  const [selectedBatteryType, setSelectedBatteryType] = useState('None')
  const [outputBattery, setOutputBattery] = useState('Please select a battery type first')

  const handleBatteryTypeChange = (event) => {
    const value = event.target.value
    setSelectedBatteryType(value)
    if (value === 'Battery 2') {
      setOutputBattery(`This is Battery type: 2`)
    } else if (value === 'Battery 3') {
      setOutputBattery(`This is Battery type: 3`)
    } else if (value === 'Battery 4') {
      setOutputBattery(`This is Battery type: 4`)
    } else {
      setOutputBattery('Please select a battery type first')
    }
  }

  return (
    <div className="tab-content">
      <h2>Battery</h2>
      <div className="battery-type">
        <label htmlFor="battery-type-select">Battery type: </label>
        <select
          id="battery-type-select"
          value={selectedBatteryType}
          onChange={handleBatteryTypeChange}
        >
          <option value="Battery 1">None</option>
          <option value="Battery 2">Battery 1</option>
          <option value="Battery 3">Battery 2</option>
          <option value="Battery 4">Battery 3</option>
        </select>
      </div>
      <div className="output-battrery">
        <h3>Overview:</h3>
        <textarea value={outputBattery} onChange={() => { }} style={{ resize: 'none', height: '200px', width: '300px' }} />
      </div>
    </div>
  )
}

export default Battery