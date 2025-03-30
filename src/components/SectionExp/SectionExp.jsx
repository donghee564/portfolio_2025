import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionExp.module.css";

const SectionExp = () => {
  // 애니메이션 variants 정의
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  return (
    <section
      id="exp"
      className={`section-container ${styles.sectionContainer}`}
    >
      <div className="section-content-wrapper">
        <motion.p
          className="section-title-text"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          업무 경력
        </motion.p>
        <motion.h1
          className={`section-title ${styles.sectionTitle}`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          JOB
          <br />
          <span className="type-text-border">EXPRIENCE</span>
        </motion.h1>
        <div className="section-content">
          <ul className="exp-list">
            <motion.li
              className="exp-item"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 1.0 }}
            >
              <p className="exp-date">2025.01.01 ~ 2025.01.01</p>
              <p className="exp-title">하나카드 UI/UX 개선</p>
            </motion.li>
            <motion.li
              className="exp-item"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 1.2 }}
            >
              <p className="exp-date">2025.01.01 ~ 2025.01.01</p>
              <p className="exp-title">하나카드 UI/UX 개선</p>
            </motion.li>
            <motion.li
              className="exp-item"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 1.4 }}
            >
              <p className="exp-date">2025.01.01 ~ 2025.01.01</p>
              <p className="exp-title">하나카드 UI/UX 개선</p>
            </motion.li>
            <motion.li
              className="exp-item"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 1.6 }}
            >
              <p className="exp-date">2025.01.01 ~ 2025.01.01</p>
              <p className="exp-title">하나카드 UI/UX 개선</p>
            </motion.li>
            <motion.li
              className="exp-item"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 1.8 }}
            >
              <p className="exp-date">2025.01.01 ~ 2025.01.01</p>
              <p className="exp-title">하나카드 UI/UX 개선</p>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionExp;
