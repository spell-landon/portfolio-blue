import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import styles from './Contact.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

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
    <>
      <div className={styles.background}></div>
      <div className={styles.contactContainer}>
        <div className={styles.textSection}>
          <div className={styles.title}>
            <h2>
              GET IN TOUCH<span>.</span>
            </h2>
            <div className={styles.line}></div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='user_name' required />
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='user_email' required />
            <label htmlFor='phone'>
              Phone
            </label>
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
                <AiFillLinkedin />
              </a>
              <a
                href='https://github.com/spell-landon'
                target='_blank'
                rel='noopener noreferrer'>
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
