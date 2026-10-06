import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 font-mono text-[11px] uppercase tracking-[0.18em] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {profile.year} {profile.name}
        </p>
        <p className="text-muted">Next.js · Tailwind · Fraunces</p>
        <a
          href="#accueil"
          className="link-underline transition-colors hover:text-accent"
        >
          ↑ Haut de page
        </a>
      </div>
    </footer>
  );
}
