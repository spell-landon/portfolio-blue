import React from 'react';
import styles from './ProjectCard.module.css';
import { FiGithub } from 'react-icons/fi';
import { FiLink } from 'react-icons/fi';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ProjectCard({ project }) {
  let desktopImages = project.images.desktop;
  let mobileImages = project.images.mobile;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.line}></div>
      <section className={styles.title}>
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.siteLink}>
          {project.title}
        </a>

        <div className={styles.titleIcons}>
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.githubLink}>
            <FiLink className={styles.icon} />
          </a>
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.githubLink}>
            <FiGithub className={styles.icon} />
          </a>
        </div>
      </section>
      <section className={styles.content}>
        <p>{project.content}</p>
        <Carousel
          className={styles.carousel}
          showArrows={true}
          swipeable={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          labels={true}
          showThumbs={false}>
          {desktopImages &&
            desktopImages.map((image) => {
              return (
                <div>
                  <img src={image.image} alt={project.title} />
                  <p>{image.text}</p>
                </div>
              );
            })}
        </Carousel>
        <Carousel
          className={styles.carousel}
          showArrows={true}
          swipeable={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5500}
          labels={true}
          showThumbs={false}>
          {mobileImages &&
            mobileImages.map((image) => {
              return (
                <div style={{ width: 300, margin: '0 auto' }}>
                  <img src={image.image} alt={project.title} />
                  <p>{image.text}</p>
                </div>
              );
            })}
        </Carousel>
      </section>
    </div>
  );
}

export default ProjectCard;
