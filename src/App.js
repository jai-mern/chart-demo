import React from 'react';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import './App.css'; // External CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Dashboard: Kit Status Overview</h1>
      <div className="charts-container">
        <div className="chart-card">
          <h2 className="chart-title">Kit Online Status</h2>
          <LineChart />
        </div>
        <div className="chart-card">
          <h2 className="chart-title">Kit Offline Status</h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default App;
