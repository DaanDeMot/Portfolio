import React from 'react'
import styles from './MyProject.module.css'
import { useParams,  Outlet, createBrowserRouter, RouterProvider, Route, NavLink,Link } from "react-router-dom";

interface IWorkComponentProps {
    title:string,
    image:any,
    description:string,
    link:string,
}


export const MyProject = (project:IWorkComponentProps) => { 
  return (
    <article className={styles.project_container}>
      <div className={styles.project_image_container}>
        <img className={styles.project_image} src={project.image}></img>
        </div>
        
    <section className={styles.project_section}>
        <h4 className={styles.project_titel}>{project.title}</h4>   
        <p className={styles.project_description}>{project.description}</p>
        <section className={styles.project_link_container}>
        <Link className={styles.project_link} to={`/Projects/${project.link}`}>Check out my {project.title}</Link>
        </section>
    </section>
    </article>
  )
}
        

