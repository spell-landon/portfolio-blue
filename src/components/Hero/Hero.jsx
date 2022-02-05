import React from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';

function Hero(props) {
  return (
    <div className={styles.heroContainer}>
      <h1>
        Landon Spell<span>.</span>
      </h1>
      <ul>
        <li>
          <Link
            activeClass='active'
            className='about'
            to='about'
            spy={true}
            smooth={true}
            duration={600}>
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            className='projects'
            to='projects'
            spy={true}
            smooth={true}
            duration={600}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            className='contact'
            to='contact'
            spy={true}
            smooth={true}
            duration={600}>
            Contact
          </Link>
        </li>
        <li>
          <a
            href='https://docs.google.com/document/d/1_MdNENnLOI0o7U77l1yfmvkKODDUZy8uFkNC48yc0N4/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'>
            Résumé
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
