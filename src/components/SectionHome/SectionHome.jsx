import React from "react";
import { motion } from "framer-motion";

const SectionHome = () => {
  // 애니메이션 variants 정의
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
    },
  };

  return (
    <section id="home" className="section-container">
      <div className="section-content-wrapper">
        <motion.p
          className="section-title-text"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          안녕하세요 퍼블리셔 한동희 입니다.
        </motion.p>
        <motion.h1
          className="section-title"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          DONGHEE'<span className="appostrophe">S</span>
          <br />
          <span className="type-text-border">PORTFOLIO</span>
        </motion.h1>
        <div className="section-content">
          <motion.p
            className="section-text"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.8 }}
          >
            웹 퍼블리셔로서 다양한 프로젝트를 수행하며 UI/UX 개선과 웹 접근성
            향상에 기여해왔습니다.
            <br />
            특히 금융권 프로젝트를 경험하면서 정보의 명확한 전달과 사용자
            편의성이 중요한 요소라는
            <br />
            점을 깊이 이해하게 되었습니다. ...............
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
