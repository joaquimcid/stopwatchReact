import React, {useEffect, useState} from 'react';
import Display from './Display';

export default function StopWatchDisplay({startedTime, pausedTime})
{
  const valueToDisplay = timeToShow(startedTime, pausedTime);
  const valueToDisplayPretty = convertMilliSecondsToTime(valueToDisplay);

  const [value, setValue] = useState(valueToDisplayPretty);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(convertMilliSecondsToTime(timeToShow(startedTime, pausedTime)));
    }, 100);

    return () => clearInterval(interval);
  });
  
  return <Display timeToShow={value} />

}

// useEffect(() => {
//   if (state.status === "STARTED"){

//     const interval = setInterval(() => {
//       if (state.status === "STARTED"){
//         console.log(`Refresh screen. Time to show: ${state.timeToShow}`);
        
//         return dispatch({type: "REFRESH"});
//       } 
//       else console.log(`NO Refresh screen. Time to show: ${state.timeToShow}`);
//     }, 100);
//     return () => clearInterval(interval);
//   }
// });


function timeToShow(startedTime, pausedTime)
{
  if (!startedTime) return 0;

  if (pausedTime !== null) return pausedTime-startedTime;
  
  return Date.now() - startedTime;
}

function convertMilliSecondsToTime(milliSecondsValue) {
  if (!milliSecondsValue || milliSecondsValue === null || milliSecondsValue === 0) return "00:00,00";

  let elapsedSeconds = Math.floor(milliSecondsValue / 1000);
  
  let cs = Math.round((milliSecondsValue % 1000) / 10).toString().padStart(2, 0);
  let s = (elapsedSeconds % 60).toString().padStart(2, 0);
  let m = (Math.floor(elapsedSeconds / 60) % 60).toString().padStart(2, 0);
  let hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, 0);
  hours = hours !== '00' ? `${hours}:` : '';

  return `${hours}${m}:${s},${cs}`;
}