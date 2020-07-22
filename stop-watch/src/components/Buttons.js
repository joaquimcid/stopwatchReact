import React from 'react';

export default function Buttons({status, onStatusChange, onNewLap}) {
  /* status => INITIAL, STARTED, PAUSED */

  const updateStatus = (newStatus) => {
    //setStatus(newStatus);
    onStatusChange(newStatus);
  };

  const newLapOrResetClicked = () => {
    if (status === 'PAUSED') {
      updateStatus('INITIAL');
    }

    if(status === 'STARTED') {
      onNewLap();
    }
  };

  const startOrPauseClicked = () => {
   
    if(status === 'INITIAL' || status === 'PAUSED')
    {
      updateStatus('STARTED');
    }

    if(status === 'STARTED')
    {
      updateStatus('PAUSED');
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