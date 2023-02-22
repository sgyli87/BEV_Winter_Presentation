import React from 'react';

function Overview({ inputOverview, outputOverview }) {
  return (
    <div className="tab-content">
      <h2>Overview</h2>
      <div className="input-overview">
        <h3>Input data:</h3>
        <textarea value={inputOverview} onChange={() => {}} style={{ resize: 'none', height: '200px', width: '300px' }} />
      </div>
      <div className="output-overview">
        <h3>Output data:</h3>
        <textarea value={outputOverview} onChange={() => {}} style={{ resize: 'none', height: '200px', width: '300px' }} />
      </div>
    </div>
  );
}

export default Overview;
