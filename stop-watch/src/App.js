import React, {useState} from 'react';
import Display from './components/Display';
import Laps from './components/Laps';
import Buttons from './components/Buttons';

import './App.css';

export default function App() {
  /* status => INITIAL, STARTED, PAUSED */
  const [status, setStatus] = useState('INITIAL');
  const [laps, setLaps] = useState([]);
  
  function Command(action) {
    if (action === 'START' || action === 'CONTINUE') setStatus('STARTED'); 

    if (action === 'PAUSE') setStatus('PAUSED');
    
    if (action === 'RESET') {
        setLaps([]);
        setStatus('INITIAL');
    }
    
    if (action === 'NEWLAP') {
        laps.push(laps.length+1); 
        setLaps(laps);
    } 
      
    console.log(action);
    console.log(laps);
    console.log(laps.length);
  }

  return (
    <div className="app">
      <Display />
{
 /* RESET, NEWLAP
    START, PAUSE, CONTINUE */
}
      <Buttons status = {status} onButtonClick = {(a) =>  Command(a)}/>
      <Laps laps = {laps}/>
      {status} 
    </div>
  );
}

