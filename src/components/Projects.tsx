import Image from "next/image";
import { projects } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";

function ProjectVisual({
  number,
  title,
  image,
  imageAlt,
  href,
}: {
  number: string;
  title: string;
  image: string;
  imageAlt: string;
  href?: string;
}) {
  const content = (
    <>
      <Image
        src={image}
        alt={imageAlt}
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, 1152px"
        className="parallax-img object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20"
      />
      <span className="absolute top-6 left-6 rounded-full border border-line bg-background/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/85 backdrop-blur-sm">
        {number} — {title}
      </span>
      <span
        aria-hidden
        className="absolute right-6 bottom-6 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-background/70 text-muted backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_28px_rgba(184,255,60,0.35)]"
      >
        ↗
      </span>
    </>
  );

  const className =
    "project-visual group relative block aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line bg-background-soft";

  if (href && href !== "#") {
    return (
      <a
        href={href}
        data-cursor="voir"
        aria-label={`Voir le projet ${title}`}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <div data-cursor="voir" className={className}>
      {content}
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projets"
      className="mx-auto w-full max-w-6xl scroll-reveal px-6 py-32 sm:py-44"
    >
      <SectionTitle
        index="02"
        label="Projets"
        title="Trois problèmes, trois réponses."
        description="Chaque projet raconté de la même façon : le défi, ce que j'ai construit, et ce que ça a changé."
      />

      <div className="mt-24 space-y-40 sm:space-y-56">
        {projects.map((project) => (
          <article key={project.title} className="scroll-reveal">
            <Reveal>
              <ProjectVisual
                number={project.number}
                title={project.title}
                image={project.image}
                imageAlt={project.imageAlt}
                href={project.demo}
              />
            </Reveal>

            <Reveal delay={100}>
              <header className="mt-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
                <span className="text-muted">{project.meta}</span>
                <span>{project.year}</span>
              </header>
            </Reveal>

            <h3 className="scroll-title mt-5 font-serif text-5xl leading-none font-medium tracking-tight sm:text-7xl">
              {project.title}
            </h3>

            <dl className="mt-12 max-w-3xl space-y-10">
              <Reveal delay={80}>
                <div className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-8">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Défi
                  </dt>
                  <dd className="leading-relaxed text-muted">
                    {project.challenge}
                  </dd>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-8">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Solution
                  </dt>
                  <dd>
                    <p className="leading-relaxed text-muted">
                      {project.solution}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="chip-hover rounded-full border border-line px-3 py-1 font-mono text-[11px] text-foreground/70"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-8">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Résultat
                  </dt>
                  <dd>
                    <p className="stat-glow font-serif text-5xl leading-none font-medium text-accent sm:text-6xl">
                      {project.resultStat}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted">
                      {project.resultText}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          className="link-underline text-foreground/80 hover:text-accent"
                        >
                          Voir en ligne ↗
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          className="link-underline text-foreground/80 hover:text-accent"
                        >
                          Code source ↗
                        </a>
                      )}
                    </div>
                  </dd>
                </div>
              </Reveal>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
