import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h5 className={styles.title}>Hi, I’m <b>Salavala Rahul Raju</b></h5>
        <p className={styles.description}>
          I’m a <b>Full Stack Developer</b> with over 2 years of experience in building scalable web applications using <b>React (Next.js)</b>, <b>TypeScript</b>, <b>Node.js</b>, and <b>Spring Boot</b>. Skilled in <b>cloud-native solutions (AWS, Azure)</b>, <b>microservices</b>, and <b>real-time systems</b>.
        </p>
        <a href="mailto:rahul.salavala@workwebmail.com" className={styles.contactBtn}>
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