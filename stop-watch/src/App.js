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

export default function App() {
  // app_state => INITIAL  - STARTED
  //                    \     /
  //                    PAUSED
  
  // action    => RESET, START, PAUSE, CONTINUE, NEWLAP  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <StopWatchDisplay startedTime={state.startedTime} pausedTime={state.pausedTime} format={(valueToFormat) => formatMilliSeconds(valueToFormat)} />
      <Buttons status = {state.status} onButtonClick = {(a) => dispatch({ type: a })}/>
      <Laps lapRecords= {state.laps} format={(valueToFormat) => formatMilliSeconds(valueToFormat)}/>
    </div>
  );
}

function formatMilliSeconds(milliSecondsValue) {
  if (!milliSecondsValue || milliSecondsValue === null || milliSecondsValue === 0) return "00:00,00";

  let elapsedSeconds = Math.floor(milliSecondsValue / 1000);
  
  let cs = Math.floor((milliSecondsValue % 999) / 10).toString().padStart(2, 0);
  let s = (elapsedSeconds % 60).toString().padStart(2, 0);
  let m = (Math.floor(elapsedSeconds / 60) % 60).toString().padStart(2, 0);
  let hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, 0);
  hours = hours !== '00' ? `${hours}:` : '';

  return `${hours}${m}:${s},${cs}`;
}