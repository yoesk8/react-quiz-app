import React, {useState, useContext} from 'react'
import { Questions } from '../helpers/QuestionBank';
import { QuizContext } from '../helpers/Contexts';

function Quiz() {

  const { score, setScore } = useContext(QuizContext)
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  
  const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen){
          setScore(score+1);
        }
        alert(score)
        setCurrentQuestion(currQuestion+1)

  }
  return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
          <button onClick={()=> setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
          <button onClick={()=> setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
          <button onClick={()=> setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
          <button onClick={()=> setOptionChosen("D")}>{Questions[currQuestion].optionC}</button>
        </div>

        <button onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default Quiz