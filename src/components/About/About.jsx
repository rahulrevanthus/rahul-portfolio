import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("About/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3><b>Full Stack Developer</b></h3>
              <p>
                I build <b>scalable, high-performance web applications</b> with <b>React (Next.js)</b>, <b>TypeScript</b>, and <b>Node.js</b>, specializing in <b>real-time data processing</b> and <b>microservices</b>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend & Cloud Engineer</h3>
              <p>
                Expert in <b>GraphQL/REST APIs</b>, <b>Spring Boot</b>, and <b>event-driven systems</b> with <b>Kafka</b> and <b>RabbitMQ</b>. I deploy on <b>AWS (Fargate, Lambda)</b> and <b>Azure (AKS)</b>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DevOps & Collaboration</h3>
              <p>
                I streamline <b>CI/CD pipelines</b> with <b>Docker</b>, <b>Kubernetes</b>, and <b>GitHub Actions</b>, thriving in <b>Agile teams</b> to deliver optimized solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};