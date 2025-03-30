import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Cursor.module.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseOverLink = () => setIsHovered(true);
    const handleMouseOutLink = () => setIsHovered(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    // 모든 링크와 버튼에 hover 이벤트 추가
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOverLink);
      el.addEventListener("mouseleave", handleMouseOutLink);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);

      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOverLink);
        el.removeEventListener("mouseleave", handleMouseOutLink);
      });
    };
  }, []);

  return (
    <motion.div
      className={`${styles.cursor} ${isHovered ? styles.hovered : ""}`}
      style={{ display: isVisible ? "block" : "none" }}
      animate={{
        x: mousePosition.x - 15, // 위치 보정 (커서 크기의 절반)
        y: mousePosition.y - 15,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    />
  );
};

export default Cursor;
