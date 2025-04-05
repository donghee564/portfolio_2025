import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionContact.module.css";

const SectionContact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  const contactItems = [
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/minutemailer.svg"
          alt="이메일"
          style={{ width: "20px", height: "20px" }}
        />
      ),
      label: "이메일",
      value: "poohahh@naver.com",
      link: "mailto:poohahh@naver.com",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/phonepe.svg"
          alt="전화번호"
          style={{ width: "20px", height: "20px" }}
        />
      ),
      label: "전화번호",
      value: "010-1234-5678",
      link: "tel:01012345678",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
          alt="깃허브"
          style={{ width: "20px", height: "20px" }}
        />
      ),
      label: "깃허브",
      value: "github.com/poohahh",
      link: "https://github.com/poohahh",
    },
  ];

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
        <div className={`section-content ${styles.contactContent}`}>
          <ul className={styles.contactList} aria-label="연락처 목록">
            {contactItems.map((item, index) => (
              <motion.li
                key={item.label}
                className={styles.contactItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{
                  ...fadeInUp.transition,
                  delay: 0.3 + index * 0.1,
                }}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>{item.label}</span>
                  <a
                    href={item.link}
                    className={styles.contactValue}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
