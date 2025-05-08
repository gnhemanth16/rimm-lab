// src/pages/Research.jsx

import React from "react";
import styles from "../styles/Research.module.css";
import { projects } from "../assets/data/research";

/**
 * Research
 * --------
 * Displays a grid of research project cards. Each card shows
 * the project title and a brief description.
 */
export default function Research() {
  return (
    <div className={styles.research}>
      <div className="container">
        {/* Section Heading */}
        <h2 className={styles.heading}>Our Research Projects</h2>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((proj) => (
            <div key={proj.id} className={styles.card}>
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.description}>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
