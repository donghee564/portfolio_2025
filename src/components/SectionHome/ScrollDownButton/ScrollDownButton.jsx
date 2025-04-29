import React from "react";
import { motion } from "framer-motion";
import styles from "./ScrollDownButton.module.css";

const ScrollDownButton = ({ delay = 0 }) => {
  return (
    <motion.div
      className={styles.mouseContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      }}
    >
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
    </motion.div>
  );
};

export default ScrollDownButton;
