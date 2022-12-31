import React, { useState } from 'react';
import styles from './TicTacToe.module.css'

export const TicTacToe = () => {
    const [board, setBoard] = useState<string[]>(['','','','','','','','','']);
    const [turn, setTurn] = useState<boolean>(true);
    
    const changeTile =  (tileIndex : number) => {
      let boardCpy = board.map((emptTile, index)=> (index === tileIndex)? 
      (turn)?
      "X" : "O" : emptTile
      )
      setTurn(!turn);
      setBoard(boardCpy);
      }
    
      return (
        <div className={styles.ticTac}>
    
        {board.map((tile, index) => <div key={index}
        className={styles.tile}
        onClick={(event) =>{
          changeTile(index);
        }}
        > {tile}</div>)}
    
        </div>
      )
    }