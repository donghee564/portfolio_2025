import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionProjects.module.css";
import ProjectItem from "./ProjectItem/ProjectItem";
import ProjectItemModal from "./ProjectItemModal/ProjectItemModal";
import { useState } from "react";

const SectionProjects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  const projects = [
    {
      id: 1,
      title: "하나Pay 앱,<br />하나카드 웹 운영",
      date: "2024.01",
      image: "/images/project_thumb_01.png",
      modalTitle: "하나Pay 앱, 하나카드 웹 운영 상세",
      modalImage: "/images/project_thumb_01.png",
      modalDescription: "하나Pay 앱, 하나카드 웹 운영 설명",
    },
    {
      id: 2,
      title: "하나Pay<br />재무상태진단표",
      date: "2024.01",
      image: "/images/project_thumb_02.png",
      modalTitle: "하나Pay 재무상태진단표",
      modalImage: "/images/project_detail_01.png",
      modalDescription:
        "- 퍼블리싱 100%<br />- 접근경로 : 하나Pay > 자산탭 > 재무상태진단표 보러가기<br />- Chart.js 를 활용하여 바 차트, 라인 차트, 도넛 차트 등 다양한 차트 구현<br />- 금액포멧 처리 및 차트 데이터 동적 변경 가능",
    },
    {
      id: 3,
      title: "하나Pay<br />트래블버킷 이벤트",
      date: "2024.02",
      image: "/images/project_thumb_03.png",
      modalTitle: "하나Pay 트래블버킷 이벤트 상세",
      modalImage: "/images/project_thumb_03.png",
      modalDescription: "하나Pay 트래블버킷 이벤트 설명",
    },
  ];

  return (
    <section
      id="projects"
      className={`section-container ${styles.sectionContainer}`}
      aria-labelledby="projects-title"
    >
      <div className="section-content-wrapper">
        <motion.p
          className="section-title-text"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "0%" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition }}
          id="projects-title"
        >
          최근 작업
        </motion.p>
        <motion.h1
          className={`section-title`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          RECENT
        </motion.h1>
        <motion.h1
          className={`section-title type-text-border`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          WORKS
        </motion.h1>
        <p className="visually-hidden">최근에 진행한 프로젝트 목록입니다.</p>
        <ul className={styles.projectList} aria-label="프로젝트 목록">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              image={project.image}
              alt={project.alt}
              date={project.date}
              title={project.title}
              modalTitle={project.modalTitle}
              modalImage={project.modalImage}
              modalDescription={project.modalDescription}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionProjects;
