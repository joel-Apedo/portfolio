"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Float } from "@/components/Float";
import { Magnetic } from "@/components/Magnetic";
import { HeroScene } from "@/components/HeroScene";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
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
      className="cine-stage relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <div className="cine-bg-fallback" aria-hidden />
      <div className="cine-tint" aria-hidden />
      <HeroScene />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-28 pb-24 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="hero-label flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-medium tracking-wide text-muted"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-background/60 px-3 py-1 backdrop-blur-md">
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
            className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
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

          <motion.div variants={item} className="mt-14">
            <Float duration={7} amplitude={10}>
              <div className="flex w-fit flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Framer Motion",
                  "Three.js",
                  "Notion",
                ].map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </Float>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#apropos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-5 z-10 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-faint sm:left-8"
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

      <div aria-hidden className="cine-brand">
        APEDO <b>K. JOEL</b>
      </div>
    </section>
  );
}
