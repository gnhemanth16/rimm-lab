// src/pages/Publications.jsx

import React from "react";
import styles from "../styles/Publications.module.css";
import { publications } from "../assets/data/publications";

/**
 * Publications
 * ------------
 * Lists all lab publications in IEEE format.
 * Assumes `publications` is an array of objects with:
 *  - id: unique identifier
 *  - citation: full IEEE‐style citation string
 */
export default function Publications() {
  return (
    <div className={styles.publications}>
      <div className="container">
        {/* Section Heading */}
        <h2 className={styles.heading}>Publications</h2>

        {/* Ordered list of citations */}
        <ol className={styles.list}>
          {publications.map((pub) => (
            <li key={pub.id} className={styles.item}>
              {pub.citation}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
