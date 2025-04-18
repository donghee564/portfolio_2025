import React from "react";
import { motion } from "framer-motion";
import styles from "./ExpItem.module.css";

const ExpItem = ({ date, title, text, delay, isFirst, isLast, isOdd }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
    },
  };

  return (
    <motion.li
      className={`${styles.expItem} ${isFirst ? styles.firstItem : ""} ${
        isLast ? styles.lastItem : ""
      } ${isOdd ? styles.oddItem : ""}`}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      transition={{ ...fadeInUp.transition, delay }}
      role="listitem"
      aria-label={`경력: ${title}`}
    >
      <div className={styles.expItemContent}>
        <div className={styles.expItemContentInner}>
          <time className={styles.expDate}>{date}</time>
          <p className={styles.expTitle} role="heading" aria-level="3">
            {title}
          </p>
          {/* <p className={styles.expText}>{text}</p> */}
        </div>
      </div>
    </motion.li>
  );
};

export default ExpItem;
