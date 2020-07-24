import React, {useReducer} from 'react';
import Display from './components/Display';
import Laps from './components/Laps';
import Buttons from './components/Buttons';

import './App.css';

export default function App() {
  // app_state => INITIAL  - STARTED
  //                    \     /
  //                    PAUSED
  
  
  // action    => RESET, START, PAUSE, CONTINUE, NEWLAP  
  const [state, stateChange] = useReducer((currentState, action) =>  {
    switch(action.type) {
      case "START":
        return {
            status: "STARTED",
            startedTime: Date.now(),
            pausedTime: null,
            laps: []
          };

          // TODO
      case "PAUSE":
        return {
            status: "PAUSED",      
            startedTime: currentState.startedTime,
            pausedTime: Date.now(),
            laps: currentState.laps
          };
          
      case "CONTINUE":
        return {
            status: "STARTED",
            startedTime: currentState.startedTime + Date.now() - currentState.pausedTime,
            pausedTime: null,
            laps: currentState.laps
          };

      case "NEWLAP":
        const previousLap = currentState.laps === null || currentState.laps.length === 0 
                          ? currentState.startedTime 
                          : currentState.laps[currentState.laps.length-1]; 
        const newLap = Date.now() - previousLap;
        
        return {
            status: "STARTED",
            startedTime: currentState.startedTime,
            pausedTime: null,
            laps: currentState.laps.concat(newLap)
          };

      case "RESET":
        return {
            status: "INITIAL",
            startedTime: 0,
            pausedTime: null,
            laps: []
          };
      default: return currentState;
    }
  }, 
  {
    status: "INITIAL",
    startedTime: 0,
    pausedTime: null,
    laps: []
  });

  return (
    <div className="app">
      <Display timeToShow={state.status === "INITIAL" ? null : Date.now() - state.startedTime} />
      {/* stateChange */}            
      <Buttons status = {state.status} onButtonClick = {(a) => stateChange({ type: a })}/>
      {/* <Buttons status = {status} onButtonClick = {(a) =>  Command(a)}/> */}
      <Laps lapRecords= {state.laps}/>
    </div>
  );
}



