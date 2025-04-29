import React, { useEffect } from "react";
import styles from "./Loading.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingContext } from "../../App";

const Loading = ({ progress }) => {
  const { setIsLoading } = React.useContext(LoadingContext);

  useEffect(() => {
    if (progress === 100) {
      // 로딩이 완료되면 0.5초 후에 로딩 상태를 false로 변경
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, setIsLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.loadingContainer}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.loadingContent}>
          <motion.h1
            className={styles.loadingTitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            포트폴리오 로딩 중
          </motion.h1>
          <div className={styles.loadingBar}>
            <motion.div
              className={styles.loadingProgress}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            className={styles.loadingText}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {progress}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
