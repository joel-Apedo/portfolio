"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Portrait({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      className={`relative w-full max-w-[300px] ${className}`}
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl"
      />
      <div className="card relative overflow-hidden !rounded-[1.75rem] p-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-surface-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={failed ? "/portrait-placeholder.svg" : "/photo.jpg"}
            alt="Portrait d'APEDO Kodjo Joel"
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
            onError={() => setFailed(true)}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent"
          />
        </div>
      </div>
      <p className="mt-3 px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
        {failed ? "photo.jpg — slot libre" : "APEDO K. Joel"}
      </p>
    </motion.div>
  );
}
