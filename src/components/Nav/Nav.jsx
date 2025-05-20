import React, { useState, useEffect } from "react";
import { motion, useTransform, useMotionValueEvent } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Nav.module.css";

const Nav = ({ backgroundColor, scrollYProgress }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInHomeSection, setIsInHomeSection] = useState(true);

  // 스크롤 진행도에 따른 배경색 변경
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [
      "rgba(255, 255, 255, 0.8)",
      "rgba(0, 0, 0, 0.8)",
      "rgba(0, 0, 0, 0.8)",
      "rgba(255, 255, 255, 0.8)",
    ]
  );

  // 스크롤 진행도에 따른 CSS 변수 값 변경
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["#000", "#fff", "#fff", "#000"]
  );

  // CSS 변수 업데이트
  useMotionValueEvent(textColor, "change", (latest) => {
    document.documentElement.style.setProperty("--nav-text-color", latest);
  });

  // 스크롤 위치에 따른 섹션 활성화
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "exp", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const homeSection = document.getElementById("home");
      const homeSectionHeight = homeSection?.offsetHeight || 0;

      // SectionHome 내부 여부 체크
      setIsInHomeSection(window.scrollY < homeSectionHeight);

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 부드러운 스크롤 이동
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // 메뉴 클릭 후 메뉴 닫기
    }
  };

  // 메뉴 토글 핸들러
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 로고 클릭 시 최상단으로 스크롤
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  // 로고 키보드 이벤트
  const handleLogoKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleLogoClick();
    }
  };

  return (
    <motion.nav
      className={styles.nav}
      role="navigation"
      aria-label="메인 네비게이션"
      style={{
        backgroundColor: isInHomeSection
          ? "rgba(255, 255, 255, 0)"
          : navBackground,
      }}
    >
      <div
        style={{ backgroundColor: textColor }}
        className={styles.logo}
        aria-label="DONGHEE 포트폴리오"
        onClick={handleLogoClick}
        role="button"
        tabIndex="0"
        onKeyDown={handleLogoKeyDown}
      >
        <span className={styles.logoText}>D.</span>
      </div>
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="메뉴"
        aria-expanded={isMenuOpen}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>
      <div
        className={`${styles.navItems} ${isMenuOpen ? styles.menuOpen : ""}`}
        role="menubar"
        aria-label="메인 메뉴"
      >
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
          ABOUT ME
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
          RECENT
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
    </motion.nav>
  );
};

export default Nav;
