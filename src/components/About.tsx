"use client";

import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";

export function About() {
  return (
    <section
      id="apropos"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
          01 — À propos
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Moins de biographie, plus d&apos;impact.
        </h2>
      </Reveal>

      <div className="mt-12 grid items-start gap-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-pretty text-xl leading-relaxed text-muted">
              {profile.about}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Reveal delay={0.15}>
              <div className="card card-hover p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
                  Basé à
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {profile.location}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="card card-hover p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
                  Expérience
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  5+ ans · startups &amp; studios
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="card card-hover p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
                  Disponibilité
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Freelance &amp; CDI
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12} className="flex justify-center md:justify-end">
          <Portrait />
        </Reveal>
      </div>
    </section>
  );
}
