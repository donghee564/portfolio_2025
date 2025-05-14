import React, { useEffect, useRef } from "react";
import styles from "./BackgroundElements.module.css";

const BackgroundElements = () => {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const resizeTimeout = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;
    let time = 0;

    // 캔버스 크기 설정
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width * dpr;
      height = rect.height * dpr;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    // 마우스 위치 업데이트
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // 리사이즈 핸들러
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }

      resizeTimeout.current = setTimeout(() => {
        setCanvasSize();
      }, 100);
    };

    // 웨이브 그리기
    const drawWave = () => {
      ctx.clearRect(0, 0, width, height);

      // 투명 배경
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, width, height);

      // 웨이브 효과
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        const amplitude = Math.min(30 + i * 10, height * 0.1);
        const frequency = 0.02;
        const phase = time * 0.001 + (i * Math.PI) / 2;

        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        for (let x = 0; x < width; x += Math.max(5, width / 200)) {
          const distance = Math.sqrt(
            Math.pow(x - mousePosition.current.x, 2) +
              Math.pow(height / 2 - mousePosition.current.y, 2)
          );
          const influence = Math.max(
            0,
            1 - distance / Math.min(300, width * 0.3)
          );

          const y =
            height / 2 +
            Math.sin(x * frequency + phase) * amplitude * influence +
            Math.sin(x * frequency * 0.5 + phase * 1.5) *
              amplitude *
              0.5 *
              influence;

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const waveGradient = ctx.createLinearGradient(0, 0, width, height);
        waveGradient.addColorStop(0, `rgba(147, 51, 234, ${0.1 - i * 0.02})`);
        waveGradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.1 - i * 0.02})`);
        waveGradient.addColorStop(1, `rgba(236, 72, 153, ${0.1 - i * 0.02})`);

        ctx.fillStyle = waveGradient;
        ctx.fill();
      }

      time += 16;
      animationRef.current = requestAnimationFrame(drawWave);
    };

    // 초기화 및 크기 설정
    const initializeCanvas = () => {
      // DOM이 완전히 로드된 후 캔버스 크기 설정
      if (document.readyState === "complete") {
        setCanvasSize();
        drawWave();
      } else {
        window.addEventListener("load", () => {
          setCanvasSize();
          drawWave();
        });
      }
    };

    initializeCanvas();

    // 이벤트 리스너
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <canvas ref={canvasRef} className={styles.waveCanvas} />
    </div>
  );
};

export default BackgroundElements;
