import React from "react";
import styles from "./ProjectItemModal.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectItemModal = ({ isOpen, onClose, title, date }) => {
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
          <h2 className={styles.modalTitle}>{title}</h2>
          <p className={styles.modalDate}>{date}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectItemModal;
