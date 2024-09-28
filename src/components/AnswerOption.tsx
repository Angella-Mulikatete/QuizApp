import React from 'react'

interface AnswerOptionProps {
  answerType: string;
  answerContent: string;
  answer: string;
  questionId: number;
  onAnswerSelected: (answer: string) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  answerType,
  answerContent,
  answer,
  questionId,
  onAnswerSelected,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      onAnswerSelected(answerContent);
    };

  return (
    <div>
        <li className='answerOption'>
            <input 
                type="radio" 
                className='radioCustomButton' 
                name={`radioGroup${questionId}`} 
                checked={answerContent === answer} 
                id={answerType} 
                value={answerType}
                disabled={!!answer}
                onChange={handleChange} 
            />
            <label className='radioCustomLabel' htmlFor="{answerType}">{answerContent}</label>
        </li>
    </div>
);
};

export default AnswerOption
