import React from 'react'
import AnswerOption from  '../components/AnswerOption';
import {  TransitionGroup } from "react-transition-group";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";

interface QuizProps{
    answer: string;
    answerOptions: Array<{content: string; type: string}>;
    question: string;
    questionId: number;
    questionTotal: number;
    onAnswerSelected: (answer: string) => void;
}


const Quiz:React.FC<QuizProps> = (props) => {
     function renderAnswerOptions(key: { content: string; type: string }) {
       return (
         <AnswerOption
           key={key.content}
           answerContent={key.content}
           answerType={key.type}
           answer={props.answer}
           questionId={props.questionId}
           onAnswerSelected={props.onAnswerSelected}
         />
       );
     }
  return (
    <div>
      <TransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={props.questionId}>
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
          <Question
            content={props.question}
            options={props.answerOptions} // Pass answer options
            handleAnswerSelected={props.onAnswerSelected} // Pass answer selection function
          />

          <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
        </div>
      </TransitionGroup>
    </div>
  );
}

export default Quiz











// import React, { useState, useEffect, useCallback } from "react";
// import AnswerOption from "../components/AnswerOption";
// import { TransitionGroup } from "react-transition-group";
// import Question from "../components/Question";
// import QuestionCount from "../components/QuestionCount";
// import QuizQuestion from "../utils/QuizQuestion";

// interface QuizProps {
//   answer: string;
//   answerOptions: Array<{ content: string; type: string }>;
//   question: string;
//   questionId: number;
//   questionTotal: number;
//   onAnswerSelected: (answer: string) => void;
// }

// interface Answer {
//   type: string;
//   content: string;
// }

// interface Question {
//   question: string;
//   answers: Answer[];
//   correct: number;
// }

// const Quiz: React.FC<QuizProps> = (props) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState<number[]>([]);
//   const [finalResult, setFinalResult] = useState<string | null>(null);

//   // Check if there are questions available
//   const hasQuestions = QuizQuestion.length > 0;
//   const currentQuestion = hasQuestions
//     ? QuizQuestion[currentQuestionIndex]
//     : null;

//   const calculateResults = useCallback(() => {
//     const totalQuestions: number = QuizQuestion.length;

//     const score: number = userAnswers.reduce((totalScore, answer, index) => {
//       return answer === QuizQuestion[index].correct
//         ? totalScore + 1
//         : totalScore;
//     }, 0);

//     console.log("User answers", score);

//     setFinalResult(`You scored ${score} out of ${totalQuestions}`);
//   }, [userAnswers]);

//   useEffect(() => {
//     // Calculate results when reaching the end of questions
//     if (currentQuestionIndex >= QuizQuestion.length) {
//       calculateResults();
//     }
//   }, [currentQuestionIndex, calculateResults]);

//   const handleAnswersSelected = (answerIndex: number) => {
//     if (currentQuestion) {
//       setUserAnswers((prevAnswers) => {
//         const updatedAnswers = [...prevAnswers];
//         updatedAnswers[currentQuestionIndex] = answerIndex;
//         return updatedAnswers;
//       });
//     }

//     // Move to the next question or calculate results
//     if (currentQuestionIndex < QuizQuestion.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     }
//   };
//   function renderAnswerOptions(key: { content: string; type: string }) {
//     return (
//       <AnswerOption
//         key={key.content}
//         answerContent={key.content}
//         answerType={key.type}
//         answer={props.answer}
//         questionId={props.questionId}
//         onAnswerSelected={props.onAnswerSelected}
//       />
//     );
//   }
//   return (
//     <div>
//       <TransitionGroup
//         className="container"
//         component="div"
//         transitionName="fade"
//         transitionEnterTimeout={800}
//         transitionLeaveTimeout={500}
//         transitionAppear
//         transitionAppearTimeout={500}
//       >
//         <div key={props.questionId}>
//           <QuestionCount
//             counter={props.questionId}
//             total={props.questionTotal}
//           />
//           {/* <Question
//             content={props.question}
//             options={props.answerOptions} // Pass answer options
//             handleAnswerSelected={props.onAnswerSelected} // Pass answer selection function
//           /> */}

//           {finalResult ? (
//             <h2>{finalResult}</h2>
//           ) : (
//             currentQuestion && (
//               <>
//                 <Question
//                   content={currentQuestion.question}
//                   options={currentQuestion.answers}
//                   handleAnswerSelected={(answer) =>
//                     handleAnswersSelected(
//                       currentQuestion.answers.findIndex(
//                         (a) => a.content === answer
//                       )
//                     )
//                   }
//                 />
//                 <p>
//                   Question {currentQuestionIndex + 1} of {QuizQuestion.length}
//                 </p>
//               </>
//             )
//           )}

//           <ul className="answerOptions">
//             {props.answerOptions.map(renderAnswerOptions)}
//           </ul>
//         </div>
//       </TransitionGroup>
//     </div>
//   );
// };

// export default Quiz;

