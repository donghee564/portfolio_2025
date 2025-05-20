import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ScrollDownButton.module.css";

const ScrollDownButton = ({ delay = 0 }) => {
  const { scrollYProgress } = useScroll();

  // 스크롤에 따른 투명도 변환
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.01], // 스크롤 0% ~ 1% 구간
    [1, 0] // 투명도 100% ~ 0%
  );

  return (
    <motion.div
      className={styles.mouseContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ opacity }}
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
