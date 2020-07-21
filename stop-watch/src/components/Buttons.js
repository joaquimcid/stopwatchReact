import React from 'react';

function Buttons() {
  return (
    <div id="buttons" className ="buttons">
    <button id="lapResetBtn" className="button buttonLapWhenIsInitial" >Lap</button>
    <button id="startStopBtn" className="button buttonStart">Start</button>
  </div>
  );
}

export default Buttons;