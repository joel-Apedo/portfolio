import { bento } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

function TechMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee mt-8" aria-hidden>
      <div className="marquee__track">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="chip-hover shrink-0 rounded-full border border-line px-4 py-2 text-base text-foreground/85 sm:text-lg"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="competences"
      className="mx-auto w-full max-w-6xl scroll-reveal px-6 py-32 sm:py-44"
    >
      <SectionTitle
        index="03"
        label="Compétences"
        title="La boîte à outils."
        description="Dev web, cybersécurité et Android — un même goût pour le détail technique."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4 md:row-span-2">
          <article className="bento-card h-full p-8 md:p-10">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Stack technique
            </h3>
            <TechMarquee items={bento.stack} />
            <p className="mt-10 max-w-md leading-relaxed text-muted">
              TypeScript de bout en bout, architecture orientée performance et
              accessibilité, du design system au déploiement continu.
            </p>
          </article>
        </Reveal>

        <Reveal delay={100} className="md:col-span-2">
          <article className="bento-card h-full p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Soft skills
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              {bento.softSkills.map((skill) => (
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

        <Reveal delay={180} className="md:col-span-2">
          <article className="bento-card h-full p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Outils
            </h3>
            <ul className="mt-6 space-y-3 font-mono text-xs text-muted">
              {bento.tools.map((tool) => (
                <li
                  key={tool}
                  className="flex justify-between border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  {tool}
                  <span aria-hidden className="text-faint transition-transform duration-300 group-hover:translate-x-1">
                    ▸
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={120} className="md:col-span-6">
          <article className="bento-card h-full p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Cybersécurité &amp; Android
            </h3>
            <ul className="mt-6 flex flex-wrap gap-3">
              {bento.security.map((skill) => (
                <li
                  key={skill}
                  className="chip-hover rounded-full border border-line px-4 py-2 text-sm text-foreground/85 sm:text-base"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={160} className="md:col-span-3">
          <article className="bento-card flex h-full items-end justify-between gap-6 p-8">
            {bento.stats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-glow font-serif text-5xl leading-none font-medium text-accent sm:text-6xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {stat.label}
                </p>
              </div>
            ))}
          </article>
        </Reveal>

        <Reveal delay={240} className="md:col-span-3">
          <article className="bento-card h-full p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Approche
            </h3>
            <p className="mt-6 leading-relaxed text-muted">
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
