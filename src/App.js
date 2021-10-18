import { useState } from 'react';
import GameOver from './components/GameOver';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import './styles/App.css';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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
        ? <GameOver currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setIsGameOver={setIsGameOver} newGame={newGame} />
        : <Gameboard currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore} setIsGameOver={setIsGameOver} />
      }
    </div>
  );
};