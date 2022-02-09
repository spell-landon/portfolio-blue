import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import { gsap } from 'gsap';

function Hero(props) {
  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2 } });

    tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2 })
    .to('li', {opacity: 1, y:0, stagger: .2}, '-=2')
  }, []);

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
            href='https://drive.google.com/file/d/1KZSQGxsgABGulm5y_-oNvzz_vn53dsJM/view'
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
