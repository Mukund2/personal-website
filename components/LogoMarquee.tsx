const logos = [
  "Stealth",
  "Nimbus",
  "Palette",
  "Orbital",
  "Lumen",
  "Archway",
  "Northwind",
  "Meridian",
];

export default function LogoMarquee() {
  return (
    <section className="border-y border-line bg-cream-alt/60">
      <div className="mx-auto max-w-content px-6 md:px-10 py-6 flex items-center gap-8">
        <span className="kicker shrink-0 hidden sm:inline">
          Trusted by founders at
        </span>
        <div className="marquee relative flex-1 overflow-hidden">
          <div
            className="flex gap-12 md:gap-16 whitespace-nowrap animate-marquee"
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-warm/80 text-xl tracking-tight"
                aria-hidden={i >= logos.length}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
