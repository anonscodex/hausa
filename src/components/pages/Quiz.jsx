import { Link } from "react-router-dom";
import { useState } from "react";
import Confetti from "react-confetti";
import { quiz } from "../../constant";

const Quiz = ({ progress, setProgress }) => {
  const [useConfetti, setUseConfetti] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const onClick = () => {
    setResult((prev) =>
      selectedAnswers
        ? { ...prev, score: prev.score + 5, correctAnswers: prev.correctAnswers + 1 }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (activeQuestions !== questions.length - 1) {
      setActiveQuestions((prev) => prev + 1);
    } else {
      setActiveQuestions(0);
      setShowResult(true);
      setUseConfetti(true);
      setTimeout(() => setUseConfetti(false), 8000);
    }

    if (!isNaN(progress)) {
      setProgress(progress + 1);
    } else {
      setProgress(100);
    }

    // Reset selected answer for next question
    setSelectedAnswerIndex(null);
    setSelectedAnswers(false);
  };

  const onSelectedAnswer = (item, index) => {
    setSelectedAnswerIndex(index);
    if (item === correctAnswer) {
      setSelectedAnswers(true);
    } else {
      setSelectedAnswers(false);
    }
  };

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestions];
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <>
      {!showResult ? (
        <div className="question-container p-4 border rounded-lg shadow-lg bg-white mt-10">
          <div className="question-progress float-left mt-1 text-gray-600">
            <span className="font-bold">{addLeadingZero(activeQuestions + 1)}</span>
            <span>/{addLeadingZero(questions.length)}</span>
          </div>
          <br />
          <h1 className="text-center text-xl text-black mr-10">Quiz</h1>
          <h2 className="text-2xl font-bold mb-4 text-black">{question}</h2>
          <ul className="choices-list list-none p-0 text-xl text-black">
            {choices.map((item, index) => (
              <li
                onClick={() => onSelectedAnswer(item, index)}
                key={item}
                className={`choice-item cursor-pointer p-2 mb-2 rounded-md ${
                  selectedAnswerIndex === index ? 'bg-green-100 text-green-900' : 'bg-gray-100 text-gray-700'
                } hover:bg-green-500 hover:text-white`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            className="bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700"
            onClick={onClick}
            disabled={selectedAnswerIndex === null}
          >
            {activeQuestions === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      ) : (
        <div className="question-container p-4 border rounded-lg shadow-lg bg-white mt-10">
          <h3>Result</h3>
          <p className="choice-item cursor-pointer p-2 mb-2 rounded-md bg-green-100 text-green-900 hover:bg-green-500 hover:text-white">
            Total Questions: <span>{questions.length}</span>
          </p>
          <p className="choice-item cursor-pointer p-2 mb-2 rounded-md bg-green-100 text-green-900 hover:bg-green-500 hover:text-white">
            Total Score:<span> {result.score}</span>
          </p>
          <p className="choice-item cursor-pointer p-2 mb-2 rounded-md bg-green-100 text-green-900 hover:bg-green-500 hover:text-white">
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p className="choice-item cursor-pointer p-2 mb-2 rounded-md bg-green-100 text-green-900 hover:bg-green-500 hover:text-white">
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}

      {useConfetti && <Confetti width="1300px" height="990px" />}

    </>
  );
};

export default Quiz;