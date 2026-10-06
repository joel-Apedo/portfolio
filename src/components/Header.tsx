import { navLinks, profile } from "@/data/portfolio";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-background/75 backdrop-blur-xl">
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#accueil"
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-accent"
        >
          {profile.name}
        </a>

        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-6 sm:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
