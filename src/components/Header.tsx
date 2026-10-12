"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        scrolled
          ? "border-line bg-background/85 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.8)]"
          : "border-line/40 bg-background/40 backdrop-blur-md"
      }`}
    >
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#accueil"
          className="group font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-accent"
        >
          {profile.name}
          <span
            aria-hidden
            className="ml-1 inline-block text-accent opacity-0 transition-all duration-300 group-hover:opacity-100"
          >
            ●
          </span>
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
