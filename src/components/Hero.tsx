import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="accueil"
      className="mx-auto flex w-full max-w-6xl flex-col justify-center px-6 pt-40 pb-32 sm:pt-48 sm:pb-44"
    >
      <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        <span className="text-accent">{profile.role}</span>
        <span aria-hidden className="text-faint">
          /
        </span>
        <span>{profile.location}</span>
        <span aria-hidden className="text-faint">
          /
        </span>
        <span>Portfolio {profile.year}</span>
      </p>

      <h1 className="mt-10 max-w-5xl text-balance font-serif text-5xl leading-[1.02] font-medium tracking-tight sm:text-7xl lg:text-8xl">
        {profile.intro}
      </h1>

      <div className="mt-12 grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline}
        </p>

        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint sm:text-right">
          {profile.name}
          <br />
          <span className="text-muted">Dév. &amp; Design</span>
        </p>
      </div>

      <div className="rule mt-20" />

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        <a
          href="#projets"
          className="link-underline text-accent hover:text-foreground"
        >
          ↓ Voir les projets
        </a>
        <span>Scroll</span>
      </div>
    </section>
  );
}
