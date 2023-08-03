import React from 'react'

const Nextbtn = ({dispatch,lastQuestion,index}) => {
  
  const isFinished=lastQuestion===index+1;
  return (
    <div>
      <button className='btn btn-ui'
      onClick={()=>isFinished?dispatch({type:"finish"}):dispatch({type:"nextQuestion"})}
      >{lastQuestion===index+1?"Finish":"Next"}</button>
    </div>
  )
}

export default Nextbtn
