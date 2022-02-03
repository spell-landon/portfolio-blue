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
          rel='noopener noreferrer'></a>
        <p>
          Hello, my name is Landon and I am a full stack software engineer. I am
          a recent graduate of the Software Engineering Program at General
          Assembly where I focused on different languages and frameworks. Prior
          to the program, I was an Estimator and Project Manager for Rainbow
          International, which taught me not only how to present myself
          professionally, communicate and articulate difficult concepts, being
          able to work with a team, and adapt to new methods and
          implementations, but also how to think outside the box when a
          difficult problem arose. I now strive to apply that same level of
          optimism, gumption and dedication towards a Software Development role.
          My motto is “We'll figure it out”, because if there's a problem that
          needs solving, an impossible deadline, or something new that needs to
          be implemented, we can, and will, figure it out and get the job done!
        </p>
        <p>
          Languages & Frameworks: HTML | CSS3 | JavaScript | React | Node |
          Express | AJAX | Python Management & Deployment: Git/Github | Terminal
          | Heroku Databases: SQL | PostgreSQL | MongoDB | API's
        </p>
      </div>
    </div>
  );
}

export default About;
