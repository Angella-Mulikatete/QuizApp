import React from 'react'

interface QuestionProps{
    content: string;
}

const Question:React.FC<QuestionProps> = ({content}) => {
  return (
    <>
      <h2>{content}</h2>
    </>
  )
}

export default Question
