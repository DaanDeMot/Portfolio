import React, { MouseEventHandler } from "react";
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

export const TrueFalseQuestion = ({question,setUserInput,getRightAnswer,checkForRightResult}: ITrueFalseQuestionProps) => {

  const AnswerHandler = (userInput: any, rightAnswer: any) => {
    setUserInput(userInput);
    getRightAnswer(rightAnswer);
    checkForRightResult(question, userInput, rightAnswer);
  };

  

  return (
    <div className={styles.SingleQuestionContainer}>
        {question.isAnsweredCorrect == undefined ? (
        <div>
          <p className={styles.questionType}>Difficulty : {question.difficulty} </p>
          <p className={styles.questionCategory}> Category : {question.category} </p>

          <div className={styles.questionContent}>
          <h5 className={styles.questionTitle}>{decode(question.question, { level: "html5" })} </h5>
          <div className={styles.options}>
                  <button
                  className={styles.button_81}
                    value={"True"}
                    onClick={() =>
                      AnswerHandler('True', question.correct_answer)
                    }
                  >
                  True
                  </button>
                  <button
                   className={styles.button_81}
                    value={"False"}
                    onClick={() =>
                      AnswerHandler(
                        'False',
                        question.correct_answer
                      )
                    }
                  >
                    False
                  </button>
                </div>
          </div>
        </div>
        ) : question.isAnsweredCorrect == true ? (
        <div className={styles.rightAnswer}>
          <p className={styles.questionType}>Difficulty : {question.difficulty} </p>
          <p className={styles.questionCategory}> Category : {question.category} </p>

          <div className={styles.questionContent}>
          <h5 className={styles.questionTitle}>{decode(question.question, { level: "html5" })} </h5>
          <h6 className={styles.feedback}>Correct!</h6>
          </div>
        </div>
        ) : (
          <div className={styles.wrongAnswer}>
          <p className={styles.questionType}>Difficulty : {question.difficulty} </p>
          <p className={styles.questionCategory}> Category : {question.category} </p>

          <div className={styles.questionContent}>
          <h5 className={styles.questionTitle}>{decode(question.question, { level: "html5" })} </h5>
          <h6 className={styles.feedback}>Wrong! The right answer was {question.correct_answer}</h6>
          </div>    
          </div>
        )}
    </div>
  );
};
