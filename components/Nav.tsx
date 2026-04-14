"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-cream/80 border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 md:px-10 h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-coral transition-transform group-hover:scale-110" />
          <span className="font-display text-[1.35rem] leading-none tracking-tight">
            REEL
          </span>
          <span className="kicker ml-1 hidden sm:inline">/ studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] text-warm hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[0.85rem] font-medium text-cream hover:bg-ink-soft transition-colors"
        >
          Start a project
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </header>
  );
}
