import React from 'react';
import Display from './components/Display';
import Laps from './components/Laps';
// import HookCounter from './components/HookCounter';
// import HookButtons, {Status} from './components/HookButtons';
import HookButtons from './components/HookButtons';

import './App.css';

function App() {
  return (
    <div className="app">
      <Display />
      <HookButtons />
      <Laps />
      {/* <HookCounter /> */}
      {/* Current Status is {Status} */}
    </div>
  );
}


export default App;
