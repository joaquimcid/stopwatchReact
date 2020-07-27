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
export default function Laps({lapRecords, format}) {
  
  console.log('laps component');
  
  const listItems = lapRecords.map((item, index, array) =>
    <li key={index}>Lap {item.index}__________{format(item.totalTime)}__________{item.totalTime}</li>
  );

  return <ul>{listItems}</ul>;
}
