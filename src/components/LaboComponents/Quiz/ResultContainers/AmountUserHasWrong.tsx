import React from 'react'
import { UserPointsProps } from './AmountUserHasRight'
import styles from './ResultContainers.module.css'

export const AmountUserHasWrong = ({amount} : UserPointsProps) => {
  return (
    <div className={styles.WrongAnswerContainer}>
    <h6 className={styles.Answer_label}>Questions Wrong : </h6>
        <p className={styles.Answer_amount}> {amount} </p>
</div>
  )
}
