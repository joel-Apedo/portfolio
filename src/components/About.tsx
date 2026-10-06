import { profile } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";

export function About() {
  return (
    <section
      id="apropos"
      className="mx-auto w-full max-w-6xl scroll-reveal px-6 py-32 sm:py-44"
    >
      <SectionTitle
        index="01"
        label="À propos"
        title="Moins de biographie, plus d'impact."
      />

      <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr]">
        <p className="max-w-2xl text-pretty font-serif text-2xl leading-[1.5] text-foreground/90 sm:text-3xl">
          {profile.about}
        </p>

        <dl className="space-y-8 font-mono text-[11px] uppercase tracking-[0.18em]">
          <div>
            <dt className="text-faint">Basé à</dt>
            <dd className="mt-2 text-sm text-muted">{profile.location}</dd>
          </div>
          <div>
            <dt className="text-faint">Expérience</dt>
            <dd className="mt-2 text-sm text-muted">
              5+ ans · startups &amp; studios
            </dd>
          </div>
          <div>
            <dt className="text-faint">Disponibilité</dt>
            <dd className="mt-2 flex items-center gap-2 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Freelance &amp; CDI
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
