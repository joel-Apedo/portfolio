"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.7 });
  const dotX = useSpring(x, { stiffness: 700, damping: 40, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 700, damping: 40, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduced) return;

    document.body.classList.add("has-custom-cursor");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest?.("a, button, [data-cursor='hover'], .chip, .card"),
      );
      const overField = Boolean(
        target?.closest?.("input, textarea, select, [contenteditable='true']"),
      );

      document
        .querySelector(".cursor-ring")
        ?.classList.toggle("is-hover", interactive && !overField);
      document.querySelector(".cursor-dot")?.classList.toggle("is-hidden", overField);
      document.querySelector(".cursor-ring")?.classList.toggle("is-hidden", overField);
    };

    const onLeave = () => {
      document.querySelector(".cursor-dot")?.classList.add("is-hidden");
      document.querySelector(".cursor-ring")?.classList.add("is-hidden");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  return (
    <>
      <motion.div aria-hidden className="cursor-ring" style={{ x: ringX, y: ringY }} />
      <motion.div aria-hidden className="cursor-dot" style={{ x: dotX, y: dotY }} />
    </>
  );
}
