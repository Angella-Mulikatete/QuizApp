import React from "react";
import AnswerOption from "../components/AnswerOption";
import { TransitionGroup } from "react-transition-group";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";

interface QuizProps {
  answer: string;
  answerOptions: Array<{ content: string; type: string }>;
  question: string;
  questionId: number;
  questionTotal: number;
  onAnswerSelected: (answer: string) => void;
  errorMessage: string | null;
  handleNext: () => void;
  handlePrevious: () => void;
  handleSubmitQuiz: () => void;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
}

const Quiz: React.FC<QuizProps> = (props) => {
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
            options={props.answerOptions}
            handleAnswerSelected={props.onAnswerSelected}
          />
          <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
          {props.errorMessage && <p className="error">{props.errorMessage}</p>}
          <div className="navigation-buttons">
            <button
              onClick={props.handlePrevious}
              disabled={props.isFirstQuestion}
              className="btn btn-secondary"
            >
              Previous
            </button>
            {props.isLastQuestion ? (
              <button onClick={props.handleSubmitQuiz}>Submit</button>
            ) : (
              <button onClick={props.handleNext}>Next</button>
            )}
          </div>
        </div>
      </TransitionGroup>
    </div>
  );
};

export default Quiz;

// import React from 'react'
// import AnswerOption from  '../components/AnswerOption';
// import {  TransitionGroup } from "react-transition-group";
// import Question from "../components/Question";
// import QuestionCount from "../components/QuestionCount";

// interface QuizProps{
//     answer: string;
//     answerOptions: Array<{content: string; type: string}>;
//     question: string;
//     questionId: number;
//     questionTotal: number;
//     onAnswerSelected: (answer: string) => void;
// }

// const Quiz:React.FC<QuizProps> = (props) => {
//      function renderAnswerOptions(key: { content: string; type: string }) {
//        return (
//          <AnswerOption
//            key={key.content}
//            answerContent={key.content}
//            answerType={key.type}
//            answer={props.answer}
//            questionId={props.questionId}
//            onAnswerSelected={props.onAnswerSelected}
//          />
//        );
//      }
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
//           <Question
//             content={props.question}
//             options={props.answerOptions} // Pass answer options
//             handleAnswerSelected={props.onAnswerSelected} // Pass answer selection function
//           />

//           <ul className="answerOptions">
//             {props.answerOptions.map(renderAnswerOptions)}
//           </ul>
//         </div>
//       </TransitionGroup>
//     </div>
//   );
// }

// export default Quiz


