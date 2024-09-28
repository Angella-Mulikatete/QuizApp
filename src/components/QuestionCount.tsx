import React from 'react'

interface QuestionCountProps{
    counter:number;
    total:number;
}

const QuestionCount:React.FC<QuestionCountProps> =({counter, total}) => {
  return (
    <div className='questionCount'>
       Question <span>{counter}</span> of <span>{total}</span>
    </div>
  )
}

export default QuestionCount
