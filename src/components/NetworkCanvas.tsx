"use client";

import { useEffect, useRef } from "react";

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let running = true;

    type Node = { x: number; y: number; vx: number; vy: number };
    const nodes: Node[] = [];
    const COUNT = 55;
    const LINK_DIST = 140;
    const MOUSE_DIST = 180;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      nodes.length = 0;
      for (let i = 0; i < COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      const rootStyle = getComputedStyle(document.documentElement);
      const bg = rootStyle.getPropertyValue("--accent").trim() || "#3dde6a";
      const lineAlpha = document.documentElement.classList.contains("dark") ? 0.22 : 0.14;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_DIST && dist > 0) {
          const force = (1 - dist / MOUSE_DIST) * 0.04;
          n.vx += dx * force * 0.05;
          n.vy += dy * force * 0.05;
        }

        n.vx = Math.max(-0.8, Math.min(0.8, n.vx * 0.99));
        n.vy = Math.max(-0.8, Math.min(0.8, n.vy * 0.99));
      }

      ctx.fillStyle = bg;
      ctx.strokeStyle = bg;
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.4, 0, Math.PI * 2);
        ctx.globalAlpha = lineAlpha + 0.25;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            ctx.globalAlpha = (1 - d / LINK_DIST) * lineAlpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const md = Math.hypot(a.x - mouseX, a.y - mouseY);
        if (md < MOUSE_DIST) {
          ctx.globalAlpha = (1 - md / MOUSE_DIST) * 0.45;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(tick);
    };

    resize();
    spawn();
    tick();

    window.addEventListener("resize", () => {
      resize();
      spawn();
    });
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
    />
  );
}
