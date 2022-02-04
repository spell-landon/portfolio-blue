import React from 'react';
import styles from './ToTopButton.module.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

function ToTopButton(props) {
  return (
    <div>
      <Link
        activeClass='hero'
        className='hero'
        to='hero'
        spy={true}
        smooth={true}
        duration={600}>
        <button className={styles.toTopBtn}>
          <BsFillArrowUpCircleFill />
        </button>
      </Link>
    </div>
  );
}

export default ToTopButton;
