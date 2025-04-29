import React from "react";
import styles from "./ProjectItemModal.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectItemModal = ({
  isOpen,
  onClose,
  ModalTitle,
  date,
  ModalImage,
  ModalDescription,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <span className={styles.closeIcon}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </span>
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className={styles.modalDate}>{date}</p>
          <h2 className={styles.modalTitle}>{ModalTitle}</h2>
          <p className={styles.modalDescription}>{ModalDescription}</p>
          <div className={styles.modalImageWrap}>
            <img
              className={styles.modalImage}
              src={ModalImage}
              alt={ModalTitle}
            />
            <img
              className={styles.modalImage}
              src={ModalImage}
              alt={ModalTitle}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectItemModal;
