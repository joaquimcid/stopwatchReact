import React, {useEffect, useState} from 'react';
import Display from './Display';

export default function StopWatchDisplay({startedTime, pausedTime, format})
{
  const valueToDisplay = timeToShow(startedTime, pausedTime);
  const valueToDisplayPretty = format(valueToDisplay);

  const [value, setValue] = useState(valueToDisplayPretty);

  useEffect(() => {
    const request = requestAnimationFrame(() => {
      setValue(format(timeToShow(startedTime, pausedTime)));
    });
    return () => cancelAnimationFrame(request);
  });
  
  return <Display timeToShow={value} />

}

function timeToShow(startedTime, pausedTime)
{
  if (!startedTime) return 0;

  if (pausedTime !== null) return pausedTime-startedTime;
  
  return Date.now() - startedTime;
}

// function convertMilliSecondsToTime(milliSecondsValue) {
//   if (!milliSecondsValue || milliSecondsValue === null || milliSecondsValue === 0) return "00:00,00";

//   let elapsedSeconds = Math.floor(milliSecondsValue / 1000);
  
//   let cs = Math.floor((milliSecondsValue % 999) / 10).toString().padStart(2, 0);
//   let s = (elapsedSeconds % 60).toString().padStart(2, 0);
//   let m = (Math.floor(elapsedSeconds / 60) % 60).toString().padStart(2, 0);
//   let hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, 0);
//   hours = hours !== '00' ? `${hours}:` : '';

//   return `${hours}${m}:${s},${cs}`;
// }