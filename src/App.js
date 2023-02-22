import './App.css';
import Cards from './components/Cards.js'
import Scoreboard from './components/Scoreboard.js'
import React, {useState} from "react"

function App() {

  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0)
  // console.log(currentScore +" app")
  return (
    <div className="App">
      <div id="header-container"> 
        <h1>Console Memory Game</h1>
        <Scoreboard currentScore={currentScore} setCurrentScore={setCurrentScore}
                    bestScore={bestScore} setBestScore={setBestScore}/>
      </div>
        <Cards currentScore={currentScore} setCurrentScore={setCurrentScore}
                bestScore={bestScore} setBestScore={setBestScore}/>
    </div>
  );
}

export default App;
