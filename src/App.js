import React from 'react';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';

const App = () => {
  return (
    <div>
      <h1>Chart.js Graphs in React</h1>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <h2>Line Chart</h2>
        <LineChart />
        <h2>Bar Chart</h2>
        <BarChart />
      </div>
    </div>
  );
};

export default App;
