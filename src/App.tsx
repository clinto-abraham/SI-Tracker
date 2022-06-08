import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import LeverTabs from './features/Levers';
import Navbar from './features/Navbar';
import Form from './features/Forms';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="lever" element={<LeverTabs />} />
        <Route path="form" element={<Form />} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


        // <img src={logo} className="App-logo" alt="logo" />
        // <Counter /> 