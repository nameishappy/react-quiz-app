import React from 'react'
import { useQuiz } from '../contexts/QuizContext';

const Nextbtn = () => {
  const {dispatch,numQuestions,index}=useQuiz();
  const isFinished=numQuestions===index+1;
  return (
    <div>
      <button className='btn btn-ui'
      onClick={()=>isFinished?dispatch({type:"finish"}):dispatch({type:"nextQuestion"})}
      >{numQuestions===index+1?"Finish":"Next"}</button>
    </div>
  )
}

export default Nextbtn
