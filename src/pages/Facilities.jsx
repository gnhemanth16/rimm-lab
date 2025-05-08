// src/pages/Facilities.jsx

import React from "react";
import styles from "../styles/Facilities.module.css";
import { facilities } from "../assets/data/facilities";

/**
 * Facilities
 * ----------
 * Displays a responsive grid of lab facilities,
 * each with an image, name, and brief description.
 */
export default function Facilities() {
  return (
    <div className={styles.facilities}>
      <div className="container">
        {/* Section Heading */}
        <h2 className={styles.heading}>Our Facilities</h2>

        {/* Facilities Grid */}
        <div className={styles.grid}>
          {facilities.map((f) => (
            <div key={f.id} className={styles.card}>
              <img src={f.image} alt={f.name} className={styles.image} />
              <h3 className={styles.name}>{f.name}</h3>
              <p className={styles.description}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
