import React, { useState, useEffect } from "react";
import styles from "../styles/ScrollButtons.module.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ScrollButtons() {
  const [visible, setVisible] = useState(false);

  // Show “go-to-top” only after you’ve scrolled down
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className={styles.wrapper}>
      {visible && (
        <button onClick={scrollToTop} className={styles.button}>
          <FaArrowUp />
        </button>
      )}
      <button onClick={scrollToBottom} className={styles.button}>
        <FaArrowDown />
      </button>
    </div>
  );
}
