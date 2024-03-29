/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styles from './About.module.css';
import { Element } from 'react-scroll';

function About(props) {
  // function handleScroll() {
  //   let tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2 } });
  //   if (window.scrollY >= 400) {
  //     tl.to('.image', { opacity: 1, duration: 2 });
  //   } else if (window.scrollY < 400) {
  //     tl.to('.image', { opacity: 0, duration: 2 });
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <Element id='about' name='about'>
      <div className={styles.aboutContainer}>
        <div className={styles.textSection}>
          <div className={styles.title}>
            <h2>
              About<span>.</span>
            </h2>
            <div className={styles.line}></div>
          </div>
          <a
            id='image'
            href='https://www.linkedin.com/in/landon-spell/'
            target='_blank'
            rel='noopener noreferrer'
            className='image'></a>
          <p>
            Hello, my name is Landon and I am a full stack software engineer. I
            am a recent graduate of the Software Engineering Program at General
            Assembly where I focused on different languages and frameworks.
            Prior to the program, I was an Estimator and Project Manager for
            Rainbow International, which taught me not only how to present
            myself professionally, communicate and articulate difficult
            concepts, being able to work with a team, and adapt to new methods
            and implementations, but also how to think outside the box when a
            difficult problem arose. I now strive to apply that same level of
            optimism, gumption and dedication towards a Software Development
            role. My motto is “We'll figure it out”, because if there's a
            problem that needs solving, an impossible deadline, or something new
            that needs to be implemented, we can, and will, figure it out and
            get the job done!
          </p>
          <div className={styles.languages}>
            <p className={styles.codeIconsText}>Languages & Frameworks:</p>
            <div>
              <i className='devicon-html5-plain colored'></i>
              <i className='devicon-css3-plain colored'></i>
              <i className='devicon-javascript-plain colored'></i>
              <i className='devicon-react-original colored'></i>
              <i className='devicon-nodejs-plain colored'></i>
              <i className='devicon-mongodb-plain colored'></i>
              <i className='devicon-express-original colored'></i>
              <i className='devicon-heroku-original colored'></i>

              <i className='devicon-postgresql-plain colored'></i>
              <i className='devicon-python-plain colored'></i>
              <i className='devicon-django-plain colored'></i>
              <i className='devicon-git-plain colored'></i>

              <i className='devicon-vscode-plain colored'></i>
              <i className='devicon-figma-plain colored'></i>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
