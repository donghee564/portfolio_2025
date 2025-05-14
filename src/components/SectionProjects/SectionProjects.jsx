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
      title: "하나Pay<br />재무상태진단표",
      date: "2025.02",
      image: "/images/project_thumb_01.png",
      modalTitle: "하나Pay 재무상태진단표",
      modalImage: "/images/project_detail_01.png",
      modalDescription: [
        "퍼블리싱 100%",
        "접근경로 : 하나Pay > 자산탭 > 재무상태진단표 보러가기",
        "echarts.js 를 활용하여 바 차트, 라인 차트, 도넛 차트 등 다양한 차트 구현",
        "차트 디자인 커스타미징 및 데이터 동적 변경 가능",
        "formatter를 이용한 분기별 라벨 표시 및 차트 데이터 표시 구현",
        "CASE별 금액 포맷 처리 구현",
      ],
    },
    {
      id: 2,
      title: "하나Pay<br />메인, 혜택탭 개선",
      date: "2024.03",
      image: "/images/project_thumb_02.png",
      modalTitle: "하나Pay 메인, 혜택탭 개선",
      modalImage: "/images/project_detail_02.png",
      modalDescription: [
        "퍼블리싱 100%",
        "접근경로 : 하나Pay > 마이탭, 혜택탭",
        "마이, 혜택 탭 로그인 및 비로그인 페이지 구축",
        "적용된 기능 및 모션 : 랜딩 및 스크롤시 숫자 슬롯 애니메이션 적용, 스크롤 페이드 인 애니메이션, 스크롤 이동 네비게이션 메뉴, 월 받은 실적 혜택 조회 차트 금액 말풍선 구현, 쿠팡 쇼핑 라이브 타이머 및 방송 시 남은 방송시간 게이지 구현",
      ],
    },
    {
      id: 3,
      title: "하나Pay<br />마이데이터 개선 및 운영",
      date: "2023.03 ~ 2025.03",
      image: "/images/project_thumb_03.png",
      modalTitle: "하나Pay 마이데이터 개선 및 운영",
      modalImage: "/images/project_detail_03.png",
      modalDescription: [
        "퍼블리싱 100%",
        "자산관리 레벨 테스트 CASE 별 화면 구축",
        "내 신용정보 관리 페이지 개선",
        "보험 건강관리 페이지 개선",
        "그 외 전반적인 마이데이터 페이지 운영",
      ],
    },
    {
      id: 4,
      title: "하나Pay<br />트래블버킷 이벤트",
      date: "2024.06",
      image: "/images/project_thumb_04.png",
      modalTitle: "하나Pay 트래블버킷 이벤트",
      modalImage: "/images/project_detail_04.png",
      modalDescription: [
        "퍼블리싱 100%",
        "트래블버킷 이벤트 마스터 페이지 구축",
        "모바일을 고려하여 touch 이벤트로 스크롤 애니메이션 구현",
        "페이지 진입시 인트로 페이지 등장후 터치스크롤시 아래에서 위로 텍스트 및 요소들이 등장",
        "인트로 페이지 스크롤이 끝나면 레이어 사라지고 컨텐츠 등장",
        "3d 이미지들은 Lottie 플러그인을 활용하여 등장시 애니메이션이 시작되도록 구현",
        "100% 자바스크립트로 구현된 페이지",
      ],
    },
    {
      id: 5,
      title: "하나Pay<br />이벤트",
      date: "2023.03 ~ 2025.03",
      image: "/images/project_thumb_05.png",
      modalTitle: "하나Pay 이벤트",
      modalImage: "/images/project_detail_05.png",
      modalDescription: [
        "퍼블리싱 100%",
        "스탬프 이벤트 : 카운트 및 스탬프 조회 이벤트 페이지 모션 및 인터렉션 구현",
        "미션 이벤트 : 조건에 따라 미션 버튼이 활성화되고 버튼 클릭 시 길을따라 이동하는 모션 등 다양한 동적 인터렉션 구현",
        "만들기 시리즈 : 버튼 클릭 시 토핑을 넣어 완성하는 모션 및 인터렉션 구현",
        "그 외 매스 이벤트 및 사용자 참여형 이벤트 다수 구축",
      ],
    },
    {
      id: 6,
      title: "하나Pay<br />챗봇",
      date: "2023.03 ~ 2025.03 ",
      image: "/images/project_thumb_06.png",
      modalTitle: "하나Pay 챗봇",
      modalImage: "/images/project_detail_06.png",
      modalDescription: [
        "챗봇 퍼블리싱 100% 담당",
        "접근경로 : 하나Pay > 전체 탭 > 챗봇",
        "Coginsight 플랫폼 사용",
        "CASE별 챗봇 응답 화면 퍼블리싱",
      ],
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
