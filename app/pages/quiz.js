"use client";

import { useState } from "react";
import questions from "./questions";

export default function QuizPage() {
  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let grade = 0;

    questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        grade += 1;
      }
    });

    alert(`You got ${grade}/${questions.length} !!`);

    setAnswers({});
  };

  return (
    <main className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-center text-4xl font-bold text-green-700 p-5">
        Kyles Coding Quiz
      </h1>
      <form className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {question.question}
            </h3>
            {question.image && (
              <img
                src={question.image}
                alt={`${question.id}`}
                className="w-full max-wd-md mx-auto rounded-lg shadow-md"
              />
            )}
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    onChange={() => handleOptionChange(question.id, option)}
                    checked={answers[question.id] === option}
                    className="m-1 h-4 w-4 "
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center rounded-lg bg-blue-500 text-white text-xl py-4 px-8 m-5 hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
