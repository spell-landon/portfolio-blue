import React from 'react';
import styles from './ProjectCard.module.css';
import { FiGithub } from 'react-icons/fi';

function ProjectCard({ project }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <section className={styles.title}>
          <h3>{project.title}</h3>
          <FiGithub />
        </section>
        <section className={styles.content}>
          <p>{project.content}</p>
          <img
            src={project.images.first}
            alt={project.title}
            className={styles.mainLanding}
          />
          <div className={styles.mobileImgs}>
            <img src={project.images.second} alt={project.title} />
            <img src={project.images.third} alt={project.title} />
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectCard;
