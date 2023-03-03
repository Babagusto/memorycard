import './App.css';
import Cards from './components/Cards.js'
import Scoreboard from './components/Scoreboard.js'
import React, {useState} from "react"

function App() {

  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0)

  return (
    <div className="App">
      <div id="header-container"> 
      <div id="title-container">
        <h1>Console Memory Game</h1>
        <h2>Don't pick the same card twice! High score is 9.</h2>
        </div>
        <Scoreboard currentScore={currentScore} setCurrentScore={setCurrentScore}
                    bestScore={bestScore} setBestScore={setBestScore}/>
      </div>
        <Cards currentScore={currentScore} setCurrentScore={setCurrentScore}
                bestScore={bestScore} setBestScore={setBestScore}/>
    </div>
  );
}

export default App;
