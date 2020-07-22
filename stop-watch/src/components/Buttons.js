import React from 'react';

export default function Buttons({status, onButtonClick}) {
  /* status => INITIAL, STARTED, PAUSED */

  const newLapOrResetClicked = () => {
    if (status === 'PAUSED') {
      return onButtonClick('RESET');
    }

    if(status === 'STARTED') {
      return onButtonClick('NEWLAP');
    }
  };

  const startOrPauseClicked = () => {
   
    if(status === 'INITIAL')
    {
      return onButtonClick('START');
    }

    if (status === 'PAUSED')
    {
      return onButtonClick('CONTINUE');
    }

    if(status === 'STARTED')
    {
      return onButtonClick('PAUSE');
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