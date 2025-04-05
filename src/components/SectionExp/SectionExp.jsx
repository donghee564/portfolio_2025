import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./SectionExp.module.css";
import ExpList from "../ExpList/ExpList";
import { useRef } from "react";

const SectionExp = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 스프링 효과를 적용한 스크롤 진행도
  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 스크롤 진행도에 따른 텍스트 애니메이션
  // const textOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);

  const titleMoveLeft = useTransform(
    springScrollProgress,
    [0.35, 0.65],
    ["0%", "-200%"]
  );

  const titleMoveRight = useTransform(
    springScrollProgress,
    [0.35, 0.65],
    ["0%", "250%"]
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  // 경력 리스트 배열
  const expItems = [
    {
      date: "2023.03 ~ 2025.03",
      title: "하나카드 UI/UX 개선 및 운영 팀",
      // text: "개선 및 운영 팀",
    },
    {
      date: "2022.08 ~ 2023.02",
      title: "삼성 컴플라이언스 통합 관리 시스템 개편 개발 프로젝트",
      // text: "통합 관리 시스템 개편 개발 프로젝트",
    },
    {
      date: "2022.01 ~ 2022.07",
      title: "미래에셋 주택도시기금 홈페이지 구축 프로젝트",
      // text: "홈페이지 구축 프로젝트",
    },
    {
      date: "2022.10 ~ 2021.12",
      title: "TRAVUT EM 구축 프로젝트",
      // text: "홈페이지 구축 프로젝트",
    },
    {
      date: "2021.06 ~ 2021.09",
      title: "삼성전자 컴플라이언스 Medallia CEM 프로젝트",
      // text: "Medallia CEM 프로젝트",
    },
  ];

  return (
    <section
      id="exp"
      ref={sectionRef}
      className={`section-container ${styles.sectionContainer}`}
      aria-labelledby="exp-title"
    >
      <div
        className={`section-content-wrapper ${styles.sectionContentWrapper}`}
      >
        <motion.p
          className="section-title-text"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "0%" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition }}
          id="exp-title"
          // style={{ opacity: textOpacity }}
        >
          업무 경력
        </motion.p>
        <motion.h1
          className={`section-title ${styles.sectionTitle}`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "0%" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition }}
          style={{ x: titleMoveLeft }}
        >
          JOB
        </motion.h1>
        <motion.h1
          className={`section-title type-text-border ${styles.sectionTitle}`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "0%" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition }}
          style={{ x: titleMoveRight }}
        >
          EXPRIENCE
        </motion.h1>
        <div className="section-content">
          <ExpList items={expItems} />
        </div>
      </div>
    </section>
  );
};

export default SectionExp;
