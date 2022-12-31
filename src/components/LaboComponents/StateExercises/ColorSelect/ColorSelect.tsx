import React, { useState } from 'react';
import styles from '../StateExercises.module.css'

export const Colorselect = () => {
    const [shownColors, setShownColors] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] =  useState<string[]>([]);
  
    const GetColors : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
      let selectedOptions : string[] = [];
      for (let option of Array.from(event.target.selectedOptions)){
        console.log(option.value);      selectedOptions.push(option.value)
        setSelectedColors(selectedOptions);
      }
    }
  
  
    return(
      <>
        <select className={styles.color_select} id="colorSelect" multiple onChange={GetColors}>
         <option  className={styles.color_option} value="Red">Red</option>
         <option  className={styles.color_option} value="Black">Black</option>
         <option  className={styles.color_option} value="Orange">Orange</option>
         <option  className={styles.color_option} value="Blue">Blue</option>
         <option  className={styles.color_option} value="Green">Green</option>
         <option   className={styles.color_option} value="Yellow">Yellow</option>
      </select>
      <div className={styles.button_container}>
      <button className={styles.button_80} onClick={() => setShownColors([...selectedColors])}> Show colors</button>
      </div>
      <div className='colorContainer'>
        {shownColors.map((color) => (
          <div style={{backgroundColor: color, height:200, flex:1}}> </div>))}
      </div>
      </>
    );
  
  }