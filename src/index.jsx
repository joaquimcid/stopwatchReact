import React from 'react';
import ReactDOM from 'react-dom';

function Display() {
  return <div id="display" className="display">00:00,00</div>
}

function Buttons(){
  return (
    <div id="buttons" class="buttons">
    <button id="lapResetBtn" class="button buttonLapWhenIsInitial" >Lap</button>
    <button id="startStopBtn" class="button buttonStart">Start</button>
  </div>
  );
}

function Laps(){
  return <div id="laps"></div>;
}

ReactDOM.render(<Display/>, document.querySelector('#root'));
// ReactDOM.render(<Buttons/>, document.querySelector('#root'));
// ReactDOM.render(<Laps/>, document.querySelector('#root'));