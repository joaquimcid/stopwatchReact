import React, {useState} from 'react';
/*
INITIAL
STARTED
PAUSED
*/
function Buttons() {

  const[stopWatchStatus, setStopWatchStatus] = useState('INITIAL');

  const setStopWatchStatus = (buttonClicked) => {

    if (buttonClicked === 'lapResetBtn' && stopWatchStatus === 'PAUSED') {
        stopWatchStatus = 'INITIAL';
    }
    
    if(buttonClicked === 'startStopBtn' && (stopWatchStatus === 'INITIAL' || stopWatchStatus === 'PAUSED'))
    {
      stopWatchStatus = 'STARTED';
    }

    if(buttonClicked === 'startStopBtn' && stopWatchStatus === 'STARTED')
    {
      stopWatchStatus = 'PAUSED';
    }

  }

  return (
    <div id="buttons" className ="buttons">
      <button id="lapResetBtn" onClick = {setStopWatchStatus('lapResetBtn')} className="button buttonLapWhenIsInitial" >Lap</button>
      <button id="startStopBtn" onClick = {setStopWatchStatus('startStopBtn')} className="button buttonStart">Start</button>
      <button>{stopWatchStatus}</button>
  </div>
  );
}

export default Buttons;