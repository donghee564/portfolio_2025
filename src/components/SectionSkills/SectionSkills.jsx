import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionSkills.module.css";

const SectionSkills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  return (
    <section
      id="skills"
      className={`section-container ${styles.sectionContainer}`}
      aria-labelledby="skills-title"
    >
      <div className="section-content-wrapper">
        <motion.h1
          className={`section-title ${styles.sectionTitle}`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          SKILLS
        </motion.h1>
        <div className="section-content">123</div>
      </div>
    </section>
  );
};

export default SectionSkills;
