import React from 'react';

export default function Laps({lapRecords}) {
 
  const LapRecord = ({lapId, lapValue}) => {
    return (
      <div className="lapRecord" id={lapId}> 
        <div className="lapRecordLabel"> Lap {lapId}</div> 
        <div className="lapRecordValue"> {lapValue}</div> 
      </div>
    );
  }

  let count = 1;
  const final = [];

  for (let lapRecord of Object.keys(lapRecords)){
    final.push(LapRecord(count, lapRecord));
    count +=1;
  }

  return <div id="laps">{final}</div>

  // return (
  //   <div id="laps">
  //   {
  //    lapRecords.map((lapValue) => (<LapRecord lapId={ 1 } lapValue={ lapValue } /> ))
  //   //  laps.map(({ lapId, lapValue }) => (<LapRecord lapId={ lapId } lapValue={ lapValue } /> ))
  //   }
  //   </div>
  // );
}
