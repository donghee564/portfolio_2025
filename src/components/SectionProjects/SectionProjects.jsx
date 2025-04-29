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
      image: "/src/assets/images/dummy_project_01.png",
      alt: "하나카드 App 로고 이미지",
      date: "2023.03.31 ~ 2025.03.31",
      title: "하나카드 App,<br />PC 웹사이트 운영",
      modalTitle: "하나카드 App, PC 웹사이트 운영",
      modalImage: "/src/assets/images/dummy_project_01.png",
      modalDescription: "하나카드 App, PC 웹사이트 운영",
    },
    {
      id: 2,
      image: "/src/assets/images/project_thumb_02.png",
      alt: "하나Pay 스크린샷 이미지",
      date: "2025.01.01 ~ 2025.01.01",
      title: "하나Pay<br />재무상태진단표 구축",
      modalTitle: "하나Pay 재무상태진단표 구축",
      modalImage: "/src/assets/images/project_thumb_02.png",
      modalDescription: "하나Pay 재무상태진단표 구축",
    },
    {
      id: 3,
      image: "/src/assets/images/project_thumb_03.png",
      alt: "하나Pay 스크린샷 이미지",
      date: "2025.01.01 ~ 2025.01.01",
      title: "하나Pay<br />트래블버킷 이벤트 구축",
      modalTitle: "하나Pay 트래블버킷 이벤트 구축",
      modalImage: "/src/assets/images/project_thumb_03.png",
      modalDescription: "하나Pay 트래블버킷 이벤트 구축",
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
