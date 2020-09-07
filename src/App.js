import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading"
import MonthFile from "./components/MonthFile"
import Cell from "./components/Cell"


function App() {
  return (
    <div className="App">
      {/* <Heading className="heading"></Heading> */}
      <MonthFile className="month" year="2020" month="8"></MonthFile>
    </div>
  );
}

export default App;
