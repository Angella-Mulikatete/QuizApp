import  { useState, useEffect, useCallback } from "react";
import "./App.css";
import QuizQuestion from "./utils/QuizQuestion";
import Quiz from "./components/Quiz";


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number )[]>(
    Array(QuizQuestion.length).fill(null)
  );
  const [finalResult, setFinalResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Check if there are questions available
  const hasQuestions = QuizQuestion.length > 0;
  const currentQuestion = hasQuestions? QuizQuestion[currentQuestionIndex]: null;

  const calculateResults = useCallback(() => {
    const totalQuestions: number = QuizQuestion.length;

    const score: number = userAnswers.reduce((totalScore, answer, index) => {
      return answer === QuizQuestion[index].correct
          ? totalScore + 1
          : totalScore;
    }, 0);

    console.log("User answers", score);

    setFinalResult(`You scored ${score} out of ${totalQuestions}`);
  }, [userAnswers]);

  useEffect(() => {
    // Calculate results when reaching the end of questions
    if (currentQuestionIndex >= QuizQuestion.length) {
      calculateResults();
    }
  }, [currentQuestionIndex, calculateResults]);

  const handleAnswersSelected = (answerIndex: number) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = answerIndex;
      return updatedAnswers;
    });
    setErrorMessage(null);
  };

  const handleNext = () => {
    if (userAnswers[currentQuestionIndex] === null) {
      setErrorMessage(
        "Please select an answer before moving to the next question."
      );
      return;
    }

    if (currentQuestionIndex < QuizQuestion.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setErrorMessage(null);
    }
  };

  const handleSubmitQuiz = () => {
    if (userAnswers.some((answer) => answer === null)) {
      setErrorMessage(
        "Please answer all questions before submitting the quiz."
      );
      return;
    }
    setCurrentQuestionIndex(QuizQuestion.length);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to the Quiz App!</h1>
        <p>Select the correct answer to each question.</p>
        {finalResult ? (
          <h2>{finalResult}</h2>
        ) : (
          currentQuestion && (
            <Quiz
              question={currentQuestion.question}
              questionId={currentQuestionIndex + 1}
              questionTotal={QuizQuestion.length}
              answerOptions={currentQuestion.answers}
              answer={
                userAnswers[currentQuestionIndex] !== null
                  ? currentQuestion.answers[userAnswers[currentQuestionIndex]!]
                      .content
                  : ""
              }
              onAnswerSelected={(answer) =>
                handleAnswersSelected(
                  currentQuestion.answers.findIndex((a) => a.content === answer)
                )
              }
              errorMessage={errorMessage}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              handleSubmitQuiz={handleSubmitQuiz}
              isLastQuestion={currentQuestionIndex === QuizQuestion.length - 1}
              isFirstQuestion={currentQuestionIndex === 0}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;

// import React, { useState, useEffect, useCallback } from "react";
// import "./App.css";
// import Question from "./components/Question";
// import QuizQuestion from "./utils/QuizQuestion";

// interface Answer {
//   type: string;
//   content: string;
// }

// interface Question {
//   question: string;
//   answers: Answer[];
//   correct: number;
// }

// function App() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState<number[]>([]);
//   const [finalResult, setFinalResult] = useState<string | null>(null);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   // Check if there are questions available
//   const hasQuestions = QuizQuestion.length > 0;
//   const currentQuestion = hasQuestions? QuizQuestion[currentQuestionIndex]: null;

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
//       setErrorMessage(null);
//     }

//     // Move to the next qtn or calculate results
//     if (currentQuestionIndex < QuizQuestion.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//    const handleNext = () => {
//      if (userAnswers[currentQuestionIndex] === null) {
//        setErrorMessage(
//          "Please select an answer before moving to the next question."
//        );
//        return;
//      }

//      if (currentQuestionIndex < QuizQuestion.length - 1) {
//        setCurrentQuestionIndex(currentQuestionIndex + 1);
//      }
//    };

//    // Handle "Previous" button click
//    const handlePrevious = () => {
//      if (currentQuestionIndex > 0) {
//        setCurrentQuestionIndex(currentQuestionIndex - 1);
//        setErrorMessage(null); // Reset error message on navigation
//      }
//    };

//     const handleSubmitQuiz = () => {
//       if (userAnswers.some((answer) => answer === null)) {
//         setErrorMessage(
//           "Please answer all questions before submitting the quiz."
//         );
//         return;
//       }
//       setCurrentQuestionIndex(QuizQuestion.length);
//     };

//   return (
//     <div className="App">
//       <div className="App-header">
//         <h1>Welcome to the Quiz App!</h1>
//         <p>Select the correct answer to each question.</p>
//         {finalResult ? (
//           <h2>{finalResult}</h2>
//         ) : (
//           currentQuestion && (
//             <>
//               <Question
//                 content={currentQuestion.question}
//                 options={currentQuestion.answers}
//                 handleAnswerSelected={(answer) =>
//                   handleAnswersSelected(
//                     currentQuestion.answers.findIndex(
//                       (a) => a.content === answer
//                     )
//                   )
//                 }
//               />
//               <p>
//                 Question {currentQuestionIndex + 1} of {QuizQuestion.length}
//               </p>
//               {errorMessage && <p className="error">{errorMessage}</p>}
//               <div className="navigation-buttons">
//                 <button
//                   onClick={handlePrevious}
//                   disabled={currentQuestionIndex === 0}
//                   className="btn btn-secondary"
//                 >
//                   Previous
//                 </button>

//                 {currentQuestionIndex < QuizQuestion.length - 1 ? (
//                   <button onClick={handleNext}>Next</button>
//                 ) : (
//                   <button onClick={handleSubmitQuiz}>Submit</button>
//                 )}
//               </div>
//             </>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


