import { motion } from "framer-motion";
import styles from "./DroppingText.module.css";

function DroppingText({ text, startDelay }) {
  return (
    <div
      className={styles.dropping_text_container}
      role="text"
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <motion.div
          key={index}
          tabIndex={0}
          initial={{
            y: -20,
            opacity: 0,
            x: 0, // 초기 x 위치 명시
          }}
          animate={{
            y: 0,
            opacity: 1,
            x: 0, // 애니메이션 종료 시 x 위치 명시
          }}
          transition={{
            duration: 1,
            delay: Math.random() * 0.5 + startDelay,
            type: "spring",
            damping: 8,
            stiffness: 150,
            bounce: 5,
            mass: 1,
          }}
          className={styles.dropping_text_char}
          aria-label={char === " " ? "공백" : char}
        >
          {char === " " ? "\u00A0" : char}
        </motion.div>
      ))}
    </div>
  );
}

export default DroppingText;
