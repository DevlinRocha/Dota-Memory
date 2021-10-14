import { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import './styles/App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(true);

  function newGame() {
    setIsGameOver(false);
    setCurrentScore(0);
  };

  return (
    <div className="App">
      <nav>
        <Scoreboard currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore} />
      </nav>
      {isGameOver
        ? <button onClick={newGame}>New game!</button>
        : <Gameboard currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore} setIsGameOver={setIsGameOver} />
      }
    </div>
  );
};

export default App;