import './App.css';
import Cards from './components/Cards.js'
import React, {useState} from "react"

function App() {
  return (
    <div className="App">
      <h1> Game Console Memory Game</h1>
      <Cards/>
    </div>
  );
}

export default App;
