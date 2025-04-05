import React from "react";
import styles from "./SectionProjects.module.css";
import { motion } from "framer-motion";

const ProjectItem = ({ image, alt, date, title, index }) => {
  return (
    <motion.li
      className={styles.projectItem}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-15%" }}
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.45, delay: 0.2 }}
    >
      <img className={styles.projectItemImage} src={image} alt={alt} />
      <div className={styles.projectItemTextWrap}>
        <p className={styles.projectItemDate}>{date}</p>
        <h3
          className={styles.projectItemTitle}
          dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br />") }}
        />
      </div>
    </motion.li>
  );
};

export default ProjectItem;
