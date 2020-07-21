import React, {useState} from 'react';

//const status = '';
/*
INITIAL
STARTED
PAUSED
*/


function Buttons({newStatus}) {
  const[status, setStatus] = useState('INITIAL');

  const newLapOrResetClicked = () => {

    if (status === 'PAUSED') {
      setStatus('INITIAL');
    }
  };

  const startOrPauseClicked = () => {
   
    if(status === 'INITIAL' || status === 'PAUSED')
    {
      setStatus('STARTED');
    }

    if(status === 'STARTED')
    {
      setStatus('PAUSED');
    }

  };

  return (
    <div id="buttons" className ="buttons">
      <button id="lapResetBtn" 
              onClick = {() => newLapOrResetClicked()} 
              className={`button buttonLapWhen${status}`}> 
              { status === "PAUSED" ? "Reset" : "Lap"} </button>
      
      <button id="startStopBtn" 
              onClick = {() => startOrPauseClicked()} 
              className={`button buttonStartWhen${status}`}>
                { status === "STARTED" ? "Stop" : "Start" } </button>
      
      {status}
  </div>
  );
}

export default Buttons;
