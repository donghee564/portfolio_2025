import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  // 스크롤 위치에 따른 섹션 활성화
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "exp", "skills", "projects", "contact"];
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
    <nav className={styles.nav} role="navigation" aria-label="메인 네비게이션">
      <div
        className={styles.logo}
        role="banner"
        aria-label="DONGHEE 포트폴리오"
      >
        DONGHEE
      </div>
      <div className={styles.navItems} role="menubar" aria-label="메인 메뉴">
        <a
          href="#home"
          className={`${styles.navItem} ${
            activeSection === "home" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          role="menuitem"
          aria-current={activeSection === "home" ? "page" : undefined}
          aria-label="홈 섹션으로 이동"
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
          role="menuitem"
          aria-current={activeSection === "exp" ? "page" : undefined}
          aria-label="경력 섹션으로 이동"
        >
          EXP
        </a>
        <a
          href="#skills"
          className={`${styles.navItem} ${
            activeSection === "skills" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("skills");
          }}
          role="menuitem"
          aria-current={activeSection === "skills" ? "page" : undefined}
          aria-label="스킬 섹션으로 이동"
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className={`${styles.navItem} ${
            activeSection === "projects" ? styles.active : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
          role="menuitem"
          aria-current={activeSection === "projects" ? "page" : undefined}
          aria-label="프로젝트 섹션으로 이동"
        >
          PROJECTS
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
          role="menuitem"
          aria-current={activeSection === "contact" ? "page" : undefined}
          aria-label="연락처 섹션으로 이동"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Nav;
