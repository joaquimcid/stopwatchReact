import React from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import Laps from './components/Laps';
import HookCounter from './components/HookCounter';
import HookButtons from './components/HookButtons';

import './App.css';

function App() {
  return (
    <div className="app">
      <Display />
      {/* <Buttons /> */}
      <HookButtons />
      <Laps />
      <HookCounter />
    </div>
  );
}


export default App;
