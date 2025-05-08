import React from "react";
import styles from "../styles/Footer.module.css";
import rimmLogo from "../assets/images/logos/rimm_logo.png";
import iiscFooter from "../assets/images/logos/iisc_footer.png"; // Import the image

/**
 * Footer
 * ------
 * Lab contact info, map link, and site credits with LinkedIn profiles.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Contact & Logo */}
      <div className={styles.info}>
        <img
          src={iiscFooter}
          alt="IISc Footer Logo"
          className={styles.iiscFooterLogo}
        />{" "}
      </div>

      {/* Credits */}
      <div className={styles.credits}>
        <p>© {currentYear} RIMM Lab. All rights reserved.</p>
        <p>
          Designer:{" "}
          <a
            href="https://www.linkedin.com/in/hemanth-g-n-8aa804237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hemanth G N
          </a>{" "}
          | Maintained by:{" "}
          <a
            href="https://www.linkedin.com/in/rajath-s-600a27ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rajath S
          </a>{" "}
          | Developer:{" "}
          <a
            href="https://www.linkedin.com/in/sankar4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sankar Balasubramanian
          </a>
        </p>
      </div>
    </footer>
  );
}
