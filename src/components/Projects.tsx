"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.notionId
    ? `/projet/${project.slug ?? project.notionId}`
    : undefined;

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        className="group grid items-start gap-8 md:grid-cols-2 md:gap-12"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: -6 },
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative"
        >
          <div className="card card-hover relative overflow-hidden !rounded-3xl">
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
              <Image
                src={project.cover || project.image}
                alt={project.imageAlt}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30"
              />
            </div>
            <span className="absolute top-4 left-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur-sm">
              {project.number}
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <p className="text-[12px] font-medium text-muted">
            {project.meta}
            <span className="mx-2 text-faint">·</span>
            {project.year}
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {href ? (
              <Link href={href} className="link-soft hover:text-accent">
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>

          <p className="mt-4 leading-relaxed text-muted">{project.challenge}</p>
          <p className="mt-3 leading-relaxed text-muted">{project.solution}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="chip text-[12px]">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-end gap-6">
            <div>
              <p className="text-3xl font-semibold tracking-tight text-accent">
                {project.resultStat}
              </p>
              <p className="mt-1 max-w-xs text-sm text-muted">
                {project.resultText}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-medium">
            {href && (
              <Link href={href} className="link-soft text-foreground/80">
                Lire le case study ↗
              </Link>
            )}
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-soft text-foreground/80"
              >
                Démo en ligne ↗
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-soft text-foreground/80"
              >
                Code source ↗
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section
      id="projets"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
          02 — Projets
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Trois problèmes, trois réponses.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Chaque projet raconté de la même façon : le défi, ce que j&apos;ai
          construit, et ce que ça a changé.
        </p>
      </Reveal>

      <div className="mt-14 space-y-16 sm:space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.title + index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
