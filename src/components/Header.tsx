"use client";

import { useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-background/80 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-background/30 backdrop-blur-sm"
      }`}
    >
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent"
        style={{ scaleX: progress, transformOrigin: "left" } as React.CSSProperties}
      />

      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#accueil"
          className="group text-[13px] font-semibold tracking-tight text-foreground"
        >
          {profile.name}
          <span className="ml-1 inline-block text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            .
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-5">
          <nav aria-label="Navigation principale">
            <ul className="flex items-center gap-4 sm:gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-soft text-[12px] font-medium text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
