import React from 'react'
import styles from './ResultContainers.module.css'

export interface UserPointsProps{
    amount:number
}

export const AmountUserHasRight = ({amount} : UserPointsProps) => {
  return (
    <div className={styles.RightAnswerContainer}>
        <h6 className={styles.Answer_label}>Questions Right : </h6>
        <p className={styles.Answer_amount}> {amount} </p>
    </div>
  )
}
               