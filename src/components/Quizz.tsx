import React, { useState } from "react";

interface Question {
  text: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: 0,
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
  },
  {
    text: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Michelangelo",
      "Rembrandt",
      "Vincent van Gogh",
    ],
    correctAnswer: 0,
  },
];


const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null)
  );

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Show final score
      alert(`Quiz completed! Your final score is ${score}/${questions.length}`);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectAnswer = (answer: number) => {
    setSelectedAnswers([
      ...selectedAnswers.slice(0, currentQuestionIndex),
      answer,
    ]);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  return (
    <div className="quiz-container">
      <h1>Multiple Choice Quiz</h1>
      <p>
        Question {currentQuestionIndex + 1}/{totalQuestions}
      </p>
      <p>{currentQuestion.text}</p>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name={`option-${currentQuestionIndex}`}
              value={index}
              checked={selectedAnswers[currentQuestionIndex] === index}
              onChange={() => handleSelectAnswer(index)}
            />
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handlePreviousQuestion}>Previous</button>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
};

export default Quiz;
