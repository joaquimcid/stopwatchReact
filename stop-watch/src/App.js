import React from 'react';
import Display from './modules/Display';
import Buttons from './modules/Buttons';
import Laps from './modules/Laps';

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
