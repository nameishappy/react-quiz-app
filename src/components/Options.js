import React from 'react'
import { useQuiz } from '../contexts/QuizContext';

const Options = () => {
  // console.log(question
  const {questions,index,answer,dispatch}=useQuiz();
  const hasAnswered=answer!==null;
  const question=questions[index];
  return (
    <div className="option">
        {question.options.map((option,index) => (
          <button className={`btn btn-option ${index===answer?'answer':""} ${hasAnswered?index===question.correctOption?"correct":"wrong":''}`}
           key={option}
           disabled={hasAnswered}
           onClick={()=>dispatch({type:"newAnswer",payload:index})}
          >
            {option}
          </button>
        ))}
      </div>
  )
}

export default Options
