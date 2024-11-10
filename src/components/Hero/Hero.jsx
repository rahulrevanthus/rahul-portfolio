//import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h5 className={styles.title}>Hi, I am <b>SALAVALA RAHUL RAJU</b></h5>
        <p className={styles.description}>
          I am a <b>Frontend developer </b> with 2 years of experience using React and
          NodeJS.
        </p>
        <a href="mailto:rahulrevanthus@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("Hero/heroImage.png.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};