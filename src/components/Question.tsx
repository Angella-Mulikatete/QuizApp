import React from "react";

interface Answer {
  type: string;
  content: string;
}

interface QuestionProps {
  content: string;
  options: Answer[];
  handleAnswerSelected: (answer: string) => void; // Accept the answer selection function
}

const Question: React.FC<QuestionProps> = ({
  content,
  options,
  handleAnswerSelected,
}) => {
  return (
    <>
      <h2>{content}</h2>
      <div>
        {options.map((option) => (
          <button
            key={option.content}
            onClick={() => handleAnswerSelected(option.content)}
          >
            {option.content}
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;




// import React from "react";

// interface QuestionProps {
//   content: string;
//   options: string[];
//   onAnswerSelected: (answer: string) => void;
// }

// const Question: React.FC<QuestionProps> = ({
//   content,
//   options,
//   onAnswerSelected,
// }) => {
//   return (
//     <div>
//       <h2>{content}</h2>
//       <ul>
//         {options.map((option, index) => (
//           <li key={index}>
//             <button onClick={() => onAnswerSelected(option)}>{option}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Question;
