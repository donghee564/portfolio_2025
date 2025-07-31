import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import styles from "./ScrollDownButton.module.css";

const ScrollDownButton = ({ delay = 0 }) => {
  const [diverAnimation, setDiverAnimation] = useState(null);
  const { scrollYProgress } = useScroll();

  // 스크롤에 따른 투명도 변환
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.01], // 스크롤 0% ~ 1% 구간
    [1, 0] // 투명도 100% ~ 0%
  );

  // JSON 파일 로드
  useEffect(() => {
    fetch("/diver_animation.json")
      .then((response) => response.json())
      .then((data) => setDiverAnimation(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <motion.div
      className={styles.mouseContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ opacity }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
    >
      <motion.div
        className={styles.lottieContainer}
        animate={{
          y: [0, 0, 25, 25, 0],
          rotate: [0, -90, -90, -90, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {diverAnimation && (
          <Lottie
            animationData={diverAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 80, height: 80 }}
          />
        )}
      </motion.div>
      <span className={styles.scrollText}>Scroll to dive in ~</span>
    </motion.div>
  );
};

export default ScrollDownButton;
