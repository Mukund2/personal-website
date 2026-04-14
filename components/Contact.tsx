export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-cream p-10 md:p-16">
          {/* subtle warm wash inside the dark card */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(217,119,87,0.25)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(106,155,204,0.15)" }}
          />

          <div className="relative grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <span className="kicker !text-cream/60">05 — Contact</span>
              <h2 className="mt-4 font-display text-5xl md:text-[5.5rem] leading-[0.98] tracking-tightest">
                Let&apos;s make <br className="hidden md:block" />
                something{" "}
                <span style={{ fontStyle: "italic" }} className="text-coral">
                  worth
                </span>{" "}
                watching.
              </h2>
              <p className="mt-8 max-w-[48ch] text-cream/70 leading-relaxed">
                Tell us about your company, what you&apos;re launching, and when
                you need it. We reply to every inquiry within 48 hours.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-4">
              <a
                href="mailto:hello@reel.studio"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-cream px-6 py-4 text-ink font-medium hover:bg-coral hover:text-cream transition-colors"
              >
                hello@reel.studio
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-between gap-3 rounded-full border border-cream/20 px-6 py-4 text-cream/90 hover:border-cream/60 transition-colors"
              >
                Book a 30-min call
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>

              <dl className="mt-4 text-sm text-cream/60 space-y-1">
                <div className="flex justify-between">
                  <dt>Based in</dt>
                  <dd>San Francisco</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Response time</dt>
                  <dd>&lt; 48 hours</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
