// src/pages/Contact.jsx

import React from "react";
import styles from "../styles/Contact.module.css";

/**
 * Contact
 * -------
 * Displays lab contact information and an embedded Google Map.
 */
export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className="container">
        {/* Section Heading */}
        <h2 className={styles.heading}>Contact Us</h2>

        {/* Contact Details */}
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <h3 className={styles.label}>Address</h3>
            <p className={styles.text}>
              Department of Design and Manufacturing
              <br />
              Indian Institute of Science, Bangalore – 560012
              <br />
              Karnataka, India
            </p>
          </div>

          <div className={styles.detailItem}>
            <h3 className={styles.label}>Email</h3>
            <p className={styles.text}>
              <a href="mailto:rimm@iisc.ac.in">rimm-lab@iisc.ac.in</a>
            </p>
          </div>

          <div className={styles.detailItem}>
            <h3 className={styles.label}>Phone</h3>
            <p className={styles.text}>
              <a href="tel:+9180229332358">+91-80-2293-32358</a>
            </p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className={styles.mapContainer}>
          <iframe
            title="IISc Bangalore Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.046599420594!2d77.5660082!3d13.0152392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d38c0e294d%3A0x1adc73f47b7773c0!2sDepartment%20of%20Design%20and%20Manufacturing%20(DM)!5e0!3m2!1sen!2sin!4v1715167293433!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
