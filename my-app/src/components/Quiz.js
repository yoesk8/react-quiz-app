import React, {useState} from 'react'
import { Questions } from '../helpers/QuestionBank';

function Quiz() {
  const [currQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
          <button>{Questions[currQuestion].optionA}</button>
          <button>{Questions[currQuestion].optionB}</button>
          <button>{Questions[currQuestion].optionC}</button>
          <button>{Questions[currQuestion].optionC}</button>
        </div>
    </div>
  )
}

export default Quiz