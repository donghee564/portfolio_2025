import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./BackgroundElements.module.css";

const BackgroundElements = () => {
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // 스크롤 애니메이션 설정
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [0, 600], // 스크롤 범위
    [1, 0] // 투명도 범위
  );
  // const y = useTransform(
  //   scrollY,
  //   [0, 600], // 스크롤 범위
  //   [0, 100] // 이동 거리
  // );

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // 마우스 위치를 -1에서 1 사이의 값으로 정규화
      mousePosition.current = {
        x: (clientX / innerWidth) * 2 - 1,
        y: (clientY / innerHeight) * 2 - 1,
      };

      // 그라데이션 위치 업데이트
      if (containerRef.current) {
        const { x, y } = mousePosition.current;
        containerRef.current.style.setProperty("--mouse-x", `${x * 50}%`);
        containerRef.current.style.setProperty("--mouse-y", `${y * 50}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={styles.backgroundContainer}
      style={{
        opacity,
        // y,
      }}
    >
      <div className={styles.gradientBackground} />
    </motion.div>
  );
};

export default BackgroundElements;
