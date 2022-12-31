import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { FooterComp } from '../components/Footer/FooterComp';
import { HeaderComp } from '../components/Header/Header'
import { NavComp } from '../components/Nav/NavComp';
import './Root.module.css';

export const Root = () => {
  return (
    <div className={"App"}>
        <HeaderComp></HeaderComp>

        <main>
            <Outlet/>
        </main>
        <FooterComp></FooterComp>
    </div>
  )
}

