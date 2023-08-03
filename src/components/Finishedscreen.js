import React from 'react'
import { useQuiz } from '../contexts/QuizContext';

const Finishedscreen = () => {
  const {points,maxPoints,highscore,dispatch}=useQuiz();
  const percentage=(points/maxPoints)*100
  return (
    <div>
        <p className='result'>
        🎖️You scored <strong>{points}</strong> out of {maxPoints}({Math.ceil(percentage)}%)</p>
        <p className='highscore'>( HighScore: {highscore} points ) </p>
        <button className='btn btn-ui' onClick={()=>dispatch({type:"restart"})}>Restart Quiz</button>
    </div>
  )
}

export default Finishedscreen
