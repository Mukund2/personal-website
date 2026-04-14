export default function About() {
  return (
    <section id="studio" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            {/* Portrait card — placeholder until photo is dropped in */}
            <div className="relative overflow-hidden rounded-2xl border border-line bg-cream-alt">
              <div
                aria-hidden
                className="aspect-[4/5] w-full"
                style={{
                  background:
                    "radial-gradient(120% 90% at 20% 15%, #f5e7d6 0%, #d97757 55%, #6e4030 100%)",
                }}
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-lg bg-cream/90 backdrop-blur px-4 py-3 border border-line">
                <div>
                  <p className="font-display text-[1.05rem] leading-tight">
                    The founder
                  </p>
                  <p className="text-xs text-warm mt-0.5">
                    Director · operator · SF
                  </p>
                </div>
                <span className="kicker">Est. 2026</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-6">
            <span className="kicker">04 — Studio</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight">
              Built by an operator who shoots.
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-[60ch]">
              <p>
                REEL is led by a videographer who cut his teeth shooting for
                early-stage startups — launch films, founder content, and the
                kind of edits that end up pinned on a company&apos;s feed. He
                builds content the way operators build product: fast, iterative,
                and measurable.
              </p>
              <p>
                The team behind the studio has a combined following of over 2
                million across TikTok, Instagram, and YouTube. We live on the
                platforms we make for, and that taste is the product.
              </p>
            </div>

            {/* Credentials list — dotted leader, Anthropic-esque */}
            <dl className="mt-12 space-y-3 max-w-[48ch]">
              {[
                ["Directed for", "YC-backed founders"],
                ["Editing suite", "Premiere · Resolve · After Effects"],
                ["Home base", "San Francisco, CA"],
                ["Travel", "Nationwide for shoots"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-end text-[0.95rem] text-ink-soft"
                >
                  <dt className="text-warm">{k}</dt>
                  <span className="flex-1 border-b border-dotted border-line mx-3 mb-1" />
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
