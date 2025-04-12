import "./App.css";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Nav from "./components/Nav/Nav";
import SectionHome from "./components/SectionHome/SectionHome";
import SectionExp from "./components/SectionExp/SectionExp";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionContact from "./components/SectionContact/SectionContact";
import Cursor from "./components/Cursor/Cursor";

import { motion } from "framer-motion";

function App() {
  // 스크롤 추적을 위한 ref 생성
  const containerRef = useRef(null);
  const skillsRef = useRef(null);

  // 스크롤 진행도 추적
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"],
  });

  // 스크롤 진행도에 따른 배경색 변경
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1], // SectionSkills 섹션의 시작과 끝을 기준으로
    ["#fff", "#000", "#000", "#fff"] // 각 구간별 배경색
  );

  return (
    <main className="app-container" role="main">
      <Nav
        backgroundColor={backgroundColor}
        scrollYProgress={scrollYProgress}
      />
      <motion.div
        className="scroll-container"
        ref={containerRef}
        style={{ backgroundColor }}
      >
        <SectionHome id="home" />
        <SectionExp id="exp" />
        <SectionSkills ref={skillsRef} id="skills" />
        <SectionProjects id="projects" />
        <SectionContact id="contact" />
      </motion.div>
      <Cursor />
    </main>
  );
}

export default App;
