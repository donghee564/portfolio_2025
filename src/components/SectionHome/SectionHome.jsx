import React from "react";
import AnimatedText from "./AnimatedText";
import ScrollDownButton from "./ScrollDownButton";

const SectionHome = () => {
  // 각 텍스트 블록의 시작 시점 계산
  const calculateDelay = (text, previousDelay, isH1 = false) => {
    const textLength = text.length;
    const animationDuration = textLength * (isH1 ? 0.06 : 0.015); // 각 글자의 딜레이 (h1: 0.06초, 그 외: 0.015초)
    return previousDelay + animationDuration;
  };

  // 각 텍스트 블록의 딜레이 계산
  const text1 = "안녕하세요 퍼블리셔 한동희 입니다.";
  const text2 = "DONGHEE's";
  const text3 = "PORTFOLIO";
  const text4 = "디자인을 움직임으로 연결하는 퍼블리셔, 한동희입니다.";
  // const text5 =
  //   "특히 금융권 프로젝트를 경험하면서 정보의 명확한 전달과 사용자 편의성이 중요한 요소라는";
  // const text6 = "점을 깊이 이해하게 되었습니다.";

  const delay1 = 0;
  const delay2 = calculateDelay(text1, delay1);
  const delay3 = calculateDelay(text2, delay2, true);
  const delay4 = calculateDelay(text3, delay3, true);
  // const delay5 = calculateDelay(text4, delay4);
  // const delay6 = calculateDelay(text5, delay5);

  return (
    <section id="home" className="section-container" aria-label="홈 섹션">
      <div className="section-content-wrapper">
        <p className="section-title-text" role="heading" aria-level="2">
          <span className="text-wrapper">
            <AnimatedText text={text1} blockDelay={delay1} />
          </span>
        </p>

        <h1 className="section-title" role="heading" aria-level="1">
          <span className="text-wrapper">
            <AnimatedText text={text2} blockDelay={delay2} isH1={true} />
          </span>
        </h1>
        <h1
          className="section-title type-text-border"
          role="heading"
          aria-level="1"
        >
          <span className="text-wrapper">
            <AnimatedText text={text3} blockDelay={delay3} isH1={true} />
          </span>
        </h1>
        <div className="section-content">
          <p className="section-text">
            <span className="text-wrapper">
              <AnimatedText text={text4} blockDelay={delay4} />
            </span>
            {/* <span className="text-wrapper">
              <AnimatedText text={text5} blockDelay={delay5} />
            </span>
            <span className="text-wrapper">
              <AnimatedText text={text6} blockDelay={delay6} />
            </span> */}
          </p>
        </div>
      </div>
      <ScrollDownButton delay={delay4 + text4.length * 0.015} />
    </section>
  );
};

export default SectionHome;
