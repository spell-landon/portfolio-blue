import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import styles from './Hero.module.css';

function Hero(props) {
  return (
    <div className={styles.heroContainer}>
      <h1>
        Landon Spell<span>.</span>
      </h1>
      <ul>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}

export default Hero;
