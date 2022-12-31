import React, { MouseEventHandler, useEffect, useState } from 'react';
import styles from './Randomjoke.module.css'


interface JokeProps {
    id : string;
    joke: string
  }

export const RandomJoke = () => {
 
    const [joke, setJoke] = useState<string>("");
    const [favo, setFavo] = useState<string>(localStorage.getItem("favo") ?? "");
  
    const SaveFavo = (joke : string) => {
      localStorage.setItem("favo", joke);
      setFavo(joke);
    }

    const loadJoke = async() => {
      console.log("test")
      let result = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        },
      } );
      let json : JokeProps  = await result.json();
      setJoke(json.joke);
    }
    useEffect(()=> {
    loadJoke();
  },[]);
    
  const GetNewJoke =async() => {
    let result = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      },
    } );
    let json : JokeProps  = await result.json();
    setJoke(json.joke);
  }
  
    return (
      <div className={styles.joke_container}>
        <p className={styles.joke}>{joke}</p>
        <div className={styles.button_container}>

      <button className={styles.GetNewJoke} onClick={() => GetNewJoke()}>New One</button></div>
      <div className={styles.button_container}>
      <button className={styles.GetNewJoke} onClick={()=> SaveFavo(joke)}>Save </button></div>
  
      <p className={styles.joke}>{favo}</p>
      </div>
    )
}
