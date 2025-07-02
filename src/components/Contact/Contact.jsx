import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { FiClipboard } from 'react-icons/fi';

function Contact(props) {
  init('user_6FqX0M9JjoiaBRXBdMm6v');
  const form = useRef();
  const submitBtn = useRef();
  const [disable, setDisable] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  useEffect(() => {
    setMsgSent(false);
    setDisable(false);
  }, []);

  const ErrorToast = () => {
    const handleCopy = () => {
      navigator.clipboard.writeText('spell.landon@gmail.com');
      toast.success('Email copied to clipboard!', {
        containerId: 'copy-toast',
        autoClose: 3000,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Message failed to send.
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            onClick={handleCopy}
            role='button'
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && handleCopy()
            }
            aria-label='Copy email to clipboard'
            style={{
              fontWeight: 'bold',
              cursor: 'pointer',
              color: '#007bff',
              textDecoration: 'underline',
            }}>
            spell.landon@gmail.com
          </span>
          <button
            onClick={handleCopy}
            aria-label='Copy email address'
            style={{
              padding: '2px 6px',
              border: '1px solid #ccc',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.8rem',
            }}>
            <FiClipboard size={16} />
          </button>
        </div>
      </div>
    );
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setDisable(true);

    try {
      await emailjs.sendForm(
        'service_ibv2jze',
        'template_en0ykqb',
        form.current,
        'user_6FqX0M9JjoiaBRXBdMm6v'
      );
      setMsgSent(true);
      toast.success('Message sent successfully!', {
        containerId: 'main-toast',
      });
      form.current.reset();
    } catch (error) {
      setMsgSent(false);
      setDisable(false);
      console.error('EmailJS Error:', error);
      toast.error(<ErrorToast />, {
        containerId: 'main-toast',
        toastId: 'email-fail',
        autoClose: false,
        closeOnClick: false,
        draggable: true,
      });
    }
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
            <input type='tel' id='phone' name='user_phone' required />

            <label htmlFor='message'>Message</label>
            <textarea
              type='text'
              id='message'
              cols='10'
              rows='10'
              name='message'
              required
            />
            <button
              className={styles.submitBtn}
              type='submit'
              ref={submitBtn}
              disabled={disable}>
              <p id='btnText'>{!msgSent ? 'Send Message' : 'Message Sent!'}</p>
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
      <ToastContainer
        containerId='main-toast'
        position='bottom-right'
        autoClose={5000}
      />
      <ToastContainer
        containerId='copy-toast'
        position='bottom-center'
        autoClose={3000}
      />
    </Element>
  );
}

export default Contact;
