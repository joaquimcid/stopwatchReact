import React, {useEffect, useState} from 'react';
import Display from './Display';

export default function StopWatchDisplay({startedTime, pausedTime})
{
  const valueToDisplay = timeToShow(startedTime, pausedTime);
  const valueToDisplayPretty = convertMilliSecondsToTime(valueToDisplay);

  const [value, setValue] = useState(valueToDisplayPretty);

  useEffect(() => {
    requestAnimationFrame(() => {
      // console.log('foo');
      const value = convertMilliSecondsToTime(timeToShow(startedTime, pausedTime));
      // console.log(value);
      setValue(value);
    });
    // return () => clearr(interval);
  // }, [{startedTime, pausedTime}]);
  });
  
  return <Display timeToShow={value} />

}

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