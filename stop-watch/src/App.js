import React from 'react';
import Display from './components/Display';
import Laps from './components/Laps';
import Buttons from './components/Buttons';

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
