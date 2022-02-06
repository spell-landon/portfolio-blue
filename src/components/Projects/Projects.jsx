import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
// import projects from '../../projects';
import { data } from '../../projects.js';
import { Element } from 'react-scroll';

function Projects(props) {
  return (
    <Element id='projects' name='projects'>
      <div className={styles.projectsContainer}>
        <div className={styles.title}>
          <h2>
            Projects<span>.</span>
          </h2>
          <div className={styles.line}></div>
        </div>
        {data.map((project, index) => {
          return <ProjectCard project={project} key={index}/>;
        })}
      </div>
    </Element>
  );
}

export default Projects;
