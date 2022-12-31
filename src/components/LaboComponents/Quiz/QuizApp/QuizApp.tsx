import React, { useEffect, useState } from "react";
import { Question } from "../Question/Question";
import { AmountUserHasRight } from "../ResultContainers/AmountUserHasRight";
import { AmountUserHasWrong } from "../ResultContainers/AmountUserHasWrong";
import arrayShuffle from 'array-shuffle';
import styles from '../Quiz.module.css'
import { TailSpin } from  'react-loader-spinner'

export interface IquizAPIresponse {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: any;
  incorrect_answers: string[],
  isAnsweredCorrect: boolean | undefined,
  possibleAnswer?:string[],
}



export const QuizApp = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<IquizAPIresponse[]>([]);
  const [amountWrongAnswer, setAmountWrongAnswer] = useState<number>(0);
  const [amountRightAnswer, setAmountRightgAnswer] = useState<number>(0);
  const [answer, setAnswer] = useState<string>();
  const [userInput, setUserInput] = useState<string>();
  let apiUrl = "https://opentdb.com/api.php?amount=10";

  function CheckForRightAnswer(object: IquizAPIresponse, userAnswer : string, rightAnswer: string){
    if(userAnswer === rightAnswer){
      object.isAnsweredCorrect=true;
      setAmountRightgAnswer(amountRightAnswer+1);
    }else{
      object.isAnsweredCorrect=false;
      setAmountWrongAnswer(amountWrongAnswer+1);
    }
}

const GivesArrayWithShufflesWrongAndWrighAnswer =(question: IquizAPIresponse)=> {
  let tempArray = question.incorrect_answers;
  if(tempArray.includes(question.correct_answer)){
    let shuffled = arrayShuffle(tempArray);
    question.possibleAnswer=shuffled;
  }else{
  tempArray.push(question.correct_answer);
  let shuffled = arrayShuffle(tempArray);
  console.log(tempArray);
  question.possibleAnswer=shuffled;
}

}
  
  const FetchQuestionsAgain = async () => {
    try{
      const response = await fetch(apiUrl);
      const jsonRes = await response.json();
      setQuestions([...questions, ...jsonRes.results]);
      console.log(questions);
    }catch(error){
      console.log(error);
    }
  };

  const FetchQuestions = async () => {
    setLoading(true)
    try {
      const response = await fetch(apiUrl);
      const jsonRes = await response.json();
      setQuestions(jsonRes.results);
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  };
  useEffect(() => {
    FetchQuestions();
  }, []);

  return(
    <div>
     <AmountUserHasRight amount={amountRightAnswer}></AmountUserHasRight> 
     <AmountUserHasWrong amount={amountWrongAnswer}></AmountUserHasWrong>
    {loading == false ? 
     <Question
     shuffleAnswers={GivesArrayWithShufflesWrongAndWrighAnswer}
     questions={questions} 
     checkForRightResult={CheckForRightAnswer}
     setUserInput={setUserInput} 
     getRightAnswer={setAnswer}></Question>
    :
    <section  className={styles.loader_container}>
      <TailSpin
      height="80"
      width="80"
      color="rgb(46 47 91 / 1)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="styles.loader"
      visible={true}
    />
  </section>
    }
        <div className={styles.button_container}>
        <button className={styles.loadMoreButton} onClick={() =>(FetchQuestionsAgain())}>Load more</button>
        </div>
    </div>
  ); ;
};


