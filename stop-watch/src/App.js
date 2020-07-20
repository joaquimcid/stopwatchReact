import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div id="display" className ="display">00:00,00</div>
      
      <div id="buttons" className ="buttons">
        <button id="lapResetBtn" className="button buttonLapWhenIsInitial" >Lap</button>
        <button id="startStopBtn" className="button buttonStart">Start</button>
      </div>

      <div id="laps" />
      
    </div>
  );
}


export default App;
