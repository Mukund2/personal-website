type Service = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  accent: "coral" | "sky" | "sage" | "ink";
};

const services: Service[] = [
  {
    num: "01",
    title: "UGC",
    desc: "Native, creator-led content that earns the scroll on TikTok, Reels, and Shorts.",
    bullets: ["Hook-first scripting", "Platform-native pacing", "Creator sourcing"],
    accent: "coral",
  },
  {
    num: "02",
    title: "Brand films",
    desc: "Cinematic short films — launches, manifestos, and founder stories that define your category.",
    bullets: ["60–180s hero edits", "Directed on location", "Full post + color"],
    accent: "ink",
  },
  {
    num: "03",
    title: "Founder content",
    desc: "Build a personal channel around the person behind the company, without it feeling try-hard.",
    bullets: ["Monthly shoot days", "Editor on retainer", "Thumbnail + caption"],
    accent: "sky",
  },
  {
    num: "04",
    title: "Events & field",
    desc: "Launch events, demo days, YC batches, offsites — covered like a documentary, not a wedding.",
    bullets: ["Multicam field crew", "Same-day recap", "Archive-ready masters"],
    accent: "sage",
  },
];

const accentMap: Record<Service["accent"], string> = {
  coral: "bg-coral",
  sky: "bg-sky",
  sage: "bg-sage",
  ink: "bg-ink",
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-[42ch]">
            <span className="kicker">02 — Services</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight">
              Four ways we show up for founders.
            </h2>
          </div>
          <p className="text-warm max-w-[38ch] text-[0.975rem] leading-relaxed">
            Every engagement starts with a 30-minute call. We scope to your
            stage, your budget, and what the feed actually rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {services.map((s) => (
            <article
              key={s.num}
              className="group relative bg-cream p-8 md:p-10 transition-colors hover:bg-cream-alt"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="kicker">{s.num}</span>
                <span
                  className={`h-2 w-2 rounded-full ${accentMap[s.accent]}`}
                  aria-hidden
                />
              </div>

              <h3 className="font-display text-3xl md:text-[2.25rem] tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="text-warm text-[0.975rem] leading-relaxed max-w-[42ch] mb-6">
                {s.desc}
              </p>

              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-[0.9rem] text-ink-soft"
                  >
                    <span
                      aria-hidden
                      className="h-px w-4 bg-warm-light/80 group-hover:bg-ink/40 transition-colors"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
