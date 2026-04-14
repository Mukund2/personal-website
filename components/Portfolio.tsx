type Piece = {
  title: string;
  client: string;
  tag: string;
  aspect: "9/16" | "16/9" | "1/1";
  gradient: string;
};

// Placeholder pieces — client will replace with real work.
const pieces: Piece[] = [
  {
    title: "Launch film",
    client: "Nimbus",
    tag: "Brand film",
    aspect: "16/9",
    gradient: "linear-gradient(135deg,#e8cbb8 0%,#d97757 60%,#8a3e25 100%)",
  },
  {
    title: "Founder series · Ep. 03",
    client: "Orbital",
    tag: "Founder content",
    aspect: "9/16",
    gradient: "linear-gradient(160deg,#c9d7e6 0%,#6a9bcc 55%,#2d4d70 100%)",
  },
  {
    title: "Campaign: 'Quiet Tools'",
    client: "Palette",
    tag: "UGC",
    aspect: "9/16",
    gradient: "linear-gradient(165deg,#d7dcc4 0%,#788c5d 55%,#3b4a2a 100%)",
  },
  {
    title: "Demo Day recap",
    client: "Archway",
    tag: "Events",
    aspect: "16/9",
    gradient: "linear-gradient(135deg,#efece4 0%,#b0aea5 55%,#5f5b53 100%)",
  },
  {
    title: "Series-A announce",
    client: "Lumen",
    tag: "Brand film",
    aspect: "1/1",
    gradient: "linear-gradient(140deg,#faf9f5 0%,#e8cbb8 55%,#d97757 100%)",
  },
  {
    title: "Creator drop 01",
    client: "Meridian",
    tag: "UGC",
    aspect: "9/16",
    gradient: "linear-gradient(150deg,#f2e9df 0%,#a39e96 60%,#2b2926 100%)",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="kicker">03 — Selected work</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight">
              A small sample.
            </h2>
          </div>
          <p className="text-warm max-w-[40ch] text-[0.975rem] leading-relaxed">
            A cross-section of launches, campaigns, and founder stories. Full
            case studies on request — we don&apos;t post everything publicly.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-5 md:gap-6">
          {pieces.map((p, i) => {
            const span = spanFor(p.aspect, i);
            return (
              <figure
                key={`${p.client}-${i}`}
                className={`${span} group relative overflow-hidden rounded-xl border border-line bg-cream-alt`}
              >
                <div
                  className="w-full relative transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{
                    aspectRatio: p.aspect.replace("/", " / "),
                    background: p.gradient,
                  }}
                >
                  {/* play glyph */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/85 backdrop-blur-sm shadow-soft transition-transform group-hover:scale-110">
                      <svg
                        viewBox="0 0 16 16"
                        className="h-4 w-4 translate-x-[1px] text-ink"
                        fill="currentColor"
                      >
                        <path d="M4 2.5v11l10-5.5z" />
                      </svg>
                    </span>
                  </div>

                  {/* gradient scrim for caption */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <figcaption className="flex items-start justify-between gap-4 px-4 py-4 bg-cream">
                  <div>
                    <p className="font-display text-[1.05rem] leading-tight tracking-tight">
                      {p.title}
                    </p>
                    <p className="text-xs text-warm mt-1">{p.client}</p>
                  </div>
                  <span className="kicker shrink-0 mt-1">{p.tag}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Gallery spans — varied grid that feels editorial.
function spanFor(aspect: Piece["aspect"], i: number) {
  if (aspect === "16/9") return "col-span-6 md:col-span-4";
  if (aspect === "1/1") return "col-span-6 md:col-span-3";
  // 9/16
  return i === 1
    ? "col-span-3 md:col-span-2"
    : "col-span-3 md:col-span-2";
}
