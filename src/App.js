import React from 'react';
import './App.css';
import ChartComponent from './ChartComponent';

function App() {
  return (
    <div className = "App">
      <h1>
        BUSINESS CHARTS
      </h1>
      <section className = "chart">
        <ChartComponent />
      </section>
    </div>
  );
}

export default App;
