import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.contactItem}>
            <a href="#contact">Contact</a>
            <img
              src={getImageUrl("nav/menuIcon.png")}
              alt="Contact Icon"
              className={styles.contactWidget}
            />
          </li>
<<<<<<< HEAD
          <li>
            <a href="#contact">Resume</a> {/* Changed to redirect to Contact */}
          </li>
        </ul>
=======

>>>>>>> ce0c1a45749f170a4d5187d4e0b88f2c56cc19cf
      </div>
    </nav>
  );
};
