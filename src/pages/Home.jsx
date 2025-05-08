// src/pages/Home.jsx

import React from "react";
import styles from "../styles/Home.module.css";

// Section components
import Research from "./Research";
import Team from "./Team";
import Facilities from "./Facilities";
import Publications from "./Publications";
import Contact from "./Contact";

/**
 * Home
 * ----
 * One‐page layout:
 *  • Hero with translated facade background
 *  • Stats counters
 *  • Vision & Mission blocks
 *  • Research → Team → Facilities → Publications → Contact
 */
export default function Home() {
  // Replace with real data or props as needed
  const publicationsCount = 120;
  const projectsCount = 15;
  const collaborationsCount = 10;

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.title}>
            Research in Materials and Manufacturing Lab
          </h1>
          <p className={styles.tagline}>
            Shaping tomorrow’s materials and manufacturing. <br></br>Our lab pushes the
            boundaries of innovation to create a better future.
          </p>
        </div>
      </div>

      {/* Stats & Vision/Mission */}
      <div className="container">
        {/* Vision & Mission */}
        <div className={styles.visionMission}>
          <div className={styles.vision}>
            <h2 className={styles.sectionHeading}>Vision</h2>
            <p className={styles.sectionText}>
              Our vision is to drive cutting‐edge research in materials and
              manufacturing that transforms industries and improves quality of
              life.
            </p>
          </div>
          <div className={styles.mission}>
            <h2 className={styles.sectionHeading}>Mission</h2>
            <p className={styles.sectionText}>
              Our mission is to foster interdisciplinary collaboration, develop
              innovative processes, and educate the next generation of leaders
              in materials science and manufacturing.
            </p>
          </div>
        </div>

        {/* Stats Counters */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{publicationsCount}</span>
            <span className={styles.statLabel}>Publications</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{projectsCount}</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{collaborationsCount}</span>
            <span className={styles.statLabel}>Collaborations</span>
          </div>
        </div>
      </div>

      {/* Subsequent Sections */}
      <section id="research">
        <Research />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="facilities">
        <Facilities />
      </section>

      <section id="publications">
        <Publications />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
