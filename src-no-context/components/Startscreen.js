import React from 'react'

const Startscreen = ({num,dispatch}) => {
  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{num} questions to test your React Mastery</h3>
      <div className='instructions'>
        <h4>Instructions</h4>
        <div>
          <ul>
            <li> This quiz consists of {num} multiple-choice questions.</li>
            <li>Each question has four options, A, B, C, and D.</li>
            <li>Read each question carefully and choose the most appropriate answer by selecting the corresponding option.</li>
            <li>Do not refresh the screen and enjoy the quiz.</li>
          </ul>
        </div>
      </div>
      <button className='btn btn-ui' onClick={()=>dispatch({type:"startQuiz"})}>Let's start</button>
    </div>
  )
}

export default Startscreen
