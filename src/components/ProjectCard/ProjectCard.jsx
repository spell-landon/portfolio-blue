import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { FiGithub } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className={styles.cardContainer}>
      <section className={styles.title}>
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.siteLink}>
          {project.title}
        </a>
        <a
          href={project.github}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.githubLink}>
          <FiGithub className={styles.icon} />
        </a>
      </section>
      <section className={styles.content}>
        <p>{project.content}</p>
        <a href={project.link} target='_blank' rel='noopener noreferrer'>
          <img
            src={project.images.first}
            alt={project.title}
            className={styles.mainLanding}
          />
        </a>
        <div className={styles.mobileImgs}>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            <img src={project.images.second} alt={project.title} />
          </a>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            <img src={project.images.third} alt={project.title} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectCard;
