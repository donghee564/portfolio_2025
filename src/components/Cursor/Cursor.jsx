import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import styles from "./Cursor.module.css";

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  const velocity = useRef({ x: 0, y: 0 });

  // 스프링 애니메이션 설정
  const springConfig = { damping: 20, stiffness: 300, mass: 0.2 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);
  const rotate = useSpring(0, springConfig);
  const scaleX = useSpring(1, springConfig);
  const scaleY = useSpring(1, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      // 속도 계산
      velocity.current = {
        x: e.clientX - mousePosition.current.x,
        y: e.clientY - mousePosition.current.y,
      };

      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      // 속도에 따른 스케일 계산
      const speed = Math.abs(velocity.current.x);
      const newScaleX = 1 + speed * 0.05;
      const newScaleY = 1 - speed * 0.05;

      scaleX.set(newScaleX);
      scaleY.set(newScaleY);
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

      cursorPosition.current.x += dx * 0.1;
      cursorPosition.current.y += dy * 0.1;

      x.set(cursorPosition.current.x - 10);
      y.set(cursorPosition.current.y - 10);

      // 클릭 시 스케일 조정
      scale.set(isClicked ? 0.8 : isHovered ? 1.5 : 1);

      // 속도에 따른 회전 각도 계산
      const rotation = velocity.current.x * 0.2;
      rotate.set(rotation);

      animationFrameId.current = requestAnimationFrame(animate);
    };

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

    return () => {
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
    };
  }, [isClicked, isHovered]);

  return (
    <motion.div
      className={`${styles.cursor} ${isHovered ? styles.hovered : ""}`}
      style={{
        display: isVisible ? "block" : "none",
        x,
        y,
        scale,
        scaleX,
        scaleY,
        rotate,
      }}
    />
  );
};

export default Cursor;
