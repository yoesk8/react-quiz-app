import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import "../App.css"

function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div className='Menu'>
        <button onClick={()=>{
            setGameState("quiz")
        }}>Start Playing!</button>
    </div>
  )
}

export default MainMenu