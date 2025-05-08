// src/components/Nav.jsx

import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/Nav.module.css";

/**
 * Nav
 * ---
 * Sticky navigation bar with smooth-scroll links to each page section.
 */
export default function Nav() {
  const links = [
    { id: "home", label: "Home" },
    { id: "research", label: "Research" },
    { id: "team", label: "Team" },
    { id: "facilities", label: "Facilities" }, // ← Added here
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className="container">
        <ul className={styles.navList}>
          {links.map((link) => (
            <li key={link.id} className={styles.navItem}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={styles.navLink}
                activeClass={styles.active}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
