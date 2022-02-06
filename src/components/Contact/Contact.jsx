import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import styles from './Contact.module.css';
import { Element } from 'react-scroll';
// Icons
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import { SiApplemusic } from 'react-icons/si';

function Contact(props) {
  init('user_6FqX0M9JjoiaBRXBdMm6v');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ibv2jze',
        'template_en0ykqb',
        form.current,
        'user_6FqX0M9JjoiaBRXBdMm6v'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Element id='contact' name='contact'>
      <div className={styles.contactContainer}>
        <div className={styles.textSection}>
          <div className={styles.title}>
            <h2>
              Get In Touch<span>.</span>
            </h2>
            <div className={styles.line}></div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='user_name' required />
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='user_email' required />
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              id='phone'
              name='user_phone'
              // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              required
            />

            <label htmlFor='message'>Message</label>
            <textarea
              type='text'
              id='message'
              cols='10'
              rows='10'
              name='message'
              required
            />
            <button className={styles.submitBtn} type='submit'>
              Send Message
            </button>
          </form>
          <div className={styles.additionalLinks}>
            <h3>Or you can find me here</h3>
            <div className={styles.additionalIcons}>
              <a
                href='https://www.linkedin.com/in/landon-spell/'
                target='_blank'
                rel='noopener noreferrer'>
                <AiFillLinkedin className={styles.linkedinIcon} />
              </a>
              <a
                href='https://github.com/spell-landon'
                target='_blank'
                rel='noopener noreferrer'>
                <AiFillGithub className={styles.githubIcon} />
              </a>
              <a
                href='https://open.spotify.com/artist/5hkHxRCqlwm9L7e3SP58dg?si=FKLHpmfnQauzxOMZYznepw'
                target='_blank'
                rel='noopener noreferrer'>
                <FaSpotify className={styles.spotifyIcon} />
              </a>
              <a
                href='https://www.youtube.com/watch?v=tIBwHZBo1rg&list=OLAK5uy_lXH2RBt8g99iAulO2P8MpZttVhmW7ZPwA'
                target='_blank'
                rel='noopener noreferrer'>
                <SiYoutubemusic className={styles.youtubeIcon} />
              </a>
              <a
                href='https://music.apple.com/us/artist/landon-spell/1592835929'
                target='_blank'
                rel='noopener noreferrer'>
                <SiApplemusic className={styles.applemusicIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
