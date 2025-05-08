// src/pages/Team.jsx

import React from "react";
import styles from "../styles/Team.module.css";
import { pi, students } from "../assets/data/team";

/**
 * Team
 * ----
 * Displays the principal investigator profile followed by
 * a grid of doctoral student cards.
 */
export default function Team() {
  return (
    <div className={styles.team}>
      <div className="container">
        {/* Section Heading */}
        <h2 className={styles.heading}>Our Team</h2>

        {/* PI Profile */}
        <div className={styles.piSection}>
          <img
            src={pi.photo}
            alt={`${pi.name} Photo`}
            className={styles.piImage}
          />
          <div className={styles.piDetails}>
            <h3 className={styles.piName}>{pi.name}</h3>
            <p className={styles.piDesignation}>{pi.designation}</p>
            <p className={styles.piInterests}>
              <strong>Areas of Interest:</strong> {pi.interests.join(", ")}
            </p>
            <ul className={styles.piContactList}>
              <li className={styles.piContactItem}>
                Email: <a href={`mailto:${pi.email}`}>{pi.email}</a>
              </li>
              <li className={styles.piContactItem}>
                Phone: <a href={`tel:${pi.phone}`}>{pi.phone}</a>
              </li>
              <li className={styles.piContactItem}>Address: {pi.address}</li>
              <li className={styles.piContactItem}>
                LinkedIn:{" "}
                <a href={pi.linkedin} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Doctoral Students Grid */}
        <div className={styles.studentGrid}>
          {students.map((stu) => (
            <div key={stu.id} className={styles.studentCard}>
              <img
                src={stu.photo}
                alt={`${stu.name} Photo`}
                className={styles.studentPhoto}
              />
              <h4 className={styles.studentName}>{stu.name}</h4>
              <p className={styles.studentThesis}>{stu.thesisTitle}</p>
              <p className={styles.studentDuration}>{stu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
