import React from 'react';

export default function Display({timeToShow}) {

  const valueToDisplay = convertMilliSecondsToTime(timeToShow);
  
  return <div id="display" className ="display">{valueToDisplay}</div>;
}

function convertMilliSecondsToTime(milliSecondsValue) {
  if (!milliSecondsValue || milliSecondsValue === null) return "00:00,00";

  let elapsedSeconds = Math.floor(milliSecondsValue / 1000);
  
  let cs = Math.round((milliSecondsValue % 1000) / 10).toString().padStart(2, 0);
  let s = (elapsedSeconds % 60).toString().padStart(2, 0);
  let m = (Math.floor(elapsedSeconds / 60) % 60).toString().padStart(2, 0);
  let hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, 0);
  hours = hours !== '00' ? `${hours}:` : '';

  return `${hours}${m}:${s},${cs}`;
}