import React from 'react';
import styles from './About.module.css';

function About(props) {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.title}>
        <h2>
          About<span>.</span>
        </h2>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default About;
