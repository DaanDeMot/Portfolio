import React from 'react'
import styles from './Nav.module.css'
import { Outlet, NavLink } from "react-router-dom";
import menuIcon from '../../Assets/Images/Icons/menu-icon.svg'

export const NavComp = () => {
  return (
    <nav>
      <div className={styles.link_container}>
                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/" >About</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Projects">Projects</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Experience">Experience</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Contact">Contact Me</NavLink>
      </div>
    </nav>
  )
}
