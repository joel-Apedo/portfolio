import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-10 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {profile.year} {profile.name}
        </p>
        <p className="text-faint">Next.js · Tailwind · Framer Motion · Notion</p>
        <a href="#accueil" className="link-soft w-fit hover:text-accent">
          ↑ Haut de page
        </a>
      </div>
    </footer>
  );
}
