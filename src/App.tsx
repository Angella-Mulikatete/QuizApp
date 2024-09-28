
import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Question from "./components/Question";
import QuizQuestion from "./utils/QuizQuestion";

interface Answer {
  type: string;
  content: string;
}

interface Question {
  question: string;
  answers: Answer[];
  correct: number; 
}

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [finalResult, setFinalResult] = useState<string | null>(null);

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
    if (currentQuestion) {
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = answerIndex;
        return updatedAnswers;
      });
    }

    // Move to the next question or calculate results
    if (currentQuestionIndex < QuizQuestion.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  const handlePrevious = () => {
     if (currentQuestionIndex > 0) {
       setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
     }
   };

  
   const handleNext = () => {
     if (currentQuestionIndex < QuizQuestion.length - 1) {
       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
     } else {
       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
     }
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
            <>
              <Question
                content={currentQuestion.question}
                options={currentQuestion.answers}
                handleAnswerSelected={(answer) =>
                  handleAnswersSelected(
                    currentQuestion.answers.findIndex(
                      (a) => a.content === answer
                    )
                  )
                }
              />
              <p>
                Question {currentQuestionIndex + 1} of {QuizQuestion.length}
              </p>
              <div className="navigation-buttons">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="btn btn-secondary"
                >
                  Previous
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={currentQuestionIndex >= QuizQuestion.length - 1}
                  className="btn btn-primary"
                >
                  Next
                </button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;





// import React, { useState } from "react";
// import "./App.css";
// import Quiz from "./components/Quiz";
// import QuizQuestion from "./utils/QuizQuestion";

// function App() {
//   // Create a state to keep track of the current question index
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   // Get the current question from QuizQuestion array based on index
//   const currentQuestion = QuizQuestion[currentQuestionIndex];

//   // Define a function to handle answer selection
//   const handleAnswerSelected = (selectedAnswer: string) => {
//     console.log("Answer selected:", selectedAnswer);

//     // Use setCurrentQuestionIndex to navigate to the next question
//     if (currentQuestionIndex < QuizQuestion.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       // If it's the last question, reset or handle end of quiz
//       console.log("Quiz completed!");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="App-header">
//         <h1>Welcome to the Quiz App!</h1>
//         <p>Select the correct answer to each question.</p>
//         {/* Pass the required props to the Quiz component */}
//         <Quiz
//           answer="" // You can dynamically update this value if needed
//           answerOptions={currentQuestion.answers}
//           question={currentQuestion.question}
//           questionId={currentQuestionIndex}
//           questionTotal={QuizQuestion.length}
//           onAnswerSelected={handleAnswerSelected}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;




























