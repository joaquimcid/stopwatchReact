import React, {useReducer} from 'react';
import StopWatchDisplay from './components/StopWatchDisplay';
import Laps from './components/Laps';
import Buttons from './components/Buttons';

import './App.css';

const initialState = {
  status: "INITIAL",
  startedTime: 0,
  pausedTime: null,
  laps: [],
  sumOfLaps: 0,
};

function reducer(currentState, action) {
  console.log(action.type);

  switch(action.type) {
    case "START":
      return {
          status: "STARTED",
          startedTime: Date.now(),
          pausedTime: null,
          laps: [],
          sumOfLaps: currentState.sumOfLaps
        };

    case "PAUSE":
      return {
          status: "PAUSED",      
          startedTime: currentState.startedTime,
          pausedTime: Date.now(),
          laps: currentState.laps,
          sumOfLaps: currentState.sumOfLaps
        };
        
    case "CONTINUE":
      let updateStartedTime = currentState.startedTime + Date.now() - currentState.pausedTime;
      return {
          status: "STARTED",
          startedTime: updateStartedTime,
          pausedTime: null,
          laps: currentState.laps,
          sumOfLaps: currentState.sumOfLaps
        };

    case "NEWLAP":
      const currentLapTime = Date.now()-currentState.startedTime-currentState.sumOfLaps;

      const newLap = {
        index: currentState.laps.length+1,
        totalTime: currentLapTime,
        isMin: false,
        isMax: false,
      } 

      return {
          status: "STARTED",
          startedTime: currentState.startedTime,
          pausedTime: null,
          laps: currentState.laps.concat(newLap),
          sumOfLaps: currentState.sumOfLaps+currentLapTime
        };

    case "RESET":
      return initialState;
    default: return currentState;
  }
  
}

// TODO :
// El reducer action dispatch es executa dos cops cada click, revisar. -> Side efect del reducer.
// Efecte visual raro:
/*
foo
StopWatchDisplay.js:15 00:13,96
StopWatchDisplay.js:15 00:13,98
StopWatchDisplay.js:15 00:13,100 ---> efecte raro
StopWatchDisplay.js:15 00:14,01
StopWatchDisplay.js:15 00:14,03
StopWatchDisplay.js:15 00:14,05
StopWatchDisplay.js:15 00:14,06
*/
export default function App() {
  // app_state => INITIAL  - STARTED
  //                    \     /
  //                    PAUSED
  
  // action    => RESET, START, PAUSE, CONTINUE, NEWLAP  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <StopWatchDisplay startedTime={state.startedTime} pausedTime={state.pausedTime} />
      <Buttons status = {state.status} onButtonClick = {(a) => dispatch({ type: a })}/>
      <Laps lapRecords= {state.laps}/>
    </div>
  );
}