import React from "react";
import { motion } from "framer-motion";
import styles from "./Loading.module.css";

const Loading = ({ progress }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <h1 className={styles.loadingTitle}>Loading...</h1>
        <motion.div
          className={styles.loadingBar}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
        <span className={styles.loadingText}>{progress}%</span>
      </div>
    </div>
  );
};

export default Loading;
