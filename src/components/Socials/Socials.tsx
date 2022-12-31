import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styles from './Socials.module.css'
import LinkedIn from '../../Assets/Images/Icons/linkedin.svg'
import Github from '../../Assets/Images/Icons/github.svg'
import Resume from '../../Assets/Images/Icons/resume.svg'
import ResumePDF from '../../Assets/downloadable/resume_ddm.pdf'


export const Socials = () => {
  return (
    <div className={styles.socials_container}>
      <div className={styles.social_icon}>
        <a href='https://www.linkedin.com/in/daandemot/' target="_blank">
          <img className={styles.icon} src={LinkedIn}></img>
        </a>
        <a href='https://github.com/DaanDeMot' target="_blank">
          <img className={styles.icon} src={Github}></img>
        </a>
        </div>
    </div>
  )
}
