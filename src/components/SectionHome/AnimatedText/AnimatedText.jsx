import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LoadingContext } from "../../../contexts/LoadingContext";

const AnimatedText = ({ text, blockDelay, isH1 = false }) => {
  const { isLoading } = useContext(LoadingContext);

  // 텍스트 분할 애니메이션
  const createTextAnimation = (blockDelay, isH1) => ({
    initial: { y: "100%", opacity: 0 },
    animate: (i) => ({
      y: isLoading ? "100%" : "0%",
      opacity: isLoading ? 0 : 1,
      transition: {
        delay: isLoading ? 0 : blockDelay + i * (isH1 ? 0.15 : 0.08),
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  });

  // 텍스트를 단어 단위로 분할하는 함수
  const splitText = (text, blockDelay, isH1) => {
    const textAnimation = createTextAnimation(blockDelay, isH1);
    return text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        custom={i}
        initial={textAnimation.initial}
        animate={textAnimation.animate}
        style={{
          display: "inline-block",
          marginRight: "0.25em",
          transformOrigin: "bottom",
        }}
        aria-hidden="true"
      >
        {word}
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
