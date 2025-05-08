// src/components/Header.jsx

import React from "react";
import styles from "../styles/Header.module.css";
import rimmLogo from "../assets/images/logos/rimm_logo.png";
import iiscLogo from "../assets/images/logos/iisc_logo.png";
import ddmLogo from "../assets/images/logos/ddm_logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        {/* Inner flex row for logos */}
        <div className={styles.logoRow}>
          <img src={rimmLogo} alt="RIMM Lab Logo" className={styles.logo} />
          <img src={iiscLogo} alt="IISc Logo" className={styles.logo} />
          <img src={ddmLogo} alt="DDM Logo" className={styles.logo} />
        </div>
      </div>
    </header>
  );
}
