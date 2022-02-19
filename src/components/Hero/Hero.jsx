import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import { gsap } from 'gsap';
import image from '../../assets/lava-lake.png';

function Hero(props) {
  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2 } });

    tl.to('h1', {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2.2,
    }).to('li', { opacity: 1, y: 0, stagger: 0.2 }, '-=2');
  }, []);

  return (
    <div className={styles.heroContainer}>
      <img src={image} loading='lazy' alt='Hero' />
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
            href='https://docs.google.com/document/d/e/2PACX-1vQ4ueFjCe7BkZFfSYjtIpjjd1QeM5St2NN1Gd8hP1514JUMu-POKSIYuR8ohgXXdYW9B653yIluaTxB/pub'
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
