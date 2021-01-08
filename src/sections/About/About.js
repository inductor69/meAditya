import styles from './About.module.css';
import { Fade } from 'react-reveal';
import { revealProps, likes, dislikes } from '../../shared/constants';
import { FormattedMessage } from 'text-provider';
import Lottie from 'lottie-react';
import codeAnimation from './code-animation.json';

const lottieProps = {
  loop: true,
  autoplay: true,
  animationData: codeAnimation
};

export default function About() {
  return (
    <section className={`${styles.section} container-fluid`} id="about" data-testid="About-container">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6">
          <div className={styles.headerGroup}>
            <Fade {...revealProps}>
              <h2 className={styles.header}>
                <span className={styles.headerNum}>01. </span> 
                <FormattedMessage id="ABOUT_HEADING" />
                </h2>
            </Fade>
          </div>
          <div className={styles.content}>
            <Fade {...revealProps} cascade>
              <p className={styles.description}>
                <FormattedMessage
                  id="ABOUT_DESCRIPTION"
                  values={{
                    schoolClass: styles.link,
                    intuitClass: styles.link,
                    openTableClass: styles.link
                  }}
                />
              </p>
            </Fade>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className={styles.imageContainer}>
          <img className={styles.hero} src="/imgs/title/apple.png" alt="Aditya K." />
          </div>
        </div>
      </div>
    </section>
  );
}