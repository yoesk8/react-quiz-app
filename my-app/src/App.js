import './App.css';
import React, {useState} from 'react';
import MainMenu from './components/MainMenu';
import EndScreen from './components/EndScreen';
import Quiz from './components/Quiz';

function App() {
  const [gameState, setGameState] = useState("menu")
  return (
    <div className="App">
      <h1>Quiz app</h1>

      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endscreen" && <EndScreen/>}
    </div>
  );
}

export default App;
