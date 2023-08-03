import React from 'react'

const Progress = ({index,numQuestions,points,maxPoints,answer}) => {
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
