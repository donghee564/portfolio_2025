import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionProjects.module.css";
import ProjectItem from "./ProjectItem";

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
      alt: "하나카드 App 스크린샷 이미지",
      date: "2025.01.01 ~ 2025.01.01",
      title: "하나카드 App<br />운영",
    },
    {
      id: 2,
      image: "/src/assets/images/dummy_project_01.png",
      alt: "하나카드 App 스크린샷 이미지",
      date: "2025.01.01 ~ 2025.01.01",
      title: "하나카드 App<br />운영",
    },
    {
      id: 3,
      image: "/src/assets/images/dummy_project_01.png",
      alt: "하나카드 App 스크린샷 이미지",
      date: "2025.01.01 ~ 2025.01.01",
      title: "하나카드 App<br />운영",
    },
    {
      id: 4,
      image: "/src/assets/images/dummy_project_01.png",
      alt: "하나카드 App 스크린샷 이미지",
      date: "2025.01.01 ~ 2025.01.01",
      title: "하나카드 App<br />운영",
    },
    {
      id: 5,
      image: "/src/assets/images/dummy_project_01.png",
      alt: "하나카드 App 스크린샷 이미지",
      date: "2025.01.01 ~ 2025.01.01",
      title: "하나카드 App<br />운영",
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
          PROJECTS
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
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionProjects;
