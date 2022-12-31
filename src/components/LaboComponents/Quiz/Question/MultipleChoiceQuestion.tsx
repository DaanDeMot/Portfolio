import React from "react";
import { IquizAPIresponse } from "../QuizApp/QuizApp";
import { decode } from "html-entities";
import styles from "./Question.module.css";

interface ITrueFalseQuestionProps {
  question: IquizAPIresponse;
  setUserInput: (answer: any) => any;
  getRightAnswer: (answer: any) => any;
  checkForRightResult: (
    object: IquizAPIresponse,
    userAnswer: string,
    rightAnswer: string
  ) => void;
}

export const MultipleChoiceQuestion = ({question,setUserInput,getRightAnswer,checkForRightResult,}: ITrueFalseQuestionProps) => {
  
  const CheckForResult = (userInput: string, rightAnswer: string) => {
    setUserInput(userInput);
    getRightAnswer(rightAnswer);
    checkForRightResult(question, userInput, rightAnswer);
  };

  return (
    <div className={styles.SingleQuestionContainer}>
      {question.isAnsweredCorrect == undefined ? (
        <div className={styles.blankAnswer}>
          <div className={styles.question_header}>
        <p className={styles.questionType} >Difficulty : {question.difficulty} </p>
        <p className={styles.questionCategory}> Category : {question.category} </p>
        </div>
        <div className={styles.questionContent}>
          <h5 className={styles.questionTitle}>{decode(question.question, { level: "html5" })} </h5>
          
          <select className={styles.questionSelect} onChange={(event) =>
              CheckForResult(event.target.value, question.correct_answer)} defaultChecked>
                 <option disabled selected> -- select an option -- </option>
            {question.possibleAnswer && question.possibleAnswer.map((answer, index) => (
              <option className={styles.questionOption} value={answer}>{answer}</option>
            ))}
          </select>
          </div>
        </div>
      ) 
      : question.isAnsweredCorrect == true ? (
        <div className={styles.rightAnswer}>
            <p className={styles.questionType}>Difficulty : {question.difficulty} </p>
            <p className={styles.questionCategory} > Category : {question.category} </p>
            <div className={styles.questionContent}>
            <h5 className={styles.questionTitle}>{decode(question.question, { level: "html5" })} </h5>
            <h6 className={styles.feedback}>Correct!</h6>
          </div>
        </div>
      ) 
      : (
        <div className={styles.wrongAnswer}>
        
          <p className={styles.questionType} >Difficulty : {question.difficulty} </p>
          <p className={styles.questionCategory}> Category : {question.category} </p>

          <div className={styles.questionContent} >
          <h5 className={styles.questionTitle}>{decode(question.question, { level: "html5" })} </h5>
          <h6 className={styles.feedback}>Wrong! The right answer was {question.correct_answer}</h6>
          </div>
        </div>
      )}
    </div>
  );
};
