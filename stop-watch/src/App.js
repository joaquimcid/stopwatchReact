import React, {useReducer, useEffect} from 'react';
import Display from './components/Display';
import Laps from './components/Laps';
import Buttons from './components/Buttons';

import './App.css';

const initialState = {
  status: "INITIAL",
  startedTime: 0,
  pausedTime: null,
  laps: [],
  elapsedTime: null
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
          elapsedTime: null
        };

    case "PAUSE":
      return {
          status: "PAUSED",      
          startedTime: currentState.startedTime,
          pausedTime: Date.now(),
          laps: currentState.laps,
          elapsedTime: currentState.elapsedTime
        };
        
    case "CONTINUE":
      let updateStartedTime = currentState.startedTime + Date.now() - currentState.pausedTime;
      return {
          status: "STARTED",
          startedTime: updateStartedTime,
          pausedTime: null,
          laps: currentState.laps,
          elapsedTime: Date.now()-updateStartedTime
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
          laps: currentState.laps.concat(newLap),
          elapsedTime: Date.now()-currentState.startedTime
        };

    case "RESET":
      return initialState;
    case "REFRESH":
        return {
            status: currentState.status,
            startedTime: currentState.startedTime,
            pausedTime: currentState.pausedTime,
            laps: currentState.laps,
            elapsedTime: Date.now()-currentState.startedTime
          };
    default: return currentState;
  }
  
}

// TODO :
// Laps pars no guarden el valor correct. El reducer action dispatch es executa dos cops cada click, revisar.
export default function App() {
  // app_state => INITIAL  - STARTED
  //                    \     /
  //                    PAUSED
  
  // action    => RESET, START, PAUSE, CONTINUE, NEWLAP  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.status === "STARTED"){

      const interval = setInterval(() => {
        if (state.status === "STARTED"){
          console.log(`Refresh screen. Time to show: ${state.timeToShow}`);
          
          return dispatch({type: "REFRESH"});
        } 
        else console.log(`NO Refresh screen. Time to show: ${state.timeToShow}`);
      }, 100);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="app">
      <Display timeToShow={state.elapsedTime} />
      <Buttons status = {state.status} onButtonClick = {(a) => dispatch({ type: a })}/>
      <Laps lapRecords= {state.laps}/>
    </div>
  );
}