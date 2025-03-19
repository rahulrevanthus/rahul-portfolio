import { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <span
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </span>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li className={styles.contactItem}>
            <a href="#contact">Contact</a>
          </li>
          <li><a href="#contact">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};