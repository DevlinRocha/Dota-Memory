import { useState } from 'react';
import GameOver from './components/GameOver';
import Gameboard from './components/Gameboard';
import './styles/App.css';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [lastClicked, setLastClicked] = useState(null);

  function newGame() {
    setIsGameOver(false);
    setCurrentScore(0);
  };

  return (
    <div className="App">
      {isGameOver
        ? <GameOver currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setIsGameOver={setIsGameOver} newGame={newGame} lastClicked={lastClicked} />
        : <Gameboard currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore} setIsGameOver={setIsGameOver} setLastClicked={setLastClicked} />
      }
    </div>
  );
};