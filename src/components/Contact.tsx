import { profile } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl scroll-reveal px-6 py-32 sm:py-44"
    >
      <SectionTitle
        index="04"
        label="Contact"
        title="Parlons de votre prochain projet."
        description="Appelez, écrivez sur WhatsApp ou par e-mail — je réponds sous 24 h."
      />

      <div className="mt-14 grid gap-14 md:grid-cols-[2fr_1fr] md:items-start">
        <div className="space-y-8">
          <a
            href={profile.phoneHref}
            className="link-underline w-fit font-serif text-4xl leading-tight font-medium tracking-tight text-foreground hover:text-accent sm:text-6xl"
          >
            {profile.phoneDisplay}
          </a>

          <p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline font-mono text-sm tracking-wide text-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </p>
        </div>

        <ul className="space-y-4 font-mono text-[11px] uppercase tracking-[0.22em]">
          <li>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-3 text-accent transition-colors hover:text-foreground"
            >
              WhatsApp <span aria-hidden>↗</span>
            </a>
          </li>
          <li>
            <span className="inline-flex items-center gap-3 text-muted">
              {profile.location}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
