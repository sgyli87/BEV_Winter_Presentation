import React, { useState } from 'react'

function Route () {
  const [selectedRoute, setSelectedRoute] = useState('None')
  const [outputRoute, setOutputRoute] = useState('Please select a route first')

  const handleRouteChange = (event) => {
    const value = event.target.value
    setSelectedRoute(value)
    if (value === 'Route 2') {
      setOutputRoute(`Fleet DNA Regional Hall Representative
Duration: 60min
Total Distance: 30 miles
Average Speed:20 mph`)
    } else if (value === 'Route 3') {
      setOutputRoute(`Another route
Duration: 30min
Total Distance: 25 miles
Average Speed:40 mph`)
    } else {
      setOutputRoute('Please select a body type first')
    }
  }

  return (
    <div className="tab-content">
      <h2>Route</h2>
      <div className="Route-type">
        <label htmlFor="Route-type-select">Route:</label>
        <select
          id="Route-type-select"
          value={selectedRoute}
          onChange={handleRouteChange}
        >
          <option value="Route 1">None</option>
          <option value="Route 2">Route 1</option>
          <option value="Route 3">Route 2</option>
        </select>
      </div>
      <div className="output-Route">
        <h3>Route Info:</h3>
        <textarea value={outputRoute} onChange={() => { }} style={{ resize: 'none', height: '200px', width: '300px' }} />
      </div>
    </div>
  )
}

export default Route