import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'

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