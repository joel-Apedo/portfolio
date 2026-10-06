import { bento } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";

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
        description="Un socle technique solide, des soft skills qui font la différence en équipe."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-6">
        <article className="bento-card p-8 md:col-span-4 md:row-span-2 md:p-10">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Stack technique
          </h3>
          <ul className="mt-8 flex flex-wrap gap-3">
            {bento.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-4 py-2 text-base text-foreground/85 transition-colors duration-300 hover:border-accent/50 hover:text-accent sm:text-lg"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-md leading-relaxed text-muted">
            TypeScript de bout en bout, architecture orientée performance et
            accessibilité, du design system au déploiement continu.
          </p>
        </article>

        <article className="bento-card p-8 md:col-span-2">
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

        <article className="bento-card p-8 md:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Outils
          </h3>
          <ul className="mt-6 space-y-3 font-mono text-xs text-muted">
            {bento.tools.map((tool) => (
              <li key={tool} className="flex justify-between border-b border-line pb-3 last:border-0 last:pb-0">
                {tool}
                <span aria-hidden className="text-faint">
                  ▸
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="bento-card flex items-end justify-between gap-6 p-8 md:col-span-3">
          {bento.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-5xl leading-none font-medium text-accent sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                {stat.label}
              </p>
            </div>
          ))}
        </article>

        <article className="bento-card p-8 md:col-span-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Approche
          </h3>
          <p className="mt-6 leading-relaxed text-muted">
            Mobile-first, contraste WCAG AA, navigation clavier, et zéro
            animation qui coûte des images par seconde. Le beau ne doit jamais
            ralentir l&apos;utile.
          </p>
        </article>
      </div>
    </section>
  );
}
