import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./SectionContact.module.css";

const SectionContact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  return (
    <section
      id="contact"
      className={`section-container ${styles.sectionContainer}`}
      aria-labelledby="contact-title"
    >
      <div className="section-content-wrapper">
        <motion.h1
          className={`section-title`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          CONTACT
        </motion.h1>
        <div className={`section-content`}>
          <ul className={styles.contactList} aria-label="연락처 목록">
            <motion.li
              className={styles.contactItem}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{
                ...fadeInUp.transition,
                delay: 0.3,
              }}
            >
              <span className={styles.contactIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </span>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>이메일</span>
                <a
                  href="mailto:poohaha8974@gmail.com"
                  className={styles.contactValue}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  poohaha8974@gmail.com
                </a>
              </div>
            </motion.li>
            <motion.li
              className={styles.contactItem}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{
                ...fadeInUp.transition,
                delay: 0.4,
              }}
            >
              <span className={styles.contactIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </span>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>전화번호</span>
                <a
                  href="tel:01075158974"
                  className={styles.contactValue}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  010-7515-8974
                </a>
              </div>
            </motion.li>
            <motion.li
              className={styles.contactItem}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{
                ...fadeInUp.transition,
                delay: 0.5,
              }}
            >
              <span className={styles.contactIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </span>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>깃허브</span>
                <a
                  href="https://github.com/donghee564"
                  className={styles.contactValue}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/donghee564
                </a>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
