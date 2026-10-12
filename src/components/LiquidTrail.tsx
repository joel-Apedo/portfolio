"use client";

import { useEffect, useRef } from "react";

const TRAIL = 14;

export function LiquidTrail() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!fine || reduced || !root) return;

    root.classList.add("is-active");

    const dots = Array.from(root.querySelectorAll<HTMLElement>(".trail-dot"));
    const positions = dots.map(() => ({ x: -100, y: -100 }));
    let mouseX = -100;
    let mouseY = -100;
    let frame = 0;
    let running = true;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      if (!running) return;

      let tx = mouseX;
      let ty = mouseY;

      dots.forEach((dot, i) => {
        const p = positions[i];
        const ease = Math.max(0.3 - i * 0.015, 0.09);
        p.x += (tx - p.x) * ease;
        p.y += (ty - p.y) * ease;
        const scale = 1 - i / (TRAIL + 3);
        dot.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        dot.style.opacity = String(0.5 * scale);
        tx = p.x;
        ty = p.y;
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
        <filter id="liquid-trail">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.025"
            numOctaves="2"
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div
        ref={rootRef}
        aria-hidden
        className="liquid-trail"
        style={{ filter: "url(#liquid-trail)" }}
      >
        {Array.from({ length: TRAIL }).map((_, i) => (
          <span
            key={i}
            className="trail-dot"
            style={{ opacity: 0 }}
          />
        ))}
      </div>
    </>
  );
}
