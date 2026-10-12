"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Float({
  children,
  className = "",
  duration = 6,
  amplitude = 12,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  amplitude?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
