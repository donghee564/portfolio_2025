import "./App.css";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import SectionHome from "./components/SectionHome/SectionHome";
import SectionExp from "./components/SectionExp/SectionExp";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionContact from "./components/SectionContact/SectionContact";
import Cursor from "./components/Cursor/Cursor";
import Loading from "./components/Loading/Loading";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundElements from "./components/SectionHome/BackgroundElements/BackgroundElements";
// 로딩 상태를 전역적으로 관리하기 위한 Context 생성
export const LoadingContext = React.createContext();

function App() {
  // 스크롤 추적을 위한 ref 생성
  const containerRef = useRef(null);
  const skillsRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 로딩 상태 관리
  useEffect(() => {
    const loadAssets = () => {
      const images = document.querySelectorAll("img");
      const totalAssets = images.length;
      let loadedAssets = 0;

      const updateProgress = () => {
        loadedAssets++;
        const progress = Math.floor((loadedAssets / totalAssets) * 100);
        setLoadingProgress(progress);

        if (loadedAssets === totalAssets) {
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          updateProgress();
        } else {
          img.addEventListener("load", updateProgress);
          img.addEventListener("error", updateProgress);
        }
      });
    };

    loadAssets();
  }, []);

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
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <main className="app-container" role="main">
        <AnimatePresence>
          {isLoading && <Loading progress={loadingProgress} />}
        </AnimatePresence>
        <Nav
          backgroundColor={backgroundColor}
          scrollYProgress={scrollYProgress}
        />
        <motion.div
          className="scroll-container"
          ref={containerRef}
          style={{ backgroundColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="contents-wrap">
            <BackgroundElements />
            <SectionHome id="home" />
            <SectionExp id="exp" />
            <SectionSkills ref={skillsRef} id="skills" />
            <SectionProjects id="projects" />
            <SectionContact id="contact" />
          </div>
        </motion.div>
        <Cursor />
      </main>
    </LoadingContext.Provider>
  );
}

export default App;
