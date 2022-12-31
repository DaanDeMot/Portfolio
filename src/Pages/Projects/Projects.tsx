import React, { useState } from 'react'
import { MyProject} from '../../components/MyProject/MyProject'
import styles from './Projects.module.css'
import grid_icon from '../../Assets/Images/Icons/grid_icon.svg';
import line_icon from '../../Assets/Images/Icons/singeLine_icon.svg';

import {ProjectsData} from '../../Assets/MyProjectsData';
import { MyProjectGrid } from 'components/MyProject/MyProject_Grid';


interface ProjectDataProps{
     title:string,
     image:string,
     description:string,
}

export const Projects = () => {

     const [projects, setProjects] = useState(ProjectsData);
     const [gridLayout, setGridLayout] = useState(false);
     const [searchText, setSearchText] = useState<string>("");
     const searchWithFilter = projects.filter((project) => {
          const projectContainsSearchletter = project.title.toLowerCase().includes(searchText.toLowerCase());
          return projectContainsSearchletter;
        })

  return (
    <div>
     <section className={styles.projects_header}>
         <input 
          className={styles.input_field} 
          placeholder='Search Project'
          value={searchText}
          onChange={(event) => { {
               setSearchText(event.target.value);
             }}}></input> 
         <div className={styles.icon_container}>
               <img 
                    src={line_icon} 
                    className={styles.line_icon}
                    onClick={()=> setGridLayout(false)}></img>
               <img 
                    src={grid_icon} 
                    className={styles.grid_icon}
                    onClick={()=> setGridLayout(true)}></img>
         </div>
     </section>
     {gridLayout ?
     (
          searchWithFilter.map((project, index) => (
               <MyProjectGrid
                    key={index}
                    title={project.title} 
                    image={project.image} 
                    description={project.description}></MyProjectGrid>
          ))
     )
     :
     (
          searchWithFilter.map((project, index) => (
               <MyProject 
                    key={index}
                    title={project.title}
                    image={project.image}
                    description={project.description} 
                    link={project.link}></MyProject>
          ))
     )
     }
    
    </div>
  )
}
