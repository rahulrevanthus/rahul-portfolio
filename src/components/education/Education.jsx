import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {education.map((eduItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <a
                  href={eduItem.website} // Add university website URL here
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Security best practice for external links
                >
                  <img
                    src={getImageUrl(eduItem.imageSrc)}
                    alt={`${eduItem.university} Logo`}
                    className={styles.eduLogo}
                  />
                </a>
                <div className={styles.historyItemDetails}>
                  <h3>{`${eduItem.degree}`}</h3>
                  <p className={styles.university}>{`${eduItem.university}`}</p>
                  <p className={styles.duration}>{`${eduItem.startDate} - ${eduItem.endDate}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};