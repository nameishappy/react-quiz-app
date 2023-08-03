import React from 'react'
import { useQuiz } from '../contexts/QuizContext'

const Progress = () => {
  const {index,numQuestions,points,maxPoints,answer}=useQuiz();
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index+Number(answer!==null)}/>
      <p>
        <strong>{index+1}</strong>/{numQuestions}
      </p>
      <p>{points}/{maxPoints}</p>
    </header>
  )
}

export default Progress
