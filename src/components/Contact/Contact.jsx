import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let's Connect!</h2>
        <p>Reach out for opportunities or collaboration!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rahul.salavala@workwebmail.com">rahul.salavala@workwebmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/phoneIcon.png")} alt="Phone icon" />
          <a href="tel:+18166453316">(816) 645-3316</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/rahul-raju-salavala-3b2896210/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/githubIcon.png")} alt="Github icon" />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("My GitHub doesn’t feature personal projects yet, as my experience is primarily with company work.");
            }}
          >
            GitHub Profile
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/downloadIcon.png")} alt="Download icon" />
          <a href="/resume.pdf" download="Salavala_Rahul_Raju_Resume.pdf" className={styles.downloadBtn}>
            Download Resume
          </a>
        </li>
      </ul>
    </footer>
  );
};