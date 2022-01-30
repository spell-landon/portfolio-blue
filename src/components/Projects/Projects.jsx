import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../projects.json';

function Projects(props) {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.title}>
        <h2>
          Projects<span>.</span>
        </h2>
        <div className={styles.line}></div>
      </div>
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Projects;
