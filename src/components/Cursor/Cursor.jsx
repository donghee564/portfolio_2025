import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import styles from "./Cursor.module.css";

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  // 스프링 애니메이션 설정
  const springConfig = { damping: 10, stiffness: 500, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  useEffect(() => {
    // 모바일 여부 체크
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 초기 체크
    checkMobile();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseOverLink = () => setIsHovered(true);
    const handleMouseOutLink = () => setIsHovered(false);

    const animate = () => {
      const dx = mousePosition.current.x - cursorPosition.current.x;
      const dy = mousePosition.current.y - cursorPosition.current.y;

      cursorPosition.current.x += dx * 0.3;
      cursorPosition.current.y += dy * 0.3;

      x.set(cursorPosition.current.x - 20);
      y.set(cursorPosition.current.y - 20);

      // 클릭 시 스케일 조정
      scale.set(isClicked ? 0.8 : 1);

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // 모바일이 아닐 때만 이벤트 리스너 추가
    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mouseenter", handleMouseEnter);
      window.addEventListener("mouseleave", handleMouseLeave);

      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", handleMouseOverLink);
        el.addEventListener("mouseleave", handleMouseOutLink);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);

      if (!isMobile) {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mouseenter", handleMouseEnter);
        window.removeEventListener("mouseleave", handleMouseLeave);

        document.querySelectorAll("a, button").forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseOverLink);
          el.removeEventListener("mouseleave", handleMouseOutLink);
        });

        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      }
    };
  }, [isClicked, isHovered, isMobile]);

  // 모바일에서는 커서를 렌더링하지 않음
  if (isMobile) return null;

  return (
    <motion.div
      className={`${styles.cursor} ${isHovered ? styles.hovered : ""}`}
      style={{
        display: isVisible ? "flex" : "none",
        x,
        y,
        scale,
      }}
    >
      <span className={styles.clickText}>Click!!</span>
    </motion.div>
  );
};

export default Cursor;
