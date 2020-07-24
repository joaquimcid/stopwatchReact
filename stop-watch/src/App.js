import React, {useReducer} from 'react';
import Display from './components/Display';
// import Laps from './components/Laps';
import Buttons from './components/Buttons';

import './App.css';

export default function App() {
  // app_state => INITIAL, STARTED, PAUSED
  // action    => RESET,   START,   PAUSE, CONTINUE, NEWLAP  
  const [state, stateChange] = useReducer((currentState, action) =>  {
    switch(action.type) {
      case "START":
        return [
          "STARTED",
          {
            startedTime: Date.now(),
            laps: []
          }
        ];
      case "PAUSE":
        return [
          "PAUSED",
          {
            startedTime: Date.now(),
            laps: currentState.laps
          }
        ];
          
      case "CONTINUE":
        return [
          "STARTED",
          {
            startedTime: Date.now(),
            laps: []
          }
        ];

      case "NEWLAP":
        const previousLap = currentState.laps === null || currentState.laps.length === 0 ? currentState.startedTime : currentState.laps[currentState.laps.length-1]; 
        const newLap = Date.now() - previousLap;
        
        return [
          "STARTED",
          {
            startedTime: currentState.startedTime,
            laps: currentState.laps.concat(newLap)
          }
        ];
      case "RESET":
        return [
          "INITIAL",
          {
            startedTime: 0,
            laps: []
          }
        ];
      default:
        return currentState;
    }
  }, ["INITIAL", {
    startedTime: 0,
    laps: []
  }]);

  return (
    <div className="app">
      <Display timeToShow={state[0] === "INITIAL" ? null : Date.now() - state[1].startedTime} />
      {/* stateChange */}
            
      <Buttons status = {state[0]} onButtonClick = {(a) => stateChange({ type: a })}/>
      {/* <Buttons status = {status} onButtonClick = {(a) =>  Command(a)}/> */}
      {/* <Laps lapRecords= {state[1].laps}/> */}
    </div>
  );
}



