import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionHome.module.css";

const ScrollDownButton = ({ delay }) => {
  // 화살표 애니메이션
  const arrowAnimation = {
    initial: { y: 0 },
    animate: { y: 10 },
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <motion.div
      className={styles.scrollDown}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      role="navigation"
      aria-label="스크롤 다운 버튼"
    >
      <span className={styles.scrollText}>Scroll Down</span>
      <motion.div
        className={styles.arrow}
        variants={arrowAnimation}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        ↓
      </motion.div>
    </motion.div>
  );
};

export default ScrollDownButton;
