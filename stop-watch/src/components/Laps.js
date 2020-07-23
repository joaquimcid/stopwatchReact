import React from 'react';

export default function Laps({lapRecords}) {
  const listItems = lapRecords.map((laptTime, lapIndex) =>
    <li key={lapIndex}>Lap {lapIndex}-{convertMilliSecondsToTime(laptTime)}</li>
  );
  
  return <ul>{listItems}</ul>;
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