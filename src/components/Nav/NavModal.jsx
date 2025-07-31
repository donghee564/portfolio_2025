import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Nav.module.css";

const NavModal = ({ isOpen, onClose, activeSection, scrollToSection }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2>MENU</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="메뉴 닫기"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <ul className={styles.modalMenu}>
          <li>
            <a
              href="#home"
              className={`${styles.modalMenuItem} ${
                activeSection === "home" ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${styles.modalMenuItem} ${
                activeSection === "projects" ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              RECENT
            </a>
          </li>
          <li>
            <a
              href="#exp"
              className={`${styles.modalMenuItem} ${
                activeSection === "exp" ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("exp");
              }}
            >
              EXP
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`${styles.modalMenuItem} ${
                activeSection === "skills" ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${styles.modalMenuItem} ${
                activeSection === "contact" ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default NavModal;
