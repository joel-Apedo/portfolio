"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cursor = cursorRef.current;
    if (!fine || reduced || !cursor) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    let x = 0;
    let y = 0;
    let frame = 0;
    let viewing = false;

    const render = () => {
      frame = 0;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const setViewing = (next: boolean) => {
      if (next === viewing) return;
      viewing = next;
      cursor.classList.toggle("is-view", next);
      if (labelRef.current) labelRef.current.textContent = next ? "Voir" : "";
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(render);

      const target = event.target as HTMLElement | null;
      const overView = Boolean(
        target?.closest?.("[data-cursor='voir']"),
      );
      const overField = Boolean(
        target?.closest?.(
          "input, textarea, select, [contenteditable='true']",
        ),
      );

      setViewing(overView && !overField);
      cursor.classList.toggle("is-hidden", overField);
    };

    const onLeave = () => cursor.classList.add("is-hidden");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      root.classList.remove("has-custom-cursor");
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} aria-hidden className="cursor is-hidden">
      <span ref={labelRef} className="cursor__label" />
    </div>
  );
}
