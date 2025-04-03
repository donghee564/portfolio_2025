import React from "react";
import { motion } from "framer-motion";

const SectionProjects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  return (
    <section
      id="projects"
      className={`section-container`}
      aria-labelledby="projects-title"
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
          PROJECTS
        </motion.h1>
        <div className="section-content">123</div>
      </div>
    </section>
  );
};

export default SectionProjects;
