import React from 'react';
import styles from './About.module.css';

function About(props) {
  return (
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
          rel='noopener noreferrer'>
        </a>
        <p>
          Hello, I am Landon Spell. Yeah. George. Y'know this time it wasn't my
          fault. The Doc set all of his clocks twenty-five minutes slow. Yeah, I
          think it's a major embarrassment having an uncle in prison. Shut your
          filthy mouth, I'm not that kind of girl. Whoa, they really cleaned
          this place up, looks brand new. My god, it's my mother. Put your pants
          back on. Wow, ah Red, you look great. Everything looks great. 1:24, I
          still got time. Oh my god. No, no not again, c'mon, c'mon. Hey.
          Libyans. Doc. Hi, it's really a pleasure to meet you. Here you go,
          lady. There's a quarter. That was so stupid, Grandpa hit him with the
          car. Oh, hi , Marty. I didn't hear you come in. Fascinating device,
          this video unit. A colored mayor, that'll be the day. Mom, Dad.
        </p>
      </div>
    </div>
  );
}

export default About;
