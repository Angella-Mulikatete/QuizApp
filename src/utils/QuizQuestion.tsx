// import React from 'react'

interface Answer {
  type: string;
  content: string;
}

interface quizQuestions {
  question: string;
  answers: Answer[];
  correct: number;
}
const QuizQuestion: quizQuestions[] = [
  {
    question:
      "Which of these programming languages is mainly used for web development?",
    answers: [
      {
        type: "Python",
        content: "Python",
      },
      {
        type: "Java",
        content: "Java",
      },
      {
        type: "JavaScript",
        content: "JavaScript",
      },
    ],
    correct: 2,
  },
  {
    question: "What does HTML stand for?",
    answers: [
      {
        type: "Markup",
        content: "HyperText Markup Language",
      },
      {
        type: "Machine",
        content: "HyperText Machine Language",
      },
      {
        type: "Management",
        content: "HyperText Management Language",
      },
    ],
    correct: 0,
  },
  {
    question:
      "Which of these is a version control system used for tracking code changes?",
    answers: [
      {
        type: "Git",
        content: "Git",
      },
      {
        type: "Node.js",
        content: "Node.js",
      },
      {
        type: "React",
        content: "React",
      },
    ],
    correct: 0,
  },
  {
    question:
      "Which of these is a popular operating system for desktops and laptops?",
    answers: [
      {
        type: "Android",
        content: "Android",
      },
      {
        type: "Windows",
        content: "Windows",
      },
      {
        type: "iOS",
        content: "iOS",
      },
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following is a popular cloud computing service provider?",
    answers: [
      {
        type: "AWS",
        content: "Amazon Web Services (AWS)",
      },
      {
        type: "Spotify",
        content: "Spotify",
      },
      {
        type: "Instagram",
        content: "Instagram",
      },
    ],
    correct: 0,
  },
  {
    question:
      "What is the name of the most popular version control repository hosting service?",
    answers: [
      {
        type: "Google",
        content: "Google Drive",
      },
      {
        type: "GitHub",
        content: "GitHub",
      },
      {
        type: "Dropbox",
        content: "Dropbox",
      },
    ],
    correct: 1,
  },
  {
    question: "What is the purpose of CSS in web development?",
    answers: [
      {
        type: "Backend",
        content: "To handle backend server requests",
      },
      {
        type: "Database",
        content: "To manage the database",
      },
      {
        type: "Styling",
        content: "To style and layout web pages",
      },
    ],
    correct: 2,
  },
  {
    question: "Which language is used for querying databases?",
    answers: [
      {
        type: "SQL",
        content: "SQL",
      },
      {
        type: "JavaScript",
        content: "JavaScript",
      },
      {
        type: "CSS",
        content: "CSS",
      },
    ],
    correct: 0,
  },
  {
    question:
      "Which of these platforms is used for hosting open-source projects?",
    answers: [
      {
        type: "Twitch",
        content: "Twitch",
      },
      {
        type: "GitHub",
        content: "GitHub",
      },
      {
        type: "LinkedIn",
        content: "LinkedIn",
      },
    ],
    correct: 1,
  },
  {
    question:
      "Which of these terms is used to describe a small piece of reusable code?",
    answers: [
      {
        type: "Method",
        content: "Function",
      },
      {
        type: "Module",
        content: "Module",
      },
      {
        type: "Component",
        content: "Component",
      },
    ],
    correct: 2,
  },
];

export default QuizQuestion;


