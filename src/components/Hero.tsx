"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Float } from "@/components/Float";
import { Magnetic } from "@/components/Magnetic";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-5 pt-28 pb-24 sm:px-8"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.p
          variants={item}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-medium tracking-wide text-muted"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 shadow-soft">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Disponible
          </span>
          <span className="text-faint">·</span>
          <span>{profile.location}</span>
          <span className="text-faint">·</span>
          <span>{profile.role}</span>
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {profile.intro}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <a href="#projets" className="btn-primary">
              Voir mes projets
              <span aria-hidden>→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn-ghost">
              Me contacter
            </a>
          </Magnetic>
        </motion.div>

        <motion.div variants={item} className="mt-16">
          <Float duration={7} amplitude={10}>
            <div className="flex w-fit flex-wrap gap-3">
              {["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Notion"].map(
                (tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </Float>
        </motion.div>
      </motion.div>

      <motion.a
        href="#apropos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-faint sm:left-8"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-accent"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
