import React from 'react';
import Display from './Display';
import Buttons from './Buttons';
import Laps from './Laps';

import './App.css';

function App() {
  return (
    <div className="app">
      <Display />
      <Buttons />
      <Laps />
    </div>
  );
}


export default App;
