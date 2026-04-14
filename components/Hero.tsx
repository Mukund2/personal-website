export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-40"
    >
      {/* subtle radial warm wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(217,119,87,0.08), transparent 60%), radial-gradient(900px 500px at 10% 10%, rgba(106,155,204,0.05), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-6 flex items-center gap-3 animate-fade-in">
          <span className="inline-block h-px w-8 bg-warm-light" />
          <span className="kicker">A video studio · San Francisco</span>
        </div>

        <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-[5.25rem] leading-[0.98] tracking-tightest max-w-[18ch] animate-fade-up">
          Stories worth{" "}
          <span className="relative inline-block">
            <em className="not-italic" style={{ fontStyle: "italic" }}>
              stopping
            </em>
            <svg
              aria-hidden
              viewBox="0 0 300 14"
              className="absolute -bottom-1 left-0 w-full h-3 text-coral"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 C 60 2, 140 12, 298 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          for.
        </h1>

        <p
          className="mt-8 max-w-[52ch] text-[1.0625rem] md:text-lg leading-relaxed text-warm animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          REEL is a video studio for founders. We make UGC, brand films, and
          founder-led content that earn the scroll — not interrupt it. Our team
          ships for early-stage companies from San Francisco.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[0.95rem] font-medium text-cream hover:bg-ink-soft transition-colors"
          >
            Start a project
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-cream/60 px-5 py-3 text-[0.95rem] font-medium text-ink hover:border-ink/40 transition-colors"
          >
            See our work
          </a>
        </div>

        {/* Quick-stat row under hero, low-contrast to not overpower */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 pt-8 border-t border-line animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          <Pill label="Combined audience" value="2M+" />
          <Pill label="Views delivered" value="50M+" />
          <Pill label="Founders served" value="12+" />
          <Pill label="Based in" value="SF" />
        </div>
      </div>
    </section>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-3xl md:text-[2.25rem] leading-none tracking-tight">
        {value}
      </span>
      <span className="kicker">{label}</span>
    </div>
  );
}
