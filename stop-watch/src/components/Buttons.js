import React from 'react';

export default function Buttons({status, onButtonClick}) {
  /* status => INITIAL, STARTED, PAUSED */

  const newLapOrResetClicked = () => {
    if (status === 'PAUSED') {
      console.log('LAP_RESET_BTN: PAUSED -> RESET');
      return onButtonClick('RESET');
    }

    if(status === 'STARTED') {
      console.log('LAP_RESET_BTN: STARTED -> NEWLAP');
      return onButtonClick('NEWLAP');
    }
  };

  const startOrPauseClicked = () => {
   
    if(status === 'INITIAL')
    {
      console.log('START_PAUSE_BTN: INITIAL -> START');
      return onButtonClick('START');
    }

    if (status === 'PAUSED')
    {
      console.log('START_PAUSE_BTN: PAUSED -> CONTINUE');
      return onButtonClick('CONTINUE');
    }

    if(status === 'STARTED')
    {
      console.log('START_PAUSE_BTN: STARTED -> PAUSE');
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