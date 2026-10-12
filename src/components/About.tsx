import { profile } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";

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

      <div className="mt-14 grid items-start gap-14 md:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <p className="max-w-2xl text-pretty font-serif text-2xl leading-[1.5] text-foreground/90 sm:text-3xl">
              {profile.about}
            </p>
          </Reveal>

          <dl className="mt-12 space-y-8 font-mono text-[11px] uppercase tracking-[0.18em]">
            <Reveal delay={120}>
              <div>
                <dt className="text-faint">Basé à</dt>
                <dd className="mt-2 text-sm text-muted">{profile.location}</dd>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div>
                <dt className="text-faint">Expérience</dt>
                <dd className="mt-2 text-sm text-muted">
                  5+ ans · startups &amp; studios
                </dd>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div>
                <dt className="text-faint">Disponibilité</dt>
                <dd className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <span className="status-pulse" aria-hidden />
                  Freelance &amp; CDI
                </dd>
              </div>
            </Reveal>
          </dl>
        </div>

        <Reveal delay={200} className="md:sticky md:top-28">
          <Portrait />
        </Reveal>
      </div>
    </section>
  );
}
