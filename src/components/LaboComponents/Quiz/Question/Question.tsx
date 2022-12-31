import React, { MouseEventHandler } from "react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { IquizAPIresponse } from "../QuizApp/QuizApp";
import { TrueFalseQuestion } from "./TrueFalseQuestion";
import styles from "./Question.module.css";

interface QuestionProps {
  questions: IquizAPIresponse[];
  setUserInput: (answer: any) => any;
  getRightAnswer: (answer: any) => any;
  checkForRightResult: (
    object: IquizAPIresponse,
    userAnswer: string,
    rightAnswer: string
  ) => void;
  shuffleAnswers:(question : IquizAPIresponse)=>void,
}

export const Question = ({questions,setUserInput,getRightAnswer,checkForRightResult, shuffleAnswers}: QuestionProps) => {
  return (
      <div className={styles.QuestionListContainer}>
        {questions.map((question, index) =>
          question.type == "boolean" ? (
            <TrueFalseQuestion
              question={question}
              setUserInput={setUserInput}
              getRightAnswer={getRightAnswer}
              checkForRightResult={checkForRightResult}
            ></TrueFalseQuestion>
          ) : (
            shuffleAnswers(question),
            <MultipleChoiceQuestion
              question={question}
              setUserInput={setUserInput}
              getRightAnswer={getRightAnswer}
              checkForRightResult={checkForRightResult}
            ></MultipleChoiceQuestion>
          )
        )}
      </div>
    );
};
