import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
  <div>
    <section className={styles.section_bio}>
      <h2 className={styles.section_title}>Welcome Everyone</h2>
      <p  className={styles.section_subtitle}>My name is Daan De Mot, a student Programmer based in the lovely city Antwerp in Belgium. </p>
      <p  className={styles.section_subtitle}>With my passion for web and app development I would like to have an impact in our technical world.</p>
    </section>

    <section className={styles.section_skills}>
      <h2 className={styles.section_title}>My Skills</h2>
      <p  className={styles.section_subtitle}>Although I'd really like to play around with Frontend, my goal is to be a fullstack developer. My main interest goes out to React & Typescript.</p>
    </section>

    <section className={styles.skills}>  
      <section className={styles.skills_webdev}>
        <h2 className={styles.skills_title}>Web Development</h2>

        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>ReactJS</p>
          <p className={styles.skill_level_75}> </p>
        </div>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>NodeJS</p>
          <p className={styles.skill_level_60}> </p>
        </div>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>Typescript</p>
          <p className={styles.skill_level_85}> </p>
        </div>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>React Native</p>
          <p className={styles.skill_level_60}> </p>
        </div>
      </section>

      <section className={styles.skills_webdev}>
        <h2 className={styles.skills_title}>OOP</h2>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>C#</p>
          <p className={styles.skill_level_75}> </p>
        </div>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>PYTHON</p>
          <p className={styles.skill_level_50}> </p>
        </div>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>JAVA</p>
          <p className={styles.skill_level_60}> </p>
        </div>
      </section>

      <section className={styles.skills_webdev}>
        <h2 className={styles.skills_title}>DataBase</h2>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>MongoDB</p>
          <p className={styles.skill_level_75}> </p>
        </div>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>MySQL</p>
          <p className={styles.skill_level_60}> </p>
        </div>
        <div className={styles.skill_row}>
          <p  className={styles.skill_lable}>Entity Framework Core</p>
          <p className={styles.skill_level_50}> </p>
        </div>
      </section>
    </section>




  </div>  
  )
}
