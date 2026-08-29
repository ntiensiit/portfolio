"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const fontSize = 22;
    const text = "NGUYEN TIEN SI".split("");
    let drops: number[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = Array.from({ length: Math.ceil(canvas.width / fontSize) }, () => Math.random() * -40);
    };
    const draw = () => {
      ctx.fillStyle = "rgba(10, 15, 26, 0.16)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(34, 211, 238, 0.16)";
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((drop, index) => {
        ctx.fillText(text[Math.floor(Math.random() * text.length)], index * fontSize, drop * fontSize);
        if (drop * fontSize > canvas.height && Math.random() > 0.975) drops[index] = 0;
        drops[index]++;
      });
    };
    resize();
    window.addEventListener("resize", resize);
    const interval = window.setInterval(draw, 30);
    return () => { window.removeEventListener("resize", resize); window.clearInterval(interval); };
  }, []);
  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}
