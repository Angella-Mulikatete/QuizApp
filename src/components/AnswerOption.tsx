import React from 'react'

interface AnswerOptionProps{
    answerType: string;
    answerContent: string;
    answer:string;
    onAnswerSelected: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  answerType,
  answerContent,
  answer,
  onAnswerSelected,
}) => {
  return (
    <div>
        <li className='answerOption'>
            <input 
                type="radio" 
                className='radioCustomButton' 
                name='radio' checked={answerContent === answer} 
                id={answerType} 
                value={answerType}
                disabled={!!answer}
                onChange={onAnswerSelected}  
            />
            <label className='radioCustomLabel' htmlFor="{answerType}">{answerContent}</label>
        </li>
    </div>
);
};

export default AnswerOption
