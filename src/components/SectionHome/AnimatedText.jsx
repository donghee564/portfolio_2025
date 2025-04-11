import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, blockDelay, isH1 = false }) => {
  // 텍스트 분할 애니메이션
  const createTextAnimation = (blockDelay, isH1) => ({
    initial: { y: "100%", opacity: 0 },
    animate: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        delay: blockDelay + i * (isH1 ? 0.06 : 0.015),
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  });

  // 텍스트 분할 함수
  const splitText = (text, blockDelay, isH1) => {
    const textAnimation = createTextAnimation(blockDelay, isH1);
    return text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={textAnimation}
        initial="initial"
        animate="animate"
        style={{ display: "inline-block" }}
        aria-hidden="true"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <>
      {splitText(text, blockDelay, isH1)}
      <span className="visually-hidden">{text}</span>
    </>
  );
};

export default AnimatedText;
