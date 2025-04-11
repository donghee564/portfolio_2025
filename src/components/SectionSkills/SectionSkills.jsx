import React, { useEffect, useRef, useState, forwardRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./SectionSkills.module.css";

const SectionSkills = forwardRef((props, ref) => {
  const [isFixed, setIsFixed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const titleMoveLeft = useTransform(
    springScrollProgress,
    [0.2, 0.5],
    ["0%", "-30%"]
  );

  const listMoveLeft = useTransform(
    springScrollProgress,
    [0.22, 1],
    ["0%", "-200%"]
  );

  // 스킬 리스트 아아콘 컬러 배열
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg",
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg",
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg",
      color: "#F7DF1E",
    },
    {
      name: "jQuery",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jquery.svg",
      color: "#33A9DC",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
      color: "#61DAFB",
    },
    {
      name: "Framer Motion",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg",
      color: "#00C4FF",
    },
    {
      name: "SASS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sass.svg",
      color: "#FF99CC",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg",
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
      color: "#FFFFFF",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // skills 섹션이 뷰포트에 있고 끝부분이 뷰포트에 닿지 않았을 때만 fixed
        const isInView = rect.top - 20 <= 0 && rect.bottom > windowHeight * 0.7;

        setIsFixed(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <section
      ref={ref}
      id="skills"
      className={`section-container ${styles.sectionContainer}`}
      aria-labelledby="skills-title"
    >
      <div
        className={`section-content-wrapper ${styles.sectionContentWrapper} ${
          isFixed ? styles.fixed : ""
        }`}
      >
        <motion.h1
          className={`section-title ${styles.sectionTitle}`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ x: titleMoveLeft }}
        >
          SKILLS
        </motion.h1>
        <motion.ul
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "0%" }}
          style={{ x: listMoveLeft }}
          className={styles.skillList}
        >
          {skills.map((skill) => (
            <motion.li
              className={styles.skillItem}
              key={skill.name}
              whileHover={{
                scale: 1.1,
                filter: `drop-shadow(0px 0px 6px ${skill.color})`,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                width="50"
                height="50"
                initial={{ filter: "invert(1)" }}
              />
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
});

export default SectionSkills;
