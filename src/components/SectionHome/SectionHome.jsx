import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionHome.module.css";

const SectionHome = () => {
  // 애니메이션 variants 정의
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  // 화살표 애니메이션 variants
  const arrowAnimation = {
    initial: { y: 0 },
    animate: { y: 10 },
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <section id="home" className="section-container">
      <div className="section-content-wrapper">
        <motion.p
          className="section-title-text"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          안녕하세요 퍼블리셔 한동희 입니다.
        </motion.p>
        <motion.h1
          className="section-title"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.5 }}
        >
          DONGHEE'<span className="appostrophe">S</span>
        </motion.h1>
        <motion.h1
          className="section-title type-text-border"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.8 }}
        >
          PORTFOLIO
        </motion.h1>
        <div className="section-content">
          <motion.p
            className="section-text"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 1.1 }}
          >
            웹 퍼블리셔로서 다양한 프로젝트를 수행하며 UI/UX 개선과 웹 접근성
            향상에 기여해왔습니다.
            <br />
            특히 금융권 프로젝트를 경험하면서 정보의 명확한 전달과 사용자
            편의성이 중요한 요소라는
            <br />
            점을 깊이 이해하게 되었습니다. ...............
          </motion.p>
        </div>
      </div>
      <motion.div
        className={styles.scrollDown}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "30%" }}
        variants={fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 1.4 }}
      >
        <span className={styles.scrollText}>Scroll Down</span>
        <motion.div
          className={styles.arrow}
          variants={arrowAnimation}
          initial="initial"
          animate="animate"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionHome;
