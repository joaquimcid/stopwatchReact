import React, {useState} from 'react';
import Display from './components/Display';
import Laps from './components/Laps';
import Buttons from './components/Buttons';

import './App.css';

export default function App() {
  /* status => INITIAL, STARTED, PAUSED */
  const [status, setStatus] = useState('INITIAL');
  const [laps, setLaps] = useState([]);
  const [startedTime, setStartedTime] = useState(null);

  /* Actions => RESET, NEWLAP, START, PAUSE, CONTINUE */
  function Command(action) {
    // console.log(action);
    
    if (action === 'START' || action === 'CONTINUE') {
      setStatus('STARTED');

      if (action === 'START') setStartedTime(Date.now);
    }
    if (action === 'PAUSE') setStatus('PAUSED');
    
    if (action === 'RESET') {
      setLaps([]);

      setStatus('INITIAL');
      setStartedTime(Date.now)
    }
    
    if (action === 'NEWLAP') {
        const previousLap = laps === null || laps.length === 0 ? startedTime : laps.slice(-1); 
        const newLap = Date.now() - previousLap;
        setLaps(laps.concat(newLap));
    } 
      
    console.log(laps);
    // console.log(laps.length);
  }

  return (
    <div className="app">
      <Display timeToShow={!startedTime || startedTime === null ? null : (Date.now() - startedTime)} />
      <Buttons status = {status} onButtonClick = {(a) =>  Command(a)}/>
      <Laps lapRecords= {laps}/>
      {/* {status} - {startedTime} - {Date.now() - startedTime} */}
    </div>
  );
}



