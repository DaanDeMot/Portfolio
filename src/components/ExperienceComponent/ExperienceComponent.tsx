import React from "react";
import styles from "./ExperienceComponent.module.css";

interface IExperienceComponentProps {
  title: string;
  image: string;
  company: string;
  timePeriod: string;
  navigationString: string;
  job_description: string;
  workPlace_description: string;
}

export const ExperienceComponent = (work: IExperienceComponentProps) => {
  return (
    <div className={styles.container}>
      <article className={styles.work_container}>
        <p className={styles.work_hoverMe}>Hover me!</p>
        <section className={styles.work_section_header}>
          <div className={styles.workImage_container}>
            <img className={styles.workImage} src={work.image}></img>
          </div>
          <section className={styles.work_section_subheader}>
          <h4 className={styles.work_title}>{work.title}</h4>
          <section className={styles.sub_title_container}>
          <p className={styles.work_timePeriod}>{work.timePeriod} </p>
          <p className={styles.work_company}> &#64;{work.company}</p>
          </section>
          </section>
        </section>
          <p className={styles.work_description}>{work.job_description}</p>
      </article>
      <section className={styles.extra_section}>
        <p className={styles.workPlace_description}>
          {work.workPlace_description}
        </p>
        <p className={styles.workPlace_link}>
          <a href={work.navigationString} target="_blank">
            Check out our website!
          </a>
        </p>
      </section>
    </div>
  );
};
