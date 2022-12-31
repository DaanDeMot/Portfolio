import React from 'react'
import { ExperienceComponent } from '../../components/ExperienceComponent/ExperienceComponent'
import styles from './Experience.module.css'
import logoWatcherr from 'Assets/Images/watcherr.png';
import SchoolTaalvaardig from 'Assets/Images/ExperienceImage/SchoolTaalVaardig.png';

export const Experience = () => {
  return (
    <div className={styles.exp_container}>
    <ExperienceComponent 
        title={'Student Test Engineer'}
        company={'Watcherr'}
        timePeriod={"2022 - Present"}
        image={logoWatcherr}
        navigationString={'https://watcherr.com/nl/'}
        job_description={'Student Test Engineer at start-up/scale-up Watcherr. Contribute to front-end development of the Watcherr application.Working with React Native/Typescript. Also contributing to QA of the product'} 
        workPlace_description={'Watcherr biedt SaaS en AI oplossingen voor woonzorgcentra, ziekenhuizen en mensen thuis aan de hand van een geïntegreerd software en hardware systeem. Het systeem voorziet een continue monitoring van de gezondheidspatronen van de gebruiker om onregelmatigheden te voorspellen, te voorkomen en te melden om kritische situaties te vermijden.'}></ExperienceComponent>
  
  <ExperienceComponent 
        title={'CMS Developer'}
        company={'AP Hogeschool Antwerpen'}
        timePeriod={"2021 - Present"}
        image={SchoolTaalvaardig}
        navigationString={'https://schooltaalvaardig.be'}
        job_description={'Designed, developed and further supporting the CMS platform or website of School Language Skills using WordPress. Experience with Google Analytics. Listening to the product owners and converting their wishes into practice.'} 
        workPlace_description={'Voorliggend onderzoeksproject wil een bredere groep leerkrachten ondersteunen in hun professionele ontwikkeling als taalleerkracht in niet-taalvakken. Omdat losse workshops vaak onvoldoende zijn om vaardigheden in het werkveld te laten verwerven, ontwikkelen en optimaliseren we een blended professionaliseringstraject. We baseren ons daarbij op internationaal onderzoek naar effectieve en haalbare professionaliseringstrajecten en de resultaten van het eerdere STaalvaardig-project.'}></ExperienceComponent>
  
  </div>
  )
}
