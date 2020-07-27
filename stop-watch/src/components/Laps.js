import React from 'react';

/*
lapRecord 
{
        index: currentState.laps.length+1,
        totalTime: Date.now()-currentState.startedTime,
        isMin: false,
        isMax: false,
}
*/
export default function Laps({lapRecords}) {
  
  console.log('laps component');
  
  const listItems = lapRecords.map((item, index, array) =>
    <li key={index}>Lap {item.index}__________{convertMilliSecondsToTime(item.totalTime)}__________{item.totalTime}</li>
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