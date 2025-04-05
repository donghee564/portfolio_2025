// import Cursor from "./components/Cursor/Cursor";
// import { SectionWorks } from "./components/SectionWorks/SectionWorks";
// import SectionView from "./components/ViewFrame/SectionView";
import "./App.css";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Nav from "./components/Nav/Nav";
import SectionHome from "./components/SectionHome/SectionHome";
import SectionExp from "./components/SectionExp/SectionExp";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionContact from "./components/SectionContact/SectionContact";
import { motion } from "framer-motion";

function App() {
  // 스크롤 추적을 위한 ref 생성
  const containerRef = useRef(null);

  // 스크롤 진행도 추적
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 스크롤 진행도에 따른 배경색 변경
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.28, 0.33, 0.76, 0.81, 1], // 스크롤 진행도 구간 (각 섹션별로 나눔)
    ["#fff", "#fff", "#000", "#000", "#fff", "#fff"] // 각 섹션별 배경색
  );

  return (
    <main className="app-container" role="main">
      <Nav />
      <motion.div
        className="scroll-container"
        ref={containerRef}
        // style={{ backgroundColor }}
      >
        {/* <SectionView moveX={moveX} /> */}
        {/* <SectionWorks /> */}
        <SectionHome id="home" />
        <SectionExp id="exp" />
        <SectionSkills id="skills" />
        <SectionProjects id="projects" />
        <SectionContact id="contact" />
      </motion.div>
      {/* <Cursor /> */}
    </main>
  );
}

export default App;
