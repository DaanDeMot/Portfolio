import React from 'react'
import styles from './MyProject_Grid.module.css'
import { useParams,  Outlet, createBrowserRouter, RouterProvider, Route, NavLink,Link } from "react-router-dom";

interface IWorkComponentProps {
    title:string,
    image:any,
    description:string,
}


export const MyProjectGrid = (project:IWorkComponentProps) => { 
  return (
    <article className={styles.project_container}>
        <h4 className={styles.project_titel}>{project.title}</h4>   
        <p className={styles.project_description}>{project.description}</p>
        <section className={styles.project_link_container}>
        <Link className={styles.project_link} to={`/Projects/${project.title}`}>Check out my {project.title}</Link>
    </section>
    </article>
  )
}
        

