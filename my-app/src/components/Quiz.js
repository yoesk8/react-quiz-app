import React, {useState} from 'react'
import { Questions } from '../helpers/QuestionBank';

function Quiz() {
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("")
  return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
          <button onClick={()=> setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
          <button onClick={()=> setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
          <button onClick={()=> setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
          <button onClick={()=> setOptionChosen("D")}>{Questions[currQuestion].optionC}</button>
        </div>

        <button>Next Question</button>
    </div>
  )
}

export default Quiz