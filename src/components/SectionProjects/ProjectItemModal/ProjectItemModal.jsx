import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProjectItemModal.module.css";

/**
 * 프로젝트 상세 모달 컴포넌트
 * - ReactDOM.createPortal을 사용하여 body의 최상위에 렌더링
 * - 이를 통해 z-index 충돌 문제를 해결하고 모달이 항상 최상위에 표시되도록 함
 * - framer-motion을 사용하여 모달이 열릴 때 애니메이션 효과 적용
 */
const ProjectItemModal = ({
  isOpen,
  onClose,
  ModalTitle,
  date,
  ModalImage,
  ModalDescription,
}) => {
  // 모달이 닫혀있으면 null 반환
  if (!isOpen) return null;

  // 모달이 열릴 때 포커스를 모달로 이동
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // 모달이 열릴 때 포커스를 모달로 이동
      const modalContent = document.querySelector(`.${styles.modalContent}`);
      if (modalContent) {
        modalContent.focus();
      }
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 키보드 이벤트 핸들러
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleKeyDown}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="모달 닫기"
        >
          <span className={styles.closeIcon}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </span>
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.modalHeader}>
            <p className={styles.modalDate}>{date}</p>
            <h2 className={styles.modalTitle} id="modal-title">
              {ModalTitle}
            </h2>
          </div>

          <div className={styles.modalImageWrap}>
            <ul className={styles.modalDescription}>
              {ModalDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <img
              className={styles.modalImage}
              src={ModalImage}
              alt={ModalTitle + " 스크린샷 이미지"}
            />
          </div>
        </motion.div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectItemModal;
