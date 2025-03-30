import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  // 스크롤 위치에 따른 섹션 활성화
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "exp", "project", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offset = element.offsetTop;

          if (
            scrollPosition >= offset &&
            scrollPosition < offset + element.offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 부드러운 스크롤 이동
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>DONGHEE</div>
      <div className={styles.navItems}>
        <a
          href="#home"
          className={`${styles.navItem} ${
            activeSection === "home" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          HOME
        </a>
        <a
          href="#exp"
          className={`${styles.navItem} ${
            activeSection === "exp" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("exp");
          }}
        >
          EXP
        </a>
        <a
          href="#project"
          className={`${styles.navItem} ${
            activeSection === "project" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("project");
          }}
        >
          PROJECT
        </a>
        <a
          href="#contact"
          className={`${styles.navItem} ${
            activeSection === "contact" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Nav;
