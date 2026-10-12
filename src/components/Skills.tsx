"use client";

import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export function Skills() {
  return (
    <section
      id="competences"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
          03 — Compétences
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          La boîte à outils.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Dev web, cybersécurité et Android — un même goût pour le détail
          technique.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4" delay={0.05}>
          <article className="card card-hover h-full p-7 md:p-9">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              Stack technique
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-md leading-relaxed text-muted">
              TypeScript de bout en bout, architecture orientée performance et
              accessibilité, du design system au déploiement continu.
            </p>
          </article>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.12}>
          <article className="card card-hover h-full p-7">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              Soft skills
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              {skills.softSkills.map((skill) => (
                <li key={skill} className="flex gap-3">
                  <span aria-hidden className="text-accent">
                    ·
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.15}>
          <article className="card card-hover h-full p-7">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              Outils
            </h3>
            <ul className="mt-6 space-y-3 text-[13px] text-muted">
              {skills.tools.map((tool) => (
                <li
                  key={tool}
                  className="flex justify-between border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  {tool}
                  <span aria-hidden className="text-faint">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal className="md:col-span-4" delay={0.18}>
          <article className="card card-hover h-full p-7 md:p-9">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              Cybersécurité &amp; Android
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.security.map((skill) => (
                <span key={skill} className="chip text-[13px]">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.2}>
          <article className="card card-hover flex h-full items-end justify-between gap-4 p-7">
            {skills.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                  {stat.label}
                </p>
              </div>
            ))}
          </article>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.25}>
          <article className="card card-hover h-full p-7">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              Approche
            </h3>
            <p className="mt-5 leading-relaxed text-muted">
              Mobile-first, contraste WCAG AA, navigation clavier, et zéro
              animation qui coûte des images par seconde. Le beau ne doit jamais
              ralentir l&apos;utile.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
