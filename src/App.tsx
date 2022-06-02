import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LeverTabs from './features/Levers/LeverTabs';
import Navbar from './features/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter /> */}
       <LeverTabs />
      </header>
    </div>
  );
}

export default App;
