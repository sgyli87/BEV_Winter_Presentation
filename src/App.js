import React, { useState } from 'react';
import Overview from './Overview';
import Body from './Body';
import Powertrain from './Powertrain';
import Battery from './Battery';
import Route from './Route';
import DrivingStyle from './DrivingStyle';
import Algorithm from './Algorithm';

import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedTruck, setSelectedTruck] = useState('Truck 1');
  const [inputOverview] = useState('This is where user inputs would be displayed');
  const [outputOverview, setOutputOverview] = useState('This is where a summary of the results would be displayed');

  const calculate = () => {
    setOutputOverview('This is an example GUI, functionality has not yet been implemented');
  };

  const tabContent = {
    Overview: <Overview inputOverview={inputOverview} outputOverview={outputOverview} />,
    Body: <Body />,
    Powertrain: <Powertrain />,
    Battery: <Battery />,
    Route: <Route />,
    DrivingStyle: <DrivingStyle />,
    Algorithm: <Algorithm />,
  };

  return (
    <div>
      <header className="app-header">
        <h1>BEV Range Estimation Tool</h1>
        <a href="https://www.paccar.com/" target="_blank" rel="noopener noreferrer">PACCAR</a>
      </header>
      <div className="preset-truck">
        <label htmlFor="truck-select">Preset truck:</label>
        <select
          id="truck-select"
          value={selectedTruck}
          onChange={(event) => setSelectedTruck(event.target.value)}
        >
          <option value="Truck 1">None</option>
          <option value="Truck 2">Truck 1</option>
          <option value="Truck 3">Truck 2</option>
          <option value="Truck 4">Truck 3</option>
        </select>
      </div>
      <nav className="tab-navigation" style={{ paddingTop: '20px' }}>
        <ul className="tab-list">
          <li
            className={`tab ${activeTab === 'Overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('Overview')}
          >
            Overview
          </li>
          <li
            className={`tab ${activeTab === 'Body' ? 'active' : ''}`}
            onClick={() => setActiveTab('Body')}
          >
            Body
          </li>
          <li
            className={`tab ${activeTab === 'Powertrain' ? 'active' : ''}`}
            onClick={() => setActiveTab('Powertrain')}
          >
            Powertrain
          </li>
          <li
            className={`tab ${activeTab === 'Battery' ? 'active' : ''}`}
            onClick={() => setActiveTab('Battery')}
          >
            Battery
          </li>
          <li
            className={`tab ${activeTab === 'Route' ? 'active' : ''}`}
            onClick={() => setActiveTab('Route')}
          >
            Route
          </li>
          <li
            className={`tab ${activeTab === 'DrivingStyle' ? 'active' : ''}`}
            onClick={() => setActiveTab('DrivingStyle')}
          >
            Driving Style
          </li>
          <li
            className={`tab ${activeTab === 'Algorithm' ? 'active' : ''}`}
            onClick={() => setActiveTab('Algorithm')}
          >
            Algorithm
          </li>
        </ul>
      </nav>
      {tabContent[activeTab]}
      <div className="button-group">
        <button className="calculate-button" onClick={calculate}>Calculate</button>
        <div style={{ width: '10px' }} />
        <button className="save-result-button">Save Result</button>
      </div>
    </div>
  );
}

export default App;
