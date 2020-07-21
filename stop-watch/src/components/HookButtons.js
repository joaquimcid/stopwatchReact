import React, {useState} from 'react';

// export const Status = '';
/*
INITIAL
STARTED
PAUSED
*/

function Buttons() {

  const[Status, setStatus] = useState('INITIAL');

  const newLapOrResetClicked = () => {

    if (Status === 'PAUSED') {
      setStatus('INITIAL');
    }

  };

  const startOrPauseClicked = () => {
   
    if(Status === 'INITIAL' || Status === 'PAUSED')
    {
      setStatus('STARTED');
    }

    if(Status === 'STARTED')
    {
      setStatus('PAUSED');
    }

  };

  return (
    <div id="buttons" className ="buttons">
      <button id="lapResetBtn" 
              onClick = {() => newLapOrResetClicked()} 
              className={`button buttonLapWhen${Status}`}> 
              { Status === "PAUSED" ? "Reset" : "Lap"}
              </button>
      <button id="startStopBtn" 
              onClick = {() => startOrPauseClicked()} 
              className={`button buttonStartWhen${Status}`}>
                { Status === "STARTED" ? "Stop" : "Start" }
                </button>
      <button>{Status}</button>
  </div>
  );
}

export default Buttons;


// export function Status() {
//   return status;
// }