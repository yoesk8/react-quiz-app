import './App.css';
import React, {useState, useContext} from 'react';
import MainMenu from './components/MainMenu';
import EndScreen from './components/EndScreen';
import Quiz from './components/Quiz';
import { QuizContext } from './helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>Quiz app</h1>

      <QuizContext.Provider value={{gameState, setGameState}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
