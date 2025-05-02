import React, { useState, useEffect } from "react";
import styles from "./ProjectItem.module.css";
import { motion } from "framer-motion";
import ProjectItemModal from "../ProjectItemModal/ProjectItemModal";

const ProjectItem = ({
  image,
  alt,
  date,
  title,
  modalTitle,
  modalImage,
  modalDescription,
  index,
}) => {
  // 모달의 열림/닫힘 상태를 관리하는 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * 모달이 열려있을 때 배경 스크롤을 방지하는 effect
   * - 모달이 열리면 body의 overflow를 hidden으로 설정
   * - 모달이 닫히면 body의 overflow를 auto로 복원
   * - 컴포넌트가 언마운트될 때도 overflow를 auto로 복원
   */
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // 프로젝트 아이템 클릭 시 모달을 여는 핸들러
  const handleClick = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 버튼 클릭 시 모달을 닫는 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.li
      className={styles.projectItem}
      // framer-motion 애니메이션 설정
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-15%" }}
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.45, delay: 0.2 }}
    >
      <a
        className={styles.projectItemLink}
        title={title + " 프로젝트 상세 보기"}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        rel="noopener noreferrer"
      >
        {/* 프로젝트 썸네일 이미지 */}
        <img className={styles.projectItemImage} src={image} alt={alt} />
        {/* 프로젝트 정보 (날짜, 제목) */}
        <div className={styles.projectItemTextWrap}>
          <p className={styles.projectItemDate}>{date}</p>
          <h3
            className={styles.projectItemTitle}
            dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br />") }}
          />
        </div>
      </a>
      {/* 프로젝트 상세 모달 */}
      <ProjectItemModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        ModalTitle={modalTitle}
        date={date}
        ModalImage={modalImage}
        ModalDescription={modalDescription}
      />
    </motion.li>
  );
};

export default ProjectItem;
