import React, {useState} from 'react';
import Display from './components/Display';
import Laps from './components/Laps';
import Buttons from './components/Buttons';

import './App.css';

export default function App() {
  /* status => INITIAL, STARTED, PAUSED */
  const[status, setStatus] = useState('INITIAL');
  const[laps, newLap] = useState([]);
  
  return (
    <div className="app">
      <Display />
      <Buttons status = {status} onStatusChange = {(s) =>  setStatus(s)} onNewLap = {newLap(laps.length+1)}       />
      <Laps laps = {laps}/>
      {status} 
    </div>
  );
}

