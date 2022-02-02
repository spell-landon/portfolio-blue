import React from 'react';
import { Link, Element } from 'react-scroll';
import styles from './Hero.module.css';
// Elements
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';

function Hero(props) {
  return (
    <div className={styles.heroContainer}>
      <h1>
        Landon Spell<span>.</span>
      </h1>
      <ul>
        {/* <li>
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
            className='about'
            to='about'
            spy={true}
            smooth={true}
            duration={600}>
            About
          </Link>
        </li> */}
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
            href='https://docs.google.com/document/d/1uMVq5JiOIEi_6B2-u-7LSNKSk9APIHIr3sUP7jtlLnA/edit?usp=sharing'
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
