import React, { useEffect, useState } from "react";
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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

  // 이미지 로딩 핸들러
  const handleImageLoad = () => {
    // 테스트를 위해 2초 지연 추가
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 0);
  };

  if (!isOpen) return null;

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
            <motion.ul
              className={styles.modalDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {ModalDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </motion.ul>
            <motion.div
              className={styles.modalImageContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {!isImageLoaded && (
                <div className={styles.imageLoading}>
                  <div className={styles.imageLoadingText}>
                    <div className={styles.loadingSpinner}></div>
                    <span>이미지 로딩중</span>
                  </div>
                </div>
              )}
              <img
                className={`${styles.modalImage} ${
                  !isImageLoaded ? styles.hidden : ""
                }`}
                src={ModalImage}
                alt={ModalTitle + " 스크린샷 이미지"}
                onLoad={handleImageLoad}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectItemModal;
