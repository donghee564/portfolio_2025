import React, { useState } from "react";
import styles from "./ProjectItem.module.css";
import { motion } from "framer-motion";
import ProjectItemModal from "../ProjectItemModal/ProjectItemModal";

const ProjectItem = ({ image, alt, date, title, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
        onClick={handleClick}
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
      <ProjectItemModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        date={date}
      />
    </>
  );
};

export default ProjectItem;
