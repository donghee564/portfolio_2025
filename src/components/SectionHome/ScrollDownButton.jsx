import React from "react";
import { motion } from "framer-motion";
import styles from "./ScrollDownButton.module.css";

const ScrollDownButton = () => {
  return (
    <div className={styles.mouseContainer}>
      <div className={styles.mouseOutline}>
        <motion.div
          className={styles.mouseDot}
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.2, 1],
            x: "-50%",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <span className={styles.scrollText}>Scroll Down</span>
    </div>
  );
};

export default ScrollDownButton;
