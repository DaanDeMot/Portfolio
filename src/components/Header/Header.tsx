import React from 'react'
import { NavComp } from '../Nav/NavComp'
import './Header.css'
import logo from './../../Assets/Images/Logo.png'
import { Socials } from 'components/Socials/Socials'

export const HeaderComp = () => {
  return (

    <header>
      <h1>DAAN DE MOT</h1>
        <NavComp></NavComp>
    </header>
  )
}
