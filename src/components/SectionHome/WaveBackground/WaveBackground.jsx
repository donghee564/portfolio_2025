import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./WaveBackground.module.css";

const WaveBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: null, y: null });
  const animationRef = useRef(null);
  const isMobile = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  // 스크롤 애니메이션 설정
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1], // 스크롤 0% ~ 10% 구간
    [1, 0] // 투명도 100% ~ 0%
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.1], // 스크롤 0% ~ 10% 구간
    [0, 100] // 이동 거리 0px ~ 100px
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;
    let time = 0;

    // 모바일 체크
    const checkMobile = () => {
      isMobile.current = window.innerWidth <= 768;
    };

    // 캔버스 크기 설정
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();

      // CSS 크기 설정 (실제 표시될 크기)
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // 실제 캔버스 크기 설정 (렌더링 크기)
      width = rect.width * dpr;
      height = rect.height * dpr;
      canvas.width = width;
      canvas.height = height;

      // 컨텍스트 스케일 설정
      ctx.scale(dpr, dpr);
    };

    // 위치 업데이트 함수
    const updatePosition = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;

      mousePosition.current = {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    };

    // 마우스 이벤트 핸들러
    const handleMouseMove = (e) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      mousePosition.current = { x: null, y: null };
    };

    // 웨이브 그리기
    const drawWave = () => {
      ctx.clearRect(0, 0, width, height);

      // 투명 배경
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, width, height);

      // 웨이브 효과
      const waveCount = 3;
      const baseAmplitude = isMobile.current ? 10 : 30;
      const baseFrequency = isMobile.current ? 0.015 : 0.02;
      const centerY = height / (1.3 * (window.devicePixelRatio || 1));

      for (let i = 0; i < waveCount; i++) {
        const amplitude = baseAmplitude + i * (isMobile.current ? 3 : 10);
        const frequency = baseFrequency;
        const phase = time * 0.001 + (i * Math.PI) / 2;

        ctx.beginPath();
        ctx.moveTo(0, centerY);

        // 웨이브 패스 그리기
        for (let x = 0; x < width / (window.devicePixelRatio || 1); x += 5) {
          let influence = 1;

          if (
            mousePosition.current.x !== null &&
            mousePosition.current.y !== null
          ) {
            const distance = Math.sqrt(
              Math.pow(
                x - mousePosition.current.x / (window.devicePixelRatio || 1),
                2
              ) +
                Math.pow(
                  centerY -
                    mousePosition.current.y / (window.devicePixelRatio || 1),
                  2
                )
            );
            const maxDistance = isMobile.current ? 200 : 700;
            influence = Math.max(0.3, 1 - distance / maxDistance);
          }

          const y =
            centerY +
            Math.sin(x * frequency + phase) * amplitude * influence +
            Math.sin(x * frequency * 0.5 + phase * 1.5) *
              amplitude *
              0.5 *
              influence;

          ctx.lineTo(x, y);
        }

        // 웨이브 패스 닫기
        ctx.lineTo(width / (window.devicePixelRatio || 1), centerY);
        ctx.lineTo(
          width / (window.devicePixelRatio || 1),
          height / (window.devicePixelRatio || 1)
        );
        ctx.lineTo(0, height / (window.devicePixelRatio || 1));
        ctx.closePath();

        const waveGradient = ctx.createLinearGradient(
          0,
          centerY,
          width / (window.devicePixelRatio || 1),
          height / (window.devicePixelRatio || 1)
        );
        const opacity = isMobile.current ? 0.15 - i * 0.03 : 0.25 - i * 0.05;
        waveGradient.addColorStop(0, `rgba(0, 191, 255, ${opacity})`);
        waveGradient.addColorStop(0.5, `rgba(0, 105, 148, ${opacity})`);
        waveGradient.addColorStop(1, `rgba(0, 51, 102, ${opacity})`);

        ctx.fillStyle = waveGradient;
        ctx.fill();
      }

      time += 16;
      animationRef.current = requestAnimationFrame(drawWave);
    };

    // 초기화
    checkMobile();
    setCanvasSize();
    drawWave();

    // 이벤트 리스너
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMounted]);

  return (
    <motion.div
      ref={containerRef}
      className={styles.backgroundContainer}
      style={{
        opacity,
        y,
      }}
    >
      {isMounted && <canvas ref={canvasRef} className={styles.waveCanvas} />}
    </motion.div>
  );
};

export default WaveBackground;
