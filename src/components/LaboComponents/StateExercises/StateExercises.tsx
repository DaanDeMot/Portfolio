import React from 'react'
import { Colorselect } from './ColorSelect/ColorSelect'
import styles from './StateExercises.module.css'

export const StateExercises = () => {
  return (
    <div className={styles.color_select_container}>
        <Colorselect></Colorselect>
    </div>
  )
}
