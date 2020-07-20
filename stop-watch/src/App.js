import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div id="display" className="display">00:00,00</div>
      
      <div id="buttons" class="buttons">
        <button id="lapResetBtn" class="button buttonLapWhenIsInitial" >Lap</button>
        <button id="startStopBtn" class="button buttonStart">Start</button>
      </div>

      <div id="laps" />
      
    </div>
  );
}


export default App;
