import Cursor from "./components/Cursor/Cursor";
import { SectionWorks } from "./components/SectionWorks/SectionWorks";
import "./App.css";
import SectionView from "./components/ViewFrame/SectionView";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHome from "./components/SectionHome/SectionHome";
import SectionExp from "./components/SectionExp/SectionExp";
import Nav from "./components/Nav/Nav";
function App() {
  // 스크롤 추적을 위한 ref 생성
  const containerRef = useRef(null);

  // 스크롤 진행도 추적
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 스크롤 진행도에 따른 x축 이동을 퍼센트로 변경
  const moveX = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["0%", "0%", "-100%"]
  );

  return (
    <main className="app-container" role="main" data-theme="light">
      <Nav />
      <div className="scroll-container" ref={containerRef}>
        {/* <SectionView moveX={moveX} /> */}
        {/* <SectionWorks /> */}
        <SectionHome id="home" />
        <SectionExp id="exp" />
      </div>
      {/* <Cursor /> */}
    </main>
  );
}

export default App;
