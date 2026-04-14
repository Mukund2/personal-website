export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="font-display text-xl leading-none tracking-tight">
            REEL
          </span>
          <span className="kicker ml-1">/ studio</span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-warm">
          <a href="#work" className="hover:text-ink transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-ink transition-colors">
            Services
          </a>
          <a href="#studio" className="hover:text-ink transition-colors">
            Studio
          </a>
          <a href="#contact" className="hover:text-ink transition-colors">
            Contact
          </a>
          <a
            href="mailto:hello@reel.studio"
            className="hover:text-ink transition-colors"
          >
            hello@reel.studio
          </a>
        </nav>

        <p className="text-xs text-warm-light">
          © {new Date().getFullYear()} REEL Studio. San Francisco.
        </p>
      </div>
    </footer>
  );
}
